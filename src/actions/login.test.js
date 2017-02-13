import {
    attemptLogin,
    LOGIN_RESULT_FAILED,
    LOGIN_RESULT_SUCCESS,
    LOGIN_USER_ADMIN,
    LOGIN_USER_GENERAL
} from './login';

test('Function attemptLogin should fail for unexisting user', () => {
    const dispatcher = attemptLogin('wronguser', '1234');
    dispatcher((data) => {
        expect(data.type).toEqual(LOGIN_RESULT_FAILED);
    });
});

test('Function attemptLogin should succeed for an existing general user0', () => {
    const dispatcher = attemptLogin('user0', '123');
    dispatcher((data) => {
        expect(data.type).toEqual(LOGIN_RESULT_SUCCESS);
        expect(data.payload.role).toEqual(LOGIN_USER_GENERAL);
        expect(typeof data.payload.token).toEqual('string');
    });
});

test('Function attemptLogin should succeed for an existing general user1', () => {
    const dispatcher = attemptLogin('user1', '123');
    dispatcher((data) => {
        expect(data.type).toEqual(LOGIN_RESULT_SUCCESS);
        expect(data.payload.role).toEqual(LOGIN_USER_GENERAL);
        expect(typeof data.payload.token).toEqual('string');
    });
});

test('Function attemptLogin should succeed for an existing admin user', () => {
    const dispatcher = attemptLogin('admin', '123');
    dispatcher((data) => {
        expect(data.type).toEqual(LOGIN_RESULT_SUCCESS);
        expect(data.payload.role).toEqual(LOGIN_USER_ADMIN);
        expect(typeof data.payload.token).toEqual('string');
    });
});