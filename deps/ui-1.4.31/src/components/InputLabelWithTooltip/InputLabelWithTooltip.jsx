import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  iconWrapper: {
    color: theme.palette.greyTransparent[50],
    lineHeight: '1em',
  },
}));

const LabelAndTooltip = ({ label, required, placement, tooltip }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="space-between">
      <Grid item>
        {label} {required && '*'}
      </Grid>
      <Grid className={classes.iconWrapper} item>
        <Tooltip title={tooltip} placement={placement}>
          <HelpIcon />
        </Tooltip>
      </Grid>
    </Grid>
  );
};

const InputLabelWithTooltip = props => {
  const { renderInputLabelEl, ...other } = props;

  return (
    <>
      {renderInputLabelEl && (
        <InputLabel {...other}>
          <LabelAndTooltip {...props} />
        </InputLabel>
      )}
      {!renderInputLabelEl && <LabelAndTooltip {...props} />}
    </>
  );
};

InputLabelWithTooltip.propTypes = {
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  placement: PropTypes.string,
  required: PropTypes.bool,
  renderInputLabelEl: PropTypes.bool,
};

InputLabelWithTooltip.defaultProps = {
  placement: 'bottom',
  required: false,
  renderInputLabelEl: false,
};

export default InputLabelWithTooltip;
