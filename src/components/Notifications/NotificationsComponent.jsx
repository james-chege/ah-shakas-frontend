import React from 'react';
import PropTypes from 'proptypes';

export class Notifications extends React.Component {
  componentDidMount() {
    const { getNotifications } = this.props;
    getNotifications();
  }

  render() {
    const { NotificationsList } = this.props;
    return (
      <div className="card-content">
        <span className="card-title">Notifications</span>
        {NotificationsList ? NotificationsList.map(notification => (
          <div id="key" key={notification.created_at}>
            <p><h>{notification.notification}</h></p>
            <hr />
          </div>
        )) : <h>You have no notifications</h>}
      </div>
    );
  }
}

Notifications.propTypes = {
  getNotifications: PropTypes.func.isRequired,
  NotificationsList: PropTypes.func.isRequired,
};

export default Notifications;
