import { gql } from "apollo-boost";

const LOGIN_QUERY = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        name
        id
      }
    }
  }
`;

const CHECK_UNIQUE_EMAIL = gql`
  query($email: String!) {
    user(email: $email) {
      email
    }
  }
`;

const SIGN_UP_MUTATION = gql`
  mutation($email: String!, $name: String!, $password: String!, $img: String!) {
    signUp(userInfo: { email: $email, name: $name, password: $password, img: $img }) {
      name
      id
    }
  }
`;

const GET_USER_BY_TOKEN = gql`
  query($token: String!) {
    getUserByToken(token: $token) {
      email
      name
      img
    }
  }
`;

const CREATE_PET_MUTATION = gql`
  mutation(
    $name: String!
    $gender: String
    $age: String
    $type: String
    $typeDetail: String
    $intro: String
    $img: String
    $todoColor: String!
    $cardCover: String
  ) {
    createPet(
      petInfo: {
        name: $name
        gender: $gender
        age: $age
        type: $type
        typeDetail: $typeDetail
        intro: $intro
        img: $img
        todoColor: $todoColor
        cardCover: $cardCover
      }
    ) {
      name
    }
  }
`;

const GET_USER_INFO = gql`
  query($email: String!) {
    user(email: $email) {
      name
      img
    }
  }
`;

const UPDATE_USER_INFO = gql`
  mutation($token: String!, $name: String!, $img: String!) {
    updateUserInfo(token: $token, name: $name, img: $img)
  }
`;

export {
  LOGIN_QUERY,
  CHECK_UNIQUE_EMAIL,
  SIGN_UP_MUTATION,
  CREATE_PET_MUTATION,
  GET_USER_INFO,
  GET_USER_BY_TOKEN,
  UPDATE_USER_INFO,
};