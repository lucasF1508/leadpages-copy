import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  currentPlan: {
    borderColor: 'transparent',
    color: theme.palette.greyTransparent[70],
    fontSize: theme.typography.pxToRem(12),
    fontStyle: 'italic',
    pointerEvents: 'none',
  },
}));

const SelectPlanButton = ({
  children,
  onClick,
  isCurrentPlan,
  isNextUpgrade,
  planLevel,
  disableSelection,
}) => {
  const classes = useStyles();

  const buttonText = isCurrentPlan ? 'Current Plan' : 'Select Plan';

  return (
    <Button
      className={isCurrentPlan && classes.currentPlan}
      onClick={onClick}
      size="large"
      fullWidth
      variant={isNextUpgrade && !disableSelection ? 'contained' : 'outlined'}
      data-qa-selector={`select-${planLevel}-plan-button`}
      disabled={!!disableSelection && !isCurrentPlan}
    >
      {children || buttonText}
    </Button>
  );
};

SelectPlanButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onClick: PropTypes.func.isRequired,
  isCurrentPlan: PropTypes.bool.isRequired,
  isNextUpgrade: PropTypes.bool.isRequired,
  planLevel: PropTypes.string.isRequired,
  disableSelection: PropTypes.bool,
};

SelectPlanButton.defaultProps = {
  disableSelection: false,
};

export default SelectPlanButton;
