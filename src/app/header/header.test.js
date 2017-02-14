import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { NavItem } from 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LOGIN_USER_ADMIN, LOGIN_USER_GENERAL } from '../../actions';
import Header from './header';
import NavMenu from './navmenu';

function setup() {
    const mockStore = configureStore([]);
    const store = mockStore({ login: { role: null }});
    return (
        <Provider store={store}>
            <Header store={store} />
        </Provider>
    );
}

test('Header should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(setup(), div);
});

test('Header should have a NavMenu component', () => {
    const view = mount(setup());
    expect(view.contains(<NavMenu pullRight />)).toBeTruthy();
});