import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Loading from './Loading';
import Button from '@material-ui/core/Button';
import { ShadowBox } from '@lp/ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ typography }) => ({
    cardContainer: {
      width: 665,
      height: 'max-content',
      marginRight: 24,
      marginBottom: 24,
    },
    cardTitleRow: {
      paddingBottom: 25,
    },
    cardContent: {
      paddingBottom: 20,
      '&:last-child': {
        paddingBottom: 0,
      },
    },
    cardRow: {
      paddingBottom: 20,
      '&:last-child': {
        paddingBottom: 0,
      },
    },
    cardRowName: {
      fontSize: typography.pxToRem(13),
      fontWeight: typography.fontWeightSemiBold,
      whiteSpace: 'nowrap',
      width: 300,
    },
    capitalize: {
      textTransform: 'capitalize',
    },
  }),
  { classNamePrefix: 'PaymentMethodCard' },
);

const PaymentMethodCard = ({ billingInfo, onClickUpdate }) => {
  const classes = useStyles();

  return (
    <ShadowBox className={classes.cardContainer}>
      {!billingInfo ? (
        <Loading msg={'Fetching billing information...'} />
      ) : (
        <>
          <Grid
            container
            justify="space-between"
            direction="row"
            wrap="nowrap"
            className={classes.cardTitleRow}
          >
            <Typography variant="h4">Payment Method</Typography>
            <Button variant="text" color="primary" onClick={onClickUpdate}>
              Change
            </Button>
          </Grid>
          <div className={classes.cardContent}>
            <Grid
              container
              direction="row"
              wrap="nowrap"
              className={classes.cardRow}
            >
              <Typography className={classes.cardRowName}>
                Payment Information
              </Typography>
              <Grid container direction="column">
                <Typography>
                  <span className={classes.capitalize}>
                    {billingInfo.cardType}
                  </span>{' '}
                  ending in {billingInfo.last4} expires{' '}
                  {billingInfo.cardExpiration}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              wrap="nowrap"
              className={classes.cardRow}
            >
              <Typography className={classes.cardRowName}>
                Billing Address
              </Typography>
              <Grid container direction="column">
                <Typography>
                  {billingInfo.firstName} {billingInfo.lastName}
                </Typography>
                <Typography>{billingInfo.address.street1}</Typography>
                {billingInfo.address.street2 && (
                  <Typography>{billingInfo.address.street2}</Typography>
                )}
                {billingInfo.address.street3 && (
                  <Typography>{billingInfo.address.street3}</Typography>
                )}
                <Typography>
                  {billingInfo.address.city} {billingInfo.address.region}{' '}
                  {billingInfo.address.postalCode}
                </Typography>
                <Typography>{billingInfo.address.country}</Typography>
              </Grid>
            </Grid>
          </div>
        </>
      )}
    </ShadowBox>
  );
};

// This should the match main app's /api/v1/billing/info schema.
export const billingInfoSchema = {
  cardType: PropTypes.string.isRequired,
  last4: PropTypes.string.isRequired,
  cardExpiration: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street1: PropTypes.string.isRequired,
    street2: PropTypes.string,
    street3: PropTypes.string,
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
  }),
};

PaymentMethodCard.propTypes = {
  onClickUpdate: PropTypes.func.isRequired,
  billingInfo: PropTypes.shape(billingInfoSchema),
};

export default PaymentMethodCard;
