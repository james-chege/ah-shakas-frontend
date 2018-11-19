import React from 'react';
import { shallow } from 'enzyme';
import ReadUpdateArticleComponent from '../../components/Articles/ReadUpdateArticleComponent';
import AverageRatingContainer from '../../containers/Rating/AverageRatingContainer';
import MyRatingContainer from '../../containers/Rating/MyRatingContainer';

const props = {
  alert: () => {},
  getRatings: jest.fn(),
  fetchState: {
    article: {
      title: 'title',
      description: 'description',
      body: '',
      slug: 'test-slug',
      image_url: 'url',
      tags: ['test'],
      author: {
        username: 'test',
        image_url: 'https://placehold.it/20x20',
      },
    },
  },
  updateState: {
    loading: '',
  },
  match: {
    params: {
      slug: 'test-slug',
    },
  },
  fetch: jest.fn(),
  onArticleChange: jest.fn(),
  onPublish: jest.fn(),
  setReadOnly: jest.fn(),
  readOnly: true,
  update: jest.fn(),
  makeToast: jest.fn(),
  // slug: 'test-slug',
};

const wrapper = shallow(<ReadUpdateArticleComponent {...props} />);

describe('Test Read and Update Articles Component', () => {
  it('mounts components accordingly', () => {
    const spy = jest.spyOn(ReadUpdateArticleComponent.prototype, 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy.mock.calls.length).toEqual(1);
  });

  it('test component did update', () => {
    const spy = jest.spyOn(ReadUpdateArticleComponent.prototype, 'componentDidUpdate');
    wrapper.instance().componentDidUpdate(props);
    expect(spy.mock.calls.length).toEqual(1);
  });

  it('test onArticleChange', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onArticleChange');
    wrapper.instance().onArticleChange({});
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });

  it('test onPublish', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onPublish');
    wrapper.instance().onPublish();
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });

  it('test setReadOnly', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'setReadOnly');
    wrapper.instance().setReadOnly(props);
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });

  it('renders Average rating component', () => {
    expect(wrapper.find(AverageRatingContainer).length).toBe(1);
  });

  it('does not render myRatings component on my article', () => {
    expect(wrapper.find(MyRatingContainer).length).toBe(0);
  });
});
