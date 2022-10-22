import { gql } from '@apollo/client';

// Queries

export const LOGIN_USER_QUERY = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
    }
  }
`;

// Mutations
export const REGISTER_USER_MUTATION = gql`
  mutation register($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      id
      email
      name
    }
  }
`;
