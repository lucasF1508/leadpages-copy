import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Navbar from '../../Navbar';

describe('Navbar', () => {
  let navbar;
  let props;

  beforeEach(() => {
    props = {
      baseUrl: ''
    };
    navbar = shallow(<Navbar {...props} />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Navbar>Children</Navbar>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render the logo as a link when a baseUrl is not provided', () => {
    const link = navbar.find({ 'data-qa-selector': 'navbar-link' });
    expect(link.length).toEqual(0);
    expect(navbar.find({ 'data-qa-selector': 'navbar-logo' }).length).toEqual(
      1
    );
  });

  it('should render the logo as a link when a baseUrl is provided', () => {
    const baseUrl = 'https://my-test-url.com';
    navbar.setProps({ baseUrl });
    const link = navbar.find({ 'data-qa-selector': 'navbar-link' });
    expect(link.props().href).toEqual(baseUrl);
    expect(link.find({ 'data-qa-selector': 'navbar-logo' }).length).toEqual(1);
  });
});
