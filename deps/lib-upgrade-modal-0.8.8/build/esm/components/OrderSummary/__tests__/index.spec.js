import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { MarketingThemeProvider } from '@lp/ui';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OrderSummary from '../';
import { CYCLE_LABEL, verbiages } from '../helpers';

var getComponent = function getComponent(props) {
  return /*#__PURE__*/React.createElement(MarketingThemeProvider, null, /*#__PURE__*/React.createElement(OrderSummary, props));
};

var COUPON_DATA = {
  standard: {
    bannerText: 'dirt',
    code: 'dirtnap',
    discountBillingCycles: 1,
    discountPercent: 50,
    enabled: true,
    hasUsesRemaining: true,
    isExpired: false,
    subscriptionLevels: ['all'],
    subscriptionPeriods: ['all']
  },
  zeroPercent: {
    bannerText: 'zero percent',
    code: 'zero',
    discountBillingCycles: 1,
    discountPercent: 0,
    enabled: true,
    hasUsesRemaining: true,
    isExpired: false,
    subscriptionLevels: ['all'],
    subscriptionPeriods: ['all']
  }
};

var createProps = function createProps(couponData) {
  return {
    product: {
      heading: 'Standard Annual',
      isFourteenDayTrial: true,
      isSixtyDayTrial: false,
      isTrial: true,
      level: 'Standard',
      period: 'year',
      price: 300,
      trial: {
        trial_days: 14,
        price: 0
      }
    },
    bundle: {
      size: 10,
      kind: 'Exclusive Templates',
      value: 100
    },
    coupon: _objectSpread({}, couponData),
    tax: {}
  };
};

describe('OrderSummary with Standard Coupon', function () {
  var props;
  var discount;
  var subtotal;
  beforeEach(function () {
    props = createProps(COUPON_DATA.standard);
    discount = props.product.price * (props.coupon.discountPercent / 100);
    subtotal = props.product.price - discount;
  });
  describe('Annual Billing Discount', function () {
    it('should show text encouraging customers to switch to an annual if they select a monthly plan', function () {
      props.product.period = 'month';
      render(getComponent(props));
      expect(screen.getByText(verbiages.SWITCH_TO_ANNUAL)).toBeInTheDocument();
    });
    it('should show text about the savings a customer gets with an annual plan using the hardcoded fallback price', function () {
      props.product.period = 'year';
      render(getComponent(props));
      expect(screen.getByText('You save $288')).toBeInTheDocument();
    });
    it('should show text about the savings a customer gets with an annual plan using the passed monthly comparison price', function () {
      props.product.period = 'year';
      props.product.monthlyComparisonPrice = 35;
      render(getComponent(props));
      expect(screen.getByText('You save $120')).toBeInTheDocument();
    });
    it('should not show text about the savings a customer gets with an annual plan if there is no savings', function () {
      props.product.period = 'year';
      props.product.price = 588;
      render(getComponent(props));
      expect(screen.queryByText('You save $', {
        exact: false
      })).not.toBeInTheDocument();
    });
  });
  describe('Coupon Code', function () {
    it('should show the discount on the price of the product', function () {
      render(getComponent(props));
      expect(screen.getByText("$".concat(discount.toFixed(2)))).toBeInTheDocument();
    });
    it('should show the cycle label if the coupon is a forever coupon, and hide "first purchase"', function () {
      props.coupon.discountBillingCycles = null;
      render(getComponent(props));
      expect(screen.getByText("-$".concat(discount.toFixed(2), " ").concat(CYCLE_LABEL[props.product.period]))).toBeInTheDocument();
      expect(screen.queryByText("".concat(props.coupon.discountPercent, "% off first purchase"))).not.toBeInTheDocument();
    });
    it('should not show the cycle label if the coupon has one discount billing cycle', function () {
      render(getComponent(props));
      expect(screen.queryByText("-$".concat(discount.toFixed(2), " ").concat(CYCLE_LABEL[props.product.period]))).not.toBeInTheDocument();
    });
    it('should add "first purchase" to coupon subtext for non-forever coupons', function () {
      render(getComponent(props));
      expect(screen.getByText("".concat(props.coupon.discountPercent, "% off first purchase"))).toBeInTheDocument();
    });
    it('should handle multicycle coupons', function () {
      props.coupon.discountBillingCycles = 3;
      props.product.period = 'month';
      render(getComponent(props));
      expect(screen.getByText("".concat(props.coupon.discountPercent, "% off your first 3 months"))).toBeInTheDocument();
      expect(screen.getByText("-$".concat(discount.toFixed(2)))).toBeInTheDocument();
    });
  });
  describe('Bundle', function () {
    it('should display a column with the bundle size, kind and value description', function () {
      render(getComponent(props));
      expect(screen.getByText('10 Exclusive Templates')).toBeInTheDocument();
      expect(screen.getByText('$100 value, yours free')).toBeInTheDocument();
    });
    it('should not display the size next to the kind if size is not set', function () {
      props.bundle.size = null;
      render(getComponent(props));
      expect(screen.queryByText('10 Exclusive Templates')).not.toBeInTheDocument();
      expect(screen.getByText('Exclusive Templates')).toBeInTheDocument();
    });
    it('should display an alternate line item title if one is set', function () {
      props.bundle.orderSummary = {
        lineItemTitle: 'Converted eCourse'
      };
      render(getComponent(props));
      expect(screen.queryByText('10 Exclusive Templates')).not.toBeInTheDocument();
      expect(screen.getByText('Converted eCourse')).toBeInTheDocument();
    });
    it('should not display a value description if the value is not set', function () {
      props.bundle.value = null;
      render(getComponent(props));
      expect(screen.queryByText('$100 value, yours free')).not.toBeInTheDocument();
    });
    it('should display a column with the value and the cost as free', function () {
      render(getComponent(props));
      var costContainer = screen.getByTestId('bundle-cost-container'); // NOTE: This value will be display with strikethrough text

      var bundleValue = within(costContainer).getByText('$100');
      var bundleCost = within(costContainer).getByText('FREE');
      expect(bundleValue).toBeInTheDocument();
      expect(bundleCost).toBeInTheDocument();
    });
    it('should not display the value next to the cost if the value is not set', function () {
      props.bundle.value = null;
      render(getComponent(props));
      var costContainer = screen.getByTestId('bundle-cost-container');
      expect(within(costContainer).queryByText('$100')).not.toBeInTheDocument();
    });
  });
  describe('Tax', function () {
    it('should render a total with tax info', function () {
      // Given an OrderSummary with tax information
      var taxAmount = 10.25;
      props.tax.amount = taxAmount;
      render(getComponent(props)); // I expect a Tax row

      expect(screen.getByText('Estimated Tax')).toBeInTheDocument(); // And the subtotal to reflect the tax addition

      expect(screen.getByText("$".concat(subtotal + taxAmount))).toBeInTheDocument(); // And the Plus Tax row to be omitted

      expect(screen.queryByText('Plus Tax')).not.toBeInTheDocument();
    });
    it('should show "Plus Tax" when tax amount unavailable', function () {
      props.tax.amount = null;
      render(getComponent(props));
      expect(screen.getByText('Plus Tax')).toBeInTheDocument();
    });
    it('should omit tax with tax=null', function () {
      props.tax = null;
      render(getComponent(props));
      expect(screen.queryByText('Plus Tax')).not.toBeInTheDocument();
      expect(screen.queryByText('Estimated Tax')).not.toBeInTheDocument();
    });
  });
  describe('Subtotal', function () {
    it('should show the amount due after the free trial, if the plan has a trial', function () {
      render(getComponent(props));
      expect(screen.getByText(verbiages.AFTER_FREE_TRIAL)).toBeInTheDocument();
      expect(screen.getByText("$".concat(subtotal.toFixed(2)))).toBeInTheDocument();
    });
    it('should show the subtotal row if the paid start date is in the future', function () {
      props.billingDate = new Date(new Date().getTime() + 86400 * 1000 * 60).toLocaleDateString();
      props.product.trial.trial_days = 0;
      render(getComponent(props));
      expect(screen.getByText("Due on ".concat(props.billingDate))).toBeInTheDocument();
    });
    it('should not show the subtotal row if the there is no trial', function () {
      props.product.trial.trial_days = 0;
      render(getComponent(props));
      expect(screen.queryByText(verbiages.AFTER_FREE_TRIAL)).not.toBeInTheDocument();
    });
  });
  describe('Total', function () {
    it('should show the trial price', function () {
      props.product.trial.trial_days = 14;
      props.product.trial.price = 99;
      render(getComponent(props));
      expect(screen.getByText('$99')).toBeInTheDocument();
    });
    it('should show the total due now when no trial', function () {
      props.product.trial.trial_days = 0;
      render(getComponent(props));
      expect(screen.getByText("$".concat(subtotal))).toBeInTheDocument();
    });
    it('should show 0 if the amount due now is negative', function () {
      props.product.price = 79;
      props.credit = 300;
      props.product.trial.trial_days = 0;
      render(getComponent(props));
      expect(screen.getByText('$0')).toBeInTheDocument();
    });
  });
  describe('Fine print', function () {
    it('should show the paid subscription start date', function () {
      render(getComponent(props));
      var paidStartDate = new Date(new Date().getTime() + 86400 * 1000 * props.product.trial.trial_days);
      var autoRenewMessage = screen.getByText("On ".concat(paidStartDate.toLocaleDateString(), ", your auto-renewing subscription will begin and you will be charged $150.00."), {
        exact: false
      });
      expect(within(autoRenewMessage).getByRole('link', {
        name: 'refund policy'
      }).href).toEqual('https://www.leadpages.com/legal');
    });
    it('should not show the paid subscription start date if it starts today, but still show refund policy link', function () {
      props.billingDate = new Date().toLocaleDateString();
      props.product.trial.trial_days = 0;
      render(getComponent(props));
      expect(screen.queryByText('your auto-renewing subscription will begin')).not.toBeInTheDocument();
      expect(screen.getByRole('link', {
        name: 'refund policy'
      }).href).toEqual('https://www.leadpages.com/legal');
    });
  });
  describe('onConfirm', function () {
    it('should render a confirm and cancel button if set', function () {
      props.onCancel = jest.fn();
      props.onConfirm = jest.fn();
      props.confirmButtonText = 'CONFIRM!';
      render(getComponent(props));
      var confirmButton = screen.getByRole('button', {
        name: props.confirmButtonText
      });
      userEvent.click(confirmButton);
      expect(props.onConfirm).toHaveBeenCalledTimes(1);
      var cancelButton = screen.getByRole('button', {
        name: 'No Thanks'
      });
      userEvent.click(cancelButton);
      expect(props.onCancel).toHaveBeenCalledTimes(1);
    });
  });
});
describe('OrderSummary with Zero Percent Discount Coupon', function () {
  beforeEach(function () {
    var props = createProps(COUPON_DATA.zeroPercent);
    render(getComponent(props));
  });
  describe('0% Discount-Related Verbiage', function () {
    it('should not show the discount on the price of the product', function () {
      var discountedPrice = screen.queryByTestId('discount-price-container');
      expect(discountedPrice).toBeNull();
    });
    it('should not show the discount text in fine print items', function () {
      var discountText = screen.queryByTestId('discount-line-item');
      expect(discountText).toBeNull();
    });
  });
});