import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomeComponent';
import LoginComponent from './components/Auth/LoginComponent';
import SignUpContainer from './containers/Auth/SignUpContainer';
import './App.scss';
import ForgotPasswordComponent from './components/Auth/ForgotPasswordComponent';
import ResetPasswordComponent from './components/Auth/ResetPasswordComponent';

require('dotenv').config();

const App = () => (
  <div>
    <HomePage />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/signup" exact component={SignUpContainer} />
      <Route path="/forgot_password" exact component={ForgotPasswordComponent} />
      <Route path="/reset_password/:token" exact component={ResetPasswordComponent} />
    </Switch>
  </div>
);

export default App;
