import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/login.action.types';
import * as types from '../actions/login.action';

export default function loginReducer(state={
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null
}, action){
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };
        case LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };
        case LOGIN_ERROR:
            return{
                ...state,
                isLoginError: action.isLoginError
            };
        default:
            return state;
    }
}