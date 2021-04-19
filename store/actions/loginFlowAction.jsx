export const LOGIN_FLOW = 'LOGIN_FLOW';

export const loginFlowAction = (email) => {
    return { type: LOGIN_FLOW, email: email };
}