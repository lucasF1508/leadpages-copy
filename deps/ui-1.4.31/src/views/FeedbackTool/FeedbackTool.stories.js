import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FeedbackTool from './FeedbackTool';
import { getThemeDecorator } from '../../utils/storybook';

const stories = storiesOf('Views/Feedback Tool', module);

stories.addDecorator(getThemeDecorator('product')).add('Basic Example', () => {
  const [open, setOpen] = useState(false);
  const [hasRequestedFeedback, setHasRequestedFeedback] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const setRequestedFeedback = () => setHasRequestedFeedback(true);
  const clearRequestedFeedback = () => setHasRequestedFeedback(false);
  const onSubmit = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  };

  return (
    <>
      <Box mt={4} display="flex" justifyContent="center">
        <Button onClick={openModal} style={{ marginRight: 24 }}>
          Get Feedback
        </Button>

        <Button onClick={clearRequestedFeedback} disabled={!hasRequestedFeedback}>
          Clear Successful Submission
        </Button>
      </Box>
      <FeedbackTool
        closeModal={closeModal}
        hasRequestedFeedback={hasRequestedFeedback}
        kind="Page"
        onSubmit={onSubmit}
        open={open}
        setRequestedFeedback={setRequestedFeedback}
      />
    </>
  );
});

stories.add('Custom Toast Transition', () => {
  const [open, setOpen] = useState(false);
  const [hasRequestedFeedback, setHasRequestedFeedback] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const setRequestedFeedback = () => setHasRequestedFeedback(true);
  const clearRequestedFeedback = () => setHasRequestedFeedback(false);
  const onSubmit = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  };

  return (
    <>
      <Box mt={4} display="flex" justifyContent="center">
        <Button onClick={openModal} style={{ marginRight: 24 }}>
          Get Feedback
        </Button>

        <Button onClick={clearRequestedFeedback} disabled={!hasRequestedFeedback}>
          Clear Successful Submission
        </Button>
      </Box>
      <FeedbackTool
        closeModal={closeModal}
        hasRequestedFeedback={hasRequestedFeedback}
        kind="Page"
        onSubmit={onSubmit}
        open={open}
        setRequestedFeedback={setRequestedFeedback}
        ToastProps={{
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          TransitionProps: {
            direction: 'left',
          },
        }}
      />
    </>
  );
});
