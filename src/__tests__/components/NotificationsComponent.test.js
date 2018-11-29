import React from 'react';
import { mount } from 'enzyme';
import NotificationComponent from '../../components/Notifications/NotificationsComponent';

describe('test notifications component', () => {
  const props = {
    getNotifications: jest.fn(),
    NotificationsList: [],
  };
  const wrapper = mount(<NotificationComponent {...props} />);

  it('calls componentWillMount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy.mock.calls.length).toEqual(1);
  });

  it('Renders component', () => {
    expect(wrapper.find('.card-content').length).toBe(1);
  });

  it('Renders component', () => {
    expect(wrapper.find('#key').length).toBe(0);
  });
});
