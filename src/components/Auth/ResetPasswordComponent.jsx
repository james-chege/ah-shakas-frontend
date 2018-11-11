import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SuccessMessage from '../Messages/SuccessMessage';
import ResettingPasswordRequest from '../../actions/reseting.password.action';
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

export const mapStateToProps = ({ reset }) => ({ ...reset });

export default connect(mapStateToProps, {
  ResettingPasswordRequest,
})(ResetPasswordComponent);
