import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import { useLocation } from "react-router-dom";

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

const UserDetailPage = props => {

  const query = new URLSearchParams(useLocation().search);
  const userId = query.get("id");

  const { data } = useQuery(GET_USER_BY_ID, { variables: { id: userId } });

  console.log('data in user detail page = ', data);

  return (
    <div className="container-form">
      <label >First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />

      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

      <label >Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>

      <input type="submit" value="Submit" />
    </div>
  )
}

export default UserDetailPage;

