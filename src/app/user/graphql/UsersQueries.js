import gql from 'graphql-tag'


const GET_ALL_USERS = gql`
  query {
    users{
      id,
      firstName,
      lastName,
      email
  }
}
`;
export default GET_ALL_USERS
