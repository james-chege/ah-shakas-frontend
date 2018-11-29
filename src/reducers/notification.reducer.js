import constants from '../constants';
import initialState from './initialState';

const { GET_NOTIFICATIONS } = constants;

export default (state = initialState.notifications, action) => {
  switch (action.type) {
    case `${GET_NOTIFICATIONS}_PENDING`:
      return { ...state, success: false, pending: true };
    case `${GET_NOTIFICATIONS}_FULFILLED`:
      return {
        ...state,
        success: true,
        pending: false,
        Notification_List: action.payload.data.notifications,
      };
    case `${GET_NOTIFICATIONS}_REJECTED`:
      return { ...state, failure: true, errors: action.payload };
    default:
      return state;
  }
};
