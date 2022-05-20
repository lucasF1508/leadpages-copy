"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _CheckCircleOutline = _interopRequireDefault(require("@material-ui/icons/CheckCircleOutline"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _index = require("../constants/index");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    tooltip: (0, _objectSpread2.default)({
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[3],
      color: theme.palette.text.primary,
      margin: 0,
      maxWidth: 248,
      padding: "".concat(theme.spacing(3) - 5, "px ").concat(theme.spacing(3), "px")
    }, theme.typography.caption),
    listItem: function listItem(_ref) {
      var enabled = _ref.enabled;
      return {
        cursor: enabled ? 'help' : 'default'
      };
    },
    icon: function icon(_ref2) {
      var isHighlighted = _ref2.isHighlighted,
          enabled = _ref2.enabled;
      return {
        position: !enabled ? 'absolute' : null,
        opacity: enabled ? 1 : 0,
        color: isHighlighted ? theme.palette.primary.main : theme.palette.grey[100],
        marginTop: 2,
        minWidth: 34,
        transition: theme.transitions.create('opacity', {
          duration: theme.transitions.duration.shorter
        })
      };
    },
    bonus: function bonus(_ref3) {
      var enabled = _ref3.enabled;
      return {
        color: enabled ? theme.palette.primary.main : theme.palette.text.disabled,
        fontWeight: theme.typography.fontWeightBold,
        textTransform: 'uppercase'
      };
    },
    feature: function feature(_ref4) {
      var enabled = _ref4.enabled;
      return {
        color: enabled ? theme.palette.grey[70] : theme.palette.text.disabled,
        marginLeft: !enabled && 34,
        textDecoration: !enabled && 'line-through',
        width: '100%',
        transition: theme.transitions.create('color', {
          duration: theme.transitions.duration.shorter
        })
      };
    }
  };
});

var FeatureListItem = function FeatureListItem(_ref5) {
  var feature = _ref5.feature,
      planLevel = _ref5.planLevel,
      isHighlighted = _ref5.isHighlighted,
      isBonus = _ref5.isBonus,
      billingFrequency = _ref5.billingFrequency;

  // get feature list item data
  // if split by billing frequency, get from each plan level frequency
  // if not, get from plan level as usual
  var _ref6 = feature.plans[planLevel][billingFrequency] || feature.plans[planLevel],
      included = _ref6.included,
      label = _ref6.label,
      detail = _ref6.detail,
      annualOnly = _ref6.annualOnly;

  var enabled = annualOnly && billingFrequency === _index.PLAN_PERIODS.MONTHLY ? false : included;
  var classes = useStyles({
    isHighlighted: isHighlighted,
    enabled: enabled
  });
  return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    classes: {
      tooltip: classes.tooltip
    },
    title: enabled && (feature === null || feature === void 0 ? void 0 : feature.tooltip) || ''
  }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem,
    disableGutters: true,
    alignItems: "flex-start"
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
    className: classes.icon
  }, /*#__PURE__*/_react.default.createElement(_CheckCircleOutline.default, {
    fontSize: "small"
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.feature
  }, isBonus && /*#__PURE__*/_react.default.createElement("span", {
    className: classes.bonus
  }, "Bonus: "), enabled && label ? label : feature.label, enabled && detail && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), detail))));
};

FeatureListItem.propTypes = {
  feature: _propTypes.default.shape({}),
  planLevel: _propTypes.default.string,
  isHighlighted: _propTypes.default.bool,
  isBonus: _propTypes.default.bool,
  billingFrequency: _propTypes.default.oneOf([_index.PLAN_PERIODS.MONTHLY, _index.PLAN_PERIODS.ANNUAL]).isRequired
};
var _default = FeatureListItem;
exports.default = _default;