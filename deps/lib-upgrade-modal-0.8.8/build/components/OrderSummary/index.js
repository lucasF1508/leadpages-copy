"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _OrderSummaryComponents = require("../OrderSummaryComponents");

var _constants = require("../../constants");

var _OrderSummaryBody = _interopRequireDefault(require("./OrderSummaryBody"));

var _OrderSummaryFinePrint = _interopRequireDefault(require("./OrderSummaryFinePrint"));

var _PlanContext = _interopRequireDefault(require("./PlanContext"));

var OrderSummary = function OrderSummary(_ref) {
  var className = _ref.className,
      tableClassName = _ref.tableClassName,
      coupon = _ref.coupon,
      product = _ref.product,
      tax = _ref.tax,
      bundle = _ref.bundle,
      credit = _ref.credit,
      billingDate = _ref.billingDate,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "tableClassName", "coupon", "product", "tax", "bundle", "credit", "billingDate"]);
  var level = product.level,
      period = product.period;
  var classes = (0, _OrderSummaryComponents.useSummaryStyles)();
  return /*#__PURE__*/_react.default.createElement(_PlanContext.default, {
    product: product,
    tax: tax,
    coupon: coupon,
    bundle: bundle,
    credit: credit,
    billingDate: billingDate
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.wrapper, className),
    "data-qa-selector": "order-summary"
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: (0, _clsx.default)(tableClassName, 'OrderSummary-table')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.header,
    variant: "h5"
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      textTransform: 'uppercase'
    }
  }, level), ' ', _constants.ALL_PLANS[period].label), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.tableContainer
  }, /*#__PURE__*/_react.default.createElement(_OrderSummaryBody.default, other))), /*#__PURE__*/_react.default.createElement(_OrderSummaryFinePrint.default, null)));
};

var _default = OrderSummary;
exports.default = _default;
OrderSummary.propTypes = {
  className: _propTypes.default.string,
  tableClassName: _propTypes.default.string,
  confirmButtonText: _propTypes.default.string,
  confirmButtonDisabled: _propTypes.default.bool,
  confirmButtonLoading: _propTypes.default.bool,
  onConfirm: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  billingDate: _propTypes.default.string,
  bundle: _propTypes.default.shape({
    size: _propTypes.default.number,
    kind: _propTypes.default.string,
    value: _propTypes.default.number,
    orderSummary: _propTypes.default.shape({
      lineItemTitle: _propTypes.default.string
    })
  }),
  coupon: _propTypes.default.shape({
    code: _propTypes.default.string,
    discountBillingCycles: _propTypes.default.number,
    discountPercent: _propTypes.default.number
  }),
  tax: _propTypes.default.shape({
    amount: _propTypes.default.number
  }),
  credit: _propTypes.default.number,
  product: _propTypes.default.shape({
    heading: _propTypes.default.string,
    isTrial: _propTypes.default.bool,
    level: _propTypes.default.oneOf(['Start', 'Standard', 'Pro', 'Advanced']),
    period: _propTypes.default.oneOf([_constants.PLAN_PERIODS.MONTHLY, _constants.PLAN_PERIODS.ANNUAL]),
    price: _propTypes.default.number,
    trial: _propTypes.default.shape({
      price: _propTypes.default.number,
      trial_days: _propTypes.default.number
    }),
    monthlyComparisonPrice: _propTypes.default.number
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