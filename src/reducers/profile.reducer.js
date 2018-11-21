import constants from '../constants';
import initialState from './initialState';

const { LOAD_PROFILE } = constants;

export default function (state = initialState.userProfile, action) {
  const { payload, type } = action;
  switch (type) {
    case `${LOAD_PROFILE}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case `${LOAD_PROFILE}_FULFILLED`:
      return {
        ...state,
        profile: payload.data.profile,
        loading: false,
        success: true,
      };
    case `${LOAD_PROFILE}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        error: payload.response.data.profile,
      };

    default:
      return state;
  }
}
