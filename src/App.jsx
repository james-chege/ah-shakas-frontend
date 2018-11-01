import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomeComponent';
import LoginComponent from './components/Auth/LoginComponent';
import SignUpContainer from './containers/Auth/SignUpContainer';
import './App.scss';

require('dotenv').config();

const App = () => (
  <div>
    <HomePage />
    <Switch>
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/signup" exact component={SignUpContainer} />
    </Switch>
  </div>
);

export default App;
