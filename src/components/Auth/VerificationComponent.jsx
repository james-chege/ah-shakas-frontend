import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class VerificationComponent extends Component {
  componentDidMount() {
    const { verification, match } = this.props;
    verification(match.params.token);
  }

  render() {
    const { success } = this.props;
    return (
      <div className="verification">
        {success ? <Redirect to="/login" /> : 'Ooops! Something went wrong...'}
      </div>
    );
  }
}

VerificationComponent.propTypes = {
  success: PropTypes.bool.isRequired,
  verification: PropTypes.func.isRequired,
  match: PropTypes.string.isRequired,
};

export default VerificationComponent;
