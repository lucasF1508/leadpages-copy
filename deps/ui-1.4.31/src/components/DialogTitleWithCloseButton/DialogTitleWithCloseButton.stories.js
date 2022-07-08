import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { getThemeDecorator } from '../../utils/storybook';

import DialogTitleWithCloseButton from './DialogTitleWithCloseButton';

const DialogTitleWithCloseStory = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m={4}>
      <Box mb={6}>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitleWithCloseButton onClose={handleClose}>
            Dialog Title With Close Button
          </DialogTitleWithCloseButton>
          <DialogContent>
            Renders a dialog title with a close icon button in the top right, to aid in usability.
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

storiesOf('Components/DialogTitleWithCloseButton', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => <DialogTitleWithCloseStory />);
