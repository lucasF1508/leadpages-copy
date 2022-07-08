import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LeadpagesLogo from '../index';

describe('Leadpages Logo', () => {
  afterEach(cleanup);

  it('should render the full logo by default', () => {
    const { getByTestId } = render(<LeadpagesLogo />);
    const logo = getByTestId('leadpages-logo-full');

    expect(logo).toBeDefined();
  });

  it('should render the icon logo if passed as a variant', () => {
    const { getByTestId } = render(<LeadpagesLogo variant="icon" />);
    const logo = getByTestId('leadpages-logo-icon');

    expect(logo).toBeDefined();
  });

  it('should render a default title tag for the logo', () => {
    const { getByTitle } = render(<LeadpagesLogo />);

    expect(getByTitle('Leadpages logo')).toBeDefined();
  });

  it('should render a title if passed', () => {
    const { getByTitle } = render(<LeadpagesLogo title="Custom title" />);

    expect(getByTitle('Custom title')).toBeDefined();
  });
});
