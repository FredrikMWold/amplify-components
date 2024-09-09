import { ImpersonateUserService } from '@equinor/subsurface-app-management';
import { useQuery } from '@tanstack/react-query';

import { GET_ALL_IMPERSONATIONS } from '../Impersonate.constants';
import { environment } from 'src/atoms/utils/auth_environment';

const appName = environment.getAppName(import.meta.env.VITE_NAME);

export function useGetAllImpersonationUsersForApp() {
  return useQuery({
    queryKey: [GET_ALL_IMPERSONATIONS],
    queryFn: async () =>
      await ImpersonateUserService.getApiV1ImpersonateUserGetImpersonateUserForApp(
        appName
      ),
  });
}
