"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

var CouponDetails = function CouponDetails(_ref) {
  var discountBillingCycles = _ref.discountBillingCycles,
      period = _ref.period,
      price = _ref.price,
      paidStartDate = _ref.paidStartDate;
  if (discountBillingCycles === 0) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Discount applies to every ", period, " until you cancel.");
  var numberOfPeriods = "first ".concat(period, ".");

  if (discountBillingCycles > 1) {
    numberOfPeriods = "first ".concat(discountBillingCycles, " ").concat(period, "s.");
  }

  var normalBillingDate = (0, _helpers.getNormalBillingDate)(discountBillingCycles, period, paidStartDate);
  var normalBilling = "Normal billing resumes on ".concat(normalBillingDate, " at $").concat(price, " ").concat(_helpers.CYCLE_LABEL[period], ".");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Discount applies to ", numberOfPeriods, " ", normalBilling);
};

var _default = CouponDetails;
exports.default = _default;
CouponDetails.propTypes = {
  discountBillingCycles: _propTypes.default.number,
  period: _propTypes.default.string.isRequired,
  price: _propTypes.default.number.isRequired,
  paidStartDate: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.number]).isRequired
};
CouponDetails.defaultProps = {
  discountBillingCycles: null
};