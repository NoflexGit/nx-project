import { useContext } from 'react';
import { AuthContext } from '@frontend/contexts';

export function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
