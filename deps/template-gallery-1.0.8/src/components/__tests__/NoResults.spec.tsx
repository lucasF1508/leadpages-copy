import React from 'react';
import { screen, renderWithTheme } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

import NoResults from '../NoResults';

describe('NoResults', () => {
  const mockClearSearch: () => void = jest.fn();

  it('should render', () => {
    renderWithTheme(<NoResults clearSearch={mockClearSearch} />);

    const clearButton = screen.getByRole('button', { name: 'Clear Search & Filters' });
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);

    expect(mockClearSearch).toHaveBeenCalledTimes(1);
  });
});
