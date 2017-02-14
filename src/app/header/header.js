import React from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';
import NavMenu from './navmenu';

export default () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Manage my dawg</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <nav>
            <NavMenu pullRight />
        </nav>
    </Navbar>
);
