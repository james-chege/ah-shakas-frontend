import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  SuccessMessage from "../Messages/SuccessMessage";
import ResettingPasswordRequest from "../../actions/ResetingPasswordAction";
import { bindActionCreators } from "redux";
import ResetPasswordForm from "../forms/ResetPasswordForm";

class ResetPasswordComponent extends Component {

  render() {
    return (
      <div className="container">
        { this.props.data.user ? <SuccessMessage text="Password successfully reset!"/> : <ResetPasswordForm token={this.props.match.params.token}/> }
      </div>
    );
  }
}

ResetPasswordComponent.propTypes = {
  ResettingPasswordRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ reset }) => ({ ...reset });

const mapDispatchToProps = dispatch => bindActionCreators({
  resetPassword: ResettingPasswordRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordComponent);
