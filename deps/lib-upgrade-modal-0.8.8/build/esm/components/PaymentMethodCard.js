import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Loading from './Loading';
import Button from '@material-ui/core/Button';
import { ShadowBox } from '@lp/ui';
import { makeStyles } from '@material-ui/core/styles';
var useStyles = makeStyles(function (_ref) {
  var typography = _ref.typography;
  return {
    cardContainer: {
      width: 665,
      height: 'max-content',
      marginRight: 24,
      marginBottom: 24
    },
    cardTitleRow: {
      paddingBottom: 25
    },
    cardContent: {
      paddingBottom: 20,
      '&:last-child': {
        paddingBottom: 0
      }
    },
    cardRow: {
      paddingBottom: 20,
      '&:last-child': {
        paddingBottom: 0
      }
    },
    cardRowName: {
      fontSize: typography.pxToRem(13),
      fontWeight: typography.fontWeightSemiBold,
      whiteSpace: 'nowrap',
      width: 300
    },
    capitalize: {
      textTransform: 'capitalize'
    }
  };
}, {
  classNamePrefix: 'PaymentMethodCard'
});

var PaymentMethodCard = function PaymentMethodCard(_ref2) {
  var billingInfo = _ref2.billingInfo,
      onClickUpdate = _ref2.onClickUpdate;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(ShadowBox, {
    className: classes.cardContainer
  }, !billingInfo ? /*#__PURE__*/React.createElement(Loading, {
    msg: 'Fetching billing information...'
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justify: "space-between",
    direction: "row",
    wrap: "nowrap",
    className: classes.cardTitleRow
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h4"
  }, "Payment Method"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    color: "primary",
    onClick: onClickUpdate
  }, "Change")), /*#__PURE__*/React.createElement("div", {
    className: classes.cardContent
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    wrap: "nowrap",
    className: classes.cardRow
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.cardRowName
  }, "Payment Information"), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Typography, null, /*#__PURE__*/React.createElement("span", {
    className: classes.capitalize
  }, billingInfo.cardType), ' ', "ending in ", billingInfo.last4, " expires", ' ', billingInfo.cardExpiration))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    wrap: "nowrap",
    className: classes.cardRow
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.cardRowName
  }, "Billing Address"), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Typography, null, billingInfo.firstName, " ", billingInfo.lastName), /*#__PURE__*/React.createElement(Typography, null, billingInfo.address.street1), billingInfo.address.street2 && /*#__PURE__*/React.createElement(Typography, null, billingInfo.address.street2), billingInfo.address.street3 && /*#__PURE__*/React.createElement(Typography, null, billingInfo.address.street3), /*#__PURE__*/React.createElement(Typography, null, billingInfo.address.city, " ", billingInfo.address.region, ' ', billingInfo.address.postalCode), /*#__PURE__*/React.createElement(Typography, null, billingInfo.address.country))))));
}; // This should the match main app's /api/v1/billing/info schema.


export var billingInfoSchema = {
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
    postalCode: PropTypes.string.isRequired
  })
};
PaymentMethodCard.propTypes = {
  onClickUpdate: PropTypes.func.isRequired,
  billingInfo: PropTypes.shape(billingInfoSchema)
};
export default PaymentMethodCard;