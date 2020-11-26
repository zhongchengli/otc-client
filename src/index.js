import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/custom.css';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import UserPage from './pages/UserPage';
import CompanyPage from './pages/CompanyPage';
import Header from './components/Header';
import App from './App';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/company" component={CompanyPage} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
