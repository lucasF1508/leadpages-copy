"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BUNDLE_SHAPE = exports.COUPON_DEFAULT_PROPS = exports.COUPON_SHAPE = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var COUPON_SHAPE = {
  validPlans: _propTypes.default.arrayOf(_propTypes.default.string),
  discountBillingCycles: _propTypes.default.number,
  discountPercent: _propTypes.default.number,
  code: _propTypes.default.string.isRequired,
  bannerText: _propTypes.default.string,
  cartText: _propTypes.default.string,
  headerText: _propTypes.default.string,
  subHeaderText: _propTypes.default.string,
  enabled: _propTypes.default.bool.isRequired,
  hasUsesRemaining: _propTypes.default.bool.isRequired,
  isExpired: _propTypes.default.bool.isRequired,
  appliesToAllPlans: _propTypes.default.bool.isRequired,
  signupsAllowed: _propTypes.default.bool.isRequired,
  reactivationsAllowed: _propTypes.default.bool.isRequired,
  upgradesAllowed: _propTypes.default.bool.isRequired
};
exports.COUPON_SHAPE = COUPON_SHAPE;
var COUPON_DEFAULT_PROPS = {
  validPlans: [],
  bannerText: null,
  cartText: null,
  headerText: null,
  subHeaderText: null,
  discountBillingCycles: 0,
  discountPercent: 0
};
exports.COUPON_DEFAULT_PROPS = COUPON_DEFAULT_PROPS;
var BUNDLE_SHAPE = {
  enabled: _propTypes.default.bool.isRequired,
  details: _propTypes.default.shape({
    kind: _propTypes.default.string.isRequired,
    value: _propTypes.default.number.isRequired,
    size: _propTypes.default.number,
    validPlans: _propTypes.default.arrayOf(_propTypes.default.oneOf(['standard-annual', 'standard-monthly', 'pro-annual', 'pro-monthly', 'advanced-annual', 'advanced-monthly'])),
    orderSummary: _propTypes.default.shape({
      lineItemTitle: _propTypes.default.string
    }),
    planCompare: _propTypes.default.shape({
      lineItemTitle: _propTypes.default.string,
      lineItemTooltip: _propTypes.default.string
    })
  }).isRequired
};
exports.BUNDLE_SHAPE = BUNDLE_SHAPE;