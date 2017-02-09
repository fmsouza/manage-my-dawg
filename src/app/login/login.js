import React from 'react';
import { Button, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import './login.css';

export default class Login extends React.Component {

    render() {
        return (
            <div className="login">
                <h1 className="center">Login</h1>
                <form>
                    <FormGroup controlId="fieldUsername">
                        <InputGroup>
                            <InputGroup.Addon>Username</InputGroup.Addon>
                            <FormControl type="text" placeholder="doglord"/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="fieldPassword">
                        <InputGroup>
                            <InputGroup.Addon>Password</InputGroup.Addon>
                            <FormControl type="password" placeholder="********"/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup className="center">
                        <Button type="submit">
                            Sign in
                        </Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}