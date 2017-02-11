import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { NavItem } from 'react-bootstrap';
import { LOGIN_USER_ADMIN, LOGIN_USER_GENERAL } from '../../actions';
import NavMenu from './navmenu';

test('NavMenu should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavMenu />, div);
});

test('NavMenu should present only a link to login page when no role data provided', () => {
    const component = shallow(<NavMenu />);
    expect(component.find(NavItem).length).toEqual(1);
});

test('NavMenu should present only all links when the admin role is provided', () => {
    const component = shallow(<NavMenu role={LOGIN_USER_ADMIN} />);
    expect(component.find(NavItem).length).toEqual(4);
});

test('NavMenu should present only common user links when the role is provided is not admin', () => {
    const component = shallow(<NavMenu role={LOGIN_USER_GENERAL} />);
    expect(component.find(NavItem).length).toEqual(2);
});