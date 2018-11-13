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
    const { match } = this.props;
    const { params } = match;
    const { token } = params;
    return (
      <div className="container">
        { user ? <Redirect to="/login" /> : <ResetPasswordForm token={token} /> }
      </div>
    );
  }
}

ResetPasswordComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  data: PropTypes.string.isRequired,
};

export default ResetPasswordComponent;
