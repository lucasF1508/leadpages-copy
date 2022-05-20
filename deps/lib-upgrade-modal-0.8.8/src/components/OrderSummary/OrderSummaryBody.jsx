import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LoadingButton } from '@lp/ui';

import { displayPrice, minimalDisplayPrice } from '../../utils/pricing';
import { CYCLE_LABEL, verbiages } from './helpers';
import { usePlanContext } from './PlanContext';

const useStyles = makeStyles(
  theme => ({
    rowContainer: {
      color: theme.palette.grey[70],
      padding: '10px 6px',
    },
    divider: {
      marginTop: 5,
      marginBottom: 5,
    },
    footerDivider: {
      backgroundColor: theme.palette.grey[25],
    },
    strikethrough: {
      textDecoration: 'line-through',
      color: theme.palette.grey[50],
    },
    capitalize: {
      textTransform: 'capitalize',
    },
    caption: {
      fontSize: theme.typography.pxToRem(13),
    },
  }),
  { classNamePrefix: 'OrderSummary' },
);

const OrderSummaryBody = ({
  confirmButtonDisabled,
  confirmButtonLoading,
  confirmButtonText,
  onCancel,
  onConfirm,
}) => {
  const classes = useStyles();
  const {
    product,
    tax,
    coupon,
    bundle,
    credit,
    annualBillingDiscount,
    annualRateNoDiscount,
    couponIsForever,
    discount,
    getBundleRowTitle,
    hasAnnualDiscount,
    isTrial,
    paidStartIsToday,
    paidStartLocale,
    subtotal,
    taxAmount,
    totalDueNow,
  } = usePlanContext();
  const { period, price } = product;

  return (
    <>
      <Grid
        container
        wrap="nowrap"
        direction="column"
        className={classes.rowContainer}
      >
        <Grid container wrap="wrap" justify="space-between" direction="row">
          <Typography color="textPrimary" className={classes.capitalize}>
            Pay {period === 'year' ? 'annual' : period}ly
          </Typography>
          <div>
            <Typography
              component="span"
              className={classes.strikethrough}
              style={{ paddingRight: '14px' }}
            >
              {hasAnnualDiscount ? `$${annualRateNoDiscount}` : ''}
            </Typography>
            <Typography component="span">
              {`$${displayPrice(price)}`}
            </Typography>
          </div>
        </Grid>
        <Grid container wrap="nowrap">
          <Typography
            className={classes.caption}
            variant="body2"
            color={hasAnnualDiscount ? 'primary' : 'initial'}
          >
            {hasAnnualDiscount && `You save $${annualBillingDiscount}`}
            {period === 'month' && verbiages.SWITCH_TO_ANNUAL}
          </Typography>
        </Grid>
      </Grid>
      {coupon && coupon.discountPercent !== 0 && (
        <Grid
          container
          wrap="nowrap"
          className={classes.rowContainer}
          data-qa-selector="discount-price-container"
        >
          <Grid container direction="column" justify="space-between">
            <Grid container direction="column">
              <Typography color="primary">Discount</Typography>
              <Typography
                className={classes.caption}
                variant="body2"
                color="primary"
              >
                {`${coupon.discountPercent}% off`}
                {coupon.discountBillingCycles > 1
                  ? ` your first ${coupon.discountBillingCycles} ${period}s`
                  : couponIsForever
                  ? ''
                  : ' first purchase'}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="flex-end">
            <Typography color="primary">
              {`-$${displayPrice(discount)}`}{' '}
              {couponIsForever ? CYCLE_LABEL[period] : ''}
            </Typography>
          </Grid>
        </Grid>
      )}
      {bundle && (
        <Grid container wrap="nowrap" className={classes.rowContainer}>
          <Grid container direction="column">
            <Typography color="primary" noWrap>
              {getBundleRowTitle()}
            </Typography>
            {bundle.value && (
              <Typography
                className={classes.caption}
                variant="body2"
                color="primary"
              >
                ${bundle.value} value, yours free
              </Typography>
            )}
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="flex-end"
            data-qa-selector="bundle-cost-container"
          >
            <div>
              {bundle.value && (
                <Typography
                  component="span"
                  className={classes.strikethrough}
                  style={{ paddingRight: '14px' }}
                >
                  ${bundle.value}
                </Typography>
              )}
              <Typography component="span" color="primary">
                FREE
              </Typography>
            </div>
          </Grid>
        </Grid>
      )}
      {credit ? (
        <Grid container wrap="nowrap" className={classes.rowContainer}>
          <Grid container direction="column" justify="space-between">
            <Grid container direction="column">
              <Typography color="textPrimary">Account Credit</Typography>
              <Typography className={classes.caption} variant="body2">
                Balance applied
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="flex-end">
            <Typography>{`-$${credit.toFixed(2)}`} </Typography>
          </Grid>
        </Grid>
      ) : null}
      {!!taxAmount && (
        <Grid container wrap="nowrap" className={classes.rowContainer}>
          <Grid container direction="column">
            <Typography color="textPrimary">Estimated Tax</Typography>
          </Grid>
          <Grid container direction="column" alignItems="flex-end">
            <Typography>{`$${displayPrice(taxAmount)}`} </Typography>
          </Grid>
        </Grid>
      )}
      {tax && tax.amount === null && (
        <Typography color="textPrimary" className={classes.rowContainer}>
          Plus Tax
        </Typography>
      )}
      {(subtotal !== totalDueNow || isTrial || !paidStartIsToday) && (
        <>
          <Divider className={classes.divider} />
          <Grid container wrap="nowrap" className={classes.rowContainer}>
            <Grid container direction="column">
              <Typography color="textPrimary">
                {isTrial
                  ? verbiages.AFTER_FREE_TRIAL
                  : `Due on ${paidStartLocale}`}
              </Typography>
            </Grid>
            <Grid
              container
              alignItems="flex-end"
              direction="column"
              style={{ verticalAlign: 'baseline' }}
            >
              <Typography>{`$${displayPrice(subtotal)}`}</Typography>
            </Grid>
          </Grid>
        </>
      )}
      <Divider className={`${classes.footerDivider} ${classes.divider}`} />
      <Grid
        container
        wrap="nowrap"
        className={classes.rowContainer}
        justify="space-between"
      >
        <Grid>
          <Typography variant="h5" color="textPrimary">
            {verbiages.TOTAL_DUE_NOW}
          </Typography>
        </Grid>
        <Grid>
          <Typography color="textPrimary" variant="h4">
            ${minimalDisplayPrice(totalDueNow)}
          </Typography>
        </Grid>
      </Grid>
      {onConfirm && (
        <Grid container justify="flex-end" style={{ marginTop: 28 }}>
          {onCancel && (
            <Button
              variant="text"
              color="primary"
              onClick={onCancel}
              style={{ marginRight: 8 }}
            >
              No Thanks
            </Button>
          )}
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={onConfirm}
            disabled={confirmButtonDisabled}
            isLoading={confirmButtonLoading}
            data-qa-selector="confirm-order-button"
          >
            {confirmButtonText}
          </LoadingButton>
        </Grid>
      )}
    </>
  );
};

export default OrderSummaryBody;

OrderSummaryBody.propTypes = {
  className: PropTypes.string,
  tableClassName: PropTypes.string,
  confirmButtonText: PropTypes.string,
  confirmButtonDisabled: PropTypes.bool,
  confirmButtonLoading: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

OrderSummaryBody.defaultProps = {
  className: '',
  tableClassName: '',
  credit: 0,
  confirmButtonText: 'Order',
  confirmButtonDisabled: false,
  confirmButtonLoading: false,
  bundle: null,
  coupon: null,
  tax: {
    amount: 0,
  },
  billingDate: null,
};
