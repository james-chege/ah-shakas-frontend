import { connect } from 'react-redux';
import getNotifications from '../../actions/notifications.action';
import NotificationsComponent from '../../components/Notifications/NotificationsComponent';

export const mapStateToProps = ({ notifications }) => {
  const { Notification_List } = notifications; //eslint-disable-line
  return {
    NotificationsList: Notification_List,
  };
};

export default connect(mapStateToProps, {
  getNotifications,
})(NotificationsComponent);
