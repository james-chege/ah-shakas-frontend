import axios from 'axios';
import CONSTANTS from '../constants';

const { RESETTING_ERROR_ACTION, RESETTING_PASSWORD_ACTION } = CONSTANTS;

const ResettingPassword = (token, password) => dispatch => axios.put(`${process.env.REACT_APP_BASE_URL}/users/password_reset?token=${token}`, { password })
  .then((response) => {
    dispatch({
      type: RESETTING_PASSWORD_ACTION,
      payload: response.data,
    });
  }).catch((err) => {
    dispatch({
      type: RESETTING_ERROR_ACTION,
      payload: err.response.data.user
        ? err.response.data.user.message : err.response.data.errors.password[0],
    });
  });

export default ResettingPassword;
