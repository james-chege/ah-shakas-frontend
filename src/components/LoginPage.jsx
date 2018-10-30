import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Row } from 'react-materialize';

// noinspection JSAnnotator
const LoginPage = () => ({

  render() {
    return (
      <div>
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
          <Link to="/">Login</Link>
        </Row>
      </div>
    );
  },
});

export default LoginPage;
