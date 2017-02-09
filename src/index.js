import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './app';

const AppRouter = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
);

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
