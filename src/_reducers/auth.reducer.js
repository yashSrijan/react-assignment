import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOGOUT } from './../_constants/redux.contants';

const initialState = {
    user : null
}

export function authenticationReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn : false
            };
        case USER_LOGOUT:
            return {
                user : null
            };
        default:
            return state
    }
}


