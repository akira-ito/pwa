import { gql } from '@apollo/client';

export const LIST_USERS = gql`
  query Users($name: String, $cursor: String, $limit: Int) {
    list(name: $name, cursor: $cursor, limit: $limit) {
      edges {
        _id
        picture
        name
        age
        eyeColor
        company
        email
      }
      pageInfo {
        endCursor
        hasNextPage
        total
      }
    }
  }
`;

export const GET_USER = gql`
  query User($id: ID!) {
    get(id: $id) {
      picture
      name
      age
      email
      friends {
        _id
        picture
        name
        age
        eyeColor
        company
        email
      }
    }
  }
`;
