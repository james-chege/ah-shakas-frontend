import api from '../api';
import CONSTANTS from '../constants';

const { SIGNUP } = CONSTANTS;

// Action creator
const signup = credentials => ({
  type: SIGNUP,
  payload: api({
    url: '/users/',
    method: 'POST',
    data: { user: credentials },
  }),
});

export default signup;
