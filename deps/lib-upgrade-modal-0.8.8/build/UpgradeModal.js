"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _ui = require("@lp/ui");

var _constants = require("./constants");

var _components = require("./components");

var _ChangePlan = _interopRequireWildcard(require("./components/ChangePlan"));

var _types = require("./constants/types");

var _bundle = require("./utils/bundle");

var _coupon = require("./utils/coupon");

var _upgrade = require("./utils/upgrade");

var UpgradeModal = function UpgradeModal(_ref) {
  var headline = _ref.headline,
      subheadline = _ref.subheadline,
      plans = _ref.plans,
      currentPlan = _ref.currentPlan,
      selectedPlan = _ref.selectedPlan,
      onSelectPlan = _ref.onSelectPlan,
      onClose = _ref.onClose,
      isOpen = _ref.isOpen,
      coupon = _ref.coupon,
      bundle = _ref.bundle,
      ChangePlanProps = _ref.ChangePlanProps,
      flow = _ref.flow,
      banner = _ref.banner,
      previousPlan = _ref.previousPlan,
      disableSelection = _ref.disableSelection;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showChangePlan = _useState2[0],
      setShowChangePlan = _useState2[1];

  var handleSelectPlan = function handleSelectPlan(id) {
    onSelectPlan(id);
    setShowChangePlan(true);
  };

  var handleClose = function handleClose() {
    onClose();
    setShowChangePlan(false);
  };

  var handleBreadcrumbChoosePlan = function handleBreadcrumbChoosePlan() {
    onSelectPlan(null);
    setShowChangePlan(false);
  };

  var breadcrumbs = [].concat((0, _toConsumableArray2.default)(showChangePlan ? [/*#__PURE__*/_react.default.createElement(_Link.default, {
    component: "button",
    onClick: function onClick() {
      return handleBreadcrumbChoosePlan();
    }
  }, "Choose A Plan")] : [/*#__PURE__*/_react.default.createElement("span", {
    className: "selected"
  }, "Choose A Plan")]), [/*#__PURE__*/_react.default.createElement("span", {
    className: showChangePlan ? 'selected' : null
  }, flow === _constants.FLOWS.UPGRADE ? 'Upgrade' : 'Reactivate')]);
  return /*#__PURE__*/_react.default.createElement(_ui.FullScreenDialog, {
    id: "upgrade-modal-root",
    open: isOpen,
    GridProps: {
      container: false
    }
  }, banner && !showChangePlan && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12
  }, banner), /*#__PURE__*/_react.default.createElement(_ui.FullScreenDialogHeader, {
    breadcrumbs: breadcrumbs,
    onClose: handleClose
  }), showChangePlan ? /*#__PURE__*/_react.default.createElement(_ChangePlan.default, (0, _extends2.default)({
    onCancel: onClose,
    planId: selectedPlan.id,
    coupon: (coupon === null || coupon === void 0 ? void 0 : coupon.enabled) && (0, _upgrade.checkPlanIsUpgrade)(selectedPlan, flow) && (0, _coupon.checkPlanCouponEligibility)(selectedPlan, coupon, flow) ? coupon : null,
    bundle: (bundle === null || bundle === void 0 ? void 0 : bundle.enabled) && (0, _upgrade.checkPlanIsUpgrade)(selectedPlan, flow) && (0, _bundle.checkPlanBundleEligibility)(selectedPlan, bundle, flow) ? bundle : null
  }, ChangePlanProps)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.PlanCompareTable, {
    "data-qa-selector": "plan-compare-table",
    headline: headline,
    subheadline: subheadline,
    plans: plans,
    currentPlan: currentPlan,
    onSelectPlan: handleSelectPlan,
    coupon: coupon,
    bundle: (bundle === null || bundle === void 0 ? void 0 : bundle.enabled) ? bundle : null,
    flow: flow,
    previousPlan: previousPlan,
    portalStickyNav: true,
    disableSelection: disableSelection
  }), /*#__PURE__*/_react.default.createElement(_components.ContactBlock, null)));
};

UpgradeModal.propTypes = {
  headline: _propTypes.default.string,
  subheadline: _propTypes.default.string,
  plans: _propTypes.default.object,
  currentPlan: _propTypes.default.object,
  onSelectPlan: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  ChangePlanProps: _propTypes.default.shape(_ChangePlan.changePlanSchema),
  coupon: _propTypes.default.shape(_types.COUPON_SHAPE),
  bundle: _propTypes.default.shape(_types.BUNDLE_SHAPE),
  flow: _propTypes.default.oneOf([_constants.FLOWS.REACTIVATION, _constants.FLOWS.UPGRADE]).isRequired,
  banner: _propTypes.default.element,
  previousPlan: _propTypes.default.string,
  disableSelection: _propTypes.default.bool
};
UpgradeModal.defaultProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, _constants.VERBIAGE.updateModalDefaults), _types.COUPON_DEFAULT_PROPS), {}, {
  plans: _constants.ALL_PLANS,
  currentPlan: null,
  banner: null,
  previousPlan: null,
  disableSelection: false
});
var _default = UpgradeModal;
exports.default = _default;