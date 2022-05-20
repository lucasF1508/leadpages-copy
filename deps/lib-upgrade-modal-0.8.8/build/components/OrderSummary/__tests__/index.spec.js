"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _ui = require("@lp/ui");

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _ = _interopRequireDefault(require("../"));

var _helpers = require("../helpers");

var getComponent = function getComponent(props) {
  return /*#__PURE__*/_react.default.createElement(_ui.MarketingThemeProvider, null, /*#__PURE__*/_react.default.createElement(_.default, props));
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
    coupon: (0, _objectSpread2.default)({}, couponData),
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
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText(_helpers.verbiages.SWITCH_TO_ANNUAL)).toBeInTheDocument();
    });
    it('should show text about the savings a customer gets with an annual plan using the hardcoded fallback price', function () {
      props.product.period = 'year';
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText('You save $288')).toBeInTheDocument();
    });
    it('should show text about the savings a customer gets with an annual plan using the passed monthly comparison price', function () {
      props.product.period = 'year';
      props.product.monthlyComparisonPrice = 35;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText('You save $120')).toBeInTheDocument();
    });
    it('should not show text about the savings a customer gets with an annual plan if there is no savings', function () {
      props.product.period = 'year';
      props.product.price = 588;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.queryByText('You save $', {
        exact: false
      })).not.toBeInTheDocument();
    });
  });
  describe('Coupon Code', function () {
    it('should show the discount on the price of the product', function () {
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText("$".concat(discount.toFixed(2)))).toBeInTheDocument();
    });
    it('should show the cycle label if the coupon is a forever coupon, and hide "first purchase"', function () {
      props.coupon.discountBillingCycles = null;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText("-$".concat(discount.toFixed(2), " ").concat(_helpers.CYCLE_LABEL[props.product.period]))).toBeInTheDocument();
      expect(_react2.screen.queryByText("".concat(props.coupon.discountPercent, "% off first purchase"))).not.toBeInTheDocument();
    });
    it('should not show the cycle label if the coupon has one discount billing cycle', function () {
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.queryByText("-$".concat(discount.toFixed(2), " ").concat(_helpers.CYCLE_LABEL[props.product.period]))).not.toBeInTheDocument();
    });
    it('should add "first purchase" to coupon subtext for non-forever coupons', function () {
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText("".concat(props.coupon.discountPercent, "% off first purchase"))).toBeInTheDocument();
    });
    it('should handle multicycle coupons', function () {
      props.coupon.discountBillingCycles = 3;
      props.product.period = 'month';
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText("".concat(props.coupon.discountPercent, "% off your first 3 months"))).toBeInTheDocument();
      expect(_react2.screen.getByText("-$".concat(discount.toFixed(2)))).toBeInTheDocument();
    });
  });
  describe('Bundle', function () {
    it('should display a column with the bundle size, kind and value description', function () {
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText('10 Exclusive Templates')).toBeInTheDocument();
      expect(_react2.screen.getByText('$100 value, yours free')).toBeInTheDocument();
    });
    it('should not display the size next to the kind if size is not set', function () {
      props.bundle.size = null;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.queryByText('10 Exclusive Templates')).not.toBeInTheDocument();
      expect(_react2.screen.getByText('Exclusive Templates')).toBeInTheDocument();
    });
    it('should display an alternate line item title if one is set', function () {
      props.bundle.orderSummary = {
        lineItemTitle: 'Converted eCourse'
      };
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.queryByText('10 Exclusive Templates')).not.toBeInTheDocument();
      expect(_react2.screen.getByText('Converted eCourse')).toBeInTheDocument();
    });
    it('should not display a value description if the value is not set', function () {
      props.bundle.value = null;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.queryByText('$100 value, yours free')).not.toBeInTheDocument();
    });
    it('should display a column with the value and the cost as free', function () {
      (0, _react2.render)(getComponent(props));

      var costContainer = _react2.screen.getByTestId('bundle-cost-container'); // NOTE: This value will be display with strikethrough text


      var bundleValue = (0, _react2.within)(costContainer).getByText('$100');
      var bundleCost = (0, _react2.within)(costContainer).getByText('FREE');
      expect(bundleValue).toBeInTheDocument();
      expect(bundleCost).toBeInTheDocument();
    });
    it('should not display the value next to the cost if the value is not set', function () {
      props.bundle.value = null;
      (0, _react2.render)(getComponent(props));

      var costContainer = _react2.screen.getByTestId('bundle-cost-container');

      expect((0, _react2.within)(costContainer).queryByText('$100')).not.toBeInTheDocument();
    });
  });
  describe('Tax', function () {
    it('should render a total with tax info', function () {
      // Given an OrderSummary with tax information
      var taxAmount = 10.25;
      props.tax.amount = taxAmount;
      (0, _react2.render)(getComponent(props)); // I expect a Tax row

      expect(_react2.screen.getByText('Estimated Tax')).toBeInTheDocument(); // And the subtotal to reflect the tax addition

      expect(_react2.screen.getByText("$".concat(subtotal + taxAmount))).toBeInTheDocument(); // And the Plus Tax row to be omitted

      expect(_react2.screen.queryByText('Plus Tax')).not.toBeInTheDocument();
    });
    it('should show "Plus Tax" when tax amount unavailable', function () {
      props.tax.amount = null;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText('Plus Tax')).toBeInTheDocument();
    });
    it('should omit tax with tax=null', function () {
      props.tax = null;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.queryByText('Plus Tax')).not.toBeInTheDocument();
      expect(_react2.screen.queryByText('Estimated Tax')).not.toBeInTheDocument();
    });
  });
  describe('Subtotal', function () {
    it('should show the amount due after the free trial, if the plan has a trial', function () {
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText(_helpers.verbiages.AFTER_FREE_TRIAL)).toBeInTheDocument();
      expect(_react2.screen.getByText("$".concat(subtotal.toFixed(2)))).toBeInTheDocument();
    });
    it('should show the subtotal row if the paid start date is in the future', function () {
      props.billingDate = new Date(new Date().getTime() + 86400 * 1000 * 60).toLocaleDateString();
      props.product.trial.trial_days = 0;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText("Due on ".concat(props.billingDate))).toBeInTheDocument();
    });
    it('should not show the subtotal row if the there is no trial', function () {
      props.product.trial.trial_days = 0;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.queryByText(_helpers.verbiages.AFTER_FREE_TRIAL)).not.toBeInTheDocument();
    });
  });
  describe('Total', function () {
    it('should show the trial price', function () {
      props.product.trial.trial_days = 14;
      props.product.trial.price = 99;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText('$99')).toBeInTheDocument();
    });
    it('should show the total due now when no trial', function () {
      props.product.trial.trial_days = 0;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText("$".concat(subtotal))).toBeInTheDocument();
    });
    it('should show 0 if the amount due now is negative', function () {
      props.product.price = 79;
      props.credit = 300;
      props.product.trial.trial_days = 0;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.getByText('$0')).toBeInTheDocument();
    });
  });
  describe('Fine print', function () {
    it('should show the paid subscription start date', function () {
      (0, _react2.render)(getComponent(props));
      var paidStartDate = new Date(new Date().getTime() + 86400 * 1000 * props.product.trial.trial_days);

      var autoRenewMessage = _react2.screen.getByText("On ".concat(paidStartDate.toLocaleDateString(), ", your auto-renewing subscription will begin and you will be charged $150.00."), {
        exact: false
      });

      expect((0, _react2.within)(autoRenewMessage).getByRole('link', {
        name: 'refund policy'
      }).href).toEqual('https://www.leadpages.com/legal');
    });
    it('should not show the paid subscription start date if it starts today, but still show refund policy link', function () {
      props.billingDate = new Date().toLocaleDateString();
      props.product.trial.trial_days = 0;
      (0, _react2.render)(getComponent(props));
      expect(_react2.screen.queryByText('your auto-renewing subscription will begin')).not.toBeInTheDocument();
      expect(_react2.screen.getByRole('link', {
        name: 'refund policy'
      }).href).toEqual('https://www.leadpages.com/legal');
    });
  });
  describe('onConfirm', function () {
    it('should render a confirm and cancel button if set', function () {
      props.onCancel = jest.fn();
      props.onConfirm = jest.fn();
      props.confirmButtonText = 'CONFIRM!';
      (0, _react2.render)(getComponent(props));

      var confirmButton = _react2.screen.getByRole('button', {
        name: props.confirmButtonText
      });

      _userEvent.default.click(confirmButton);

      expect(props.onConfirm).toHaveBeenCalledTimes(1);

      var cancelButton = _react2.screen.getByRole('button', {
        name: 'No Thanks'
      });

      _userEvent.default.click(cancelButton);

      expect(props.onCancel).toHaveBeenCalledTimes(1);
    });
  });
});
describe('OrderSummary with Zero Percent Discount Coupon', function () {
  beforeEach(function () {
    var props = createProps(COUPON_DATA.zeroPercent);
    (0, _react2.render)(getComponent(props));
  });
  describe('0% Discount-Related Verbiage', function () {
    it('should not show the discount on the price of the product', function () {
      var discountedPrice = _react2.screen.queryByTestId('discount-price-container');

      expect(discountedPrice).toBeNull();
    });
    it('should not show the discount text in fine print items', function () {
      var discountText = _react2.screen.queryByTestId('discount-line-item');

      expect(discountText).toBeNull();
    });
  });
});