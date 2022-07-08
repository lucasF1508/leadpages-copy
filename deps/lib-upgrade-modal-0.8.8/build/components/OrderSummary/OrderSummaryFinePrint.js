"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ui = require("@lp/ui");

var _CouponDetails = _interopRequireDefault(require("./CouponDetails"));

var _FinePrint = _interopRequireDefault(require("../FinePrint"));

var _pricing = require("../../utils/pricing");

var _PlanContext = require("./PlanContext");

var OrderSummaryFinePrint = function OrderSummaryFinePrint(_ref) {
  var className = _ref.className;

  var _usePlanContext = (0, _PlanContext.usePlanContext)(),
      coupon = _usePlanContext.coupon,
      product = _usePlanContext.product,
      paidStartDate = _usePlanContext.paidStartDate,
      paidStartIsToday = _usePlanContext.paidStartIsToday,
      paidStartLocale = _usePlanContext.paidStartLocale,
      subtotal = _usePlanContext.subtotal;

  var period = product.period,
      price = product.price;
  return /*#__PURE__*/_react.default.createElement(_FinePrint.default, {
    className: className,
    showRefundLink: paidStartIsToday
  }, !paidStartIsToday && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "caption",
    paragraph: true
  }, "On ".concat(paidStartLocale, ", your auto-renewing subscription will begin and you will be charged $").concat((0, _pricing.displayPrice)(subtotal), ". View our 7-day "), /*#__PURE__*/_react.default.createElement(_ui.UnderlineLink, {
    variant: "secondary",
    typographyVariant: "caption",
    href: "https://www.leadpages.com/legal",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "refund policy"), ' ', "for more details."), coupon && coupon.discountPercent !== 0 && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "caption",
    paragraph: true
  }, /*#__PURE__*/_react.default.createElement(_CouponDetails.default, {
    paidStartDate: paidStartDate,
    discountBillingCycles: coupon.discountBillingCycles,
    period: period,
    price: price
  })));
};

OrderSummaryFinePrint.propTypes = {
  className: _propTypes.default.string
};
OrderSummaryFinePrint.defaultProps = {
  className: null
};
var _default = OrderSummaryFinePrint;
exports.default = _default;