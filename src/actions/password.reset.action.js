import axios from 'axios';
import { ERROR_ACTION, RESET_PASSWORD_ACTION } from '../constants';

const resetPasswordRequest = ({ email }) => dispatch => axios.post('http://127.0.0.1:8000/api/users/email_sent', { email })
  .then((data) => {
    dispatch({
      type: RESET_PASSWORD_ACTION,
      payload: data.data,
    });
  }).catch((err) => {
    dispatch({
      type: ERROR_ACTION,
      payload: err.response.data.user,
    });
  });

export default resetPasswordRequest;
