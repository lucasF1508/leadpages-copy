"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));

var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));

var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _styles = require("@material-ui/core/styles");

var _OrderSummaryBody = _interopRequireDefault(require("./OrderSummaryBody"));

var _constants = require("../../constants");

var _PlanContext = require("./PlanContext");

var useStyles = (0, _styles.makeStyles)(function (_ref) {
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
    accordionSummary: (0, _defineProperty2.default)({}, breakpoints.up('sm'), {
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
  var _usePlanContext = (0, _PlanContext.usePlanContext)(),
      product = _usePlanContext.product,
      isTrial = _usePlanContext.isTrial,
      totalDueNow = _usePlanContext.totalDueNow;

  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isPlanExpanded = _useState2[0],
      setIsPlanExpanded = _useState2[1];

  var period = product.period,
      level = product.level;

  var onClickPlan = function onClickPlan(_e, expanded) {
    setIsPlanExpanded(expanded);
  };

  return /*#__PURE__*/_react.default.createElement(_Accordion.default, (0, _extends2.default)({
    expanded: isPlanExpanded,
    onChange: onClickPlan,
    className: classes.root,
    elevation: 0
  }, props), /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    className: classes.accordionSummary,
    container: true,
    item: true,
    xs: 12,
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "p",
    color: "textSecondary",
    variant: "caption"
  }, "Plan"), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    className: classes.planName,
    component: _Typography.default,
    variant: "h5",
    item: true,
    xs: 12,
    sm: true
  }, level, " ", _constants.PLAN_PERIOD_LABELS[period]), !isPlanExpanded && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    component: _Typography.default,
    variant: "h5",
    item: true,
    xs: 12,
    sm: "auto"
  }, "$", totalDueNow, " due today")), !isPlanExpanded && isTrial && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "textSecondary",
    variant: "body2"
  }, "$", product.price, " billed ", _constants.SHORT_CYCLE_LABEL[period], " after trial"))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    flexDirection: "column",
    component: _AccordionDetails.default
  }, /*#__PURE__*/_react.default.createElement(_Divider.default, {
    className: classes.divider
  }), /*#__PURE__*/_react.default.createElement(_OrderSummaryBody.default, null)));
};

var _default = OrderSummaryAccordion;
exports.default = _default;