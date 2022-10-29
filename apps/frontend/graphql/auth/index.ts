import { gql } from '@apollo/client';

// Queries

// Mutations

export const VERIFY_TOKEN_MUTATION = gql`
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      id
      name
      email
      avatar
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation register($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      id
      email
      name
    }
  }
`;
