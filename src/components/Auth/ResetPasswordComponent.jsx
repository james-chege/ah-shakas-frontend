import React from 'react';
import PropTypes from 'proptypes';
import { Redirect } from 'react-router-dom';
import ResetPasswordForm from '../forms/ResetPasswordForm';

class ResetPasswordComponent extends React.Component {
  state ={
  };

  render() {
    const { data } = this.props;
    const { user } = data;
    const { match, alert } = this.props;
    const { params } = match;
    const { token } = params;
    return (
      <div className="container">
        { user ? alert.show('Password successfully reset!', 1000) && <Redirect to="/login" /> : <ResetPasswordForm token={token} /> }
      </div>
    );
  }
}

ResetPasswordComponent.propTypes = {
  alert: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  data: PropTypes.string.isRequired,
};

export default ResetPasswordComponent;
