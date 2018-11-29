import notificationsReducer from '../../reducers/notification.reducer';
import constants from '../../constants';
import initialState from '../../reducers/initialState';

const action = { payload: {} };
const { GET_NOTIFICATIONS } = constants;

describe('test bookmarking reducer', () => {
  it('should return the initial state', () => {
    expect(notificationsReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle FAVOURITE_REJECTED', () => {
    action.type = `${GET_NOTIFICATIONS}_REJECTED`;
    action.payload = initialState.notifications;
    expect(notificationsReducer(initialState, action).failure).toEqual(true);
  });

  it('should handle FAVOURITE_FULFILLED', () => {
    action.type = `${GET_NOTIFICATIONS}_PENDING`;
    action.payload = initialState.notifications;
    expect(notificationsReducer(initialState, action).pending).toEqual(true);
  });
});
