import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomeComponent';
import LoginContainer from './containers/Auth/LoginContainer';
import SignUpContainer from './containers/Auth/SignUpContainer';
import DashboardComponent from './components/Dashboard/Dashboard';
import './App.scss';
import ForgotPasswordContainer from './containers/Auth/ForgotPasswordContainer';
import ResetPasswordContainer from './containers/Auth/ResetPasswordContainer';

require('dotenv').config();

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/signup" exact component={SignUpContainer} />
      <Route path="/forgot_password" exact component={ForgotPasswordContainer} />
      <Route path="/reset_password/:token" exact component={ResetPasswordContainer} />
      <Route path="/dashboard" exact component={DashboardComponent} />
    </Switch>
  </div>
);

export default App;
