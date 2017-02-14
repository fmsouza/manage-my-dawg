import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from '../reducers';
import App from './app';

function setup() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(setup(), div);
});
