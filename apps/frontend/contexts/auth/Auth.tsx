import { useState, createContext } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from '@apollo/client';

export const AuthContext = createContext(null);

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

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null);

  const isSignedIn = authToken !== null;

  const getAuthHeaders = () =>
    authToken && { Authorization: `Bearer ${authToken}` };

  const createApolloClient = () =>
    new ApolloClient({
      link: new HttpLink({
        uri: '/graphql',
        headers: getAuthHeaders(),
      }),
      cache: new InMemoryCache(),
    });

  const signIn = async ({ username, password }) => {
    const client = createApolloClient();
    const LoginMutation = gql`
      query signIn($username: String!, $password: String!) {
        login(loginUserInput: { email: $username, password: $password }) {
          access_token
        }
      }
    `;

    const result = await client.mutate({
      mutation: LoginMutation,
      variables: { username, password },
    });

    if (result?.data?.login?.access_token) {
      setAuthToken(result.data.login.access_token);
    }
  };

  const signOut = () => setAuthToken(null);

  return {
    setAuthToken,
    isSignedIn,
    signIn,
    signOut,
    createApolloClient,
  };
}
