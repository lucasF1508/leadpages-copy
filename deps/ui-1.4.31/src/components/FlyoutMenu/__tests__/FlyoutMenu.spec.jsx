import React from 'react';
import { render, screen, cleanup, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Button from '@material-ui/core/Button';

import FlyoutMenu from '../FlyoutMenu';

jest.useFakeTimers();

const FlyoutMenuTest = ({ props }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <>
      <Button ref={anchorRef} onClick={handleToggle}>
        Menu
      </Button>
      <FlyoutMenu open={open} anchorEl={anchorRef.current} {...props} />
    </>
  );
};

describe('FlyoutMenu', () => {
  let props;
  let button;

  beforeEach(() => {
    // https://github.com/mui-org/material-ui/issues/15726#issuecomment-493124813
    global.document.createRange = () => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
      },
    });

    props = {
      menuItems: [
        { label: 'Item 1', onClick: jest.fn(), qaSelector: 'qa-item-1' },
        { label: 'Item 2', disabled: true },
        {
          label: 'Item 3',
          menuItems: [
            { label: 'Submenu Item 1', onClick: jest.fn(), qaSelector: 'qa-subitem-1' },
            { label: 'Submenu Item 2', disabled: true },
            { label: 'Submenu Item 3', hidden: true },
          ],
        },
        { label: 'Item 4', hidden: true },
      ],
      onClickAway: jest.fn(),
    };

    render(<FlyoutMenuTest props={props} />);

    button = screen.getByRole('button', { name: 'Menu' });
    userEvent.click(button);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render menu items', () => {
    expect(screen.getAllByRole('menu')).toHaveLength(1);
    expect(screen.getAllByRole('menuitem')).toHaveLength(3);
  });

  it('should render menu items that are not set to hidden', () => {
    expect(screen.getByRole('menuitem', { name: 'Item 1' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Item 2' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Item 3' })).toBeInTheDocument();
    expect(screen.queryByRole('menuitem', { name: 'Item 4' })).not.toBeInTheDocument();
  });

  it('should render disabled menu items', () => {
    expect(screen.getByRole('menuitem', { name: 'Item 2' })).toHaveClass('Mui-disabled');
  });

  it('should call onClick prop for menu item when clicked', () => {
    const menuItem = screen.getByRole('menuitem', { name: 'Item 1' });
    userEvent.click(menuItem);

    expect(props.menuItems[0].onClick).toHaveBeenCalled();
  });

  it('should set data-qa-selector attributes on menu items', () => {
    expect(screen.getByRole('menuitem', { name: 'Item 1' })).toHaveAttribute(
      'data-qa-selector',
      'qa-item-1',
    );
  });

  describe('Submenu', () => {
    beforeEach(() => {
      userEvent.hover(screen.getByRole('menuitem', { name: 'Item 3' }));
    });

    it('should render submenu when item with submenu is hovered', () => {
      const submenu = screen.getAllByRole('menu')[1];
      const submenuItems = within(submenu).getAllByRole('menuitem');

      expect(screen.getAllByRole('menu')).toHaveLength(2);
      expect(submenuItems).toHaveLength(2);
    });

    it('should render submenu items that are not set to hidden', () => {
      expect(screen.getByRole('menuitem', { name: 'Submenu Item 1' })).toBeInTheDocument();
      expect(screen.getByRole('menuitem', { name: 'Submenu Item 2' })).toBeInTheDocument();
      expect(screen.queryByRole('menuitem', { name: 'Submenu Item 3' })).not.toBeInTheDocument();
    });

    it('should render disabled submenu items', () => {
      expect(screen.getByRole('menuitem', { name: 'Submenu Item 2' })).toHaveClass('Mui-disabled');
    });

    it('should call onClick prop for submenu item when clicked', () => {
      const menuItem = screen.getByRole('menuitem', { name: 'Submenu Item 1' });
      userEvent.click(menuItem);

      expect(props.menuItems[2].menuItems[0].onClick).toHaveBeenCalled();
    });

    it('should set data-qa-selector attributes on submenu items', () => {
      expect(screen.getByRole('menuitem', { name: 'Submenu Item 1' })).toHaveAttribute(
        'data-qa-selector',
        'qa-subitem-1',
      );
    });
  });
});
