import expect from 'expect';
import constants from '../../constants/index';
import loginReducer from '../../reducers/login.reducer';

const { LOGIN } = constants;

const initialState = {
  login: {
    onPending: true,
    onFulfilled: true,
    onRejected: true,
  },
};

const action = { data: {} };

describe('User Reducer test', () => {
  it('should return initial state when there is no action', () => {
    expect(loginReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle USER_LOAD_REQUEST', () => {
    action.type = `${LOGIN}_PENDING`;
    expect(loginReducer(initialState.login, action).onPending).toEqual(true);
  });

  it('should handle USER_LOAD_REQUEST', () => {
    action.type = `${LOGIN}_FULFILLED`;
    expect(loginReducer(initialState.login, action).onFulfilled).toEqual(true);
  });
});
