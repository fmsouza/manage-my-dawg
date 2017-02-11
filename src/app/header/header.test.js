import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { NavItem } from 'react-bootstrap';
import { LOGIN_USER_ADMIN, LOGIN_USER_GENERAL } from '../../actions';
import Header from './header';
import NavMenu from './navmenu';

test('Header should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

test('Header should have a NavMenu component', () => {
    const component = shallow(<Header />);
    expect(component.contains(<NavMenu />)).toBeTruthy();
});