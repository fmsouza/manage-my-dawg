import React from 'react';
import LoginForm from './loginForm';
import './login.css';

export default class Login extends React.Component {

    state = { errorMessage: '' };

    onSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <div className="login">
                <h1 className="center">Login</h1>
                <LoginForm onHandleSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
}