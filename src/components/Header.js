import React from "react"
import { Fragment } from "react"
import Link from "./Link";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <Fragment>
      <NavBar>
        <Link name="home" path="/" />
        <Link name="user" path="/user" />
        <Link name="company" path="/company" />
      </NavBar>
    </Fragment>
  )
}

export default Header;