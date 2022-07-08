import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FullScreenDialogTitle } from '@lp/ui';
import PlanFrequencySwitch from './PlanFrequencySwitch';
import { BREAKPOINTS, PLAN_PERIODS } from '../constants';

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '100%',
    },
    title: ({ isStandalone }) => ({
      paddingLeft: isStandalone ? 0 : null,
      paddingRight: isStandalone ? 0 : null,
      paddingTop: isStandalone ? 0 : theme.spacing(2),
    }),
    subheadContainer: ({ isStandalone }) => ({
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up(BREAKPOINTS.SMALL)]: {
        marginBottom: isStandalone ? 36 : 108,
      },
    }),
    switch: {
      marginTop: theme.spacing(3),
    },
  }),
  { classNamePrefix: 'PlanCompareHeader' },
);

const PlanCompareHeader = ({
  headline,
  subheadline,
  selectedBillingFrequency,
  handleChange,
  canChangePlanPeriod,
  isAboveSmall,
}) => {
  const isStandalone = !headline && !subheadline;
  const classes = useStyles({ isStandalone });

  return (
    <div className={classes.root}>
      <FullScreenDialogTitle
        className={classes.title}
        classesProp={{ subheadContainer: classes.subheadContainer }}
        headline={headline}
        subheadline={subheadline}
        justify={isStandalone ? 'center' : 'space-between'}
      >
        {isAboveSmall && canChangePlanPeriod && (
          <PlanFrequencySwitch
            className={classes.switch}
            selectedBillingFrequency={selectedBillingFrequency}
            handleChange={handleChange}
          />
        )}
      </FullScreenDialogTitle>
    </div>
  );
};

PlanCompareHeader.propTypes = {
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  selectedBillingFrequency: PropTypes.oneOf([
    PLAN_PERIODS.MONTHLY,
    PLAN_PERIODS.ANNUAL,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  isAboveSmall: PropTypes.bool.isRequired,
  canChangePlanPeriod: PropTypes.bool.isRequired,
};

PlanCompareHeader.defaultProps = {
  headline: null,
  subheadline: null,
};

export default PlanCompareHeader;
