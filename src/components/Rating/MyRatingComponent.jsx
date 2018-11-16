import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';
import React from 'react';
import authUser from '../../utils/authUser.util';

const MyRating = ({ rateArticleAction, slug, rating, alert }) => (
  <div className="star-ratings">
    {authUser ? (
      <div className="myRating" id="ratings">
        <StarRatings
          numberOfStars={5}
          rating={rating}
          changeRating={(newRating) => { rateArticleAction(slug, newRating); alert.show('successful!'); }}
          starDimension="25px"
          starSpacing="2px"
          starRatedColor="rgb(255,120,0)"
          starHoverColor="rgb(255,255,0)"
        />
      </div>
    ) : (
      ''
    )}
  </div>
);

MyRating.propTypes = {
  rateArticleAction: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  alert: PropTypes.func.isRequired,
};

export default MyRating;
