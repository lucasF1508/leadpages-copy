import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ProductThemeProvider } from '../../../index';
import LoadingButton from '../LoadingButton';

const getComponent = props => (
  <ProductThemeProvider>
    <LoadingButton {...props}>Label</LoadingButton>
  </ProductThemeProvider>
);

describe('Loading Button', () => {
  it('should not display loader if isLoading is false', () => {
    render(getComponent({}));
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  it('should display loader if isLoading is true', () => {
    render(getComponent({ isLoading: true }));

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should display an icon button if "variant" prop is set to "icon"', () => {
    render(getComponent({ variant: 'icon' }));

    expect(screen.getByTestId('loading-button-icon')).toBeInTheDocument();
  });

  it('should show the success icon and text when isSuccess is true', async () => {
    const successText = 'Success';
    render(getComponent({ isSuccess: true, successText }));

    await waitFor(() => {
      expect(screen.getByText(successText)).toBeInTheDocument();
    });

    expect(screen.getByTestId('loading-button-success-icon')).toBeInTheDocument();
  });
});
