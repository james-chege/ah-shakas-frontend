import axios from 'axios';
import { LOGIN } from '../constants/login.type';

const loginAct = credentials => ({
  type: LOGIN,
  payload: axios({
    url: 'http://127.0.0.1:8000/api/users/login/',
    method: 'POST',
    data: { user: credentials },
    header: {
      'Content-Type': 'application/json',
    },
  }),
});

export default loginAct;
