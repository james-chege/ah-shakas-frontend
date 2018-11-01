import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default ({ method, data, url }) => client({
  url,
  method,
  data,
  headers: {
    'Content-Type': 'application/json',
  },
});
