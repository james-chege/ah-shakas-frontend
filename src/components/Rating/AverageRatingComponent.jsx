import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';
import React from 'react';

const AverageRating = ({ averageRating }) => (
  <div>
    {averageRating === 0
        || averageRating === undefined ? (
        ''
      ) : (
        <div className="averageRating">
          <StarRatings
            rating={averageRating}
            starRatedColor="#008281"
            starDimension="12px"
            starSpacing="0px"
            numberOfStars={5}
          />
        </div>
      )}
  </div>
);

AverageRating.propTypes = {
  averageRating: PropTypes.number.isRequired,
};
export default AverageRating;
