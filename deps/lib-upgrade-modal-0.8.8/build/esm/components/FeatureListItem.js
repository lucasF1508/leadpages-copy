import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ToolTip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { PLAN_PERIODS } from '../constants/index';
var useStyles = makeStyles(function (theme) {
  return {
    tooltip: _objectSpread({
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

  var enabled = annualOnly && billingFrequency === PLAN_PERIODS.MONTHLY ? false : included;
  var classes = useStyles({
    isHighlighted: isHighlighted,
    enabled: enabled
  });
  return /*#__PURE__*/React.createElement(ToolTip, {
    classes: {
      tooltip: classes.tooltip
    },
    title: enabled && (feature === null || feature === void 0 ? void 0 : feature.tooltip) || ''
  }, /*#__PURE__*/React.createElement(ListItem, {
    className: classes.listItem,
    disableGutters: true,
    alignItems: "flex-start"
  }, /*#__PURE__*/React.createElement(ListItemIcon, {
    className: classes.icon
  }, /*#__PURE__*/React.createElement(CheckCircleOutlineIcon, {
    fontSize: "small"
  })), /*#__PURE__*/React.createElement(Typography, {
    className: classes.feature
  }, isBonus && /*#__PURE__*/React.createElement("span", {
    className: classes.bonus
  }, "Bonus: "), enabled && label ? label : feature.label, enabled && detail && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), detail))));
};

FeatureListItem.propTypes = {
  feature: PropTypes.shape({}),
  planLevel: PropTypes.string,
  isHighlighted: PropTypes.bool,
  isBonus: PropTypes.bool,
  billingFrequency: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL]).isRequired
};
export default FeatureListItem;