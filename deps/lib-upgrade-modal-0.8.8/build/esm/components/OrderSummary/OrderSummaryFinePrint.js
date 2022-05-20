import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { UnderlineLink } from '@lp/ui';
import CouponDetails from './CouponDetails';
import FinePrint from '../FinePrint';
import { displayPrice } from '../../utils/pricing';
import { usePlanContext } from './PlanContext';

var OrderSummaryFinePrint = function OrderSummaryFinePrint(_ref) {
  var className = _ref.className;

  var _usePlanContext = usePlanContext(),
      coupon = _usePlanContext.coupon,
      product = _usePlanContext.product,
      paidStartDate = _usePlanContext.paidStartDate,
      paidStartIsToday = _usePlanContext.paidStartIsToday,
      paidStartLocale = _usePlanContext.paidStartLocale,
      subtotal = _usePlanContext.subtotal;

  var period = product.period,
      price = product.price;
  return /*#__PURE__*/React.createElement(FinePrint, {
    className: className,
    showRefundLink: paidStartIsToday
  }, !paidStartIsToday && /*#__PURE__*/React.createElement(Typography, {
    variant: "caption",
    paragraph: true
  }, "On ".concat(paidStartLocale, ", your auto-renewing subscription will begin and you will be charged $").concat(displayPrice(subtotal), ". View our 7-day "), /*#__PURE__*/React.createElement(UnderlineLink, {
    variant: "secondary",
    typographyVariant: "caption",
    href: "https://www.leadpages.com/legal",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "refund policy"), ' ', "for more details."), coupon && coupon.discountPercent !== 0 && /*#__PURE__*/React.createElement(Typography, {
    variant: "caption",
    paragraph: true
  }, /*#__PURE__*/React.createElement(CouponDetails, {
    paidStartDate: paidStartDate,
    discountBillingCycles: coupon.discountBillingCycles,
    period: period,
    price: price
  })));
};

OrderSummaryFinePrint.propTypes = {
  className: PropTypes.string
};
OrderSummaryFinePrint.defaultProps = {
  className: null
};
export default OrderSummaryFinePrint;