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
        longitude
        latitude
      }
    }
  }
`;

export const GET_PROPERTY_QUERY = gql`
  query Property($id: String!) {
    property(id: $id) {
      id
      name
      address
      previewImg
      agent {
        avatar
        name
        email
        address
        propertiesCount
      }
      details {
        price
        rooms
        bathrooms
        area
        longitude
        latitude
        description
        images
      }
      reviews {
        average
        count
        list {
          id
          rating
          comment
          user {
            name
          }
        }
      }
    }
  }
`;
