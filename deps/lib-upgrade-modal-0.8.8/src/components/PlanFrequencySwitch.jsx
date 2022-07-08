import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';
import { BREAKPOINTS, PLAN_PERIODS } from '../constants';

const useStyles = makeStyles(
  theme => ({
    button: {
      ...theme.typography.body2,
      color: theme.palette.greyTransparent[50],
      letterSpacing: 'normal',
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 4,
      marginRight: 4,
      textTransform: 'none',
      whiteSpace: 'nowrap',
      '&:hover, &:focus': {
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
      },
    },
    active: {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
    },
    switch: {
      backgroundColor: theme.palette.primary.main,
    },
    chip: ({ selectedBillingFrequency }) => ({
      backgroundColor: theme.palette.greyTransparent[10],
      color:
        selectedBillingFrequency === PLAN_PERIODS.ANNUAL
          ? theme.palette.text.primary
          : theme.palette.grey[70],
      fontSize: theme.typography.pxToRem(10),
      letterSpacing: '0.8px',
      lineHeight: theme.typography.pxToRem(20),
      marginLeft: 12,
      [theme.breakpoints.down(BREAKPOINTS.SMALL)]: {
        display: 'none',
      },
    }),
  }),
  { classNamePrefix: 'PlanFrequencySwitch' },
);

const PlanFrequencySwitch = ({
  className,
  selectedBillingFrequency,
  handleChange,
}) => {
  const classes = useStyles({ selectedBillingFrequency });

  return (
    <Grid item className={className}>
      <Button
        className={clsx(classes.button, {
          [classes.active]: selectedBillingFrequency === PLAN_PERIODS.MONTHLY,
        })}
        onClick={() => handleChange({ target: { checked: false } })}
        variant="text"
        data-qa-selector="plan-frequency-switch-monthly"
      >
        Pay Monthly
      </Button>
      <Switch
        classes={{ thumb: classes.switch, track: classes.switch }}
        color="primary"
        onChange={handleChange}
        checked={selectedBillingFrequency === PLAN_PERIODS.ANNUAL}
        data-qa-selector="plan-frequency-switch"
      />
      <Button
        className={clsx(classes.button, {
          [classes.active]: selectedBillingFrequency === PLAN_PERIODS.ANNUAL,
        })}
        onClick={() => handleChange({ target: { checked: true } })}
        variant="text"
        data-qa-selector="plan-frequency-switch-annual"
      >
        Pay Yearly
      </Button>
      <Chip className={classes.chip} size="small" label="SAVE MORE" />
    </Grid>
  );
};

PlanFrequencySwitch.propTypes = {
  className: PropTypes.string,
  selectedBillingFrequency: PropTypes.oneOf([
    PLAN_PERIODS.MONTHLY,
    PLAN_PERIODS.ANNUAL,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

PlanFrequencySwitch.defaultProps = {
  className: '',
};

export default PlanFrequencySwitch;
