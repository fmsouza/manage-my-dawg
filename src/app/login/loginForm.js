import React from 'react';
import { Button, FormGroup, InputGroup, HelpBlock } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {

    state = { errorMessage: '' };

    onSubmit(values) {
        values.preventDefault();
        this.setState({ errorMessage: '' });
        const { user, pass } = values.target;
        if (!user || !pass || !user.value || ! pass.value) this.setState({ errorMessage: 'Both user and password must be filled.' });
        else this.props.onHandleSubmit({ user: user.value, pass: pass.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <FormGroup controlId="fieldUsername">
                    <InputGroup>
                        <InputGroup.Addon>Username</InputGroup.Addon>
                        <Field
                            component="input"
                            type="text"
                            name="user"
                            className="form-control"
                            placeholder="doglord"
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="fieldPassword">
                    <InputGroup>
                        <InputGroup.Addon>Password</InputGroup.Addon>
                        <Field
                            component="input"
                            type="password"
                            name="pass"
                            className="form-control"
                            placeholder="********"
                        />
                    </InputGroup>
                </FormGroup>

                <FormGroup className="center" validationState={"error"}>
                    <Button block type="submit">
                        Sign in
                    </Button>
                    <HelpBlock>{this.state.errorMessage}</HelpBlock>
                </FormGroup>
            </form>
        );
    }
}

export default reduxForm({ form: 'login' })(LoginForm);