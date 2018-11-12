import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import LoginContainer from '../../containers/Auth/LoginContainer';
import SignUpComponent from '../../containers/Auth/SignUpContainer';
import write from '../../images/write3.png';

class App extends Component {
  state = {
    open: false,
    openRegistration: false,
  };

  openSignup = () => {
    this.setState({ openRegistration: true });
  };

  openLogin = () => {
    this.setState({ open: true });
  };

  closeSignup = () => {
    this.setState({ openRegistration: false });
  };

  closeLogin = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, openRegistration } = this.state;
    return (
      <div className="nav">
        <Navbar className="teal teal-text row">
          <div className="nav-wrapper">
            <ul id="nav-mobile" textclassname="teal" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><button type="button" className="waves-effect waves-light btn" onClick={this.openLogin}>Login</button></li>
              <li><button type="button" className="waves-effect waves-light btn" onClick={this.openSignup}>SignUp</button></li>
            </ul>
          </div>
        </Navbar>

        <Modal open={open} onClose={this.closeLogin} center>
          <div className="row">
            <div className="col s={2}">
              <img alt="" height={400} src={write} />
            </div>
            <div className="col s={10}">
              <LoginContainer />
            </div>
          </div>
        </Modal>
        <Modal open={openRegistration} onClose={this.closeSignup} center>
          <div className="row">
            <div className="col s={2}">
              <img alt="" height={550} src={write} />
            </div>
            <div className="col s={10}">
              <SignUpComponent />
            </div>

          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
