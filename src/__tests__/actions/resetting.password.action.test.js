import expect from 'expect';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import resetPasswordRequest from '../../actions/reseting.password.action';
import { RESETTING_ERROR_ACTION, RESETTING_PASSWORD_ACTION } from '../../constants/index';
import RESPONSES from '../../mock/responses';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('Password reset Action tests', () => {
  const mock = new MockAdapter(axios);
  const token = 'xaAaddddAD3323@#@$$@%@';
  const password = 'AverysecurePassword';
  const url = `http://127.0.0.1:8000/api/users/password_reset?token=${token}`;

  store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch RESETTING_PASSWORD_ACTION when reseting password', () => {
    const data = RESPONSES.SUCCESSFUL_EMAIL_RESPONSE;
    mock.onPut(url, { password }).reply(200, data);
    return store.dispatch(resetPasswordRequest(token, password)).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data,
        type: RESETTING_PASSWORD_ACTION,
      });
    });
  });

  it('should dispatch RESETTING_ERROR_ACTION when reseting password', () => {
    const data = RESPONSES.ERROR_INVALID_TOKEN;
    mock.onPut(url, { password }).reply(400, data);
    return store.dispatch(resetPasswordRequest(token, password)).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data.user.message,
        type: RESETTING_ERROR_ACTION,
      });
    });
  });
});
