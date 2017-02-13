import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import { App, Dogs, Login } from './app';
import AppStore from './reducers';

const AppRouter = () => (
    <Provider store={AppStore}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="/login" />
            <Route path="login" component={Login} />
            <Route path="dogs" component={Dogs} />
          </Route>
      </Router>
    </Provider>
);

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
