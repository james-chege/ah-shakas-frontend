import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  SuccessMessage from "../Messages/SuccessMessage";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import resetPasswordRequest from "../../actions/PasswordResetAction";
import { bindActionCreators } from "redux";

class ForgotPasswordComponent extends Component {

  render() {
    return (
      <div className="container">
    { this.props.data.user ? <SuccessMessage text="Email has been sent"/> : <ForgotPasswordForm/> }
  </div>
  );
  }
}

ForgotPasswordComponent.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
};

const mapStateToProps = ({ reset }) => ({ ...reset });

const mapDispatchToProps = dispatch => bindActionCreators({
  resetPassword: resetPasswordRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordComponent);
