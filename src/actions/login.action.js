import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR} from './login.action.types';
import axios from 'axios';

const URL = 'http://www.sample-website.com';

export const loginPending = (isLoginPending) => {
    return {
        type: LOGIN_PENDING,
        isLoginPending
    };
}

export const loginSuccess = (isLoginSuccess) =>{
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    };
}

export const loginError = (isLoginError) => {
    return {
        type: LOGIN_ERROR,
        isLoginError
    };
}

export const loginFunction = () => {
    return dispatch => {
        dispatch(loginPending(true));
        dispatch(loginSuccess(false));
        dispatch(loginError(null));

        sendLoginRequest(email, password)
            .then(success => {
                dispatch(loginPending(false));
                dispatch(loginSuccess(true))
            })
            .catch(err => {
                dispatch(loginPending(false));
                dispatch(loginError(err));
            });
    };
    
}

export const sendLoginRequest = ({ email, password }, history) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`http://127.0.0.1:5000/v1/auth/login`, { email, password });

            dispatch({ type: LOGIN_SUCCESS });
            localStorage.setItem('user', res.data.token);
            history.push('/secret');
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: 'Invalid email or password'
            });
        }
    };

}