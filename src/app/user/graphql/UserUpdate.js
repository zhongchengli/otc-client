const { default: gql } = require("graphql-tag");

const UPDATE_USER_BY_ID = gql`
  mutation UpdateUser($id: Int!, $input: UserInput!){
    updateUser(id: $id, input:$input)
  }
`;

export default UPDATE_USER_BY_ID;