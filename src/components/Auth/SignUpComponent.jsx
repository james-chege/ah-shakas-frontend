import React, { Component } from 'react';
<<<<<<< HEAD
import { Row, Input } from 'react-materialize';
import axios from 'axios';


class SignUpComponent extends Component {
  
=======
import PropTypes from 'proptypes';
import { Row, Input, Button } from 'react-materialize';

class SignUpComponent extends Component {
>>>>>>> 33f0d72... [feat #160577437] refactor according to feedback
  state = {
    username: '',
    email: '',
    password: '',
<<<<<<< HEAD
    confirm_password: '',
    email_error: '',
    password_error: '',
    username_error: ''
  }
  
  handleChange = (event) => {
    event.preventDefault()
    this.setState( {[event.currentTarget.name]: event.currentTarget.value} )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { username, email, password, confirm_password } = this.state
    if (password === confirm_password){
      this.setState({error:null})
      const data = {
        user: {
          username: username,
          email: email,
          password: password
        }
      }
      console.log(data)

      const client = axios.create({
        baseURL: 'http://localhost:8000/api'
      })

      client({
        url: '/users/',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(response =>{
        console.log(response)
        console.log(response.data)
        this.setState({
          email_error: '',
          password_error: '',
          username_error: '',
          success: true
        })

      }
      )
      .catch(error => {
        console.log(error.response.data)
        const { errors } = error.response.data
        this.setState({
          email_error: errors.email,
          password_error: errors.password,
          username_error: errors.username
        })
      }
    )
  
    } else {
      this.setState({password_error: "Passwords don't match."})
    }
  }

  render(){
    if (this.state.success){
      return(
        <div className="container">
          <div className="signup-success">
            <span>Welcome to Author's haven. Check to confirm you have received your verification email..</span>
          </div>
        </div>
      )
     }
    return(
      <div className="container">
        <h3 className="title">Create Account</h3>
        <Row className="center">
          <form onSubmit={this.handleSubmit}>
            <Input name="username" placeholder="Enter username..." s={12} label="Username" onChange={this.handleChange} type="text" icon="account_circle" minLength="6" required/>
            <div className="alert-err">{this.state.username_error}</div>
            <Input name="email" placeholder="Enter email..." s={12} label="Email" onChange={this.handleChange} type="email" icon="email" required/>
            <div className="alert-err">{this.state.email_error}</div>
            <Input name="password" placeholder="Enter password..." s={12} label="Password" onChange={this.handleChange} type="password" icon="lock" minLength="8" required/>
            <div className="alert-err">{this.state.password_error}</div>
            <Input name="confirm_password" placeholder="Re-type password..." s={12} label="Confirm password" onChange={this.handleChange} type="password" minLength="8" icon="lock" required/>
            <Input type="submit" className="btn center-btn" defaultValue="SIGN UP"/>
          </form>
        </Row>
      </div>
    )
  }
}


export default SignUpComponent;
=======
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
        <Row>
          <form onSubmit={this.onSignUp}>
            <Input
              name="username"
              s={12}
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

            <Input
              name="email"
              s={12}
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

            <Input
              name="password"
              s={12}
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


            <Input
              s={12}
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

            <Button type="submit" className="btn">Sign Up</Button>
          </form>
        </Row>
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
>>>>>>> 33f0d72... [feat #160577437] refactor according to feedback
