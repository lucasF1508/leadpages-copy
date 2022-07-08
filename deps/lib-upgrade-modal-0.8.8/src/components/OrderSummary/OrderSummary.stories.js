import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';
import { PLAN_NAMES, PLAN_PERIODS } from '../../constants';
import { MarketingThemeProvider } from '@lp/ui';

import OrderSummary from './index.jsx';
import OrderSummaryAccordion from './OrderSummaryAccordion';
import { PlanContextProvider } from './PlanContext';

const stories = storiesOf('Components/Subscription Order Summary', module);

stories.addDecorator(withKnobs);

const product = {
  heading: 'Standard Annual',
  isFourteenDayTrial: true,
  isSixtyDayTrial: false,
  isTrial: false,
  level: 'Standard',
  period: 'year',
  price: 300,
};

const productWithTrial = {
  ...product,
  isTrial: true,
  trial: {
    price: 0,
    trial_days: 14,
  },
};

const coupon = {
  bannerText: 'dirt',
  cartText: 'DIRTNAP',
  code: 'dirtnap',
  discountBillingCycles: 2,
  discountPercent: 50,
  enabled: true,
  hasUsesRemaining: true,
  isExpired: false,
  subscriptionLevels: ['all'],
  subscriptionPeriods: ['all'],
};

stories.add('Basic', () => {
  return (
    <MarketingThemeProvider>
      <OrderSummary product={product} />
    </MarketingThemeProvider>
  );
});

stories.add('With Trial', () => {
  return (
    <MarketingThemeProvider>
      <OrderSummary product={productWithTrial} />
    </MarketingThemeProvider>
  );
});

stories.add('Monthly, no trial', () => {
  return (
    <MarketingThemeProvider>
      <OrderSummary product={{ ...product, period: 'month' }} />
    </MarketingThemeProvider>
  );
});

stories.add('Taxed, but without tax info', () => {
  return (
    <MarketingThemeProvider>
      <OrderSummary product={product} tax={{ amount: null }} />
    </MarketingThemeProvider>
  );
});

stories.add('Order summary with knobs', () => {
  const groupId = {
    bundle: 'Bundle',
    coupon: 'Coupon',
    product: 'Product',
  };

  const level = select('Level', PLAN_NAMES, 'Standard', groupId.product);
  const period = select('Plan Period', PLAN_PERIODS, 'year', groupId.product);
  const trialDays = number('Trial Days', 14, {}, groupId.product);
  const trialPrice = number('Trial Price', 0, {}, groupId.product);
  const price = number('Price', 300, {}, groupId.product);
  const credit = number('Account Credit', 37.68, {}, groupId.product);
  const taxAmount = number('Tax', 12, {}, groupId.product);

  const hasCoupon = boolean('Has coupon?', true, groupId.coupon);
  const discountBillingCycles = number(
    'Discount Billing Cycles',
    1,
    {},
    groupId.coupon,
  );
  const discountPercent = number('Discount Percent', 10, {}, groupId.coupon);
  const code = text('Coupon Code', 'lp', groupId.coupon);
  const cartText = text('Cart Text', '10% off', groupId.coupon);

  const hasBundle = boolean('Has bundle?', true, groupId.bundle);
  const size = number('Bundle Size', 5, {}, groupId.bundle);
  const value = number('Bundle Value', 250, {}, groupId.bundle);
  const kind = text('Bundle Kind', 'Exclusive Templates', groupId.bundle);

  const productWithKnobs = {
    ...productWithTrial,
    period,
    level,
    price,
    trial: {
      price: trialPrice,
      trial_days: trialDays,
    },
  };

  const couponWithKnobs = hasCoupon
    ? {
        ...coupon,
        cartText,
        code,
        discountBillingCycles,
        discountPercent,
      }
    : null;

  const bundleWithKnobs = hasBundle
    ? {
        size,
        value,
        kind,
      }
    : null;

  return (
    <MarketingThemeProvider>
      <OrderSummary
        product={productWithKnobs}
        bundle={bundleWithKnobs}
        coupon={couponWithKnobs}
        tax={{ amount: taxAmount }}
        credit={credit}
      />
    </MarketingThemeProvider>
  );
});

stories.add('Order summary accordion with knobs', () => {
  const groupId = {
    bundle: 'Bundle',
    coupon: 'Coupon',
    product: 'Product',
  };

  const level = select('Level', PLAN_NAMES, 'Standard', groupId.product);
  const period = select('Plan Period', PLAN_PERIODS, 'year', groupId.product);
  const trialDays = number('Trial Days', 14, {}, groupId.product);
  const trialPrice = number('Trial Price', 0, {}, groupId.product);
  const price = number('Price', 300, {}, groupId.product);
  const credit = number('Account Credit', 37.68, {}, groupId.product);
  const taxAmount = number('Tax', 12, {}, groupId.product);

  const hasCoupon = boolean('Has coupon?', true, groupId.coupon);
  const discountBillingCycles = number(
    'Discount Billing Cycles',
    1,
    {},
    groupId.coupon,
  );
  const discountPercent = number('Discount Percent', 10, {}, groupId.coupon);
  const code = text('Coupon Code', 'lp', groupId.coupon);
  const cartText = text('Cart Text', '10% off', groupId.coupon);

  const hasBundle = boolean('Has bundle?', true, groupId.bundle);
  const size = number('Bundle Size', 5, {}, groupId.bundle);
  const value = number('Bundle Value', 250, {}, groupId.bundle);
  const kind = text('Bundle Kind', 'Exclusive Templates', groupId.bundle);

  const productWithKnobs = {
    ...productWithTrial,
    period,
    level,
    price,
    trial: {
      price: trialPrice,
      trial_days: trialDays,
    },
  };

  const couponWithKnobs = hasCoupon
    ? {
        ...coupon,
        cartText,
        code,
        discountBillingCycles,
        discountPercent,
      }
    : null;

  const bundleWithKnobs = hasBundle
    ? {
        size,
        value,
        kind,
      }
    : null;

  return (
    <MarketingThemeProvider>
      <PlanContextProvider
        product={productWithKnobs}
        tax={{ amount: taxAmount }}
        coupon={couponWithKnobs}
        bundle={bundleWithKnobs}
        credit={credit}
      >
        <div style={{ maxWidth: 600, margin: 32 }}>
          <OrderSummaryAccordion />
        </div>
      </PlanContextProvider>
    </MarketingThemeProvider>
  );
});
