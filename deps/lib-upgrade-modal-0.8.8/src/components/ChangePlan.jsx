import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Loading } from './Loading';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import OrderSummary from './OrderSummary';
import { makeStyles } from '@material-ui/core/styles';
import PaymentMethodCard, { billingInfoSchema } from './PaymentMethodCard';
import * as api from '../api';
import { BUNDLE_SHAPE, COUPON_SHAPE } from '../constants/types';

const useStyles = makeStyles(
  theme => ({
    changePlanContainer: {
      // UpgradeModal sets 'center', so revert back to left here.
      textAlign: 'left',
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.lg,
      padding: theme.spacing(0, 3),
    },
    orderSummary: {
      '& .OrderSummary-table': {
        boxShadow: 'rgba(9, 12, 18, 0.1) 0px 10px 20px -5px',
      },
    },
    alert: {
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  }),
  { classNamePrefix: 'ChangePlan' },
);

export const loadingMessage = 'Fetching billing information...';

const ChangePlan = ({
  planId,
  confirmButtonLoading,
  onOpenUpdatePaymentMethodModal,
  onCancel,
  onConfirm,
  confirmButtonText,
  billingInfo,
  forceRecurlyMigration,
  coupon,
  bundle,
}) => {
  const classes = useStyles();

  const [planData, setPlanData] = useState(null);
  const [setupError, setSetupError] = useState(null);
  const [isFetchingSetupData, setIsFetchingSetupData] = useState(true);

  const getPlanChangeData = useCallback(
    async planId => {
      try {
        const response = await api.getPlanChangeData({
          planId,
          ...(coupon?.code && { couponCode: coupon.code }),
        });
        setPlanData(response);
      } catch (e) {
        if (e.status === 404) {
          setSetupError('Upgrade plan not found!');
        } else {
          setSetupError(
            'Error fetching upgrade information. Please refresh the page and try again!',
          );
        }
      }
    },
    [coupon],
  );

  // Initial run, fetch required data.
  useEffect(() => {
    if (planId) {
      const fetchData = async () => {
        setIsFetchingSetupData(true);
        await getPlanChangeData(planId);
        setIsFetchingSetupData(false);
      };
      fetchData();
    }
  }, [planId, billingInfo, getPlanChangeData]);

  if (setupError) {
    return <Alert severity="error">{setupError}</Alert>;
  }

  if (isFetchingSetupData || !billingInfo || !planData) {
    return <Loading msg={loadingMessage} variant="subtitle1" />;
  }

  return (
    <>
      <Grid container direction="row" className={classes.changePlanContainer}>
        <div>
          {forceRecurlyMigration && (
            <Alert className={classes.alert} severity={'error'}>
              Please re-enter or update your payment method to proceed.
            </Alert>
          )}
          <PaymentMethodCard
            billingInfo={billingInfo}
            onClickUpdate={onOpenUpdatePaymentMethodModal}
          />
        </div>
        <div className={classes.orderSummary}>
          <OrderSummary
            product={{
              ...planData.product,
              level: planData.planLevel,
              trial: { price: 0, trial_days: planData.trialDays },
            }}
            onCancel={onCancel}
            onConfirm={onConfirm}
            confirmButtonText={confirmButtonText}
            confirmButtonDisabled={forceRecurlyMigration}
            confirmButtonLoading={confirmButtonLoading}
            tax={{ amount: planData.cost.tax }}
            credit={planData.cost.credit}
            billingDate={planData.dueDateTime}
            trial={{ trial_days: planData.trialDays }}
            bundle={bundle?.details}
            coupon={coupon}
          />
        </div>
      </Grid>
    </>
  );
};

export const changePlanSchema = {
  confirmButtonText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onOpenUpdatePaymentMethodModal: PropTypes.func.isRequired,
  planId: PropTypes.string.isRequired,
  billingInfo: PropTypes.shape(billingInfoSchema),
  confirmButtonLoading: PropTypes.bool,
  forceRecurlyMigration: PropTypes.bool,
  coupon: PropTypes.shape(COUPON_SHAPE),
  bundle: PropTypes.shape(BUNDLE_SHAPE),
};

ChangePlan.propTypes = changePlanSchema;

ChangePlan.defaultProps = {
  confirmButtonLoading: false,
  confirmButtonText: 'Upgrade',
  forceRecurlyMigration: false,
};

export default ChangePlan;
