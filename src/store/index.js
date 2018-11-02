import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsCreators and other options if needed here
});

const storeConfig = () => {
  const store = createStore(
    rootReducer,
    {}, composeEnhancers(applyMiddleware(thunkMiddleware), /* other store enhancers if any */)
  );
  return store;
};
export default storeConfig;
