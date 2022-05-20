"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.billingInfoSchema = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Loading = _interopRequireDefault(require("./Loading"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ui = require("@lp/ui");

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (_ref) {
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
  return /*#__PURE__*/_react.default.createElement(_ui.ShadowBox, {
    className: classes.cardContainer
  }, !billingInfo ? /*#__PURE__*/_react.default.createElement(_Loading.default, {
    msg: 'Fetching billing information...'
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    justify: "space-between",
    direction: "row",
    wrap: "nowrap",
    className: classes.cardTitleRow
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h4"
  }, "Payment Method"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "text",
    color: "primary",
    onClick: onClickUpdate
  }, "Change")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.cardContent
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "row",
    wrap: "nowrap",
    className: classes.cardRow
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.cardRowName
  }, "Payment Information"), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, /*#__PURE__*/_react.default.createElement("span", {
    className: classes.capitalize
  }, billingInfo.cardType), ' ', "ending in ", billingInfo.last4, " expires", ' ', billingInfo.cardExpiration))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "row",
    wrap: "nowrap",
    className: classes.cardRow
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.cardRowName
  }, "Billing Address"), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, billingInfo.firstName, " ", billingInfo.lastName), /*#__PURE__*/_react.default.createElement(_Typography.default, null, billingInfo.address.street1), billingInfo.address.street2 && /*#__PURE__*/_react.default.createElement(_Typography.default, null, billingInfo.address.street2), billingInfo.address.street3 && /*#__PURE__*/_react.default.createElement(_Typography.default, null, billingInfo.address.street3), /*#__PURE__*/_react.default.createElement(_Typography.default, null, billingInfo.address.city, " ", billingInfo.address.region, ' ', billingInfo.address.postalCode), /*#__PURE__*/_react.default.createElement(_Typography.default, null, billingInfo.address.country))))));
}; // This should the match main app's /api/v1/billing/info schema.


var billingInfoSchema = {
  cardType: _propTypes.default.string.isRequired,
  last4: _propTypes.default.string.isRequired,
  cardExpiration: _propTypes.default.string.isRequired,
  firstName: _propTypes.default.string.isRequired,
  lastName: _propTypes.default.string.isRequired,
  address: _propTypes.default.shape({
    street1: _propTypes.default.string.isRequired,
    street2: _propTypes.default.string,
    street3: _propTypes.default.string,
    city: _propTypes.default.string.isRequired,
    region: _propTypes.default.string.isRequired,
    postalCode: _propTypes.default.string.isRequired
  })
};
exports.billingInfoSchema = billingInfoSchema;
PaymentMethodCard.propTypes = {
  onClickUpdate: _propTypes.default.func.isRequired,
  billingInfo: _propTypes.default.shape(billingInfoSchema)
};
var _default = PaymentMethodCard;
exports.default = _default;