import React from 'react';
import PropTypes from 'prop-types';
import { getNormalBillingDate, CYCLE_LABEL } from './helpers';

const CouponDetails = ({
  discountBillingCycles,
  period,
  price,
  paidStartDate,
}) => {
  if (discountBillingCycles === 0)
    return <>Discount applies to every {period} until you cancel.</>;

  let numberOfPeriods = `first ${period}.`;
  if (discountBillingCycles > 1) {
    numberOfPeriods = `first ${discountBillingCycles} ${period}s.`;
  }

  const normalBillingDate = getNormalBillingDate(
    discountBillingCycles,
    period,
    paidStartDate,
  );
  const normalBilling = `Normal billing resumes on ${normalBillingDate} at $${price} ${CYCLE_LABEL[period]}.`;

  return (
    <>
      Discount applies to {numberOfPeriods} {normalBilling}
    </>
  );
};

export default CouponDetails;

CouponDetails.propTypes = {
  discountBillingCycles: PropTypes.number,
  period: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  paidStartDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.number,
  ]).isRequired,
};

CouponDetails.defaultProps = {
  discountBillingCycles: null,
};
