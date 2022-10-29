import { useMemo } from 'react';
import cookie from 'cookie';
import type { GetServerSidePropsContext } from 'next';
import type { IncomingMessage } from 'http';
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

interface PageProps {
  props?: Record<string, any>;
}

export const APOLLO_STATE_PROPERTY_NAME = '__APOLLO_STATE__';
export const COOKIES_TOKEN_NAME = 'jwt_token';

const getToken = (req?: IncomingMessage) => {
  if (typeof window === 'undefined') {
    return cookie.parse(req?.headers.cookie || '')[COOKIES_TOKEN_NAME];
  }
  return localStorage.getItem(COOKIES_TOKEN_NAME);
};

let apolloClient: ApolloClient<NormalizedCacheObject> = null;

const createApolloClient = (ctx?: GetServerSidePropsContext) => {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4200/graphql',
    credentials: 'same-origin',
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken(ctx?.req);

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export function initializeApollo(initialState = null, ctx = null) {
  const client = apolloClient ?? createApolloClient(ctx);

  if (typeof window === 'undefined') {
    return client;
  }

  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
}

export function useApollo(pageProps: PageProps) {
  const state = pageProps[APOLLO_STATE_PROPERTY_NAME];
  return useMemo(() => initializeApollo(state), [state]);
}
