import React from 'react';
import { screen, renderWithTheme } from '@testing-library/react';

import Gallery from '../Gallery';

describe('Gallery', () => {
  it('should render children', () => {
    const fakeRef = { current: document.createElement('div') };
    renderWithTheme(
      <Gallery infiniteRef={fakeRef}>
        <div>Templates</div>
      </Gallery>,
    );

    expect(screen.getByText('Templates')).toBeInTheDocument();
  });
});
