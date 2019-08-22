import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, USER_LOGOUT, SET_SELECTION,
    SUCCESS, ERROR, CLEAR
} from "../_constants/redux.contants";
//////////////////////////////////////////////////////////////////////////////////////////
export function loginRequest() {
    return {
        type : LOGIN_REQUEST
    }
}
export function loginSuccessful(userObj) {
    return{
        type : LOGIN_SUCCESS,
        payload : userObj
    }
}
export function loginFailure() {
    return {
        type : LOGIN_FAILURE
    }
}
export function userLogout() {
    return {
        type : USER_LOGOUT
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
export function setSelections(selectionId) {
    return {
        type : SET_SELECTION,
        payload : selectionId
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
export function success(message) {
    return { 
        type: SUCCESS, 
        message: message
    };
}
export function error(message) {
    return { 
        type: ERROR, 
        payload: message
    };
}
export function clear() {
    return { 
        type: CLEAR 
    };
}
//////////////////////////////////////////////////////////////////////////////////////////