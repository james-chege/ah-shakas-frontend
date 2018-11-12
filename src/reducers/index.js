import { combineReducers } from 'redux';
import reset from './reset.password.reducer';
import resetting from './resetting.password.reducer';
import signUp from './signup.reducer';

const rootReducer = combineReducers({
  // insert reducers here
  reset,
  resetting,
  signUp,
});

export default rootReducer;
