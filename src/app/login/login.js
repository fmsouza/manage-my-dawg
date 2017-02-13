import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import { attemptLogin, LOGIN_CODE_ERROR } from '../../actions';
import './login.css';

class Login extends React.Component {

    onSubmit(data) {
        this.props.attemptLogin(data.user, data.pass);
    }

    componentWillUpdate(newProps) {
        if (this.props.loginCode === LOGIN_CODE_ERROR)
            this.form.setErrorMessage('Invalid username or password.');
    }

    render() {
        return (
            <div className="login">
                <h1 className="center">Login</h1>
                <LoginForm
                    ref={ref => { this.form = ref; }}
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