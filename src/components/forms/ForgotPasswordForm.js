import React from 'react';
import {
  Row, Button, Input, Card,
} from 'react-materialize';
import isEmail from 'validator/lib/isEmail';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InlineError from '../Messages/InlineError';
import resetPasswordRequest from '../../actions/password.reset.action';

class ForgotPasswordForm extends React.Component {
  state = {
    data: {
      email: '',
    },
    loading: false,
    errors: {},
  };

  onChange = e => this.setState({...this.state, data: { ...this.state.data, [e.target.name]: e.target.value } });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      const { resetPassword } = this.props;
      resetPassword(this.state.data);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Invalid email';
    return errors;
  };

  render() {
    const { data } = this.state;
    const errors = { ...this.state.errors, ...this.props.errors };
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


const mapStateToProps = ({ reset }) => ({ ...reset });

const mapDispatchToProps = dispatch => bindActionCreators({
  resetPassword: resetPasswordRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);
