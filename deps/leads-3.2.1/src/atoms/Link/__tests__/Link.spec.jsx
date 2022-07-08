import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../../Link';

describe('Link', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Link>Children</Link>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
