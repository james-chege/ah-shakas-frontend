import { combineReducers } from 'redux';
import reset from './resetPassword.reducer';
import resetting from './resettingPassword.reducer';
import signUp from './signup.reducer';

const rootReducer = combineReducers({
  // insert reducers here
  reset,
  resetting,
  signUp,
});

export default rootReducer;
