import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'react-materialize';
import ProfileComponent from '../../components/Users/UserProfileComponent';
import { loadProfile } from '../../actions/profile.actions';

const props = {
  match: {
    params: {
      username: 'test-username',
    },
  },
  loading: false,
  loadProfile,
};

const wrapper = shallow(<ProfileComponent {...props} />);
it('Renders <Row /> component', () => {
  expect(wrapper.find(Row).length).toBe(0);
});
