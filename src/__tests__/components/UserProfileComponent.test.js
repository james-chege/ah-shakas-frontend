import React from 'react';
import { mount } from 'enzyme';
import { Button } from 'react-materialize';
import storeConfig from '../../store';
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

const wrapper = mount(
  <ProfileComponent store={storeConfig()} {...props} />,
);

describe('Test Profile Component', () => {
  it('Renders <Button /> component', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });
});
