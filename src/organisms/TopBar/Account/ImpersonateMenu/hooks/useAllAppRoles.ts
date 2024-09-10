import { AmplifyApplicationService } from '@equinor/subsurface-app-management';
import { useQuery } from '@tanstack/react-query';

import { AVAILABLE_ROLES } from '../Impersonate.constants';
import { environment } from 'src/atoms/utils/auth_environment';

export function useAllAppRoles() {
  return useQuery({
    queryKey: [AVAILABLE_ROLES],
    queryFn: () =>
      AmplifyApplicationService.getAllAppRoles(
        environment.getApiClientId(import.meta.env.VITE_API_CLIENT_ID)
      ),
  });
}
