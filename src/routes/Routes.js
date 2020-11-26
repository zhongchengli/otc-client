import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import CompaniesPage from "../app/company/pages/CompaniesPage";
import UserDetailPage from "../app/user/pages/UserDetailPage";
import WelcomePage from "../app/WelcomePage";
import UsersPage from "../app/user/pages/UsersPage";


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