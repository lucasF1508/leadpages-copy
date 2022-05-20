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

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ui = require("@lp/ui");

var _pricing = require("../../utils/pricing");

var _helpers = require("./helpers");

var _PlanContext = require("./PlanContext");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    rowContainer: {
      color: theme.palette.grey[70],
      padding: '10px 6px'
    },
    divider: {
      marginTop: 5,
      marginBottom: 5
    },
    footerDivider: {
      backgroundColor: theme.palette.grey[25]
    },
    strikethrough: {
      textDecoration: 'line-through',
      color: theme.palette.grey[50]
    },
    capitalize: {
      textTransform: 'capitalize'
    },
    caption: {
      fontSize: theme.typography.pxToRem(13)
    }
  };
}, {
  classNamePrefix: 'OrderSummary'
});

var OrderSummaryBody = function OrderSummaryBody(_ref) {
  var confirmButtonDisabled = _ref.confirmButtonDisabled,
      confirmButtonLoading = _ref.confirmButtonLoading,
      confirmButtonText = _ref.confirmButtonText,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;
  var classes = useStyles();

  var _usePlanContext = (0, _PlanContext.usePlanContext)(),
      product = _usePlanContext.product,
      tax = _usePlanContext.tax,
      coupon = _usePlanContext.coupon,
      bundle = _usePlanContext.bundle,
      credit = _usePlanContext.credit,
      annualBillingDiscount = _usePlanContext.annualBillingDiscount,
      annualRateNoDiscount = _usePlanContext.annualRateNoDiscount,
      couponIsForever = _usePlanContext.couponIsForever,
      discount = _usePlanContext.discount,
      getBundleRowTitle = _usePlanContext.getBundleRowTitle,
      hasAnnualDiscount = _usePlanContext.hasAnnualDiscount,
      isTrial = _usePlanContext.isTrial,
      paidStartIsToday = _usePlanContext.paidStartIsToday,
      paidStartLocale = _usePlanContext.paidStartLocale,
      subtotal = _usePlanContext.subtotal,
      taxAmount = _usePlanContext.taxAmount,
      totalDueNow = _usePlanContext.totalDueNow;

  var period = product.period,
      price = product.price;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    wrap: "nowrap",
    direction: "column",
    className: classes.rowContainer
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    wrap: "wrap",
    justify: "space-between",
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "textPrimary",
    className: classes.capitalize
  }, "Pay ", period === 'year' ? 'annual' : period, "ly"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "span",
    className: classes.strikethrough,
    style: {
      paddingRight: '14px'
    }
  }, hasAnnualDiscount ? "$".concat(annualRateNoDiscount) : ''), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "span"
  }, "$".concat((0, _pricing.displayPrice)(price))))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    wrap: "nowrap"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.caption,
    variant: "body2",
    color: hasAnnualDiscount ? 'primary' : 'initial'
  }, hasAnnualDiscount && "You save $".concat(annualBillingDiscount), period === 'month' && _helpers.verbiages.SWITCH_TO_ANNUAL))), coupon && coupon.discountPercent !== 0 && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer,
    "data-qa-selector": "discount-price-container"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column",
    justify: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "primary"
  }, "Discount"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.caption,
    variant: "body2",
    color: "primary"
  }, "".concat(coupon.discountPercent, "% off"), coupon.discountBillingCycles > 1 ? " your first ".concat(coupon.discountBillingCycles, " ").concat(period, "s") : couponIsForever ? '' : ' first purchase'))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column",
    alignItems: "flex-end"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "primary"
  }, "-$".concat((0, _pricing.displayPrice)(discount)), ' ', couponIsForever ? _helpers.CYCLE_LABEL[period] : ''))), bundle && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "primary",
    noWrap: true
  }, getBundleRowTitle()), bundle.value && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.caption,
    variant: "body2",
    color: "primary"
  }, "$", bundle.value, " value, yours free")), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column",
    alignItems: "flex-end",
    "data-qa-selector": "bundle-cost-container"
  }, /*#__PURE__*/_react.default.createElement("div", null, bundle.value && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "span",
    className: classes.strikethrough,
    style: {
      paddingRight: '14px'
    }
  }, "$", bundle.value), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "span",
    color: "primary"
  }, "FREE")))), credit ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column",
    justify: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "textPrimary"
  }, "Account Credit"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.caption,
    variant: "body2"
  }, "Balance applied"))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column",
    alignItems: "flex-end"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "-$".concat(credit.toFixed(2)), " "))) : null, !!taxAmount && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "textPrimary"
  }, "Estimated Tax")), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column",
    alignItems: "flex-end"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "$".concat((0, _pricing.displayPrice)(taxAmount)), " "))), tax && tax.amount === null && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "textPrimary",
    className: classes.rowContainer
  }, "Plus Tax"), (subtotal !== totalDueNow || isTrial || !paidStartIsToday) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Divider.default, {
    className: classes.divider
  }), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "textPrimary"
  }, isTrial ? _helpers.verbiages.AFTER_FREE_TRIAL : "Due on ".concat(paidStartLocale))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    alignItems: "flex-end",
    direction: "column",
    style: {
      verticalAlign: 'baseline'
    }
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "$".concat((0, _pricing.displayPrice)(subtotal)))))), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    className: "".concat(classes.footerDivider, " ").concat(classes.divider)
  }), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer,
    justify: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h5",
    color: "textPrimary"
  }, _helpers.verbiages.TOTAL_DUE_NOW)), /*#__PURE__*/_react.default.createElement(_Grid.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "textPrimary",
    variant: "h4"
  }, "$", (0, _pricing.minimalDisplayPrice)(totalDueNow)))), onConfirm && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    justify: "flex-end",
    style: {
      marginTop: 28
    }
  }, onCancel && /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "text",
    color: "primary",
    onClick: onCancel,
    style: {
      marginRight: 8
    }
  }, "No Thanks"), /*#__PURE__*/_react.default.createElement(_ui.LoadingButton, {
    variant: "contained",
    color: "primary",
    onClick: onConfirm,
    disabled: confirmButtonDisabled,
    isLoading: confirmButtonLoading,
    "data-qa-selector": "confirm-order-button"
  }, confirmButtonText)));
};

var _default = OrderSummaryBody;
exports.default = _default;
OrderSummaryBody.propTypes = {
  className: _propTypes.default.string,
  tableClassName: _propTypes.default.string,
  confirmButtonText: _propTypes.default.string,
  confirmButtonDisabled: _propTypes.default.bool,
  confirmButtonLoading: _propTypes.default.bool,
  onConfirm: _propTypes.default.func,
  onCancel: _propTypes.default.func
};
OrderSummaryBody.defaultProps = {
  className: '',
  tableClassName: '',
  credit: 0,
  confirmButtonText: 'Order',
  confirmButtonDisabled: false,
  confirmButtonLoading: false,
  bundle: null,
  coupon: null,
  tax: {
    amount: 0
  },
  billingDate: null
};