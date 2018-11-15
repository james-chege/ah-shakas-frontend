import React, { Component } from 'react';
import PropTypes from 'proptypes';

class SignUpComponent extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  onSignUp = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      const { signup } = this.props;
      signup(this.state);
    } else {
      this.setState({ passwordError: 'Passwords don\'t match.' });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  successMessage = () => (
    <span className="msg">
      <h6> You have successfully signed up.</h6>
      <h6>Kindly check your email for a verification link.</h6>
    </span>

  );

  render() {
    const { errors, success } = this.props;
    const {
      username, email, password, confirmPassword, passwordError,
    } = this.state;
    return (
      <div className="center">
        <h5 className="title">Create Account</h5>
        {success ? this.successMessage() : null}
        <form onSubmit={this.onSignUp}>
          <input
            name="username"
            placeholder="Enter username"
            onChange={this.handleChange}
            defaultValue={username}
            type="text"
            minLength="6"
            required
          />
          {errors
              && <div className="alert-err">{errors.username}</div>
            }

          <input
            name="email"
            placeholder="Enter email"
            onChange={this.handleChange}
            defaultValue={email}
            type="email"
            required
          />
          {errors
              && <div className="alert-err">{errors.email}</div>
            }

          <input
            name="password"
            placeholder="Enter password..."
            onChange={this.handleChange}
            defaultValue={password}
            type="password"
            icon="lock"
            minLength="8"
            required
          />
          {errors
              && <div className="alert-err">{errors.password}</div>
            }

          <input
            name="confirmPassword"
            placeholder="Re-type password"
            onChange={this.handleChange}
            defaultValue={confirmPassword}
            type="password"
            minLength="8"
            icon="lock"
            required
          />
          <div className="alert-err">{passwordError}</div>

          <input type="submit" value="Sign Up" className="btn-primary" />
        </form>
      </div>
    );
  }
}

SignUpComponent.propTypes = {
  signup: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  success: PropTypes.bool.isRequired,
};
export default SignUpComponent;
