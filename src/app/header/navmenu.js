import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { LOGIN_USER_ADMIN, LOGIN_USER_GENERAL } from '../../actions';

class NavMenu extends React.Component {

    getAdminMenu() {
        return (
            <Nav {...this.props}>
                <LinkContainer eventKey={1} to={{ pathname: '/my-dogs' }}>
                    <NavItem>My Dogs</NavItem>
                </LinkContainer>
                <LinkContainer eventKey={2} to={{ pathname: '/dogs' }}>
                    <NavItem>Dogs</NavItem>
                </LinkContainer>
                <LinkContainer eventKey={3} to={{ pathname: '/users' }}>
                    <NavItem>View all Users</NavItem>
                </LinkContainer>
                <LinkContainer eventKey={4} to={{ pathname: '/logout' }}>
                    <NavItem>Logout</NavItem>
                </LinkContainer>
            </Nav>
        );
    }

    getUserMenu() {
        return (
            <Nav {...this.props}>
                <LinkContainer eventKey={1} to={{ pathname: '/my-dogs' }}>
                    <NavItem>My Dogs</NavItem>
                </LinkContainer>
                <LinkContainer eventKey={2} to={{ pathname: '/logout' }}>
                    <NavItem>Logout</NavItem>
                </LinkContainer>
            </Nav>
        );
    }

    getLoginMenu() {
        return (
            <Nav {...this.props}>
                <LinkContainer eventKey={1} to={{ pathname: '/login' }}>
                    <NavItem>Login</NavItem>
                </LinkContainer>
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

function mapStateToProps(state) {
    return {
        role: state.login.role
    };
}

export default connect(mapStateToProps)(NavMenu);