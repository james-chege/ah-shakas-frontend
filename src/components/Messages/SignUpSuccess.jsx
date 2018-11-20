import React from 'react';
import { Col, Card } from 'react-materialize';
import Navbar from '../Navbar';

const SignUpSuccess = () => (
  <div>
    <Navbar />
    <div>
      <Col className="signupsuccess" m={6} s={12}>
        <Card className="teal darken-1" textClassName="white-text">
          You have successfully signed up. Kindly check your email for a verification link
        </Card>
      </Col>
    </div>
  </div>
);

export default SignUpSuccess;
