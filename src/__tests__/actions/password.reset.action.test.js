import expect from 'expect';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import resetPasswordRequest from '../../actions/password.reset.action';
import { ERROR_ACTION, RESET_PASSWORD_ACTION } from '../../constants/index';
import RESPONSES from '../../mock/responses';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('Password reset Action tests', () => {
  const mock = new MockAdapter(axios);
  const url = 'http://127.0.0.1:8000/api/users/email_sent';

  store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch RESET_PASSWORD_ACTION when reseting password', () => {
    const data = RESPONSES.SUCCESSFUL_EMAIL_RESPONSE;
    mock.onPost(url).reply(200, data);
    return store.dispatch(resetPasswordRequest('jymeschege@gmail.com')).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data,
        type: RESET_PASSWORD_ACTION,
      });
    });
  });

  it('should dispatch ERROR_ACTION when reseting password', () => {
    const data = RESPONSES.ERROR_RESET_EMAIL_RESPONSE;
    mock.onPost(url).reply(401, data);
    return store.dispatch(resetPasswordRequest('jymeschege@gmail.com')).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data.user,
        type: ERROR_ACTION,
      });
    });
  });
});
