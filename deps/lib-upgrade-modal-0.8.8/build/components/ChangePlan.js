"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.changePlanSchema = exports.loadingMessage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Loading = require("./Loading");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));

var _OrderSummary = _interopRequireDefault(require("./OrderSummary"));

var _styles = require("@material-ui/core/styles");

var _PaymentMethodCard = _interopRequireWildcard(require("./PaymentMethodCard"));

var api = _interopRequireWildcard(require("../api"));

var _types = require("../constants/types");

var useStyles = (0, _styles.makeStyles)(function (theme) {
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
var loadingMessage = 'Fetching billing information...';
exports.loadingMessage = loadingMessage;

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

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      planData = _useState2[0],
      setPlanData = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      setupError = _useState4[0],
      setSetupError = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isFetchingSetupData = _useState6[0],
      setIsFetchingSetupData = _useState6[1];

  var getPlanChangeData = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(planId) {
      var response;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return api.getPlanChangeData((0, _objectSpread2.default)({
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

  (0, _react.useEffect)(function () {
    if (planId) {
      var fetchData = /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
          return _regenerator.default.wrap(function _callee2$(_context2) {
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
    return /*#__PURE__*/_react.default.createElement(_Alert.default, {
      severity: "error"
    }, setupError);
  }

  if (isFetchingSetupData || !billingInfo || !planData) {
    return /*#__PURE__*/_react.default.createElement(_Loading.Loading, {
      msg: loadingMessage,
      variant: "subtitle1"
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "row",
    className: classes.changePlanContainer
  }, /*#__PURE__*/_react.default.createElement("div", null, forceRecurlyMigration && /*#__PURE__*/_react.default.createElement(_Alert.default, {
    className: classes.alert,
    severity: 'error'
  }, "Please re-enter or update your payment method to proceed."), /*#__PURE__*/_react.default.createElement(_PaymentMethodCard.default, {
    billingInfo: billingInfo,
    onClickUpdate: onOpenUpdatePaymentMethodModal
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.orderSummary
  }, /*#__PURE__*/_react.default.createElement(_OrderSummary.default, {
    product: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, planData.product), {}, {
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

var changePlanSchema = {
  confirmButtonText: _propTypes.default.string,
  onConfirm: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func,
  onOpenUpdatePaymentMethodModal: _propTypes.default.func.isRequired,
  planId: _propTypes.default.string.isRequired,
  billingInfo: _propTypes.default.shape(_PaymentMethodCard.billingInfoSchema),
  confirmButtonLoading: _propTypes.default.bool,
  forceRecurlyMigration: _propTypes.default.bool,
  coupon: _propTypes.default.shape(_types.COUPON_SHAPE),
  bundle: _propTypes.default.shape(_types.BUNDLE_SHAPE)
};
exports.changePlanSchema = changePlanSchema;
ChangePlan.propTypes = changePlanSchema;
ChangePlan.defaultProps = {
  confirmButtonLoading: false,
  confirmButtonText: 'Upgrade',
  forceRecurlyMigration: false
};
var _default = ChangePlan;
exports.default = _default;