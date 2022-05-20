import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ConfirmDialog from '../../components/ConfirmDialog';
import Toast from '../../components/Toast';

const useStyles = makeStyles({
  dialog: {
    maxWidth: 557,
  },
});

const FeedbackTool = ({
  closeModal,
  hasRequestedFeedback,
  open,
  onSubmit,
  kind,
  setRequestedFeedback,
  ToastProps,
}) => {
  const classes = useStyles();
  const [showToast, setShowToast] = useState(false);
  const [questions, setQuestions] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeToast = () => setShowToast(false);

  const onClose = () => {
    setQuestions('');
    closeModal();
  };

  const onConfirm = async () => {
    if (questions === '') return setHasError(true);

    setIsSubmitting(true);
    await onSubmit(questions);
    onClose();
    setShowToast(true);
    setIsSubmitting(false);
    setRequestedFeedback();
  };

  const onChange = e => {
    if (e.target.value !== '') setHasError(false);
    setQuestions(e.target.value);
  };

  return (
    <>
      {hasRequestedFeedback ? (
        <ConfirmDialog
          classes={{ paper: classes.dialog }}
          type="alert"
          confirmButtonText="Close"
          onClose={closeModal}
          onConfirm={closeModal}
          open={open}
          titleText="Your request for feedback has been successfully submitted."
          descriptionText={
            <>
              If you don’t see an email confirming your submission, make sure to check your spam
              folder. If you still don’t see it or have any other issues, contact us at{' '}
              <Link href="mailto:support@leadpages.com">support@leadpages.com</Link>.
            </>
          }
          ConfirmButtonProps={{ variant: 'text' }}
        />
      ) : (
        <ConfirmDialog
          classes={{ paper: classes.dialog }}
          cancelButtonText="Cancel"
          confirmButtonText="Submit"
          disableBackdropClick={isSubmitting}
          onConfirm={onConfirm}
          onClose={onClose}
          open={open}
          titleText={`Get Feedback on Your ${kind}`}
          ConfirmButtonProps={{ isLoading: isSubmitting }}
          CancelButtonProps={{ disabled: isSubmitting }}
        >
          <Typography paragraph>
            Feeling stuck or just need a little nudge? Submit your {kind.toLowerCase()} for
            feedback, and Leadpages staff will review it and email you with a detailed list of how
            to optimize it for conversion.
          </Typography>
          <TextField
            label="Questions"
            fullWidth
            multiline
            rows={4}
            placeholder="Let us know what kind of feedback you are looking for"
            value={questions}
            onChange={onChange}
            error={hasError}
          />
        </ConfirmDialog>
      )}
      <Toast
        message={`Your ${kind.toLowerCase()} has been submitted for feedback.`}
        onClose={closeToast}
        open={showToast}
        {...ToastProps}
      />
    </>
  );
};

FeedbackTool.propTypes = {
  closeModal: PropTypes.func.isRequired,
  hasRequestedFeedback: PropTypes.bool.isRequired,
  kind: PropTypes.oneOf(['Page', 'Site']).isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setRequestedFeedback: PropTypes.func.isRequired,
  ToastProps: PropTypes.shape({}),
};

FeedbackTool.defaultProps = {
  ToastProps: {},
};

export default FeedbackTool;
