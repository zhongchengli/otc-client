const { default: gql } = require("graphql-tag");

const GET_USER_BY_ID = gql`
  query getUserById($id: String!){
    user(id: $id){
      id,
      firstName,
      lastName,
      email
  }
}
`;

export default GET_USER_BY_ID;