import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import storeConfig from './store/index';

require('dotenv').config();

const history = createHistory();

ReactDOM.render(
  <Provider store={storeConfig()}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
