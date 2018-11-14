import React from 'react';
import { Button, Input, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

// noinspection JSAnnotator
const LoginComponent = () => ({

  render() {
    return (
      <div className="container">
        <h1>Login page</h1>
        <Row>
          <Row>
            <Input
              type="email"
              label="email"
              s={12}
            />
          </Row>
          <Row>
            <Input
              type="password"
              label="password"
              s={12}
            />
          </Row>
          <Button>Login</Button>
        </Row>
        <Row>
          <Link to="forgot_password">Forgot Password?</Link>
        </Row>
      </div>
    );
  },
});

export default LoginComponent;
