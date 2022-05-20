import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LoadingButton } from '@lp/ui';
import { displayPrice, minimalDisplayPrice } from '../../utils/pricing';
import { CYCLE_LABEL, verbiages } from './helpers';
import { usePlanContext } from './PlanContext';
var useStyles = makeStyles(function (theme) {
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

  var _usePlanContext = usePlanContext(),
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    direction: "column",
    className: classes.rowContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "wrap",
    justify: "space-between",
    direction: "row"
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "textPrimary",
    className: classes.capitalize
  }, "Pay ", period === 'year' ? 'annual' : period, "ly"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    className: classes.strikethrough,
    style: {
      paddingRight: '14px'
    }
  }, hasAnnualDiscount ? "$".concat(annualRateNoDiscount) : ''), /*#__PURE__*/React.createElement(Typography, {
    component: "span"
  }, "$".concat(displayPrice(price))))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "nowrap"
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.caption,
    variant: "body2",
    color: hasAnnualDiscount ? 'primary' : 'initial'
  }, hasAnnualDiscount && "You save $".concat(annualBillingDiscount), period === 'month' && verbiages.SWITCH_TO_ANNUAL))), coupon && coupon.discountPercent !== 0 && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer,
    "data-qa-selector": "discount-price-container"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column",
    justify: "space-between"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "primary"
  }, "Discount"), /*#__PURE__*/React.createElement(Typography, {
    className: classes.caption,
    variant: "body2",
    color: "primary"
  }, "".concat(coupon.discountPercent, "% off"), coupon.discountBillingCycles > 1 ? " your first ".concat(coupon.discountBillingCycles, " ").concat(period, "s") : couponIsForever ? '' : ' first purchase'))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column",
    alignItems: "flex-end"
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "primary"
  }, "-$".concat(displayPrice(discount)), ' ', couponIsForever ? CYCLE_LABEL[period] : ''))), bundle && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "primary",
    noWrap: true
  }, getBundleRowTitle()), bundle.value && /*#__PURE__*/React.createElement(Typography, {
    className: classes.caption,
    variant: "body2",
    color: "primary"
  }, "$", bundle.value, " value, yours free")), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column",
    alignItems: "flex-end",
    "data-qa-selector": "bundle-cost-container"
  }, /*#__PURE__*/React.createElement("div", null, bundle.value && /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    className: classes.strikethrough,
    style: {
      paddingRight: '14px'
    }
  }, "$", bundle.value), /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    color: "primary"
  }, "FREE")))), credit ? /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column",
    justify: "space-between"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "textPrimary"
  }, "Account Credit"), /*#__PURE__*/React.createElement(Typography, {
    className: classes.caption,
    variant: "body2"
  }, "Balance applied"))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column",
    alignItems: "flex-end"
  }, /*#__PURE__*/React.createElement(Typography, null, "-$".concat(credit.toFixed(2)), " "))) : null, !!taxAmount && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "textPrimary"
  }, "Estimated Tax")), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column",
    alignItems: "flex-end"
  }, /*#__PURE__*/React.createElement(Typography, null, "$".concat(displayPrice(taxAmount)), " "))), tax && tax.amount === null && /*#__PURE__*/React.createElement(Typography, {
    color: "textPrimary",
    className: classes.rowContainer
  }, "Plus Tax"), (subtotal !== totalDueNow || isTrial || !paidStartIsToday) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, {
    className: classes.divider
  }), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "textPrimary"
  }, isTrial ? verbiages.AFTER_FREE_TRIAL : "Due on ".concat(paidStartLocale))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    alignItems: "flex-end",
    direction: "column",
    style: {
      verticalAlign: 'baseline'
    }
  }, /*#__PURE__*/React.createElement(Typography, null, "$".concat(displayPrice(subtotal)))))), /*#__PURE__*/React.createElement(Divider, {
    className: "".concat(classes.footerDivider, " ").concat(classes.divider)
  }), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    className: classes.rowContainer,
    justify: "space-between"
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h5",
    color: "textPrimary"
  }, verbiages.TOTAL_DUE_NOW)), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Typography, {
    color: "textPrimary",
    variant: "h4"
  }, "$", minimalDisplayPrice(totalDueNow)))), onConfirm && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justify: "flex-end",
    style: {
      marginTop: 28
    }
  }, onCancel && /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    color: "primary",
    onClick: onCancel,
    style: {
      marginRight: 8
    }
  }, "No Thanks"), /*#__PURE__*/React.createElement(LoadingButton, {
    variant: "contained",
    color: "primary",
    onClick: onConfirm,
    disabled: confirmButtonDisabled,
    isLoading: confirmButtonLoading,
    "data-qa-selector": "confirm-order-button"
  }, confirmButtonText)));
};

export default OrderSummaryBody;
OrderSummaryBody.propTypes = {
  className: PropTypes.string,
  tableClassName: PropTypes.string,
  confirmButtonText: PropTypes.string,
  confirmButtonDisabled: PropTypes.bool,
  confirmButtonLoading: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func
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