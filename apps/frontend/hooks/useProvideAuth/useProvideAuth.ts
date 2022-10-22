import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { useState } from 'react';
import { onError } from '@apollo/client/link/error';
import toast, { Toaster } from 'react-hot-toast';
import { LOGIN_USER_QUERY } from '@frontend/grapql/auth';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message }) =>
      console.log(`[GraphQL error]: Message: ${message}`)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null);

  const isSignedIn = authToken !== null;

  const getAuthHeaders = () =>
    authToken && { Authorization: `Bearer ${authToken}` };

  const createApolloClient = () =>
    new ApolloClient({
      link: from([
        errorLink,
        new HttpLink({
          uri: '/graphql',
          headers: getAuthHeaders(),
        }),
      ]),
      cache: new InMemoryCache(),
    });

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const client = createApolloClient();

    // if (data?.login?.access_token) {
    //   setAuthToken(data.login.access_token);
    // }
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
