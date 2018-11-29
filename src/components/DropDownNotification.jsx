import React from 'react';
import PropTypes from 'prop-types';
import { Collection, CollectionItem } from 'react-materialize';
import '../assets/styles/DropDownNotification.scss';
import NotificationContainer from '../containers/Notifications/NotificationsContainer';

const DropdownNotification = ({ shown }) => (
  <div className="dropdown" style={{ display: shown ? 'block' : 'none' }}>
    <Collection className="card">
      <CollectionItem className="teal-text">
        <NotificationContainer />
      </CollectionItem>
    </Collection>
  </div>
);

DropdownNotification.propTypes = {
  shown: PropTypes.bool,
};

DropdownNotification.defaultProps = {
  shown: false,
};
export default DropdownNotification;
