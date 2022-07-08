import React from 'react';
import PropTypes from 'prop-types';
import { getNormalBillingDate, CYCLE_LABEL } from './helpers';

var CouponDetails = function CouponDetails(_ref) {
  var discountBillingCycles = _ref.discountBillingCycles,
      period = _ref.period,
      price = _ref.price,
      paidStartDate = _ref.paidStartDate;
  if (discountBillingCycles === 0) return /*#__PURE__*/React.createElement(React.Fragment, null, "Discount applies to every ", period, " until you cancel.");
  var numberOfPeriods = "first ".concat(period, ".");

  if (discountBillingCycles > 1) {
    numberOfPeriods = "first ".concat(discountBillingCycles, " ").concat(period, "s.");
  }

  var normalBillingDate = getNormalBillingDate(discountBillingCycles, period, paidStartDate);
  var normalBilling = "Normal billing resumes on ".concat(normalBillingDate, " at $").concat(price, " ").concat(CYCLE_LABEL[period], ".");
  return /*#__PURE__*/React.createElement(React.Fragment, null, "Discount applies to ", numberOfPeriods, " ", normalBilling);
};

export default CouponDetails;
CouponDetails.propTypes = {
  discountBillingCycles: PropTypes.number,
  period: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  paidStartDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number]).isRequired
};
CouponDetails.defaultProps = {
  discountBillingCycles: null
};