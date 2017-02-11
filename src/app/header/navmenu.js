import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LOGIN_USER_ADMIN, LOGIN_USER_GENERAL } from '../../actions';

export default class NavMenu extends React.Component {

    getAdminMenu() {
        return (
            <Nav {...this.props}>
                <NavItem eventKey={1} href='/my-dogs'>My Dogs</NavItem>
                <NavItem eventKey={2} href='/dogs'>View all dogs</NavItem>
                <NavItem eventKey={3} href='/users'>View all users</NavItem>
                <NavItem eventKey={4} href='/logout'>Log out</NavItem>
            </Nav>
        );
    }

    getUserMenu() {
        return (
            <Nav {...this.props}>
                <NavItem eventKey={1} href='/my-dogs'>My Dogs</NavItem>
                <NavItem eventKey={2} href='/logout'>Log out</NavItem>
            </Nav>
        );
    }

    getLoginMenu() {
        return (
            <Nav {...this.props}>
                <NavItem eventKey={1} href='/login'>Login</NavItem>
            </Nav>
        );
    }

    render() {
        switch (this.props.role) {
            case LOGIN_USER_ADMIN: return this.getAdminMenu();
            case LOGIN_USER_GENERAL: return this.getUserMenu();
            default: return this.getLoginMenu();
        }
    }
}
