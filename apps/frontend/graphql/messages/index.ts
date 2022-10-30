import { gql } from '@apollo/client';

export const GET_CHATS = gql`
  query GetChats($userId: String!) {
    getChatsByUser(id: $userId) {
      id
      messages {
        id
      }
      participants {
        id
        userId
        user {
          name
          avatar
        }
      }
    }
  }
`;

export const CHATS_SUBSCRIPTION = gql`
  subscription OnChatCreated {
    chatCreated {
      id
    }
  }
`;
