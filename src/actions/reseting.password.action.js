import axios from 'axios';
import { RESETTING_ERROR_ACTION, RESETTING_PASSWORD_ACTION } from '../constants';

const ResettingPassword = (token, password) => dispatch => axios.put(`http://127.0.0.1:8000/api/users/password_reset?token=${token}`, { password })
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
