import { connect } from 'react-redux';
import { loadProfile } from '../../actions/profile.actions';
import ProfileComponent from '../../components/Users/UserProfileComponent';

export const mapStateToProps = ({ profileReducer }) => profileReducer;

export default connect(mapStateToProps, {
  loadProfile,
})(ProfileComponent);
