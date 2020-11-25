import Link from "../components/Link";
import NavBar from "../components/NavBar";

const WelcomePage = () => {
  return (
    <div>
      <NavBar>
        <Link name="User" path="/user" />
        <Link name="Company" path="/company" />
      </NavBar>
      <h1>Welcome!</h1>
    </div>
  )
}

export default WelcomePage;