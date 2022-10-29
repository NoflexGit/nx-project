import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      name
      email
      address
      phone
      avatar
      createdAt
    }
  }
`;

// Queries

export const CLIENT_ONLY_USER_INFO = gql`
  query getUserInfo {
    userInfo @client {
      id
      email
      name
      avatar
    }
  }
`;

// Mutations
