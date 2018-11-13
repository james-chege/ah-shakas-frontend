import CONSTANTS from '../constants';

const { RESETTING_PASSWORD_ACTION, RESETTING_ERROR_ACTION } = CONSTANTS;

const initialState = {
  data: {},
  errors: {},
};

const ResettingPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESETTING_PASSWORD_ACTION: {
      return { ...state, data: action.payload };
    }
    case RESETTING_ERROR_ACTION: {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
};

export default ResettingPasswordReducer;
