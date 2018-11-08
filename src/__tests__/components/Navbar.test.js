import React from 'react';
import { shallow } from 'enzyme';
import { Navbar as MaterialNavbar } from 'react-materialize';
import Navbar from '../../components/Navbar';

const props = '';

const wrapper = shallow(<Navbar username={props} />);
it('Renders <Navbar /> component', () => {
  expect(wrapper.find(MaterialNavbar).length).toBe(1);
});
