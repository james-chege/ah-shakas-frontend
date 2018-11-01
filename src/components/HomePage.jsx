import React from "react";
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';

const App = () => ({
  render() {
    return (
      <div className="App container">
        <Navbar className="teal teal-text row">
          <div className="nav-wrapper">
            <ul id="nav-mobile" textClassName='teal' className="right hide-on-med-and-down">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </Navbar>
      </div>
    );
  },
});

export default App;
