"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
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
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
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
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]),
  onClick: _propTypes.default.func.isRequired,
  isCurrentPlan: _propTypes.default.bool.isRequired,
  isNextUpgrade: _propTypes.default.bool.isRequired,
  planLevel: _propTypes.default.string.isRequired,
  disableSelection: _propTypes.default.bool
};
SelectPlanButton.defaultProps = {
  disableSelection: false
};
var _default = SelectPlanButton;
exports.default = _default;