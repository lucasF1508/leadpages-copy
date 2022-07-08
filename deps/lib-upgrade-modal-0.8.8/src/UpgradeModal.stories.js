import React, { useState } from 'react';
import { Banner } from '@lp/ui';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Chevron from '@lp/chevron';

import { getThemeDecorator } from '@lp/ui';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { PLAN_PERIODS, TEST_DATA } from './constants';
import UpgradeModal from './UpgradeModal';
import ChangePlan from './components/ChangePlan';
import PlanCompareTable from './components/PlanCompareTable';
import LegacyPlanCompareTable from './components/LegacyPlanCompareTable';
import {
  getCouponWithKnobs,
  getBundleWithKnobs,
  getCurrentPlanWithKnobs,
  getFlowWithKnobs,
  getPreviousPlanWithKnobs,
  getPlansBasedOnCurrentPlan,
} from './utils/storybook';

const chevron = Chevron.getInstance();

const changePlanProps = {
  onOpenUpdatePaymentMethodModal: () => {},
  onCancel: () => {},
  onConfirm: () => {},
  confirmButtonText: 'Upgrade',
  billingInfo: {
    cardType: 'visa',
    cardExpiration: '10/24',
    last4: '1234',
    firstName: 'Tiny',
    lastName: 'Critter',
    address: {
      street1: '12345 Happyhomes St.',
      street2: 'Suite 4',
      street3: 'Mouse Hole',
      city: 'Critterville',
      region: 'CA',
      country: 'USA',
      postalCode: '55555',
    },
  },
};

chevron.http = () => Promise.resolve(planData);

const data = {
  selectedBillingFrequency: PLAN_PERIODS.ANNUAL,
  plans: TEST_DATA,
  onSelectPlan: () => {},
  onClose: () => {},
  ChangePlanProps: changePlanProps,
};

const planData = {
  planLevel: 'Standard',
  product: {
    heading: 'Standard Annual',
    isTrial: false,
    level: 'Standard',
    period: 'year',
    price: 300,
  },
  cost: {
    tax: 1.23,
    credit: 2.34,
  },
  trialDays: 0,
  dueDateTime: null,
};

storiesOf('UpgradeModal', module)
  .addDecorator(withKnobs)
  .addDecorator(getThemeDecorator('product'))
  .add('With Knobs', () => {
    const [selectedPlan, setSelectedPlan] = React.useState({});
    const [isOpen, setIsOpen] = useState(true);
    const onOpen = () => setIsOpen(true);
    const hasCoupon = boolean('Has Coupon', false, 'Coupon');
    const coupon = hasCoupon ? getCouponWithKnobs() : null;
    const hasBundle = boolean('Has Bundle', false, 'Bundle');
    const bundle = hasBundle ? getBundleWithKnobs() : null;
    const currentPlan = getCurrentPlanWithKnobs();
    const plans = getPlansBasedOnCurrentPlan(currentPlan);

    return (
      <>
        <Button onClick={onOpen}>Upgrade</Button>
        <UpgradeModal
          coupon={coupon}
          headline={coupon?.headerText}
          subheadline={coupon?.subHeaderText}
          bundle={bundle}
          isOpen={isOpen}
          selectedPlan={selectedPlan}
          flow={getFlowWithKnobs()}
          currentPlan={currentPlan}
          plans={plans}
          onClose={() => setIsOpen(false)}
          onSelectPlan={planId => setSelectedPlan({ id: planId })}
          selectedBillingFrequency={data.selectedBillingFrequency}
          ChangePlanProps={data.changePlanProps}
          banner={
            coupon?.bannerText && <Banner bannerText={coupon.bannerText} />
          }
        />
      </>
    );
  });

storiesOf('PlanCompareTable', module)
  .addDecorator(withKnobs)
  .addDecorator(getThemeDecorator('marketing'))
  .add('With Knobs', () => {
    const hasCoupon = boolean('Has Coupon', false, 'Coupon');
    const coupon = hasCoupon ? getCouponWithKnobs() : null;
    const hasBundle = boolean('Has Bundle', false, 'Bundle');
    const bundle = hasBundle ? getBundleWithKnobs() : null;

    return (
      <PlanCompareTable
        headline={null}
        subheadline={null}
        coupon={coupon}
        bundle={bundle}
        previousPlan={getPreviousPlanWithKnobs()}
        {...data}
      />
    );
  })
  .add('On Page', () => {
    const hasCoupon = boolean('Has Coupon', false, 'Coupon');
    const coupon = hasCoupon ? getCouponWithKnobs() : null;
    const hasBundle = boolean('Has Bundle', false, 'Bundle');
    const bundle = hasBundle ? getBundleWithKnobs() : null;

    return (
      <>
        <Box
          bgcolor="common.white"
          minHeight={60}
          borderBottom={1}
          borderColor="secondary.main"
          position="fixed"
          top={0}
          right={0}
          width="100%"
          zIndex="appBar"
        >
          Site Header
        </Box>
        <Box minHeight={200}>Hero</Box>
        <Box bgcolor="secondary.main">
          <PlanCompareTable
            headline={null}
            subheadline={null}
            headerOffset={61}
            coupon={coupon}
            bundle={bundle}
            previousPlan={getPreviousPlanWithKnobs()}
            {...data}
          />
        </Box>
        <Box minHeight={500}>Next section</Box>
        <Box minHeight={500}>Footer</Box>
      </>
    );
  });

storiesOf('LegacyPlanCompareTable (used on compare-plans page)', module)
  .addDecorator(withKnobs)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Default', () => <LegacyPlanCompareTable {...data} />);

storiesOf('ChangePlan', module)
  .addDecorator(getThemeDecorator('product'))
  .addDecorator(withKnobs)
  .add('Default', () => {
    const groupId = {
      options: 'options',
    };
    chevron.http = () => Promise.resolve(planData);
    const forceRecurlyMigration = boolean(
      'forceRecurlyMigration',
      true,
      groupId.options,
    );

    const changePlanPropsWithKnobs = {
      ...changePlanProps,
      planId: 'foo',
      forceRecurlyMigration,
    };

    return <ChangePlan {...changePlanPropsWithKnobs} />;
  });
