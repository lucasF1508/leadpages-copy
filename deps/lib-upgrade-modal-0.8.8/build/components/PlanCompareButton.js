"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _constants = require("../constants");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    planButton: function planButton(_ref) {
      var isActive = _ref.isActive,
          useButton = _ref.useButton;
      return (0, _defineProperty2.default)({
        display: 'block',
        padding: '12px 0 8px',
        textAlign: 'center',
        textDecoration: 'none',
        width: '100%',
        opacity: !isActive && useButton ? 0.5 : 1,
        transition: theme.transitions.create('opacity', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover, &:focus': {
          opacity: 1
        }
      }, theme.breakpoints.up(_constants.BREAKPOINTS.SMALL), {
        '&:hover': {
          color: theme.palette.text.primary
        }
      });
    },
    planItem: function planItem(_ref3) {
      var isActive = _ref3.isActive,
          useButton = _ref3.useButton;
      return (0, _defineProperty2.default)({
        borderBottom: '3px solid',
        borderBottomColor: isActive ? theme.palette.primary.main : 'transparent'
      }, theme.breakpoints.up(_constants.BREAKPOINTS.SMALL), {
        borderBottomColor: 'transparent'
      });
    },
    planName: {
      fontWeight: 600,
      textTransform: 'uppercase',
      color: theme.palette.greyTransparent[100]
    },
    monthlyPrice: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(18),
      color: theme.palette.greyTransparent[70]
    }
  };
}, {
  classNamePrefix: 'PlanCompareButton'
});

var PlanCompareButton = function PlanCompareButton(_ref5) {
  var isActive = _ref5.isActive,
      handleClick = _ref5.handleClick,
      monthlyPrice = _ref5.monthlyPrice,
      planLevel = _ref5.planLevel,
      useButton = _ref5.useButton,
      width = _ref5.width;
  var classes = useStyles({
    isActive: isActive,
    useButton: useButton
  });
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    className: classes.planItem,
    item: true,
    xs: width
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    role: "tab",
    "aria-selected": isActive,
    className: classes.planButton,
    component: useButton ? 'button' : 'span',
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.planName,
    variant: "body2"
  }, planLevel), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.monthlyPrice
  }, "$", monthlyPrice, "/month")));
};

PlanCompareButton.propTypes = {
  isActive: _propTypes.default.bool.isRequired,
  handleClick: _propTypes.default.func.isRequired,
  monthlyPrice: _propTypes.default.number.isRequired,
  planLevel: _propTypes.default.string.isRequired,
  useButton: _propTypes.default.bool.isRequired,
  width: _propTypes.default.number.isRequired
};
var _default = PlanCompareButton;
exports.default = _default;