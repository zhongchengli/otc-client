import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/custom.css';
import App from './App';
import { createBrowserHistory } from 'history';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Route, Router, Switch } from 'react-router';
import WelcomePage from './pages/WelcomePage';

var hist = createBrowserHistory();
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router history={hist}>
        <Switch>
          <Route path="/" component={WelcomePage} />
        </Switch>
      </Router>
    </ApolloProvider>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
