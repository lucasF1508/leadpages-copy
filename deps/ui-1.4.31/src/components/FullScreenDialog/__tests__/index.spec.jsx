import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProductThemeProvider } from '../../../index';
import FullScreenDialog from '../FullScreenDialog';
import FullScreenDialogTitle from '../FullScreenDialogTitle';
import FullScreenDialogHeader from '../FullScreenDialogHeader';

describe('FullScreenDialog', () => {
  let onClick;
  let isOpen;
  let onClose;
  let headline;
  let subheadline;

  beforeEach(() => {
    isOpen = true;
    onClick = jest.fn();
    onClose = jest.fn(() => (isOpen = false));
    headline = 'FULL SCREEN MODAL!!!!!';
    subheadline = 'It covers the ENTIRE screen!';

    render(
      <ProductThemeProvider>
        <FullScreenDialog isOpen={isOpen}>
          <FullScreenDialogHeader
            breadcrumbs={[
              <button key="home-button" onClick={onClick}>
                Home
              </button>,
            ]}
            onClose={onClose}
          />
          <FullScreenDialogTitle headline={headline} subheadline={subheadline} />
        </FullScreenDialog>
      </ProductThemeProvider>,
    );
  });

  it('should render a full screen modal', () => {
    expect(screen.getByRole('heading', { name: headline })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: subheadline })).toBeInTheDocument();
  });

  it('should call onClose when you click the close button', async () => {
    const closeButton = screen.getByRole('button', { name: 'close' });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
    expect(isOpen).toEqual(false);
  });

  it('should render working breadcrumbs', () => {
    const breadcrumb = screen.getByRole('button', { name: 'Home' });
    expect(breadcrumb).toBeInTheDocument();
    fireEvent.click(breadcrumb);
    expect(onClick).toHaveBeenCalled();
  });
});
