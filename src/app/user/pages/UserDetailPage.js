import React, { Fragment, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { useLocation } from "react-router-dom";
import UserDetailForm from "../components/UserDetailForm";
import GET_USER_BY_ID from "../graphql/UserDetails";
import UPDATE_USER_BY_ID from "../graphql/UserUpdate";

export const getInitialUser = userData => {
  const user = userData === undefined ? null : userData.user;
  return user;
}

const UserDetailPage = props => {

  const query = new URLSearchParams(useLocation().search);
  const userId = query.get("id");
  const [user, setUser] = useState();

  const { data } = useQuery(GET_USER_BY_ID, { variables: { id: userId } });

  const initialUser = getInitialUser(data);

  useEffect(() => {
    if (!!initialUser) {
      setUser(initialUser);
    }
  }, [data, initialUser]
  );

  if (!user) {
    return null;
  }

  return (
    <Fragment>
      <UserDetailForm user={user} />
    </Fragment>
  )
}

export default UserDetailPage;

