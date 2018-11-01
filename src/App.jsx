import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import './App.scss';

const App = () => (
  <div className="container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
