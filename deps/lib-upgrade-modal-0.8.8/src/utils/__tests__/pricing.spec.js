import { FLOWS, TEST_DATA } from '../../constants';
import {
  getDisplayPrices,
  minimalDisplayPrice,
  roundToCents,
} from '../pricing';

describe('pricing utils', () => {
  describe('getDisplayPrices', () => {
    let standardAnnualPlan;
    let standardMonthlyPlan;
    let allPlans;
    let coupon;

    beforeEach(() => {
      standardAnnualPlan = TEST_DATA.year.standard;
      standardMonthlyPlan = TEST_DATA.month.standard;
      allPlans = TEST_DATA;
      coupon = {
        appliesToAllPlans: true,
        discountPercent: 15,
      };
    });

    it('should return the monthly price for an annual plan', () => {
      expect(
        getDisplayPrices(standardAnnualPlan, allPlans, null, null, null),
      ).toEqual(
        expect.objectContaining({ monthly: standardAnnualPlan.monthlyPrice }),
      );
    });

    it('should return the monthly price for a monthly plan', () => {
      expect(
        getDisplayPrices(standardMonthlyPlan, allPlans, null, null, null),
      ).toEqual(
        expect.objectContaining({ monthly: standardMonthlyPlan.monthlyPrice }),
      );
    });

    it('should return the savings per year over monthly for an annual plan without a coupon', () => {
      // Standard Annual = $444 per year
      // Standard Monthly = $588 per year
      expect(
        getDisplayPrices(standardAnnualPlan, allPlans, null, null, null),
      ).toEqual(expect.objectContaining({ savings: 144 }));
    });

    it('should return the savings per year over current monthly plan (if passed) for an annual plan without a coupon', () => {
      // Standard Annual = $444 per year
      // Standard Monthly = $588 per year
      const currentPlan = {
        level: 'standard',
        period: 'month',
        monthlyPrice: 59,
      };
      expect(
        getDisplayPrices(standardAnnualPlan, allPlans, currentPlan, null, null),
      ).toEqual(expect.objectContaining({ savings: 264 }));
    });

    it('should not return any savings for a monthly plan without a coupon', () => {
      expect(
        getDisplayPrices(standardMonthlyPlan, allPlans, null, null, null),
      ).toEqual(expect.objectContaining({ savings: 0 }));
    });

    it('should return the non-adjusted monthly price, adjusted monthly price, and yearly savings for an annual plan with a coupon', () => {
      // NOTE: Values are rounded up with Math.ceil
      expect(
        getDisplayPrices(standardAnnualPlan, allPlans, null, coupon, null),
      ).toEqual({
        hasCoupon: true,
        monthly: 32,
        monthlyCompare: 37,
        savings: 67,
      });
    });

    it('should return the non-adjusted monthly price, adjusted monthly price, and monthly savings for a standard plan with a coupon', () => {
      // NOTE: Values are rounded up with Math.ceil
      expect(
        getDisplayPrices(standardMonthlyPlan, allPlans, null, coupon, null),
      ).toEqual({
        hasCoupon: true,
        monthly: 42,
        monthlyCompare: 49,
        savings: 8,
      });
    });

    it('should not return any savings if coupon does not apply to this plan', () => {
      coupon = {
        validPlans: ['not-this-plan'],
        discountPercent: 15,
      };
      expect(
        getDisplayPrices(standardAnnualPlan, allPlans, null, coupon, null),
      ).toEqual({
        hasCoupon: false,
        monthly: 37,
        monthlyCompare: 37,
        savings: 0,
      });
    });

    it('should return savings if coupon is valid for plan, flow is upgrade, and plan is an upgrade', () => {
      coupon = {
        appliesToAllPlans: true,
        discountPercent: 15,
      };
      // NOTE: Values are rounded up with Math.ceil
      expect(
        getDisplayPrices(
          standardAnnualPlan,
          allPlans,
          null,
          coupon,
          FLOWS.UPGRADE,
        ),
      ).toEqual({
        hasCoupon: true,
        monthly: 32,
        monthlyCompare: 37,
        savings: 67,
      });
    });

    it('should not return any savings if coupon is valid for plan, flow is upgrade, but plan is not an upgrade', () => {
      coupon = {
        appliesToAllPlans: true,
        discountPercent: 15,
      };
      standardAnnualPlan.isUpgrade = false;
      expect(
        getDisplayPrices(
          standardAnnualPlan,
          allPlans,
          null,
          coupon,
          FLOWS.UPGRADE,
        ),
      ).toEqual({
        hasCoupon: false,
        monthly: 37,
        monthlyCompare: 37,
        savings: 0,
      });
    });
  });

  describe('roundToCents', () => {
    it('should round fractional pennies upward', () => {
      expect(roundToCents(1.111)).toStrictEqual(1.12);
    });

    it('should not round fractions that do not need rounding', () => {
      expect(roundToCents(1.11)).toStrictEqual(1.11);
    });
  });

  describe('minimalDisplayPrice', () => {
    it('should return 0 for amounts less than or equal to zero', () => {
      expect(minimalDisplayPrice(0)).toStrictEqual('0');
      expect(minimalDisplayPrice(-0.01)).toStrictEqual('0');
    });

    it('should return whole numbers for amounts without fractions', () => {
      expect(minimalDisplayPrice(1)).toStrictEqual('1');
    });

    it('should return amounts rounded upward with fractional cents', () => {
      expect(minimalDisplayPrice(1.001)).toStrictEqual('1.01');
    });
  });
});
