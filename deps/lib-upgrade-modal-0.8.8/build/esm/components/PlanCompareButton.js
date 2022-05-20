import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { BREAKPOINTS } from '../constants';
var useStyles = makeStyles(function (theme) {
  return {
    planButton: function planButton(_ref) {
      var isActive = _ref.isActive,
          useButton = _ref.useButton;
      return _defineProperty({
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
      }, theme.breakpoints.up(BREAKPOINTS.SMALL), {
        '&:hover': {
          color: theme.palette.text.primary
        }
      });
    },
    planItem: function planItem(_ref3) {
      var isActive = _ref3.isActive,
          useButton = _ref3.useButton;
      return _defineProperty({
        borderBottom: '3px solid',
        borderBottomColor: isActive ? theme.palette.primary.main : 'transparent'
      }, theme.breakpoints.up(BREAKPOINTS.SMALL), {
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
  return /*#__PURE__*/React.createElement(Grid, {
    className: classes.planItem,
    item: true,
    xs: width
  }, /*#__PURE__*/React.createElement(Link, {
    role: "tab",
    "aria-selected": isActive,
    className: classes.planButton,
    component: useButton ? 'button' : 'span',
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.planName,
    variant: "body2"
  }, planLevel), /*#__PURE__*/React.createElement(Typography, {
    className: classes.monthlyPrice
  }, "$", monthlyPrice, "/month")));
};

PlanCompareButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  monthlyPrice: PropTypes.number.isRequired,
  planLevel: PropTypes.string.isRequired,
  useButton: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired
};
export default PlanCompareButton;