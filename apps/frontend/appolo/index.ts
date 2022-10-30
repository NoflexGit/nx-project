import { useMemo } from 'react';
import cookie from 'cookie';
import type { GetServerSidePropsContext } from 'next';
import type { IncomingMessage } from 'http';
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

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

  const wsLink =
    typeof window !== 'undefined'
      ? new GraphQLWsLink(
          createClient({
            url: 'ws://localhost:3333/graphql',
          })
        )
      : null;

  const authLink = setContext((_, { headers }) => {
    const token = getToken(ctx?.req);

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const splitLink =
    typeof window !== 'undefined' && wsLink != null
      ? split(
          ({ query }) => {
            const def = getMainDefinition(query);
            return (
              def.kind === 'OperationDefinition' &&
              def.operation === 'subscription'
            );
          },
          wsLink,
          httpLink
        )
      : httpLink;

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(splitLink),
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
