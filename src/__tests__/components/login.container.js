import configureStore from 'redux-mock-store';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import LoginContainer from '../../containers/Auth/LoginContainer';

const mock = configureStore();
const store = mock({
  login: {
    onPending: false,
    onFulfilled: false,
  },
});

describe('test login container', () => {
  it('test container mounts', () => {
    const container = mount(<LoginContainer store={store} />);
    expect(container.find('.defaultContainer').exists()).toBe(true);
  });
});
