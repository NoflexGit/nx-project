import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/Auth';

export function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
