import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';
import { BREAKPOINTS, PLAN_PERIODS } from '../constants';
var useStyles = makeStyles(function (theme) {
  return {
    button: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
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
        backgroundColor: 'transparent'
      }
    }),
    active: {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold
    },
    switch: {
      backgroundColor: theme.palette.primary.main
    },
    chip: function chip(_ref) {
      var selectedBillingFrequency = _ref.selectedBillingFrequency;
      return _defineProperty({
        backgroundColor: theme.palette.greyTransparent[10],
        color: selectedBillingFrequency === PLAN_PERIODS.ANNUAL ? theme.palette.text.primary : theme.palette.grey[70],
        fontSize: theme.typography.pxToRem(10),
        letterSpacing: '0.8px',
        lineHeight: theme.typography.pxToRem(20),
        marginLeft: 12
      }, theme.breakpoints.down(BREAKPOINTS.SMALL), {
        display: 'none'
      });
    }
  };
}, {
  classNamePrefix: 'PlanFrequencySwitch'
});

var PlanFrequencySwitch = function PlanFrequencySwitch(_ref3) {
  var className = _ref3.className,
      selectedBillingFrequency = _ref3.selectedBillingFrequency,
      handleChange = _ref3.handleChange;
  var classes = useStyles({
    selectedBillingFrequency: selectedBillingFrequency
  });
  return /*#__PURE__*/React.createElement(Grid, {
    item: true,
    className: className
  }, /*#__PURE__*/React.createElement(Button, {
    className: clsx(classes.button, _defineProperty({}, classes.active, selectedBillingFrequency === PLAN_PERIODS.MONTHLY)),
    onClick: function onClick() {
      return handleChange({
        target: {
          checked: false
        }
      });
    },
    variant: "text",
    "data-qa-selector": "plan-frequency-switch-monthly"
  }, "Pay Monthly"), /*#__PURE__*/React.createElement(Switch, {
    classes: {
      thumb: classes.switch,
      track: classes.switch
    },
    color: "primary",
    onChange: handleChange,
    checked: selectedBillingFrequency === PLAN_PERIODS.ANNUAL,
    "data-qa-selector": "plan-frequency-switch"
  }), /*#__PURE__*/React.createElement(Button, {
    className: clsx(classes.button, _defineProperty({}, classes.active, selectedBillingFrequency === PLAN_PERIODS.ANNUAL)),
    onClick: function onClick() {
      return handleChange({
        target: {
          checked: true
        }
      });
    },
    variant: "text",
    "data-qa-selector": "plan-frequency-switch-annual"
  }, "Pay Yearly"), /*#__PURE__*/React.createElement(Chip, {
    className: classes.chip,
    size: "small",
    label: "SAVE MORE"
  }));
};

PlanFrequencySwitch.propTypes = {
  className: PropTypes.string,
  selectedBillingFrequency: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL]).isRequired,
  handleChange: PropTypes.func.isRequired
};
PlanFrequencySwitch.defaultProps = {
  className: ''
};
export default PlanFrequencySwitch;