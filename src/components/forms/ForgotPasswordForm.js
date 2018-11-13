import React from 'react';
import {
  Row, Button, Input, Card,
} from 'react-materialize';
import isEmail from 'validator/lib/isEmail';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import InlineError from '../Messages/InlineError';
import resetPasswordRequest from '../../actions/password.reset.action';

class ForgotPasswordForm extends React.Component {
  state = {
    data: {
      email: '',
    },
    errors: {},
  };

  onChange = (e) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [e.target.name]: e.target.value },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate(data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      const { resetPassword } = this.props;
      resetPassword(data);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Invalid email';
    return errors;
  };

  render() {
    const myprops = { ...this.props };
    const { data } = this.state;
    let { errors } = this.state;
    errors = { ...errors, ...myprops.errors };
    return (
      <Card>
        <form onSubmit={this.onSubmit}>
          <Row>
            <Input
              label="email"
              name="email"
              className={errors ? errors.email && 'invalid' : errors.message && 'invalid'}
              value={data.email}
              s={12}
              onChange={this.onChange}
            />
            { errors.email && <InlineError text={errors.email} />}
            { errors.message && <InlineError text={errors.message} />}

          </Row>
          <Button>Submit</Button>
        </form>
      </Card>
    );
  }
}

ForgotPasswordForm.propTypes = {
  resetPassword: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ reset }) => ({ ...reset });

export default connect(mapStateToProps, {
  resetPassword: resetPasswordRequest,
})(ForgotPasswordForm);
