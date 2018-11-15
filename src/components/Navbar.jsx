import React from 'react';
import Modal from 'react-responsive-modal';
import { Icon, Navbar as MaterialNavbar, NavItem } from 'react-materialize';
import LoginContainer from '../containers/Auth/LoginContainer';
import SignUpComponent from '../containers/Auth/SignUpContainer';
import Dropdown from './Dropdown';
import authUser from '../utils/authUser.util';

class Navbar extends React.Component {
  state = {
    open: false,
    openRegistration: false,
    menuOpen: false,
  };

  toggleMenu = () => {
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
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
    const { open, menuOpen, openRegistration } = this.state;
    return (
      <>
        <MaterialNavbar fixed className="white" brand={'Authors\' Haven'} right>
          {authUser
            ? (
            <>
              <NavItem href="#"><Icon>search</Icon></NavItem>
              <NavItem href="#"><Icon>notifications_none</Icon></NavItem>
              <NavItem onClick={this.toggleMenu}><Icon>more_vert</Icon></NavItem>
            </>
            ) : (
            <>
              <NavItem onClick={this.openLogin}>Login</NavItem>
              <NavItem onClick={this.openSignup}>Sign Up</NavItem>
            </>
            )
        }
        </MaterialNavbar>
        <Dropdown shown={menuOpen} />

        <Modal
          open={open}
          onClose={this.closeLogin}
          classNames={{
            overlay: 'overlay-center',
            modal: 'custom-modal',
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
            overlay: 'overlay-center',
            modal: 'custom-modal',
          }}
        >
          <div className="row">
            <div className="col s={2} image-wrapper">&nbsp;</div>
            <div className="col s={10}">
              <SignUpComponent />
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Navbar;
