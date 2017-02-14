import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { NavItem } from 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LOGIN_USER_ADMIN, LOGIN_USER_GENERAL } from '../../actions';
import NavMenu from './navmenu';


function setup(initialState = {}) {
    const mockStore = configureStore([]);
    const store = mockStore(initialState);
    return (
        <Provider store={store}>
            <NavMenu />
        </Provider>
    );
}

test('NavMenu should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(setup({ login: { role: null } }), div);
});

test('NavMenu should present only a link to login page when no role data provided', () => {
    const view = mount(setup({ login: { role: null } }));
    expect(view.find('.nav li').length).toEqual(1);
});

test('NavMenu should present only all links when the admin role is provided', () => {
    const view = mount(setup({ login: { role: LOGIN_USER_ADMIN } }));
    expect(view.find('.nav li').length).toEqual(4);
});

test('NavMenu should present only common user links when the role is provided is not admin', () => {
    const view = mount(setup({ login: { role: LOGIN_USER_GENERAL } }));
    expect(view.find('.nav li').length).toEqual(2);
});