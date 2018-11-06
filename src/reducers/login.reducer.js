import { LOGIN } from '../actions/login.action.types';

const loginReducer = (state = {
  onFulfilled:false,
  onRejected:{}
}, action) => {
    console.log(action)
    switch(action.type) {
      case `${LOGIN}_FULFILLED`:
        return {
          ...state,
          onFulfilled: true,
          data: action.payload
        };
  
      case `${LOGIN}_REJECTED`:
        return {
          ...state,
          onRejected: true,
          error: action.payload
        };
  
      default: return state;
    }
  }
  export default loginReducer;