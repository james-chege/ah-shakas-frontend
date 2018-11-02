import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomeComponent';
import LoginComponent from './components/Auth/LoginComponent';
import './App.scss';

const App = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginComponent} />
  </Switch>
);

export default App;
