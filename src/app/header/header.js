import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export default class Header extends React.Component {
    state = { username: '', token: '' };

    onClickLogout() {
        console.log("Clicked in logout button");
    }

    getUserMenu() {
        return (
            <Nav pullRight>
                <NavItem eventKey={1} href={`/dogs/${this.state.username}`}>My Dogs</NavItem>
                <NavItem eventKey={2} href="/dogs">View all dogs</NavItem>
                <NavItem eventKey={3} href="/users">View all users</NavItem>
                <NavItem eventKey={4} href="/logout">Log out</NavItem>
            </Nav>
        );
    }

    getLoginMenu() {
        return (
            <Nav pullRight>
                <NavItem eventKey={4} href="/login">Login</NavItem>
            </Nav>
        );
    }

    getMenu() {
        const {username, token} = this.state;
        return (!username || !token)
            ? this.getLoginMenu()
            : this.getUserMenu();
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Manage my dawg</a>
                    </Navbar.Brand>
                </Navbar.Header>
                {this.getMenu()}
            </Navbar>
        );
    }
}