import React from 'react';
import SuccessMessage from '../Messages/SuccessMessage';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';

const ForgotPasswordComponent = () => ({
  render() {
    return (
      <div className="container">
        { this.props.data.user ? <SuccessMessage text="Email has been sent" /> : <ForgotPasswordForm /> }
      </div>
    );
  },
});

export default ForgotPasswordComponent;
