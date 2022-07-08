// __tests__/fetch.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MarketingThemeProvider } from '../../../themes';
import Onboarding from '../';

describe('Onboarding', () => {
  afterEach(cleanup);
  it('should render with copy write text', async () => {
    const { container } = render(
      <MarketingThemeProvider>
        <Onboarding>children</Onboarding>
      </MarketingThemeProvider>,
    );
    expect(container).toContainHTML('Leadpages (US)');
  });
});
