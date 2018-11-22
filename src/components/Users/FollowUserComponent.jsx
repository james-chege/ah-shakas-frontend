import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Button } from 'react-materialize';

class FollowUserComponent extends Component {
    onFollow = () => {
      const { followUser, username, followed } = this.props;
      followUser(username, followed);
    }

    render() {
      return (
        <div>
          <Button onClick={this.onFollow} className="waves-effect waves-light btn">Follow</Button>
        </div>
      );
    }
}

FollowUserComponent.propTypes = {
  followUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  followed: PropTypes.bool.isRequired,
};

export default FollowUserComponent;
