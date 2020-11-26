import React from "react";
import { useMutation } from "react-apollo";
import { useForm } from "../../../utils/useForm";
import UPDATE_USER_BY_ID from "../graphql/UserUpdate";

const UserDetailForm = props => {

  const { user } = props;
  const [values, handleChange] = useForm({ ...user });

  const [updateUser] = useMutation(
    UPDATE_USER_BY_ID
  );

  // console.log('data in detail form: ', data);

  const onSubmit = async e => {
    e.preventDefault();
    console.log('submit');
    await updateUser({
      variables: {
        id: +user.id,
        input: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email
        }
      }
    }).catch(err => console.log(err));
  }

  return (
    <div className="container-form">
      <form onSubmit={onSubmit}>
        <label > First Name</label>
        <input type="text"
          name="firstName"
          placeholder="Your first name.."
          value={values.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input type="text"
          name="lastName"
          placeholder="Your last name.."
          value={values.lastName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input type="text"
          name="email"
          placeholder="Your email.."
          value={values.email}
          onChange={handleChange}
        />

        <label >Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default UserDetailForm;