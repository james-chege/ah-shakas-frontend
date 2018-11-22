import { connect } from 'react-redux';
import followUser from '../../actions/follow.actions';
import FollowUserComponent from '../../components/Users/FollowUserComponent';

export const mapStateToProps = ({ followUserReducer }) => followUserReducer;

export default connect(mapStateToProps, {
  followUser,
})(FollowUserComponent);
