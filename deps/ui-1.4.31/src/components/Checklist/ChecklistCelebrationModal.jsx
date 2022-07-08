import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import DialogTitleWithCloseButton from '../DialogTitleWithCloseButton';

const useStyles = makeStyles(({ spacing }) => ({
  dialogPaper: {
    maxWidth: 475,
  },
  image: {
    marginTop: spacing(3),
    width: 350,
  },
  contentHeadline: {
    padding: spacing(3, 0, 1.5),
    textAlign: 'center',
  },
  contentText: {
    textAlign: 'center',
  },
  contentButton: {
    margin: spacing(3, 0, 6),
  },
}));

function ChecklistCelebrationModal({ open, imgSrc, imgAlt, onClose }) {
  const classes = useStyles();
  return (
    <Dialog classes={{ paper: classes.dialogPaper }} open={open} onClose={onClose} fullWidth>
      <DialogTitleWithCloseButton onClose={onClose} />
      <DialogContent>
        <Grid container justify="center">
          <img className={classes.image} src={imgSrc} alt={imgAlt} />
        </Grid>
        <Typography className={classes.contentHeadline} component="h2" variant="h3">
          Way to go!
        </Typography>
        <Typography className={classes.contentText}>
          You're one step closer to more leads &amp; sales.
        </Typography>
        <Grid container justify="center">
          <Button
            className={classes.contentButton}
            onClick={onClose}
            aria-label="close celebration"
          >
            Yep, I'm Awesome
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

ChecklistCelebrationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChecklistCelebrationModal;
