
import PropTypes from 'prop-types';
import React from 'react';

const AverageRating = ({ averageRating }) => (
  <div>
    {averageRating === 0
        || averageRating === undefined ? (
        ''
      ) : (
        <div className="averageRating" style={{ display: '' }}>
          <i className="large material-icons" style={{ color: 'orange', marginTop: '-20px' }}>star</i>
          <p className="white-text" style={{ marginLeft: '32px', marginTop: '-62px', paddingTop: '0' }}>{averageRating.toFixed(1)}</p>
          <p style={{ fontSize: '14px' }}>Average Rating</p>

        </div>
      )}
  </div>
);

AverageRating.propTypes = {
  averageRating: PropTypes.number.isRequired,
};
export default AverageRating;
