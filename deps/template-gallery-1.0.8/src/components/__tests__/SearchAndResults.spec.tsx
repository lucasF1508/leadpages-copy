import React from 'react';
import { screen, renderWithTheme } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchAndResults, { SearchAndResultsProps } from '../SearchAndResults';

describe('SearchAndResults', () => {
  let props: SearchAndResultsProps;

  beforeEach(() => {
    props = {
      inputRef: { current: { value: '' } } as React.MutableRefObject<HTMLInputElement>,
      onChange: jest.fn(),
      onClearInput: jest.fn(),
      onClearFilters: jest.fn(),
      numTemplates: 5,
      filter: 'Real Estate',
      disableSearch: false,
    };
  });

  it('should display search results when a filter prop is provided', () => {
    renderWithTheme(<SearchAndResults {...props} />);

    expect(screen.getByText('Real Estate')).toBeInTheDocument();
  });

  it('should not display the filter if there are no matching templates', () => {
    props.numTemplates = 0;
    renderWithTheme(<SearchAndResults {...props} />);

    expect(screen.queryByText('Real Estate')).not.toBeInTheDocument();
  });

  it('should provide an action to clear the category filter', () => {
    renderWithTheme(<SearchAndResults {...props} />);

    userEvent.click(screen.getByRole('button', { name: 'Clear' }));
    expect(props.onClearFilters).toHaveBeenCalled();
  });

  it('should display a button to toggle sidebar if onToggleSidebar prop is provided', () => {
    props.onToggleSidebar = jest.fn();
    renderWithTheme(<SearchAndResults {...props} />);

    userEvent.click(screen.getByRole('button', { name: 'Filter' }));
    expect(props.onToggleSidebar).toHaveBeenCalled();
  });
});
