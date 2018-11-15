import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import Sociallogin from '../../containers/Auth/SocialAuthContainer';

class LoginComponent extends Component {
  state = {
    email: '',
    password: '',
    token: '',
    onFulfilled: false,
    onPending: true,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    login(this.state);
  };

  render() {
    const redirect = this.props;
    if (redirect.logindata.onFulfilled) {
      const userToken = redirect.logindata.data.data.user.token;
      if (userToken) {
        localStorage.setItem('userToken', userToken);
        window.location.replace('/dashboard');
      }
    }
    const { email, password } = this.state;
    return (


      <div className="center" onSubmit={this.onSubmit}>
        <form>
          <div className="">
            <span className="center-align"><h5>Sign In</h5></span>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Enter email"
                  name="email"
                  type="email"
                  onChange={this.onChange}
                  value={email}
                  required
                />
                <div id="errors" />
              </div>
              <div className="col s12">
                <input
                  placeholder="Enter password"
                  id="MyPass"
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  required
                />
              </div>
            </div>
          </div>
          <div className="center-align">
            <a className="teal-text" href="#!"><b>Forgot Password?</b></a>
          </div>

          <div className="center-align">
            <input type="submit" value="Login" className="btn-primary" onClick={this.onSubmit} />
            <span className="center-align"><h6>or</h6></span>
            <Sociallogin />
          </div>
        </form>
        <div className="center-align">
          <a className="teal-text" href="#!">Create account</a>
        </div>
      </div>
    );
  }
}
LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginComponent;
