import PropTypes from 'prop-types';
export var COUPON_SHAPE = {
  validPlans: PropTypes.arrayOf(PropTypes.string),
  discountBillingCycles: PropTypes.number,
  discountPercent: PropTypes.number,
  code: PropTypes.string.isRequired,
  bannerText: PropTypes.string,
  cartText: PropTypes.string,
  headerText: PropTypes.string,
  subHeaderText: PropTypes.string,
  enabled: PropTypes.bool.isRequired,
  hasUsesRemaining: PropTypes.bool.isRequired,
  isExpired: PropTypes.bool.isRequired,
  appliesToAllPlans: PropTypes.bool.isRequired,
  signupsAllowed: PropTypes.bool.isRequired,
  reactivationsAllowed: PropTypes.bool.isRequired,
  upgradesAllowed: PropTypes.bool.isRequired
};
export var COUPON_DEFAULT_PROPS = {
  validPlans: [],
  bannerText: null,
  cartText: null,
  headerText: null,
  subHeaderText: null,
  discountBillingCycles: 0,
  discountPercent: 0
};
export var BUNDLE_SHAPE = {
  enabled: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    kind: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    size: PropTypes.number,
    validPlans: PropTypes.arrayOf(PropTypes.oneOf(['standard-annual', 'standard-monthly', 'pro-annual', 'pro-monthly', 'advanced-annual', 'advanced-monthly'])),
    orderSummary: PropTypes.shape({
      lineItemTitle: PropTypes.string
    }),
    planCompare: PropTypes.shape({
      lineItemTitle: PropTypes.string,
      lineItemTooltip: PropTypes.string
    })
  }).isRequired
};