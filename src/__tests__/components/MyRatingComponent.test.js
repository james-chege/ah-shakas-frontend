import React from 'react';
import { shallow } from 'enzyme';
import StarRatings from 'react-star-ratings';
import MyRating from '../../components/Rating/MyRatingComponent';
import { rateArticleAction } from '../../actions/rating.action';

describe('test my rating component', () => {
  const props = {
    rating: 1,
    slug: 'hi-there',
    rateArticleAction,
  };
  const wrapper = shallow(<MyRating {...props} />);

  it('renders MyRating component', () => {
    expect(wrapper.find(StarRatings).length).toBe(0);
  });
});
