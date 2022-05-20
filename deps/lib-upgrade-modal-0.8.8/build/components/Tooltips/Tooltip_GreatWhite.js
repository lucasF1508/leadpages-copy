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
      width: 220,
      backgroundColor: palette.common.white,
      boxShadow: shadows[4],
      marginTop: 8,
      padding: '1.5rem',
      fontSize: 12,
      lineHeight: '18px',
      color: _constants.COLORS.text.tundora,
      fontFamily: typography.fontFamily
    }
  };
});

var Tooltip_GreatWhite = function Tooltip_GreatWhite(props) {
  var classes = useStyles();
  var children = props.children,
      placement = props.placement,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "placement"]);
  return /*#__PURE__*/_react.default.createElement(_Tooltip.default, (0, _extends2.default)({
    classes: {
      tooltip: classes.tooltip
    },
    placement: placement
  }, other, {
    style: {
      cursor: 'help'
    }
  }), children);
};

Tooltip_GreatWhite.defaultProps = {
  placement: 'bottom-start'
};
Tooltip_GreatWhite.propTypes = {
  placement: _propTypes.default.string
};
var _default = Tooltip_GreatWhite;
exports.default = _default;