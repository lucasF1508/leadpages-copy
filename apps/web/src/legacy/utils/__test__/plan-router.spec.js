import { FLOWS } from '@lp/lib-upgrade-modal';
import { planRouter, buildCheckoutUrl, TRIAL_ID } from '../plan-router';

const baseUrl = (planId, trialId) =>
  `https://my.leadpages.com/order-leadpages/${planId}/t/${trialId}/`;
const reactivationUrl = 'https://my.leadpages.net/my-account/re-activate/';
const mockCouponCode = 'mockCoupon';

describe('Components: Plans: planRouter', () => {
  let planId;
  let trialId;
  let couponData;
  let bundleData = null;
  let windowObj;
  let mockSearch;

  beforeEach(() => {
    jest.useFakeTimers();
    mockSearch = jest.fn();
    planId = 'mockPlanId';
    trialId = 'mockTrialId';
    couponData = {
      appliesToAllPlans: true,
      validPlans: [],
    };
    windowObj = {
      dataLayer: [],
      location: { assign: jest.fn(), search: mockSearch },
    };

    const localStorageMock = (() => {
      const store = {};
      return {
        getItem: key => store[key],
        setItem: (key, value) => {
          store[key] = value.toString();
        },
      };
    })();
    Object.defineProperty(windowObj, 'localStorage', { value: localStorageMock });
    jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation(() => '');
  });

  it('should build a plain main app url if no params exist', () => {
    const url = buildCheckoutUrl(planId, trialId, couponData, bundleData, FLOWS.SIGNUP, windowObj);
    expect(url).toBe(`${baseUrl(planId, trialId)}`);
  });

  it('should add coupon params if they exist and are supported by the plan', () => {
    couponData.code = mockCouponCode;
    const url = buildCheckoutUrl(planId, trialId, couponData, bundleData, FLOWS.SIGNUP, windowObj);
    expect(url).toBe(`${baseUrl(planId, trialId)}?coupon=${mockCouponCode}`);
  });

  it('should NOT add coupon params if they exist, but are not supported by the plan', () => {
    couponData.code = mockCouponCode;
    couponData.appliesToAllPlans = false;
    couponData.validPlans = [];
    const url = buildCheckoutUrl(planId, trialId, couponData, bundleData, FLOWS.SIGNUP, windowObj);
    expect(url).toBe(baseUrl(planId, trialId));
  });

  it('should add lp_template_data if needed', () => {
    windowObj.localStorage.setItem('lp_template_data', 'page-testid');
    const url = buildCheckoutUrl(planId, trialId, couponData, bundleData, FLOWS.SIGNUP, windowObj);
    expect(url).toEqual(expect.stringContaining('lp_template_data=page-testid'));
  });

  it('should call location.assign with built url', () => {
    planRouter(planId, trialId, couponData, bundleData, FLOWS.SIGNUP, windowObj);
    jest.runAllTimers();
    const url = buildCheckoutUrl(planId, trialId, couponData, bundleData, FLOWS.SIGNUP, windowObj);
    expect(windowObj.location.assign).toHaveBeenCalledWith(url);
  });

  it('should build reactivation route', () => {
    const url = buildCheckoutUrl(
      planId,
      trialId,
      couponData,
      bundleData,
      FLOWS.REACTIVATION,
      windowObj,
    );
    expect(url).toBe(`${reactivationUrl}?planId=${planId}`);
  });
});
