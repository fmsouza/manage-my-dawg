import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import { App, Home, Login } from './app';

const AppRouter = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/login" />
          <Route path="login" component={Login} />
        </Route>
    </Router>
);

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
