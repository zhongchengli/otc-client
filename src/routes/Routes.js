import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import CompaniesPage from "../pages/CompaniesPage";
import UserDetailPage from "../pages/UserDetailPage";
import UsersPage from "../pages/UsersPage";
import WelcomePage from "../pages/WelcomePage";


const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/users" component={UsersPage} />
        <Route path="/user" component={UserDetailPage} />
        <Route exact path="/companies" component={CompaniesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;