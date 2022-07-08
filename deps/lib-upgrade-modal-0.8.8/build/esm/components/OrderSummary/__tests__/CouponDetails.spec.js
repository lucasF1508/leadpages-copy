import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CouponDetails from '../CouponDetails';
import { getNormalBillingDate } from '../helpers';
describe('Coupon Details', function () {
  var rerender;
  var getByText;
  var props;
  var paidStartDate;
  beforeEach(function () {
    paidStartDate = Date.now();
    props = {
      discountBillingCycles: 1,
      period: 'year',
      price: 300,
      paidStartDate: paidStartDate
    };

    var _render = render( /*#__PURE__*/React.createElement(CouponDetails, props));

    rerender = _render.rerender;
    getByText = _render.getByText;
  });
  afterEach(function () {
    cleanup();
  });
  it('should describe the duration of a coupon for an annual plan', function () {
    var _props = props,
        discountBillingCycles = _props.discountBillingCycles,
        period = _props.period,
        price = _props.price;
    var normalBillingDate = getNormalBillingDate(discountBillingCycles, period, paidStartDate);
    expect(getByText("Discount applies to first year. Normal billing resumes on ".concat(normalBillingDate, " at $").concat(price, " per year."))).toBeDefined();
  });
  it('should describe the duration of a coupon for a monthly plan', function () {
    props.period = 'month';
    var _props2 = props,
        discountBillingCycles = _props2.discountBillingCycles,
        period = _props2.period,
        price = _props2.price;
    var normalBillingDate = getNormalBillingDate(discountBillingCycles, period, paidStartDate);
    rerender( /*#__PURE__*/React.createElement(CouponDetails, props));
    expect(getByText("Discount applies to first month. Normal billing resumes on ".concat(normalBillingDate, " at $").concat(price, " per month."))).toBeDefined();
  });
  it('should advance to the last day of the month if the normal billing date would be the 29th, 30th, or 31st', function () {
    props.period = 'month';
    var _props3 = props,
        discountBillingCycles = _props3.discountBillingCycles,
        period = _props3.period,
        price = _props3.price;
    var mockPaidStartDate = new Date(2400, 1, 29);
    props.paidStartDate = mockPaidStartDate.getTime();
    var normalBillingDate = getNormalBillingDate(discountBillingCycles, period, mockPaidStartDate.getTime());
    expect(normalBillingDate).toBe('3/31/2400');
    rerender( /*#__PURE__*/React.createElement(CouponDetails, props));
    expect(getByText("Discount applies to first month. Normal billing resumes on ".concat(normalBillingDate, " at $").concat(price, " per month."))).toBeDefined();
  });
  it('should have the correct copy for multiple discount billing cycles', function () {
    props.discountBillingCycles = 2;
    props.period = 'month';
    var _props4 = props,
        discountBillingCycles = _props4.discountBillingCycles,
        period = _props4.period,
        price = _props4.price;
    var mockPaidStartDate = new Date(2400, 1, 29);
    props.paidStartDate = mockPaidStartDate.getTime();
    var normalBillingDate = getNormalBillingDate(discountBillingCycles, period, mockPaidStartDate.getTime());
    expect(normalBillingDate).toBe('4/30/2400');
    rerender( /*#__PURE__*/React.createElement(CouponDetails, props));
    expect(getByText("Discount applies to first ".concat(props.discountBillingCycles, " ").concat(period, "s. Normal billing resumes on ").concat(normalBillingDate, " at $").concat(price, " per month."))).toBeDefined();
  });
});