export const LOGIN_ACTION = 'LOGIN_ACTION';

export const loginAction = (loginResponse) => {
    return { type: LOGIN_ACTION, loginResponse: loginResponse };
}