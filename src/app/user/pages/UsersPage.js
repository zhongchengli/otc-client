import React from "react";
import { useQuery } from "react-apollo";
import Table from "../../../components/Table";
import { stripTypenames } from "../../../utils";
import GET_ALL_USERS from "../graphql/UsersQueries";

const UsersPage = props => {

  const { data } = useQuery(GET_ALL_USERS);

  console.log('props = ', props);
  console.log('data = ', data);

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