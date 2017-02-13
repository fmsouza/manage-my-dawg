import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import LoginForm from './loginForm';
import { attemptLogin, LOGIN_CODE_ERROR, LOGIN_CODE_SUCCESS } from '../../actions';
import './login.css';

class Login extends React.Component {

    onSubmit(data) {
        this.props.attemptLogin(data.user, data.pass);
    }

    componentWillUpdate(newProps) {
        if (newProps.loginCode === LOGIN_CODE_ERROR)
            this.form.wrappedInstance.setErrorMessage('Invalid username or password.');
        else if (newProps.loginCode === LOGIN_CODE_SUCCESS)
            browserHistory.push('/dogs');
    }

    render() {
        return (
            <div className="login">
                <h1 className="center">Login</h1>
                <LoginForm
                    ref={refs => { this.form = refs; }}
                    onHandleSubmit={this.onSubmit.bind(this)}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginCode: state.login.code
    };
}

function mapDispatchToProps(dispatch) {
    return {
        attemptLogin: (user, pass) => dispatch(attemptLogin(user, pass))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);