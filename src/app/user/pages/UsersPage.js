import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import Table from "../../../components/Table";
import { stripTypenames } from "../../../utils";


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

const UsersPage = props => {

  const { data } = useQuery(GET_ALL_USERS);

  let users;
  if (data && data.users) {
    users = stripTypenames(data.users, "__typename");
  }

  return (
    <div>
      <Table objects={users} type="user" editBtn deleteBtn />
    </div>
  )
}

export default UsersPage;