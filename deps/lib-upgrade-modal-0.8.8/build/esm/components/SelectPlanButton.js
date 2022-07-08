import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
var useStyles = makeStyles(function (theme) {
  return {
    currentPlan: {
      borderColor: 'transparent',
      color: theme.palette.greyTransparent[70],
      fontSize: theme.typography.pxToRem(12),
      fontStyle: 'italic',
      pointerEvents: 'none'
    }
  };
});

var SelectPlanButton = function SelectPlanButton(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      isCurrentPlan = _ref.isCurrentPlan,
      isNextUpgrade = _ref.isNextUpgrade,
      planLevel = _ref.planLevel,
      disableSelection = _ref.disableSelection;
  var classes = useStyles();
  var buttonText = isCurrentPlan ? 'Current Plan' : 'Select Plan';
  return /*#__PURE__*/React.createElement(Button, {
    className: isCurrentPlan && classes.currentPlan,
    onClick: onClick,
    size: "large",
    fullWidth: true,
    variant: isNextUpgrade && !disableSelection ? 'contained' : 'outlined',
    "data-qa-selector": "select-".concat(planLevel, "-plan-button"),
    disabled: !!disableSelection && !isCurrentPlan
  }, children || buttonText);
};

SelectPlanButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  onClick: PropTypes.func.isRequired,
  isCurrentPlan: PropTypes.bool.isRequired,
  isNextUpgrade: PropTypes.bool.isRequired,
  planLevel: PropTypes.string.isRequired,
  disableSelection: PropTypes.bool
};
SelectPlanButton.defaultProps = {
  disableSelection: false
};
export default SelectPlanButton;