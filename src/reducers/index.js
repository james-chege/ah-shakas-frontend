import { combineReducers } from 'redux';
import signUp from './signup.reducer';

const rootReducer = combineReducers({
  signUp,
});

export default rootReducer;
