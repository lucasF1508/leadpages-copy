import React from 'react';
import { storiesOf } from '@storybook/react';

import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogContentText from '@material-ui/core/DialogContentText';

import { getThemeDecorator } from '../../utils/storybook';
import ConfirmDialog from './ConfirmDialog';

const ConfirmDialogDefaultStory = () => {
  const [state, setState] = React.useState({ open: false, type: 'confirm' });

  const handleClickOpen = type => {
    setState({ open: true, type });
  };

  const handleClose = () => {
    setState({ open: false, type: state.type });
  };

  return (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Confirm Dialog: Default
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <Button onClick={() => handleClickOpen('confirm')}>Open Confirm Dialog</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => handleClickOpen('alert')}>Open Alert Dialog</Button>
        </Grid>
      </Grid>
      <ConfirmDialog
        type={state.type}
        open={state.open}
        titleText={state.type === 'alert' ? 'Alert Dialog' : 'Confirm Dialog'}
        subtitleText={'Subtitle Text'}
        descriptionText="Description Text: Lorem ipsum dolor sit amet consectetur adipiscing elit, eros cum vehicula volutpat est dictum. Auctor tristique mauris phasellus eu dis sociis interdum nascetur ligula consequat lobortis."
        onClose={handleClose}
        onConfirm={handleClose}
      />
    </Box>
  );
};

const ConfirmDialogRealWorldStory = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = type => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Confirm Dialog: Real-world Example
      </Typography>
      <Button onClick={handleClickOpen}>Delete Opt-in Text</Button>
      <ConfirmDialog
        open={open}
        titleText="Delete Opt-in Text"
        subtitleText="Are you sure you want to delete this Opt-In Text?"
        descriptionText={
          <>
            NOTE: All opt-ins sent to your email service provider integration will be retained, but
            the unique identifier (the text your customers send to your Opt-In Text number, e.g.,
            “Text <strong>‘FUN’</strong> to 44222”) will be made available for other Opt-In Text
            customers.
          </>
        }
        cancelButtonText="Cancel"
        confirmButtonText="Delete"
        ConfirmButtonProps={{ variant: 'text' }}
        onClose={handleClose}
        onConfirm={handleClose}
      />
    </Box>
  );
};

const ConfirmDialogLoadingState = () => {
  const [open, setOpen] = React.useState(false);
  const [isConfirming, setIsConfirming] = React.useState(false);
  const [isCancelling, setIsCancelling] = React.useState(false);

  const handleClickOpen = type => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setIsConfirming(true);
    setTimeout(() => {
      setIsConfirming(false);
      setOpen(false);
    }, 5000);
  };

  const handleCancel = () => {
    setIsCancelling(true);
    setTimeout(() => {
      setIsCancelling(false);
      setOpen(false);
    }, 5000);
  };

  return (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Confirm Dialog: With Loading State
      </Typography>
      <Button onClick={handleClickOpen}>Buy Now</Button>
      <ConfirmDialog
        open={open}
        titleText="Buy Now to Unlock Your Course"
        descriptionText="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, risus aliquet dapibus enim pretium dui sociis pulvinar, vitae consequat platea egestas proin nunc purus."
        cancelButtonText="No thanks"
        confirmButtonText="Buy Now"
        onClose={handleClose}
        onConfirm={handleConfirm}
        ConfirmButtonProps={{
          isLoading: isConfirming,
        }}
        CancelButtonProps={{
          isLoading: isCancelling,
          onClick: handleCancel,
        }}
      />
    </Box>
  );
};

const ConfirmDialogCustomizedStory = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m={4}>
      <Typography variant="h3">Confirm Dialog: Customized</Typography>
      <Typography style={{ marginBottom: 20 }}>
        See story source to view all customizations.
      </Typography>
      <Button onClick={handleClickOpen}>Open Dialog</Button>
      <ConfirmDialog
        open={open}
        titleText="Save the thing"
        TitleProps={{ variant: 'h3' }}
        cancelButtonText="Cancel"
        CancelButtonProps={{ variant: 'outlined' }}
        confirmButtonText="Save"
        onClose={handleClose}
        onConfirm={handleClose}
      >
        <DialogContentText
          component="h3"
          variant="h4"
          style={{ color: theme.palette.greyTransparent[40], marginBottom: 20 }}
        >
          Lorem ipsum dolor sit
        </DialogContentText>
        <DialogContentText gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipiscing elit duis blandit habitant felis, augue
          odio vitae aliquam sed dignissim interdum volutpat erat sociosqu. Potenti integer eu enim
        </DialogContentText>
        <DialogContentText gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipiscing elit duis blandit habitant felis, augue
          odio vitae aliquam sed dignissim interdum volutpat erat sociosqu. Potenti integer eu enim
          tempor blandit elit sem, facilisi nisl risus non id ridiculus felis mollis, at est class
          donec penatibus auctor.
        </DialogContentText>
      </ConfirmDialog>
    </Box>
  );
};

storiesOf('Components/ConfirmDialog', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => <ConfirmDialogDefaultStory />)
  .add('Real-world Example', () => <ConfirmDialogRealWorldStory />)
  .add('With Loading Buttons', () => <ConfirmDialogLoadingState />)
  .add('Customized', () => <ConfirmDialogCustomizedStory />);
