import React from 'react';
import { shallow } from 'enzyme';
import SignUpComponent from '../../components/Auth/SignUpComponent';

describe('test bookmarking component', () => {
  const props = {
    signup: jest.fn(),
    success: false,
    loading: false,
    errors: {},
  };
  const wrapper = shallow(<SignUpComponent {...props} />);

  it('Renders signup component', () => {
    expect(wrapper.find('.btn-primary').length).toBe(1);
  });
});
