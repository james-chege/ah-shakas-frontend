import { LOGIN } from '../constants/login.type';

const loginReducer = (state = {}, action) => {
  console.log(action);
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
        error: action.payload,
      };

    default: return state;
  }
};
export default loginReducer;
