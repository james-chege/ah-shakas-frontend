import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Button } from 'react-materialize';

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
        <h3 className="title">Create Account</h3>
        {success ? this.successMessage() : null}
        <form onSubmit={this.onSignUp}>
          <input
            name="username"
            s={10}
            placeholder="Enter username..."
            label="Username"
            onChange={this.handleChange}
            defaultValue={username}
            type="text"
            icon="account_circle"
            minLength="6"
            required
          />
          {errors
              && <div className="alert-err">{errors.username}</div>
            }

          <input
            name="email"
            s={10}
            placeholder="Enter email..."
            label="Email"
            onChange={this.handleChange}
            defaultValue={email}
            type="email"
            icon="email"
            required
          />
          {errors
              && <div className="alert-err">{errors.email}</div>
            }

          <input
            name="password"
            s={10}
            placeholder="Enter password..."
            label="Password"
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
            s={10}
            name="confirmPassword"
            placeholder="Re-type password..."
            label="Confirm password"
            onChange={this.handleChange}
            defaultValue={confirmPassword}
            type="password"
            minLength="8"
            icon="lock"
            required
          />
          <div className="alert-err">{passwordError}</div>

          <Button type="submit" className="btn-primary">Sign Up</Button>
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
