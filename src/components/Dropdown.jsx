import React from 'react';
import PropTypes from 'prop-types';
import { Collection, CollectionItem } from 'react-materialize';
import '../assets/styles/Dropdown.scss';

const Dropdown = ({ shown }) => (
  <div className="dropdown" style={{ display: shown ? 'block' : 'none' }}>
    <Collection className="card">
      <CollectionItem>
        <a href="/article">New Story</a>
      </CollectionItem>
    </Collection>
  </div>

);

Dropdown.propTypes = {
  shown: PropTypes.bool,
};

Dropdown.defaultProps = {
  shown: false,
};

export default Dropdown;
