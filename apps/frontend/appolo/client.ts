import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export default client;
