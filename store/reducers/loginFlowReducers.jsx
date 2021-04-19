import { LOGIN_FLOW } from "../actions/loginFlowAction";

const initialState = {
    email: ''
};

const loginFlow = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FLOW:
            const newState = {
                email: action.email
            };
            return newState;
        default:
            return state;
    }
}

export default loginFlow;