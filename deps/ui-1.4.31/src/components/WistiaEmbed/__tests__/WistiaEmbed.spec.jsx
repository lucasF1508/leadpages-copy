import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WistiaEmbed from '..';

describe('Wistia Embed', () => {
  afterEach(cleanup);

  it('should render the Wistia embed code', () => {
    const { getByTestId } = render(<WistiaEmbed videoId="someVideo" />);
    expect(getByTestId('wistia-embed')).toBeDefined();
  });
});
