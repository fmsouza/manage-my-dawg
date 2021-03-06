import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import AppStore from './reducers';
import { LOGIN_USER_ADMIN } from './actions';
import { App, Dogs, Login, MyDogs, Users } from './app';
import { Forbidden, NotFound } from './errorPages';

function isAuth (nextState, replace, store, role) {
  const state = store.getState();
  if (!state.login.token)
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  else if (role && state.login.role !== role)
    replace({
      pathname: '/400',
      state: { nextPathname: nextState.location.pathname },
    });
};

const AppRouter = () => (
    <Provider store={AppStore}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="/login" />
            <Route path="login" component={Login} />
            <Route path="my-dogs" component={MyDogs} onEnter={ (nextState, replace) => isAuth(nextState, replace, AppStore)} />
            <Route path="dogs" component={Dogs} onEnter={ (nextState, replace) => isAuth(nextState, replace, AppStore, LOGIN_USER_ADMIN)} />
            <Route path="users" component={Users} onEnter={ (nextState, replace) => isAuth(nextState, replace, AppStore, LOGIN_USER_ADMIN)} />
            <Route path="400" component={Forbidden} />
            <Route path="*" component={NotFound} />
          </Route>
      </Router>
    </Provider>
);

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
