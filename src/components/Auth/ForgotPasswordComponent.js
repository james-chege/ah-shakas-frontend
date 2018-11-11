import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SuccessMessage from '../Messages/SuccessMessage';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import resetPasswordRequest from '../../actions/password.reset.action';

const ForgotPasswordComponent = () => ({
  render() {
    return (
      <div className="container">
        { this.props.data.user ? <SuccessMessage text="Email has been sent" /> : <ForgotPasswordForm /> }
      </div>
    );
  },
});

ForgotPasswordComponent.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ reset }) => ({ ...reset });

export default connect(mapStateToProps, {
  resetPasswordRequest,
})(ForgotPasswordComponent);
