import { LOGIN_ACTION } from "../actions/loginAction";
import { LOGOUT_ACTION } from "../actions/logoutAction";

const initialState = {
    isLoggedIn: false,
    token: "", // Original data
    user: {},
    role: "BASE_USER",
};

const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case LOGIN_ACTION :
            let roleOfUser = action.loginResponse.user.role;
            
            const newState = {
                isLoggedIn: true,
                token: action.loginResponse.token,
                user: action.loginResponse.user,
                role: roleOfUser,
            }
            console.log('New State', newState);
            return newState;
        case LOGOUT_ACTION :
            const logoutState = {
                isLoggedIn: false,
                token: "",
                user: {},
                role: "BASE_USER",
            }; 
            
            return logoutState;
        default:
            return state;
    }
}

export default authReducer;