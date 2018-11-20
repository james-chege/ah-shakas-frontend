import axios from 'axios';
import authUser from '../utils/authUser.util';
import config from '../config';

const authUserHeader = () => {
  if (authUser && authUser.token) {
    return {
      Authorization: authUser.token,
    };
  }
  return {};
};

export const client = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...authUserHeader(),
  },
});

export default ({ method, url, data }) => client({
  url,
  method,
  data,
});
