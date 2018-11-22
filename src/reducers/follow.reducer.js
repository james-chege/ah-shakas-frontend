import constants from '../constants';
import initialState from './initialState';

const { FOLLOW_USER, UNFOLLOW_USER } = constants;

export default function (state = initialState.followUser, action) {
  const { payload, type } = action;
  switch (type) {
    case `${FOLLOW_USER}_FULFILLED`:
      return {
        ...state,
        profile: payload.data,
        loading: false,
        success: true,
        followed: true,
      };
    case `${UNFOLLOW_USER}_FULFILLED`:
      return {
        ...state,
        profile: payload.data,
        loading: false,
        success: true,
        followed: false,
      };
    case `${UNFOLLOW_USER}_REJECTED`:
    case `${FOLLOW_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        error: payload.response,
      };

    default:
      return state;
  }
}
