import React from 'react';
import { screen, renderWithTheme } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

import SidebarToggle from '../SidebarToggle';

describe('SidebarToggle', () => {
  const props = {
    isOpen: true,
    onToggleSidebar: jest.fn(),
  };

  it('should render', () => {
    renderWithTheme(<SidebarToggle {...props} />);

    const toggleButton = screen.getByRole('button', { hidden: true });
    expect(toggleButton).toBeInTheDocument();
  });

  it('should call onToggleSidebar', () => {
    renderWithTheme(<SidebarToggle {...props} />);

    const toggleButton = screen.getByRole('button', { hidden: true });
    fireEvent.click(toggleButton);

    expect(props.onToggleSidebar).toHaveBeenCalledTimes(1);
  });
});
