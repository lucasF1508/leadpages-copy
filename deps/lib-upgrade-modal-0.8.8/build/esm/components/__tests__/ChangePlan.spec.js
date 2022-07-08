import _regeneratorRuntime from "@babel/runtime/regenerator";
import _extends from "@babel/runtime/helpers/esm/extends";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MarketingThemeProvider } from '@lp/ui';
import ChangePlan, { loadingMessage } from '../ChangePlan';
import api from '../../api';
jest.mock('../../api');
describe('ChangePlan', function () {
  var props;
  var planData;
  beforeEach(function () {
    props = {
      onConfirm: jest.fn(),
      onCancel: jest.fn(),
      planId: 'plan1',
      onOpenUpdatePaymentMethodModal: jest.fn(),
      billingInfo: {
        firstName: 'FirstName',
        cardExpiration: '11/2029',
        address: {
          country: 'USA',
          street1: '4800 Excelsior Boulevard',
          region: 'MN',
          postalCode: '55416',
          city: 'St. Louis Park'
        },
        paymentType: 'CARD',
        lastName: 'LastName',
        cardType: 'Visa',
        last4: '1111'
      }
    };
    window.openUpdatePaymentMethodModal = jest.fn();
    planData = {
      cost: {
        tax: 0,
        credit: 39.36
      },
      planLevel: 'Pro',
      product: {
        heading: 'Pro Monthly',
        label: 'Leadpages Monthly PRO Subscription TEST',
        enabled: true,
        slug: 'leadpages-braintree-monthly-pro',
        features: {
          domains_max_default: 3,
          custom_templates: true,
          pro_support: true,
          enterprise_support: false,
          split_testing: true
        },
        recurly_plan_code: 'pro-monthly',
        customer_upgrade_options: ['qskamraphrsb', // pro annual
        'SoGjyLFIQqFu', // advanced monthly
        'kwrpa8h4n0po' // advanced annual
        ],
        braintree_plan: '6gb2',
        period: 'month',
        price: 99
      },
      dueDateTime: null,
      isRecurly: true,
      trialDays: 0
    };
    api.getPlanChangeData.mockResolvedValue(planData);
  });
  it('should indicate loading when billing info is unavailable', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            render( /*#__PURE__*/React.createElement(MarketingThemeProvider, null, /*#__PURE__*/React.createElement(ChangePlan, _extends({}, props, {
              billingInfo: null
            }))));
            expect(screen.getByText(loadingMessage)).toBeInTheDocument();
            _context.next = 4;
            return waitFor(function () {
              return api.getPlanChangeData;
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should make an API request for plan data on render', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            render( /*#__PURE__*/React.createElement(MarketingThemeProvider, null, /*#__PURE__*/React.createElement(ChangePlan, props)));
            _context2.next = 3;
            return waitFor(function () {
              return expect(screen.queryByText(loadingMessage)).toBe(null);
            });

          case 3:
            expect(api.getPlanChangeData).toBeCalledWith({
              planId: props.planId
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should make an API request for coupon data if there is a coupon code', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            props.coupon = {
              code: 'test-coupon',
              enabled: true,
              hasUsesRemaining: true,
              isExpired: false,
              appliesToAllPlans: true,
              signupsAllowed: true,
              reactivationsAllowed: true,
              upgradesAllowed: true
            };
            render( /*#__PURE__*/React.createElement(MarketingThemeProvider, null, /*#__PURE__*/React.createElement(ChangePlan, props)));
            _context3.next = 4;
            return waitFor(function () {
              return expect(screen.queryByText(loadingMessage)).toBe(null);
            });

          case 4:
            expect(api.getPlanChangeData).toBeCalledWith({
              planId: props.planId,
              couponCode: props.coupon.code
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});