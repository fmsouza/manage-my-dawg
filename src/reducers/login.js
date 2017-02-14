import {
    LOGIN_RESULT_SUCCESS,
    LOGIN_RESULT_FAILED,
    LOGIN_DESTROY,
    LOGIN_CODE_SUCCESS,
    LOGIN_CODE_ERROR
} from '../actions';

const initialState = {
    code: null,
    role: null,
    token: null
};

export default (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {

        case LOGIN_RESULT_SUCCESS:
            const { data } = action.payload;
            newState.code = LOGIN_CODE_SUCCESS;
            newState.role = data.role;
            newState.token = data.token;
            return newState;

        case LOGIN_RESULT_FAILED:
            newState.code = LOGIN_CODE_ERROR;
            newState.role = null;
            newState.token = null;
            return newState;

        case LOGIN_DESTROY:
            newState.code = initialState.code;
            newState.role = initialState.role;
            newState.token = initialState.token;
            return newState;

        default: return newState;

    }
};