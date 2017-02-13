import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../reducers';
import LoginForm from './loginForm';

function setup(props = {}) {
    return (
        <Provider store={store}>
            <LoginForm {...props} />
        </Provider>
    );
}

test('LoginForm should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(setup(), div);
});

test('LoginForm should present an error message when the form is sent and the fields are not filled', () => {
    const view = mount(setup());
    const helpBlock = view.find('.help-block').first();
    const form = view.find('form');

    form.simulate('submit');
    expect(helpBlock.text()).toEqual('Both user and password must be filled.');
});

test('LoginForm should present an error message when the form is sent and the user field is not filled', () => {
    const view = mount(setup());
    const helpBlock = view.find('.help-block').first();
    const userInput = view.find('input').first();
    const form = view.find('form');

    userInput.simulate('change', { target: { value: 'username' }});
    form.simulate('submit');
    
    expect(helpBlock.text()).toEqual('Both user and password must be filled.');
});

test('LoginForm should present an error message when the form is sent and the user field is not filled', () => {
    const view = mount(setup());
    const helpBlock = view.find('.help-block').first();
    const passInput = view.find('input[type="password"]').first();
    const form = view.find('form');

    passInput.simulate('change', { target: { value: '123' }});
    form.simulate('submit');
    
    expect(helpBlock.text()).toEqual('Both user and password must be filled.');
});

test('LoginForm should go on when the form is sent with all inputs filled', () => {
    const props = {
        onHandleSubmit: function (data) {
            const helpBlock = view.find('.help-block').first();
            expect(helpBlock.text()).toEqual('');
            expect(data.user).toEqual('username');
            expect(data.pass).toEqual('123');
        }
    };
    const view = mount(setup(props));
    const userInput = view.find('input').first();
    const passInput = view.find('input[type="password"]').first();
    const form = view.find('form');

    userInput.simulate('change', { target: { value: 'username' }});
    passInput.simulate('change', { target: { value: '123' }});
    form.simulate('submit');
});