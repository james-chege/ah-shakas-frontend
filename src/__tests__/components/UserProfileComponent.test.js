import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'react-materialize';
import configureMockStore from 'redux-mock-store';
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

const mock = configureMockStore();

const store = mock({});

const wrapper = shallow(
  <ProfileComponent store={store} {...props} />, store,
);

describe('Test Profile Component', () => {
  it('Renders <Button /> component', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('renders notifications settings', () => {
    expect(wrapper.find('.tab').length).toEqual(3);
  });

  it('displays on clicking', () => {
    expect(wrapper.find('.active').length).toEqual(1);
    wrapper.find('.active').simulate('click');
    expect(wrapper.state().activeTab).toEqual('articles');
  });
});
