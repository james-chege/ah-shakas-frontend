import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Slider from 'react-animated-slider';
import { Chip } from 'react-materialize';
import HomePageComponent from '../../components/HomePageComponent';

const mock = configureMockStore();

const store = mock({
  article: {},
});

const props = {
  fetchAll: () => {},
  articles: {
    results: [{
      title: 'title',
      description: 'description',
      body: 'body',
      slug: 'test-slug',
      image_url: 'url',
      tags: ['test'],
      author: {
        username: 'test',
        image_url: 'https://placehold.it/20x20',
      },
    }],
  },
};
const wrapper = mount(<HomePageComponent {...props} store={store} />);

describe('renders <HomePageComponent/>', () => {
  it('tests if component did mount', () => {
    const spy = jest.spyOn(HomePageComponent.prototype, 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('tests render <Slider/>', () => {
    expect(wrapper.find(Slider).length).toBe(1);
  });

  it('maps articles lists', () => {
    expect(wrapper.find('.slider-content').length).toBe(1);
  });

  it('maps articles accordingly', () => {
    expect(wrapper.find('.title')).toHaveLength(1);
  });

  it('maps tags correctly', () => {
    expect(wrapper.find(Chip)).toHaveLength(1);
  });
});
