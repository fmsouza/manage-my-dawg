import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../reducers';
import Login from './login';

function setup(props = {}) {
    return (
        <Provider store={store}>
            <Login {...props} />
        </Provider>
    );
}

test('Login should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(setup(), div);
});

test('Login should fail when login data are wrong', () => {
    const view = mount(setup());
    const userInput = view.find('input').first();
    const passInput = view.find('input[type="password"]').first();
    const helpBlock = view.find('.help-block').first();
    const form = view.find('form');

    userInput.simulate('change', { target: { value: 'wronguser' }});
    passInput.simulate('change', { target: { value: '123' }});
    form.simulate('submit');

    setTimeout(() => {
        expect(helpBlock.text()).toEqual('Invalid username or password.');
    }, 1000);
});

test('Login should pass when login data are correct', () => {
    const view = mount(setup());
    const userInput = view.find('input').first();
    const passInput = view.find('input[type="password"]').first();
    const helpBlock = view.find('.help-block').first();
    const form = view.find('form');

    userInput.simulate('change', { target: { value: 'user0' }});
    passInput.simulate('change', { target: { value: '123' }});
    form.simulate('submit');

    setTimeout(() => {
        expect(helpBlock.text()).toEqual('');
    }, 1000);
});