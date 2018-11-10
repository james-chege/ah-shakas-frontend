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

  myFunction = () => {
    const x = document.getElementById('MyPass');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
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
        redirect.history.push('/dashboard');
      }
    }
    const { email, password } = this.state;
    return (

      <div className="defaultContainer" onSubmit={this.onSubmit}>
        <div className="valign-wrapper row login-box">
          <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
            <form>
              <div className="card-content">
                <span className="card-title center-align">Login</span>
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
                  <div className="input-field col s12">
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
                <div className="row">
                  <p>
                    <label htmlFor="password">
                      <input type="checkbox" onClick={this.myFunction} />
                      <span>Show Password</span>
                    </label>
                  </p>
                </div>
              </div>
              <div className="center-align">
                <a className="teal-text" href="#!"><b>Forgot Password?</b></a>
              </div>
              <div className="card-action center-align">
                <input type="submit" className="btn teal waves-effect waves-light" onClick={this.onSubmit} />
              </div>
            </form>
          </div>
        </div>
        <div className="card-action center-align">
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
