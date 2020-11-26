import React, { Fragment } from "react";
import { useMutation, useQuery } from "react-apollo";
import { useLocation } from "react-router-dom";
import UserDetailForm from "../components/UserDetailForm";
import GET_USER_BY_ID from "../graphql/UserDetails";
import UPDATE_USER_BY_ID from "../graphql/UserUpdate";


const UserDetailPage = props => {

  const query = new URLSearchParams(useLocation().search);
  const userId = query.get("id");

  const { data } = useQuery(GET_USER_BY_ID, { variables: { id: userId } });

  console.log('data in user detail page = ', data);

  return (
    <Fragment>
      <UserDetailForm user={data && data.user} />
    </Fragment>
  )
}

export default UserDetailPage;

