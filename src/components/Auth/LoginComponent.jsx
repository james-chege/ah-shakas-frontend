import React, { Component } from 'react';
import { Button, Input, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAct } from '../../actions/login.action';

// noinspection JSAnnotator
class LoginComponent extends Component {

  state = {
    email: '',
    password: '',
    token: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    this.props.login(this.state);
  }

  render() {
    return (
      <div className="container" onSubmit={this.onSubmit}>
        <h1>Login page</h1>
        <div name="LoginForm">
          <input
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />

          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
          />
          <button onClick={this.onSubmit}>Login</button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ login }) => ({
  onFulfilled: login.onFulfilled,
  onRejected: login.onRejected
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    login: loginAct
  },
  dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
