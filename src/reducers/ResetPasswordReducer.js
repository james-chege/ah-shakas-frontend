import { RESET_PASSWORD_ACTION, ERROR_ACTION } from '../constants';

const initialState = {
  data: {},
  errors: {},
};

const ResetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_ACTION: {
      return { ...state, data: action.payload };
    }
    case ERROR_ACTION: {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
};

export default ResetPasswordReducer;
