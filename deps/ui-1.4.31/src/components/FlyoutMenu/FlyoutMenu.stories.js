import React, { useRef, useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import FlyoutMenu from './FlyoutMenu';
import { getThemeDecorator } from '../../utils/storybook';

function addClickEvents(menuItems) {
  return menuItems.map(item => ({ ...item, onClick: action(`Clicked ${item.text}`) }));
}

const simpleMenuItems = addClickEvents([
  { label: 'Item 1' },
  { label: 'Item 2' },
  { label: 'Item 3' },
]);

const disabledMenuItems = addClickEvents([
  { label: 'Item 1' },
  { label: 'Item 2', disabled: true },
  { label: 'Item 3' },
]);

const hiddenMenuItems = addClickEvents([
  { label: 'Item 1' },
  { label: 'Item 2', hidden: true },
  { label: 'Item 3' },
]);

const submenu1 = addClickEvents([{ label: 'Sub Item 1' }, { label: 'Sub Item 2' }]);
const submenu2 = addClickEvents([
  { label: 'Sub Item' },
  { label: 'Disabled Sub Item', disabled: true },
  { label: 'Hidden Sub Item Below' },
  { label: 'Hidden Sub Item', hidden: true },
]);
const submenuItems = addClickEvents([
  { label: 'Item 1' },
  { label: 'Item 2', menuItems: submenu1 },
  { label: 'Item 3', menuItems: submenu2 },
]);

const FlyoutMenuStory = ({ storyTitle, menuItems }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // return focus to the button when we transition from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 30 }}>
        {storyTitle}
      </Typography>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'flyout-menu' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Open Menu
      </Button>
      <FlyoutMenu
        id="flyout-menu"
        open={open}
        anchorEl={anchorRef.current}
        menuItems={menuItems}
        onClickAway={handleClose}
      />
    </Box>
  );
};

storiesOf('Components/Flyout Menu', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Simple Example', () => (
    <FlyoutMenuStory storyTitle="Simple Example" menuItems={simpleMenuItems} />
  ))
  .add('Disabled Menu Item', () => (
    <FlyoutMenuStory storyTitle="Disabled Menu Item" menuItems={disabledMenuItems} />
  ))
  .add('Hidden Menu Item', () => (
    <FlyoutMenuStory storyTitle=" Hidden Menu Item" menuItems={hiddenMenuItems} />
  ))
  .add('Submenu Example', () => (
    <FlyoutMenuStory storyTitle="Submenu Example" menuItems={submenuItems} />
  ));
