import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';

const DashboardComponent = () => {
  const userToken = localStorage.getItem('userToken');
  if (!userToken) {
    window.location.replace('/');
  }
  const Logout = () => {
    if (userToken) {
      localStorage.removeItem('userToken');
      window.location.replace('/');
    }
  };
  return (
    <div>
      <Navbar className="teal teal-text row">
        <div className="nav-wrapper">
          <ul id="nav-mobile" textClassName="teal" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><button type="button" className="waves-effect waves-teal btn-flat" onClick={Logout}>Logout</button></li>
          </ul>
        </div>
      </Navbar>
      <div>lala</div>
    </div>


  );
};
export default DashboardComponent;
