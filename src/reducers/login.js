import {
    LOGIN_RESULT_SUCCESS,
    LOGIN_RESULT_FAILED,
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
            const { role, token } = action.payload;
            newState.code = LOGIN_CODE_SUCCESS;
            newState.role = role;
            newState.token = token;
            return newState;

        case LOGIN_RESULT_FAILED:
            newState.code = LOGIN_CODE_ERROR;
            newState.role = null;
            newState.token = null;
            return newState;

        default: return newState;

    }
};