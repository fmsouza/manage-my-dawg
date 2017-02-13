import axios from 'axios';

export const LOGIN_USER_ADMIN = 0;
export const LOGIN_USER_GENERAL = 1;
export const LOGIN_RESULT_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_RESULT_FAILED = 'LOGIN_FAILED';
export const LOGIN_CODE_ERROR = 500;
export const LOGIN_CODE_SUCCESS = 200;

export function attemptLogin(user, pass) {
    return dispatch => {
        axios.post(`http://devnetwork.watt-now.nl:8888/authenticate`, { user, pass })
            .catch(error => { dispatch({ type: LOGIN_RESULT_FAILED }) })
            .then(data => { if (data) dispatch({ type: LOGIN_RESULT_SUCCESS, payload: data }) });
    };
}