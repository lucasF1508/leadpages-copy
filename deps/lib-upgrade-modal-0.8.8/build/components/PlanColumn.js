"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _ui = require("@lp/ui");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _constants = require("../constants");

var _bundle = require("../utils/bundle");

var _FeatureListItem = _interopRequireDefault(require("./FeatureListItem"));

var _SelectPlanButton = _interopRequireDefault(require("./SelectPlanButton"));

var _types = require("../constants/types");

var _upgrade = require("../utils/upgrade");

var BREAKPOINT_SMALL_PLUS_2 = _constants.BREAKPOINTS.SMALL + 2;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: function root(_ref) {
      var isMostPopular = _ref.isMostPopular,
          isPreviousPlan = _ref.isPreviousPlan;
      return {
        marginTop: isMostPopular || isPreviousPlan ? 0 : 36
      };
    },
    box: {
      paddingTop: theme.spacing(3) - 5
    },
    mostPopular: {
      backgroundColor: theme.palette.greyTransparent[10],
      display: 'flex',
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase'
    },
    previousPlan: {
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase'
    },
    fullPrice: (0, _defineProperty2.default)({
      color: theme.palette.grey[70],
      textDecoration: 'line-through'
    }, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
      fontSize: theme.typography.pxToRem(14)
    }),
    savings: (0, _defineProperty2.default)({}, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
      fontSize: theme.typography.pxToRem(14)
    }),
    divider: {
      '&::after': (0, _defineProperty2.default)({
        color: theme.palette.greyTransparent[30],
        content: '"|"',
        fontWeight: theme.typography.fontWeightRegular,
        margin: theme.spacing(0, 1)
      }, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
        fontSize: theme.typography.pxToRem(14)
      })
    },
    pricingInfo: {
      marginTop: 6,
      marginBottom: theme.spacing(3)
    },
    level: {
      textTransform: 'uppercase',
      marginBottom: theme.spacing(1.5)
    },
    price: (0, _defineProperty2.default)({
      fontSize: theme.typography.pxToRem(56),
      lineHeight: 1
    }, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
      fontSize: theme.typography.pxToRem(40)
    }),
    billingFrequency: (0, _defineProperty2.default)({
      fontSize: theme.typography.pxToRem(16)
    }, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
      fontSize: theme.typography.pxToRem(14)
    }),
    priceDetail: {
      marginTop: theme.spacing(1.5)
    },
    icon: {
      color: theme.palette.grey[100],
      marginTop: 2,
      minWidth: 34
    },
    included: {
      color: theme.palette.grey[70]
    },
    notIncluded: {
      color: theme.palette.text.disabled,
      marginLeft: 34,
      textDecoration: 'line-through'
    },
    list: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5)
    }
  };
}, {
  classNamePrefix: 'PlanColumn'
});

function getIsNextUpgrade(currentLevel, nextLevel, isMostPopular) {
  if (!currentLevel && isMostPopular) return true;
  if (currentLevel === _constants.PLAN_NAMES.PRO && nextLevel === _constants.PLAN_NAMES.ADVANCED) return true;
  if (currentLevel === _constants.PLAN_NAMES.STANDARD && nextLevel === _constants.PLAN_NAMES.PRO) return true;
  return false;
}

var PlanColumn = function PlanColumn(_ref2) {
  var _plan$equivalentKeys;

  var plan = _ref2.plan,
      planLevel = _ref2.planLevel,
      billingFrequency = _ref2.billingFrequency,
      currentPlan = _ref2.currentPlan,
      previousPlan = _ref2.previousPlan,
      bundle = _ref2.bundle,
      savings = _ref2.savings,
      monthlyPrice = _ref2.monthlyPrice,
      monthlyComparePrice = _ref2.monthlyComparePrice,
      flow = _ref2.flow,
      hasCoupon = _ref2.hasCoupon,
      isMostPopular = _ref2.isMostPopular,
      onSelectPlan = _ref2.onSelectPlan,
      hasAlternateFeatures = _ref2.hasAlternateFeatures,
      selectPlanButtonText = _ref2.selectPlanButtonText,
      disableSelection = _ref2.disableSelection;
  var isPreviousPlan = previousPlan === (plan === null || plan === void 0 ? void 0 : plan.id) || (plan === null || plan === void 0 ? void 0 : (_plan$equivalentKeys = plan.equivalentKeys) === null || _plan$equivalentKeys === void 0 ? void 0 : _plan$equivalentKeys.includes(previousPlan));
  var classes = useStyles({
    isMostPopular: isMostPopular,
    isPreviousPlan: isPreviousPlan
  });
  var isCurrentPlan = (currentPlan === null || currentPlan === void 0 ? void 0 : currentPlan.level) === planLevel && currentPlan.period === billingFrequency && flow !== _constants.FLOWS.REACTIVATION;
  var isNextUpgrade = getIsNextUpgrade(currentPlan === null || currentPlan === void 0 ? void 0 : currentPlan.level, planLevel, isMostPopular);
  var showSavingsStyles = !!savings && !isCurrentPlan;
  var planFeatures = hasAlternateFeatures ? _constants.ALTERNATE_FEATURES : _constants.FEATURES;

  var getBundleFeatureDetails = function getBundleFeatureDetails() {
    var _bundle$details, _bundle$details$planC, _bundle$details$planC2;

    var planIsEligible = (0, _upgrade.checkPlanIsUpgrade)(plan, flow) && (0, _bundle.checkPlanBundleEligibility)(plan, bundle, flow);
    var label = (_bundle$details = bundle.details) === null || _bundle$details === void 0 ? void 0 : (_bundle$details$planC = _bundle$details.planCompare) === null || _bundle$details$planC === void 0 ? void 0 : _bundle$details$planC.lineItemText;

    if (!label) {
      var _bundle$details2;

      label = "".concat(((_bundle$details2 = bundle.details) === null || _bundle$details2 === void 0 ? void 0 : _bundle$details2.size) ? bundle.details.size + ' ' : '').concat(bundle.details.kind);
    }

    var bundleFeature = {
      label: label,
      tooltip: (_bundle$details$planC2 = bundle.details.planCompare) === null || _bundle$details$planC2 === void 0 ? void 0 : _bundle$details$planC2.lineItemTooltip,
      plans: (0, _defineProperty2.default)({}, plan.planLevel.toLowerCase(), {
        included: isCurrentPlan ? false : planIsEligible
      })
    };
    return bundleFeature;
  };

  var handleSelectPlan = function handleSelectPlan() {
    onSelectPlan(plan.id, plan.planLevel, plan.period);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root,
    "data-qa-selector": "plan-column"
  }, isMostPopular && !isPreviousPlan && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    align: "center",
    variant: "overline",
    className: classes.mostPopular
  }, "Most Popular"), isPreviousPlan && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    align: "center",
    variant: "overline",
    className: classes.previousPlan
  }, "Previous Plan"), /*#__PURE__*/_react.default.createElement(_ui.ShadowBox, {
    className: classes.box
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.pricingInfo
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.level,
    variant: "h4"
  }, planLevel), /*#__PURE__*/_react.default.createElement(_ui.VSTypography, {
    className: classes.price,
    variant: "h1",
    component: "span",
    color: showSavingsStyles && hasCoupon ? 'primary' : 'textPrimary',
    "data-qa-selector": "plan-column-price"
  }, "$", isCurrentPlan ? currentPlan.monthlyPrice : monthlyPrice), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.billingFrequency,
    component: "span",
    "data-qa-selector": "plan-column-price-period"
  }, ' ', "/ Month"), /*#__PURE__*/_react.default.createElement("p", {
    className: classes.priceDetail
  }, showSavingsStyles && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, monthlyComparePrice && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "span",
    variant: "h5",
    className: classes.fullPrice
  }, "$", monthlyComparePrice), /*#__PURE__*/_react.default.createElement("span", {
    className: classes.divider
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.savings,
    component: "span",
    variant: "h5",
    color: "primary"
  }, "save $", savings.toLocaleString(), !monthlyComparePrice && billingFrequency === _constants.PLAN_PERIODS.ANNUAL && '/year'), /*#__PURE__*/_react.default.createElement("span", {
    className: classes.divider
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.billingFrequency,
    component: "span",
    color: "textSecondary",
    variant: "body1"
  }, "billed", billingFrequency === _constants.PLAN_PERIODS.MONTHLY ? ' monthly' : ' annually'))), /*#__PURE__*/_react.default.createElement(_SelectPlanButton.default, {
    onClick: handleSelectPlan,
    isCurrentPlan: isCurrentPlan,
    isNextUpgrade: isNextUpgrade,
    planLevel: planLevel,
    disableSelection: disableSelection
  }, selectPlanButtonText), /*#__PURE__*/_react.default.createElement(_List.default, {
    className: classes.list
  }, bundle && /*#__PURE__*/_react.default.createElement(_FeatureListItem.default, {
    feature: getBundleFeatureDetails(),
    planLevel: planLevel,
    "data-qa-selector": "bundle-feature-list-item",
    isHighlighted: true,
    isBonus: true
  }), planFeatures.map(function (feature) {
    return /*#__PURE__*/_react.default.createElement(_FeatureListItem.default, {
      key: feature.label,
      feature: feature,
      planLevel: planLevel,
      billingFrequency: billingFrequency
    });
  })), /*#__PURE__*/_react.default.createElement(_SelectPlanButton.default, {
    onClick: handleSelectPlan,
    isCurrentPlan: isCurrentPlan,
    isNextUpgrade: isNextUpgrade,
    planLevel: planLevel,
    disableSelection: disableSelection
  }, selectPlanButtonText)));
};

PlanColumn.propTypes = {
  plan: _propTypes.default.shape({}),
  currentPlan: _propTypes.default.shape({}),
  previousPlan: _propTypes.default.string,
  billingFrequency: _propTypes.default.oneOf([_constants.PLAN_PERIODS.MONTHLY, _constants.PLAN_PERIODS.ANNUAL]).isRequired,
  planLevel: _propTypes.default.oneOf([_constants.PLAN_NAMES.STANDARD, _constants.PLAN_NAMES.PRO, _constants.PLAN_NAMES.ADVANCED]).isRequired,
  flow: _propTypes.default.oneOf([_constants.FLOWS.SIGNUP, _constants.FLOWS.UPGRADE, _constants.FLOWS.REACTIVATION]).isRequired,
  monthlyPrice: _propTypes.default.number,
  monthlyComparePrice: _propTypes.default.number,
  savings: _propTypes.default.number,
  bundle: _propTypes.default.shape(_types.BUNDLE_SHAPE),
  hasCoupon: _propTypes.default.bool,
  isMostPopular: _propTypes.default.bool,
  onSelectPlan: _propTypes.default.func.isRequired,
  hasAlternateFeatures: _propTypes.default.bool.isRequired,
  selectPlanButtonText: _propTypes.default.string,
  disableSelection: _propTypes.default.bool
};
PlanColumn.defaultProps = {
  currentPlan: null,
  previousPlan: null,
  monthlyPrice: null,
  monthlyComparePrice: null,
  savings: null,
  bundle: null,
  hasCoupon: false,
  isMostPopular: false,
  selectPlanButtonText: null,
  disableSelection: false
};
var _default = PlanColumn;
exports.default = _default;