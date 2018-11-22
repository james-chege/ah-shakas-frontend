import CONSTANTS from '../constants';
import api from '../api';

const { FOLLOW_USER, UNFOLLOW_USER } = CONSTANTS;

// action creators

const followUser = (username, followed) => ({
  type: followed ? UNFOLLOW_USER : FOLLOW_USER,
  payload: api({
    url: `/profile/${username}/follow/`,
    method: followed ? 'DELETE' : 'POST',
  }),
});

export default followUser;
