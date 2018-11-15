import React from 'react';
import { shallow } from 'enzyme';
import { Collection } from 'react-materialize';
import Dropdown from '../../components/Dropdown';

const wrapper = shallow(<Dropdown />);
it('Renders <Collection /> component', () => {
  expect(wrapper.find(Collection).length).toBe(1);
});
