import { gql } from '@apollo/client';

// Queries

export const GET_PROPERTY_LIST_QUERY = gql`
  {
    properties {
      id
      name
      address
      previewImg
      details {
        price
        rooms
        bathrooms
        area
      }
    }
  }
`;
