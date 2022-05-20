import React from 'react';
import renderer from 'react-test-renderer';
import ColorPicker from '../../ColorPicker';

describe('ColorPicker', () => {
  it('renders correctly', () => {
    // Not doing much right now because this is "tested well by the maintainers"
    const tree = renderer.create(<ColorPicker>Children</ColorPicker>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
