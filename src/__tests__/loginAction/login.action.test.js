import expect from 'expect';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import loginAct from '../../actions/login.action';

const middleware = [thunkMiddleware, promiseMiddleware()];
const mockStore = configureMockStore(middleware);
let store;

describe('Login Action tests', () => {
  const mock = new MockAdapter(axios);
  const url = 'http://127.0.0.1:8000/api/users/login/';

  store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch LOGIN_PENDING', () => {
    mock.onPost(url).reply(200);
    const credentials = {
      email: 'Nathan@yesenia.net',
      password: 'NathanNathan',
    };
    return store.dispatch(loginAct({ user: credentials })).then(() => {
      expect(store.getActions()[0].type).toBe('LOGIN_PENDING');
    });
  });

  it('should dispatch LOGIN_FULFILLED', () => {
    mock.onPost(url).reply(200);
    const credentials = {
      email: 'Nathan@yesenia.net',
      password: 'NathanNathan',
    };
    return store.dispatch(loginAct({ user: credentials })).then(() => {
      expect(store.getActions()[1].type).toBe('LOGIN_FULFILLED');
    });
  });
});
