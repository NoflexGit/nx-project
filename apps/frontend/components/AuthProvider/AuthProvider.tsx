import { ApolloProvider } from '@apollo/client';

import { AuthContext } from '@frontend/contexts';
import { useProvideAuth } from '@frontend/hooks';

export function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </AuthContext.Provider>
  );
}
