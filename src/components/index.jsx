import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  rootReducer,
    {}, composeEnhancers(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  )
);

const storeConfig = () => {
  return store;
};

export default storeConfig;