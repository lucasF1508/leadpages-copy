import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { UnderlineLink } from '@lp/ui';
import CouponDetails from './CouponDetails';
import FinePrint from '../FinePrint';
import { displayPrice } from '../../utils/pricing';
import { usePlanContext } from './PlanContext';

const OrderSummaryFinePrint = ({ className }) => {
  const {
    coupon,
    product,
    paidStartDate,
    paidStartIsToday,
    paidStartLocale,
    subtotal,
  } = usePlanContext();
  const { period, price } = product;

  return (
    <FinePrint className={className} showRefundLink={paidStartIsToday}>
      {!paidStartIsToday && (
        <Typography variant="caption" paragraph>
          {`On ${paidStartLocale}, your auto-renewing subscription will begin and you will be charged $${displayPrice(
            subtotal,
          )}. View our 7-day `}
          <UnderlineLink
            variant="secondary"
            typographyVariant="caption"
            href="https://www.leadpages.com/legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            refund policy
          </UnderlineLink>{' '}
          for more details.
        </Typography>
      )}
      {coupon && coupon.discountPercent !== 0 && (
        <Typography variant="caption" paragraph>
          <CouponDetails
            paidStartDate={paidStartDate}
            discountBillingCycles={coupon.discountBillingCycles}
            period={period}
            price={price}
          />
        </Typography>
      )}
    </FinePrint>
  );
};

OrderSummaryFinePrint.propTypes = {
  className: PropTypes.string,
};

OrderSummaryFinePrint.defaultProps = {
  className: null,
};

export default OrderSummaryFinePrint;
