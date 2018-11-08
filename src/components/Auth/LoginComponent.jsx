import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import loginAct from '../../actions/login.action';


class LoginComponent extends Component {
  state = {
    email: '',
    password: '',
    token: '',
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
    this.props.login(this.state);
    console.log(this.state);
  };

  render() {
    if (this.props.onFulfilled) {
      const userToken = this.props.data.data.user.token;
      if (userToken) {
        localStorage.setItem('userToken', userToken);
        this.props.history.push('/dashboard');
      }
    }


    // const errors = this.props.error.response.data.errors;
    const errors = { ...this.props.error };
    const myErrors = { ...errors.response };
    const myErrors2 = { ...myErrors.data };
    const myErrors3 = { ...myErrors2.errors };

    return (
      <div className="" onSubmit={this.onSubmit}>
        <Navbar className="teal teal-text row">
          <div className="nav-wrapper">
            <ul id="nav-mobile" textClassName="teal" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Signup</Link></li>
            </ul>
          </div>
        </Navbar>
        <div className="valign-wrapper row login-box">
          <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
            <form>
              <div className="card-content">
                <span className="card-title center-align">Login</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="email">Email address</label>
                    <input
                      name="email"
                      type="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      required
                    />
                    {myErrors3
                     && <div className="alert-err">{myErrors3.email}</div>}
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="password">Password </label>
                    <input
                      id="MyPass"
                      type="password"
                      name="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      required
                    />
                  </div>
                  {myErrors3
									&& <div className="alert-err">{myErrors3.password}</div>}
                </div>
                <div className="row">
                  <p>
                    <label>
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
  onRejected: PropTypes.bool,
  onFulfilled: PropTypes.bool,
};

const mapStateToProps = ({ login }) => ({
  ...login,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    login: loginAct,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
