import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MarketingThemeProvider } from '@lp/ui';

import ChangePlan, { loadingMessage } from '../ChangePlan';
import api from '../../api';

jest.mock('../../api');

describe('ChangePlan', () => {
  let props;
  let planData;

  beforeEach(() => {
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
          city: 'St. Louis Park',
        },
        paymentType: 'CARD',
        lastName: 'LastName',
        cardType: 'Visa',
        last4: '1111',
      },
    };

    window.openUpdatePaymentMethodModal = jest.fn();

    planData = {
      cost: {
        tax: 0,
        credit: 39.36,
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
          split_testing: true,
        },
        recurly_plan_code: 'pro-monthly',
        customer_upgrade_options: [
          'qskamraphrsb', // pro annual
          'SoGjyLFIQqFu', // advanced monthly
          'kwrpa8h4n0po', // advanced annual
        ],
        braintree_plan: '6gb2',
        period: 'month',
        price: 99,
      },
      dueDateTime: null,
      isRecurly: true,
      trialDays: 0,
    };
    api.getPlanChangeData.mockResolvedValue(planData);
  });

  it('should indicate loading when billing info is unavailable', async () => {
    render(
      <MarketingThemeProvider>
        <ChangePlan {...props} billingInfo={null} />
      </MarketingThemeProvider>,
    );

    expect(screen.getByText(loadingMessage)).toBeInTheDocument();
    await waitFor(() => api.getPlanChangeData);
  });

  it('should make an API request for plan data on render', async () => {
    render(
      <MarketingThemeProvider>
        <ChangePlan {...props} />
      </MarketingThemeProvider>,
    );

    await waitFor(() => expect(screen.queryByText(loadingMessage)).toBe(null));

    expect(api.getPlanChangeData).toBeCalledWith({ planId: props.planId });
  });

  it('should make an API request for coupon data if there is a coupon code', async () => {
    props.coupon = {
      code: 'test-coupon',
      enabled: true,
      hasUsesRemaining: true,
      isExpired: false,
      appliesToAllPlans: true,
      signupsAllowed: true,
      reactivationsAllowed: true,
      upgradesAllowed: true,
    };

    render(
      <MarketingThemeProvider>
        <ChangePlan {...props} />
      </MarketingThemeProvider>,
    );

    await waitFor(() => expect(screen.queryByText(loadingMessage)).toBe(null));

    expect(api.getPlanChangeData).toBeCalledWith({
      planId: props.planId,
      couponCode: props.coupon.code,
    });
  });
});
