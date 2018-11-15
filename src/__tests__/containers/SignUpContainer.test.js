import configureStore from 'redux-mock-store';
import React from 'react';
import { mount } from 'enzyme';
// import { Button } from 'react-materialize';
import SignUpContainer from '../../containers/Auth/SignUpContainer';

const mock = configureStore();
const store = mock({
  signUp: {
    loading: false,
    success: false,
  },
});

describe('test signup container', () => {
  it('test container mounts', () => {
    const container = mount(<SignUpContainer store={store} />);
    expect(container.find('.btn-primary').length).toBe(1);
  });

  it('on click submit', () => {
    const mouseClick = jest.fn();
    const container = mount(<SignUpContainer store={store} />);
    container.find('.btn-primary').simulate('click');
    expect(mouseClick.mock.calls.length).toEqual(0);
  });
});
