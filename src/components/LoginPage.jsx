import React from 'react';
import { Button, Input, Row } from 'react-materialize';

// noinspection JSAnnotator
const LoginPage = () => ({

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
      </div>
    );
  },
});

export default LoginPage;
