import React from 'react';
import { shallow } from 'enzyme';
import { Navbar as MaterialNavbar } from 'react-materialize';
import Navbar from '../../components/Navbar';

const props = {
  match: { path: '/:activateModal?', url: '/', isExact: true, params: {} },
  username: '',
};

const wrapper = shallow(<Navbar {...props} username={props.username} />);
it('Renders <Navbar /> component', () => {
  expect(wrapper.find(MaterialNavbar).length).toBe(1);
});
