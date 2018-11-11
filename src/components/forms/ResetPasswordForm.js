import React from 'react';
import {
  Row, Button, Input, Card,
} from 'react-materialize';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResettingPasswordRequest from '../../actions/reseting.password.action';
import InlineError from '../Messages/InlineError';

class ResetPasswordForm extends React.Component {
  state = {
    data: {
      password: '',
      confirm: '',
    },
    errors: {},
    loading: false,
  };


  onChange = e => this.setState({ ...this.state, data: { ...this.state.data, [e.target.name]: e.target.value } });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      const { ResettingPasswordRequest } = this.props;
      ResettingPasswordRequest(this.props.token, this.state.data.password);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (data.password !== data.confirm) errors.password = 'Passwords must match';
    return errors;
  };

  render() {
    const { data } = this.state;
    const errors = { ...this.state.errors, ...this.props };
    return (
      <Card>
        <form onSubmit={this.onSubmit}>
          <Row>
            <Input
              label="New Password"
              name="password"
              type="password"
              className={errors ? errors.password && 'invalid' : errors.message && 'invalid'}
              value={data.password}
              s={12}
              onChange={this.onChange}
            />
            { errors.password && <InlineError text={errors.password} />}
            { errors.message && <InlineError text={errors.message} />}
            { errors.errors ? errors.errors.length && <InlineError text={errors.errors.toString()} /> : ''}
          </Row>
          <Row>
            <Input
              label="confirm"
              name="confirm"
              className={errors ? errors.password && 'invalid' : errors.message && 'invalid'}
              value={data.confirm}
              s={12}
              onChange={this.onChange}
            />
            { errors.password && <InlineError text={errors.password} /> }
            { errors.message && <InlineError text={errors.message} /> }
            { errors.errors ? errors.errors.length && <InlineError text={errors.errors.toString()} /> : ''}
          </Row>
          <Button>Submit</Button>
        </form>
      </Card>
    );
  }
}

ResetPasswordForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ resetting }) => ({ ...resetting });

export default connect(mapStateToProps, {
  ResettingPasswordRequest,
})(ResetPasswordForm);
