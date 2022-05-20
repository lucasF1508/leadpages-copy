import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CouponDetails from '../CouponDetails';
import { getNormalBillingDate } from '../helpers';

describe('Coupon Details', () => {
  let rerender;
  let getByText;
  let props;
  let paidStartDate;

  beforeEach(() => {
    paidStartDate = Date.now();
    props = {
      discountBillingCycles: 1,
      period: 'year',
      price: 300,
      paidStartDate,
    };
    ({ rerender, getByText } = render(<CouponDetails {...props} />));
  });

  afterEach(() => {
    cleanup();
  });

  it('should describe the duration of a coupon for an annual plan', () => {
    const { discountBillingCycles, period, price } = props;
    const normalBillingDate = getNormalBillingDate(
      discountBillingCycles,
      period,
      paidStartDate,
    );
    expect(
      getByText(
        `Discount applies to first year. Normal billing resumes on ${normalBillingDate} at $${price} per year.`,
      ),
    ).toBeDefined();
  });

  it('should describe the duration of a coupon for a monthly plan', () => {
    props.period = 'month';
    const { discountBillingCycles, period, price } = props;
    const normalBillingDate = getNormalBillingDate(
      discountBillingCycles,
      period,
      paidStartDate,
    );
    rerender(<CouponDetails {...props} />);
    expect(
      getByText(
        `Discount applies to first month. Normal billing resumes on ${normalBillingDate} at $${price} per month.`,
      ),
    ).toBeDefined();
  });

  it('should advance to the last day of the month if the normal billing date would be the 29th, 30th, or 31st', () => {
    props.period = 'month';
    const { discountBillingCycles, period, price } = props;
    const mockPaidStartDate = new Date(2400, 1, 29);
    props.paidStartDate = mockPaidStartDate.getTime();

    const normalBillingDate = getNormalBillingDate(
      discountBillingCycles,
      period,
      mockPaidStartDate.getTime(),
    );

    expect(normalBillingDate).toBe('3/31/2400');

    rerender(<CouponDetails {...props} />);
    expect(
      getByText(
        `Discount applies to first month. Normal billing resumes on ${normalBillingDate} at $${price} per month.`,
      ),
    ).toBeDefined();
  });

  it('should have the correct copy for multiple discount billing cycles', () => {
    props.discountBillingCycles = 2;
    props.period = 'month';
    const { discountBillingCycles, period, price } = props;
    const mockPaidStartDate = new Date(2400, 1, 29);
    props.paidStartDate = mockPaidStartDate.getTime();

    const normalBillingDate = getNormalBillingDate(
      discountBillingCycles,
      period,
      mockPaidStartDate.getTime(),
    );

    expect(normalBillingDate).toBe('4/30/2400');

    rerender(<CouponDetails {...props} />);
    expect(
      getByText(
        `Discount applies to first ${
          props.discountBillingCycles
        } ${period}s. Normal billing resumes on ${normalBillingDate} at $${price} per month.`,
      ),
    ).toBeDefined();
  });
});
