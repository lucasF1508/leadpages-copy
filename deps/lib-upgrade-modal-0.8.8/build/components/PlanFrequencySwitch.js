"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _constants = require("../constants");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    button: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.body2), {}, {
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
      return (0, _defineProperty2.default)({
        backgroundColor: theme.palette.greyTransparent[10],
        color: selectedBillingFrequency === _constants.PLAN_PERIODS.ANNUAL ? theme.palette.text.primary : theme.palette.grey[70],
        fontSize: theme.typography.pxToRem(10),
        letterSpacing: '0.8px',
        lineHeight: theme.typography.pxToRem(20),
        marginLeft: 12
      }, theme.breakpoints.down(_constants.BREAKPOINTS.SMALL), {
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
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    className: className
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: (0, _clsx3.default)(classes.button, (0, _defineProperty2.default)({}, classes.active, selectedBillingFrequency === _constants.PLAN_PERIODS.MONTHLY)),
    onClick: function onClick() {
      return handleChange({
        target: {
          checked: false
        }
      });
    },
    variant: "text",
    "data-qa-selector": "plan-frequency-switch-monthly"
  }, "Pay Monthly"), /*#__PURE__*/_react.default.createElement(_Switch.default, {
    classes: {
      thumb: classes.switch,
      track: classes.switch
    },
    color: "primary",
    onChange: handleChange,
    checked: selectedBillingFrequency === _constants.PLAN_PERIODS.ANNUAL,
    "data-qa-selector": "plan-frequency-switch"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: (0, _clsx3.default)(classes.button, (0, _defineProperty2.default)({}, classes.active, selectedBillingFrequency === _constants.PLAN_PERIODS.ANNUAL)),
    onClick: function onClick() {
      return handleChange({
        target: {
          checked: true
        }
      });
    },
    variant: "text",
    "data-qa-selector": "plan-frequency-switch-annual"
  }, "Pay Yearly"), /*#__PURE__*/_react.default.createElement(_Chip.default, {
    className: classes.chip,
    size: "small",
    label: "SAVE MORE"
  }));
};

PlanFrequencySwitch.propTypes = {
  className: _propTypes.default.string,
  selectedBillingFrequency: _propTypes.default.oneOf([_constants.PLAN_PERIODS.MONTHLY, _constants.PLAN_PERIODS.ANNUAL]).isRequired,
  handleChange: _propTypes.default.func.isRequired
};
PlanFrequencySwitch.defaultProps = {
  className: ''
};
var _default = PlanFrequencySwitch;
exports.default = _default;