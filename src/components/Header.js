import React from "react"
import { Fragment } from "react"
import Link from "./Link";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <Fragment>
      <NavBar>
        <Link name="home" path="/" />
        <Link name="user" path="/users" />
        <Link name="company" path="/companies" />
      </NavBar>
    </Fragment>
  )
}

export default Header;