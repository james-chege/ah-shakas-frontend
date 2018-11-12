import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomeComponent';
import LoginComponent from './components/Auth/LoginComponent';
import SignUpContainer from './containers/Auth/SignUpContainer';
import './App.scss';
import ForgotPasswordContainer from './containers/Auth/ForgotPasswordContainer';
import ResetPasswordContainer from './containers/Auth/ResetPasswordContainer';

require('dotenv').config();

const App = () => (
  <div>
    <HomePage />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/signup" exact component={SignUpContainer} />
      <Route path="/forgot_password" exact component={ForgotPasswordContainer} />
      <Route path="/reset_password/:token" exact component={ResetPasswordContainer} />
    </Switch>
  </div>
);

export default App;
