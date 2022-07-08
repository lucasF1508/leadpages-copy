import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { FullScreenDialog, FullScreenDialogHeader } from '@lp/ui';
import { ALL_PLANS, FLOWS, VERBIAGE } from './constants';
import { PlanCompareTable, ContactBlock } from './components';
import ChangePlan, { changePlanSchema } from './components/ChangePlan';
import { COUPON_DEFAULT_PROPS, COUPON_SHAPE, BUNDLE_SHAPE } from './constants/types';
import { checkPlanBundleEligibility } from './utils/bundle';
import { checkPlanCouponEligibility } from './utils/coupon';
import { checkPlanIsUpgrade } from './utils/upgrade';

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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
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

  var breadcrumbs = [].concat(_toConsumableArray(showChangePlan ? [/*#__PURE__*/React.createElement(Link, {
    component: "button",
    onClick: function onClick() {
      return handleBreadcrumbChoosePlan();
    }
  }, "Choose A Plan")] : [/*#__PURE__*/React.createElement("span", {
    className: "selected"
  }, "Choose A Plan")]), [/*#__PURE__*/React.createElement("span", {
    className: showChangePlan ? 'selected' : null
  }, flow === FLOWS.UPGRADE ? 'Upgrade' : 'Reactivate')]);
  return /*#__PURE__*/React.createElement(FullScreenDialog, {
    id: "upgrade-modal-root",
    open: isOpen,
    GridProps: {
      container: false
    }
  }, banner && !showChangePlan && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, banner), /*#__PURE__*/React.createElement(FullScreenDialogHeader, {
    breadcrumbs: breadcrumbs,
    onClose: handleClose
  }), showChangePlan ? /*#__PURE__*/React.createElement(ChangePlan, _extends({
    onCancel: onClose,
    planId: selectedPlan.id,
    coupon: (coupon === null || coupon === void 0 ? void 0 : coupon.enabled) && checkPlanIsUpgrade(selectedPlan, flow) && checkPlanCouponEligibility(selectedPlan, coupon, flow) ? coupon : null,
    bundle: (bundle === null || bundle === void 0 ? void 0 : bundle.enabled) && checkPlanIsUpgrade(selectedPlan, flow) && checkPlanBundleEligibility(selectedPlan, bundle, flow) ? bundle : null
  }, ChangePlanProps)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanCompareTable, {
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
  }), /*#__PURE__*/React.createElement(ContactBlock, null)));
};

UpgradeModal.propTypes = {
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  plans: PropTypes.object,
  currentPlan: PropTypes.object,
  onSelectPlan: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  ChangePlanProps: PropTypes.shape(changePlanSchema),
  coupon: PropTypes.shape(COUPON_SHAPE),
  bundle: PropTypes.shape(BUNDLE_SHAPE),
  flow: PropTypes.oneOf([FLOWS.REACTIVATION, FLOWS.UPGRADE]).isRequired,
  banner: PropTypes.element,
  previousPlan: PropTypes.string,
  disableSelection: PropTypes.bool
};
UpgradeModal.defaultProps = _objectSpread(_objectSpread(_objectSpread({}, VERBIAGE.updateModalDefaults), COUPON_DEFAULT_PROPS), {}, {
  plans: ALL_PLANS,
  currentPlan: null,
  banner: null,
  previousPlan: null,
  disableSelection: false
});
export default UpgradeModal;