import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';

class DashboardComponent extends Component {
  render() {
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
      window.location.replace('/');
    }
  	const Logout = () => {
      if (userToken) {
      	localStorage.removeItem('userToken');
      }
    };
    return (
      <div>
        <Navbar className="teal teal-text row">
          <div className="nav-wrapper">
            <ul id="nav-mobile" textClassName="teal" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="#" onClick={Logout}>Logout</Link></li>
            </ul>
          </div>
        </Navbar>
        <div>lala</div>
      </div>


    );
  }
}
export default DashboardComponent;
