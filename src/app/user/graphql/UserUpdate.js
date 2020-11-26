const { default: gql } = require("graphql-tag");

const UPDATE_USER_BY_ID = gql`
  mutation updateUser($id: String!, $firstName: String!, $lastName: String!, $email: String!){
    updateUser(id: $id, input:{firstName:$firstName, lastName: $lastName, email:$email})
  }
  # mutation updateUser($id: Number!){
  #   testUpdateUser(id: 3)
  # }
`;

export default UPDATE_USER_BY_ID;