import React from 'react';
import PropTypes from 'prop-types';
import { Collection, CollectionItem } from 'react-materialize';
import authUser from '../utils/authUser.util';
import '../assets/styles/Dropdown.scss';

const Dropdown = ({ shown, onLogout }) => (
  <div className="dropdown" style={{ display: shown ? 'block' : 'none' }}>
    <Collection className="card">
      <CollectionItem>
        <a href="/article">New Story</a>
      </CollectionItem>
      <CollectionItem>
        {username
         && <a href={`/profiles/${username}`}>Profile</a>
        }
        {!username && authUser
         && <a href={`/profiles/${authUser.username}`}>Profile</a> }
      </CollectionItem>
      <CollectionItem>
        <button type="button" className="buttonLink" onClick={onLogout}>Logout</button>
      </CollectionItem>
    </Collection>
  </div>
);

Dropdown.propTypes = {
  shown: PropTypes.bool,
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  shown: false,
};

export default Dropdown;
