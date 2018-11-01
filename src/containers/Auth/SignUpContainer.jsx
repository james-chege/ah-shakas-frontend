import { connect } from 'react-redux';
import signup from '../../actions/signup.actions';
import SignUpComponent from '../../components/Auth/SignUpComponent';


const mapStateToProps = ({ signUp }) => ({ ...signUp });

export default connect(
  mapStateToProps,
  { signup },
)(SignUpComponent);
