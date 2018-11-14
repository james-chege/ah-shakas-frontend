import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import LoginContainer from '../../containers/Auth/LoginContainer';
import SignUpComponent from '../../containers/Auth/SignUpContainer';


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
              <li><Link to="/">HOME</Link></li>
              <li><button type="button" className="waves-effect waves-teal btn-flat" onClick={this.openSignup}>SignUp</button></li>
              <li><button type="button" className="waves-effect waves-teal btn-flat" onClick={this.openLogin}>Login</button></li>
            </ul>
          </div>
        </Navbar>

        <Modal
          open={open}
          onClose={this.closeLogin}
          classNames={{
            overlay: 'overlayCenter',
            modal: 'customModal',
          }}
        >
          <div className="row">
            <div className="col s={2} image-wrapper">&nbsp;</div>
            <div className="col s={10}">
              <LoginContainer />
            </div>
          </div>
        </Modal>
        <Modal
          open={openRegistration}
          onClose={this.closeSignup}
          center
          classNames={{
            overlay: 'overlayCenter',
            modal: 'customModal',
          }}
        >
          <div className="row">
            <div className="col s={2} image-wrapper">&nbsp;</div>
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
