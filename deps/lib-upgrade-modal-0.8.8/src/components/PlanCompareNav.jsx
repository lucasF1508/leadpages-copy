import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { ShadowBox } from '@lp/ui';
import PlanFrequencySwitch from './PlanFrequencySwitch';
import PlanCompareButton from './PlanCompareButton';
import { PLAN_PERIODS } from '../constants';

const useStyles = makeStyles(
  theme => ({
    root: ({ headerOffset, isSticky, isVisible }) => ({
      backgroundColor: isSticky ? theme.palette.common.white : 'transparent',
      borderBottom: `1px solid ${theme.palette.grey[10]}`,
      boxShadow: !isSticky && 'none',
      marginBottom: theme.spacing(3),
      padding: 0,
      position: isSticky ? 'fixed' : 'static',
      top: headerOffset,
      right: 0,
      textAlign: 'center',
      width: '100%',
      zIndex: 2,
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shortest,
      }),
    }),
    divider: ({ isSticky }) => ({
      backgroundColor: isSticky ? theme.palette.grey[10] : 'transparent',
      marginTop: isSticky ? 0 : theme.spacing(2),
    }),
    buttons: {
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.lg,
    },
  }),
  { classNamePrefix: 'PlanCompareNav' },
);

const PlanCompareNav = ({
  activePlanIndex,
  discountPrices,
  handleChange,
  handleClick,
  headerOffset,
  selectedBillingFrequency,
  visiblePlanLevels,
  useButton,
  isSticky,
  isVisible,
}) => {
  const classes = useStyles({
    headerOffset,
    isSticky,
    isVisible,
  });

  return (
    <ShadowBox className={classes.root}>
      <PlanFrequencySwitch
        selectedBillingFrequency={selectedBillingFrequency}
        handleChange={handleChange}
      />
      <Divider className={classes.divider} />
      <Grid
        role="tablist"
        container
        justify={visiblePlanLevels.length === 2 ? 'center' : 'flex-start'}
        className={classes.buttons}
      >
        {visiblePlanLevels.map((planLevel, i) => (
          <PlanCompareButton
            key={planLevel}
            isActive={i === activePlanIndex}
            isSticky={isSticky}
            handleClick={() => handleClick(i)}
            monthlyPrice={discountPrices[planLevel].monthly}
            planLevel={planLevel}
            useButton={useButton}
            width={12 / visiblePlanLevels.length === 12 ? 12 : 4}
          />
        ))}
      </Grid>
    </ShadowBox>
  );
};

PlanCompareNav.propTypes = {
  activePlanIndex: PropTypes.number.isRequired,
  discountPrices: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  headerOffset: PropTypes.number.isRequired,
  selectedBillingFrequency: PropTypes.oneOf([
    PLAN_PERIODS.MONTHLY,
    PLAN_PERIODS.ANNUAL,
  ]).isRequired,
  visiblePlanLevels: PropTypes.arrayOf(PropTypes.string).isRequired,
  useButton: PropTypes.bool.isRequired,
  isSticky: PropTypes.bool,
  isVisible: PropTypes.bool,
};

PlanCompareNav.defaultProps = {
  isSticky: false,
  isVisible: true,
};

export default PlanCompareNav;
