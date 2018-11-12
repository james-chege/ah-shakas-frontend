import React from 'react';
import PropTypes from 'prop-types';
import SuccessMessage from '../Messages/SuccessMessage';
import ResetPasswordForm from '../forms/ResetPasswordForm';

const ResetPasswordComponent = () => ({
  render() {
    return (
      <div className="container">
        { this.props.data.user ? <SuccessMessage text="Password successfully reset!" /> : <ResetPasswordForm token={this.props.match.params.token} /> }
      </div>
    );
  },
});

ResetPasswordComponent.propTypes = {
  ResettingPasswordRequest: PropTypes.func.isRequired,
};

export default ResetPasswordComponent;
