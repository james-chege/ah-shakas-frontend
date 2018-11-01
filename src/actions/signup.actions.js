import api from '../api';
import SIGNUP from '../constants/index';

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
