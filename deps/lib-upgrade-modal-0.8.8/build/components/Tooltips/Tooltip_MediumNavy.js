"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _constants = require("../../constants");

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette,
      shadows = _ref.shadows,
      typography = _ref.typography;
  return {
    tooltip: {
      boxSizing: 'border-box',
      left: 42,
      width: 135,
      borderRadius: 3,
      backgroundColor: _constants.COLORS.alt.primaryBlue,
      boxShadow: shadows[4],
      padding: '9px 12px',
      fontFamily: typography.fontFamily,
      fontSize: 13,
      lineHeight: '18px',
      color: palette.common.white,
      zIndex: 100
    },
    arrow: {
      fontSize: 8,
      color: _constants.COLORS.alt.primaryBlue
    }
  };
});

var Tooltip_MediumNavy = function Tooltip_MediumNavy(props) {
  var classes = useStyles();
  var children = props.children,
      placement = props.placement,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "placement"]);
  return /*#__PURE__*/_react.default.createElement(_Tooltip.default, (0, _extends2.default)({
    open: true,
    arrow: true,
    classes: {
      tooltip: classes.tooltip,
      arrow: classes.arrow
    },
    placement: placement
  }, other), children);
};

Tooltip_MediumNavy.defaultProps = {
  placement: 'bottom'
};
Tooltip_MediumNavy.propTypes = {
  placement: _propTypes.default.string
};
var _default = Tooltip_MediumNavy;
exports.default = _default;