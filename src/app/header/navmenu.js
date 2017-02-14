import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { LOGIN_USER_ADMIN, LOGIN_USER_GENERAL, attemptLogout } from '../../actions';

class NavMenu extends React.Component {

    onClickLogout() {
        this.props.attemptLogout();
        browserHistory.push('/login');
    }

    getAdminMenu() {
        return (
            <Nav pullRight={this.props.pullRight}>
                <LinkContainer eventKey={1} to={{ pathname: '/my-dogs' }}>
                    <NavItem>My Dogs</NavItem>
                </LinkContainer>
                <LinkContainer eventKey={2} to={{ pathname: '/dogs' }}>
                    <NavItem>Dogs</NavItem>
                </LinkContainer>
                <LinkContainer eventKey={3} to={{ pathname: '/users' }}>
                    <NavItem>View all Users</NavItem>
                </LinkContainer>
                <NavItem eventKey={4} onClick={this.onClickLogout.bind(this)}>Logout</NavItem>
            </Nav>
        );
    }

    getUserMenu() {
        return (
            <Nav pullRight={this.props.pullRight}>
                <LinkContainer eventKey={1} to={{ pathname: '/my-dogs' }}>
                    <NavItem>My Dogs</NavItem>
                </LinkContainer>
                <NavItem eventKey={2} onClick={this.onClickLogout.bind(this)}>Logout</NavItem>
            </Nav>
        );
    }

    getLoginMenu() {
        return (
            <Nav pullRight={this.props.pullRight}>
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

function mapDispatchToProps(dispatch) {
    return {
        attemptLogout: () => dispatch(attemptLogout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);