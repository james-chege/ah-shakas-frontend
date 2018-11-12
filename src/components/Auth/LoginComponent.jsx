import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        // redirect.history.push('/dashboard');
        window.location.replace('/dashboard');
      }
    }
    const { email, password } = this.state;
    return (


      <div className="defaultContainer" onSubmit={this.onSubmit}>
        <div className="valign-wrapper row login-box">
          <div className="col ">
            <form>
              <div className="">
                <span className="center-align">Sign In</span>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter email..."
                      name="email"
                      type="email"
                      onChange={this.onChange}
                      value={email}
                      required
                    />
                    <div id="errors" />
                  </div>
                  <div className="input-field col m12">
                    <input
                      placeholder="Enter password..."
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
                <input type="submit" className="btn-primary" onClick={this.onSubmit} />
              </div>
            </form>
          </div>
        </div>
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
