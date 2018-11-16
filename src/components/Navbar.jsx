import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import { Icon, Navbar as MaterialNavbar, NavItem } from 'react-materialize';
import LoginContainer from '../containers/Auth/LoginContainer';
import SignUpComponent from '../containers/Auth/SignUpContainer';
import Dropdown from './Dropdown';
import authUser from '../utils/authUser.util';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    let login = false;
    let signup = false;
    if (match && match.params) {
      login = match.params.activateModal === 'login';
      signup = match.params.activateModal === 'signup';
    }

    this.state = {
      open: login,
      openRegistration: signup,
      menuOpen: false,
    };
  }

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
      <React.Fragment>
        <MaterialNavbar fixed className="white" brand={'Authors\' Haven'} right>
          {authUser
            ? (
              <React.Fragment>
                <NavItem href="#"><Icon>search</Icon></NavItem>
                <NavItem href="#"><Icon>notifications_none</Icon></NavItem>
                <NavItem onClick={this.toggleMenu}><Icon>more_vert</Icon></NavItem>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <NavItem onClick={this.openLogin}>Login</NavItem>
                <NavItem onClick={this.openSignup}>Sign Up</NavItem>
              </React.Fragment>
            )
          }
        </MaterialNavbar>
        <Dropdown shown={menuOpen} {...this.props} />

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
      </React.Fragment>
    );
  }
}
Navbar.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
export default Navbar;
