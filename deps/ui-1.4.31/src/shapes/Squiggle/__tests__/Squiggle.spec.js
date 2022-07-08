// __tests__/fetch.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Squiggle from '../';

describe('Squiggle', () => {
  afterEach(cleanup);

  it('should render with the different component', async () => {
    const { container } = render(
      <svg>
        <Squiggle component="g" />
      </svg>,
    );
    expect(container.firstChild).toContainHTML('</g>');
  });

  it('should render with multiple repeats', async () => {
    const { container } = render(<Squiggle repeatCount={2} />);
    expect(container.firstChild).toContainHTML('"M0 80 Q 45 40, 90 80 t 90 0 t 90 0"');
  });
});
