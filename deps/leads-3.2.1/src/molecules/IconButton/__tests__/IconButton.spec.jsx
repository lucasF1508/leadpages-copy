import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from '../../IconButton';

describe('IconButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IconButton>Children</IconButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
