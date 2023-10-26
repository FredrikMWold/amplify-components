import { FC, ReactElement, ReactNode, useEffect } from 'react';

import {
  AuthenticationResult,
  InteractionRequiredAuthError,
  InteractionType,
} from '@azure/msal-browser';
import { AccountInfo } from '@azure/msal-common';
import { useMsal, useMsalAuthentication } from '@azure/msal-react';

import { AuthState } from './AuthProvider';
import { OpenAPI, OpenAPIConfig } from 'src/api';
import FullPageSpinner from 'src/components/Feedback/FullPageSpinner';
import Unauthorized from 'src/components/Feedback/Unauthorized';
import { auth, environment } from 'src/utils';

import jwt_decode, { JwtPayload } from 'jwt-decode';

interface ExtendedJwtPayload extends JwtPayload {
  roles: string[];
}

const {
  GRAPH_ENDPOINTS,
  GRAPH_REQUESTS_LOGIN,
  GRAPH_REQUESTS_PHOTO,
  GRAPH_REQUESTS_BACKEND,
  fetchMsGraph,
} = auth;

const { getApiScope } = environment;

export interface AuthProviderInnerProps {
  children: ReactNode;
  openApiConfig: OpenAPIConfig;
  account: AccountInfo | undefined;
  setAccount: (val: AccountInfo | undefined) => void;
  photo: string | undefined;
  setPhoto: (val: string | undefined) => void;
  roles: string[] | undefined;
  setRoles: (val: string[] | undefined) => void;
  authState: AuthState;
  setAuthState: (val: AuthState) => void;
  loadingComponent?: ReactElement;
  unauthorizedComponent?: ReactElement;
}

const AuthProviderInner: FC<AuthProviderInnerProps> = ({
  children,
  openApiConfig,
  account,
  setAccount,
  photo,
  setPhoto,
  roles,
  setRoles,
  authState,
  setAuthState,
  loadingComponent,
  unauthorizedComponent,
}) => {
  const { instance, accounts } = useMsal();
  const { login, result, error, acquireToken } = useMsalAuthentication(
    InteractionType.Silent,
    GRAPH_REQUESTS_LOGIN
  );

  useEffect(() => {
    if (
      error instanceof InteractionRequiredAuthError &&
      accounts.length === 0
    ) {
      console.error(error);
      console.log('No account found, need to login via. redirect');
      login(InteractionType.Redirect, GRAPH_REQUESTS_LOGIN);
    } else if (accounts.length > 0 && account === undefined) {
      console.log('Found account, setting that one as active');
      instance.setActiveAccount(accounts[0]);
      setAccount(accounts[0]);
    }
  }, [login, error, accounts, account, instance, setAccount]);

  useEffect(() => {
    if (result?.account) {
      if (account === undefined) {
        instance.setActiveAccount(result.account);
        setAccount(result.account);
      }
      const getToken = async () => {
        // Since we already have an account we know that acquireToken will return AuthenticationResult
        const response = (await acquireToken(
          InteractionType.Silent,
          GRAPH_REQUESTS_BACKEND(import.meta.env.VITE_API_SCOPE)
        )) as AuthenticationResult;
        return response.accessToken;
      };
      // Setting the OpenAPI config that has been sent from the given app (src/api)
      openApiConfig.TOKEN = getToken;
      // Setting the amplify-components specific OpenAPI config
      OpenAPI.TOKEN = getToken;
    }
  }, [
    account,
    acquireToken,
    instance,
    openApiConfig,
    result?.account,
    setAccount,
  ]);

  useEffect(() => {
    if (!account || photo || roles) return;

    // Get photo
    const getPhoto = async () => {
      try {
        const tokenResponse = await acquireToken(
          InteractionType.Silent,
          GRAPH_REQUESTS_PHOTO
        );
        if (tokenResponse) {
          const graphResponse = await fetchMsGraph(
            GRAPH_ENDPOINTS.PHOTO,
            tokenResponse.accessToken
          );
          if (graphResponse.status === 404) return null;

          const graphPhoto = await graphResponse.blob();
          const url = window.URL ?? window.webkitURL;
          const blobUrl = url.createObjectURL(graphPhoto);
          setPhoto(blobUrl);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPhoto();

    // Get roles
    const getRoles = async () => {
      try {
        const tokenResponse = await acquireToken(
          InteractionType.Silent,
          GRAPH_REQUESTS_BACKEND(getApiScope(import.meta.env.VITE_API_SCOPE))
        );

        if (tokenResponse && tokenResponse.accessToken) {
          const accessToken: ExtendedJwtPayload = jwt_decode(
            tokenResponse.accessToken
          );
          if (accessToken.roles) {
            setRoles(accessToken.roles as string[]);
          }
          setAuthState('authorized');
        }
      } catch (error) {
        console.log('Token error when trying to get roles!');
        console.error(error);
        setAuthState('unauthorized');
      }
    };
    getRoles();
  }, [
    account,
    acquireToken,
    instance,
    photo,
    roles,
    setAuthState,
    setPhoto,
    setRoles,
  ]);

  if (authState === 'loading')
    return (
      loadingComponent || <FullPageSpinner variant="equinor" withoutScrim />
    );

  if (authState === 'unauthorized')
    return unauthorizedComponent || <Unauthorized />;

  return <>{children}</>;
};

export default AuthProviderInner;
