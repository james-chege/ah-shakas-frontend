import axios from 'axios';
import CONSTANTS from '../constants';
// import { ERROR_ACTION, RESET_PASSWORD_ACTION } from '../constants';

const { ERROR_ACTION, RESET_PASSWORD_ACTION } = CONSTANTS;

const resetPasswordRequest = ({ email }) => dispatch => axios.post(`${process.env.REACT_APP_BASE_URL}/users/email_sent`, { email })
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
