import { LOGIN } from '../constants/login.type';
import initialState from './initialState';

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        onPending: true,
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        onFulfilled: true,
        data: action.payload,
      };

    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        onRejected: true,
        error: action.payload.response.data.errors,
      };

    default: return state;
  }
};
export default loginReducer;
