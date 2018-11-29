import api from '../api';
import constants from '../constants';

const {
  GET_NOTIFICATIONS,
} = constants;

const getNotifications = () => ({
  type: GET_NOTIFICATIONS,
  payload: api({
    method: 'GET',
    url: '/notifications/',
  }),
});

export default getNotifications;
