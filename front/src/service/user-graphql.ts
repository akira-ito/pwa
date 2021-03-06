import { gql } from '@apollo/client';

export const LIST_USERS = gql`
  query Users($name: String) {
    list(name: $name) {
      _id
      picture
      name
      age
      eyeColor
      company
      email
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
