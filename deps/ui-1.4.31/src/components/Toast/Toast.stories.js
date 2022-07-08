import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { getThemeDecorator } from '../../utils/storybook';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Toast from './Toast';

storiesOf('Components/Toast', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => {
    const [showToast, setShowToast] = useState(true);

    const handleOpen = () => {
      setShowToast(true);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') return;
      setShowToast(false);
    };

    return (
      <Box m={4}>
        <Button onClick={handleOpen}>Open Toast</Button>
        <Toast open={showToast} onClose={handleClose} message="The simplest possible toast..." />
      </Box>
    );
  })
  .add('With icon close button', () => {
    const [showToast, setShowToast] = useState(true);

    const handleOpen = () => {
      setShowToast(true);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') return;
      setShowToast(false);
    };

    return (
      <Box m={4}>
        <Button onClick={handleOpen}>Open Toast</Button>
        <Toast
          severity="success"
          open={showToast}
          onClose={handleClose}
          message="Something good happened."
          variant="light"
          autoHideDuration={null}
          hasIconCloseButton
        />
      </Box>
    );
  })
  .add('With alert layout', () => {
    const [showToast, setShowToast] = useState(true);

    const handleOpen = () => {
      setShowToast(true);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') return;
      setShowToast(false);
    };

    return (
      <Box m={4}>
        <Button onClick={handleOpen}>Open Toast</Button>
        <Toast
          severity="info"
          open={showToast}
          onClose={handleClose}
          message="Something happened."
          detail="Here's <a href='#'>more detail</a>."
          layout="alert"
          variant="light"
          autoHideDuration={null}
          hasIconCloseButton
        />
      </Box>
    );
  });
