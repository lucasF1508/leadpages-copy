import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { FullScreenDialog, FullScreenDialogHeader } from '@lp/ui';
import { ALL_PLANS, FLOWS, VERBIAGE } from './constants';
import { PlanCompareTable, ContactBlock } from './components';
import ChangePlan, { changePlanSchema } from './components/ChangePlan';
import {
  COUPON_DEFAULT_PROPS,
  COUPON_SHAPE,
  BUNDLE_SHAPE,
} from './constants/types';
import { checkPlanBundleEligibility } from './utils/bundle';
import { checkPlanCouponEligibility } from './utils/coupon';
import { checkPlanIsUpgrade } from './utils/upgrade';

const UpgradeModal = ({
  headline,
  subheadline,
  plans,
  currentPlan,
  selectedPlan,
  onSelectPlan,
  onClose,
  isOpen,
  coupon,
  bundle,
  ChangePlanProps,
  flow,
  banner,
  previousPlan,
  disableSelection,
}) => {
  const [showChangePlan, setShowChangePlan] = useState(false);

  const handleSelectPlan = id => {
    onSelectPlan(id);
    setShowChangePlan(true);
  };

  const handleClose = () => {
    onClose();
    setShowChangePlan(false);
  };

  const handleBreadcrumbChoosePlan = () => {
    onSelectPlan(null);
    setShowChangePlan(false);
  };

  const breadcrumbs = [
    ...(showChangePlan
      ? [
          <Link component="button" onClick={() => handleBreadcrumbChoosePlan()}>
            Choose A Plan
          </Link>,
        ]
      : [<span className="selected">Choose A Plan</span>]),
    <span className={showChangePlan ? 'selected' : null}>
      {flow === FLOWS.UPGRADE ? 'Upgrade' : 'Reactivate'}
    </span>,
  ];

  return (
      <FullScreenDialog
        id="upgrade-modal-root"
        open={isOpen}
        GridProps={{ container: false }}
      >
        {banner && !showChangePlan && (
          <Grid item xs={12}>
            {banner}
          </Grid>
        )}
        <FullScreenDialogHeader
          breadcrumbs={breadcrumbs}
          onClose={handleClose}
        />
        {showChangePlan ? (
          <ChangePlan
            onCancel={onClose}
            planId={selectedPlan.id}
            coupon={
              coupon?.enabled &&
              checkPlanIsUpgrade(selectedPlan, flow) &&
              checkPlanCouponEligibility(selectedPlan, coupon, flow)
                ? coupon
                : null
            }
            bundle={
              bundle?.enabled &&
              checkPlanIsUpgrade(selectedPlan, flow) &&
              checkPlanBundleEligibility(selectedPlan, bundle, flow)
                ? bundle
                : null
            }
            {...ChangePlanProps}
          />
        ) : (
          <>
            <PlanCompareTable
              data-qa-selector="plan-compare-table"
              headline={headline}
              subheadline={subheadline}
              plans={plans}
              currentPlan={currentPlan}
              onSelectPlan={handleSelectPlan}
              coupon={coupon}
              bundle={bundle?.enabled ? bundle : null}
              flow={flow}
              previousPlan={previousPlan}
              portalStickyNav
              disableSelection={disableSelection}
            />
            <ContactBlock />
          </>
        )}
      </FullScreenDialog>
  );
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
  disableSelection: PropTypes.bool,
};

UpgradeModal.defaultProps = {
  ...VERBIAGE.updateModalDefaults,
  ...COUPON_DEFAULT_PROPS,
  plans: ALL_PLANS,
  currentPlan: null,
  banner: null,
  previousPlan: null,
  disableSelection: false,
};

export default UpgradeModal;
