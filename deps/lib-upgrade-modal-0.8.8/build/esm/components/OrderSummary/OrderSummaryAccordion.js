import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import OrderSummaryBody from './OrderSummaryBody';
import { PLAN_PERIOD_LABELS, SHORT_CYCLE_LABEL } from '../../constants';
import { usePlanContext } from './PlanContext';
var useStyles = makeStyles(function (_ref) {
  var breakpoints = _ref.breakpoints,
      palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    root: {
      border: "1px solid ".concat(palette.grey[10]),
      marginBottom: 30,
      width: '100%',
      '&.Mui-expanded': {
        marginTop: 0,
        marginBottom: 30
      },
      '&:before': {
        display: 'none'
      }
    },
    accordionSummary: _defineProperty({}, breakpoints.up('sm'), {
      paddingRight: spacing(3)
    }),
    planName: {
      textTransform: 'capitalize'
    },
    divider: {
      marginBottom: 6,
      width: '100%'
    }
  };
});

var OrderSummaryAccordion = function OrderSummaryAccordion(props) {
  var _usePlanContext = usePlanContext(),
      product = _usePlanContext.product,
      isTrial = _usePlanContext.isTrial,
      totalDueNow = _usePlanContext.totalDueNow;

  var classes = useStyles();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPlanExpanded = _useState2[0],
      setIsPlanExpanded = _useState2[1];

  var period = product.period,
      level = product.level;

  var onClickPlan = function onClickPlan(_e, expanded) {
    setIsPlanExpanded(expanded);
  };

  return /*#__PURE__*/React.createElement(Accordion, _extends({
    expanded: isPlanExpanded,
    onChange: onClickPlan,
    className: classes.root,
    elevation: 0
  }, props), /*#__PURE__*/React.createElement(AccordionSummary, {
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null)
  }, /*#__PURE__*/React.createElement(Grid, {
    className: classes.accordionSummary,
    container: true,
    item: true,
    xs: 12,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Typography, {
    component: "p",
    color: "textSecondary",
    variant: "caption"
  }, "Plan"), /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    className: classes.planName,
    component: Typography,
    variant: "h5",
    item: true,
    xs: 12,
    sm: true
  }, level, " ", PLAN_PERIOD_LABELS[period]), !isPlanExpanded && /*#__PURE__*/React.createElement(Grid, {
    component: Typography,
    variant: "h5",
    item: true,
    xs: 12,
    sm: "auto"
  }, "$", totalDueNow, " due today")), !isPlanExpanded && isTrial && /*#__PURE__*/React.createElement(Typography, {
    color: "textSecondary",
    variant: "body2"
  }, "$", product.price, " billed ", SHORT_CYCLE_LABEL[period], " after trial"))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    flexDirection: "column",
    component: AccordionDetails
  }, /*#__PURE__*/React.createElement(Divider, {
    className: classes.divider
  }), /*#__PURE__*/React.createElement(OrderSummaryBody, null)));
};

export default OrderSummaryAccordion;