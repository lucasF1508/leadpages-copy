import _regeneratorRuntime from "@babel/runtime/regenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
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
var useStyles = makeStyles(function (theme) {
  return {
    changePlanContainer: {
      // UpgradeModal sets 'center', so revert back to left here.
      textAlign: 'left',
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.lg,
      padding: theme.spacing(0, 3)
    },
    orderSummary: {
      '& .OrderSummary-table': {
        boxShadow: 'rgba(9, 12, 18, 0.1) 0px 10px 20px -5px'
      }
    },
    alert: {
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(3)
    }
  };
}, {
  classNamePrefix: 'ChangePlan'
});
export var loadingMessage = 'Fetching billing information...';

var ChangePlan = function ChangePlan(_ref) {
  var planId = _ref.planId,
      confirmButtonLoading = _ref.confirmButtonLoading,
      onOpenUpdatePaymentMethodModal = _ref.onOpenUpdatePaymentMethodModal,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      confirmButtonText = _ref.confirmButtonText,
      billingInfo = _ref.billingInfo,
      forceRecurlyMigration = _ref.forceRecurlyMigration,
      coupon = _ref.coupon,
      bundle = _ref.bundle;
  var classes = useStyles();

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      planData = _useState2[0],
      setPlanData = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      setupError = _useState4[0],
      setSetupError = _useState4[1];

  var _useState5 = useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isFetchingSetupData = _useState6[0],
      setIsFetchingSetupData = _useState6[1];

  var getPlanChangeData = useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(planId) {
      var response;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return api.getPlanChangeData(_objectSpread({
                planId: planId
              }, (coupon === null || coupon === void 0 ? void 0 : coupon.code) && {
                couponCode: coupon.code
              }));

            case 3:
              response = _context.sent;
              setPlanData(response);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              if (_context.t0.status === 404) {
                setSetupError('Upgrade plan not found!');
              } else {
                setSetupError('Error fetching upgrade information. Please refresh the page and try again!');
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [coupon]); // Initial run, fetch required data.

  useEffect(function () {
    if (planId) {
      var fetchData = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  setIsFetchingSetupData(true);
                  _context2.next = 3;
                  return getPlanChangeData(planId);

                case 3:
                  setIsFetchingSetupData(false);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function fetchData() {
          return _ref3.apply(this, arguments);
        };
      }();

      fetchData();
    }
  }, [planId, billingInfo, getPlanChangeData]);

  if (setupError) {
    return /*#__PURE__*/React.createElement(Alert, {
      severity: "error"
    }, setupError);
  }

  if (isFetchingSetupData || !billingInfo || !planData) {
    return /*#__PURE__*/React.createElement(Loading, {
      msg: loadingMessage,
      variant: "subtitle1"
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    className: classes.changePlanContainer
  }, /*#__PURE__*/React.createElement("div", null, forceRecurlyMigration && /*#__PURE__*/React.createElement(Alert, {
    className: classes.alert,
    severity: 'error'
  }, "Please re-enter or update your payment method to proceed."), /*#__PURE__*/React.createElement(PaymentMethodCard, {
    billingInfo: billingInfo,
    onClickUpdate: onOpenUpdatePaymentMethodModal
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.orderSummary
  }, /*#__PURE__*/React.createElement(OrderSummary, {
    product: _objectSpread(_objectSpread({}, planData.product), {}, {
      level: planData.planLevel,
      trial: {
        price: 0,
        trial_days: planData.trialDays
      }
    }),
    onCancel: onCancel,
    onConfirm: onConfirm,
    confirmButtonText: confirmButtonText,
    confirmButtonDisabled: forceRecurlyMigration,
    confirmButtonLoading: confirmButtonLoading,
    tax: {
      amount: planData.cost.tax
    },
    credit: planData.cost.credit,
    billingDate: planData.dueDateTime,
    trial: {
      trial_days: planData.trialDays
    },
    bundle: bundle === null || bundle === void 0 ? void 0 : bundle.details,
    coupon: coupon
  }))));
};

export var changePlanSchema = {
  confirmButtonText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onOpenUpdatePaymentMethodModal: PropTypes.func.isRequired,
  planId: PropTypes.string.isRequired,
  billingInfo: PropTypes.shape(billingInfoSchema),
  confirmButtonLoading: PropTypes.bool,
  forceRecurlyMigration: PropTypes.bool,
  coupon: PropTypes.shape(COUPON_SHAPE),
  bundle: PropTypes.shape(BUNDLE_SHAPE)
};
ChangePlan.propTypes = changePlanSchema;
ChangePlan.defaultProps = {
  confirmButtonLoading: false,
  confirmButtonText: 'Upgrade',
  forceRecurlyMigration: false
};
export default ChangePlan;