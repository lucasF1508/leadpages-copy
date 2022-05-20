import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useSummaryStyles } from '../OrderSummaryComponents';
import { ALL_PLANS, PLAN_PERIODS } from '../../constants';
import OrderSummaryBody from './OrderSummaryBody';
import OrderSummaryFinePrint from './OrderSummaryFinePrint';
import PlanContextProvider from './PlanContext';

var OrderSummary = function OrderSummary(_ref) {
  var className = _ref.className,
      tableClassName = _ref.tableClassName,
      coupon = _ref.coupon,
      product = _ref.product,
      tax = _ref.tax,
      bundle = _ref.bundle,
      credit = _ref.credit,
      billingDate = _ref.billingDate,
      other = _objectWithoutProperties(_ref, ["className", "tableClassName", "coupon", "product", "tax", "bundle", "credit", "billingDate"]);

  var level = product.level,
      period = product.period;
  var classes = useSummaryStyles();
  return /*#__PURE__*/React.createElement(PlanContextProvider, {
    product: product,
    tax: tax,
    coupon: coupon,
    bundle: bundle,
    credit: credit,
    billingDate: billingDate
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.wrapper, className),
    "data-qa-selector": "order-summary"
  }, /*#__PURE__*/React.createElement(Paper, {
    className: clsx(tableClassName, 'OrderSummary-table')
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.header,
    variant: "h5"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase'
    }
  }, level), ' ', ALL_PLANS[period].label), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    className: classes.tableContainer
  }, /*#__PURE__*/React.createElement(OrderSummaryBody, other))), /*#__PURE__*/React.createElement(OrderSummaryFinePrint, null)));
};

export default OrderSummary;
OrderSummary.propTypes = {
  className: PropTypes.string,
  tableClassName: PropTypes.string,
  confirmButtonText: PropTypes.string,
  confirmButtonDisabled: PropTypes.bool,
  confirmButtonLoading: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  billingDate: PropTypes.string,
  bundle: PropTypes.shape({
    size: PropTypes.number,
    kind: PropTypes.string,
    value: PropTypes.number,
    orderSummary: PropTypes.shape({
      lineItemTitle: PropTypes.string
    })
  }),
  coupon: PropTypes.shape({
    code: PropTypes.string,
    discountBillingCycles: PropTypes.number,
    discountPercent: PropTypes.number
  }),
  tax: PropTypes.shape({
    amount: PropTypes.number
  }),
  credit: PropTypes.number,
  product: PropTypes.shape({
    heading: PropTypes.string,
    isTrial: PropTypes.bool,
    level: PropTypes.oneOf(['Start', 'Standard', 'Pro', 'Advanced']),
    period: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL]),
    price: PropTypes.number,
    trial: PropTypes.shape({
      price: PropTypes.number,
      trial_days: PropTypes.number
    }),
    monthlyComparisonPrice: PropTypes.number
  }).isRequired
};
OrderSummary.defaultProps = {
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