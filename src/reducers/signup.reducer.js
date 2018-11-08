import SIGNUP from '../constants/index';
import signupInitialState from './initialState';

const signUpReducer = (state = signupInitialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${SIGNUP}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        loading: false,
        success: true,
        message: payload.data,
      };
    case `${SIGNUP}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        errors: payload.response.data.errors,
      };
    default:
      return state;
  }
};

export default signUpReducer;