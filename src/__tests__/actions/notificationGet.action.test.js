import configureMockStore from 'redux-mock-store';
import getNotifications from '../../actions/notifications.action';

const mockStore = configureMockStore();
const store = mockStore({});

describe('test liking', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('getLikes', () => {
    store.dispatch(getNotifications());
    expect(store.getActions()[0].type).toBe('GET_NOTIFICATIONS');
  });
});
