"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _ui = require("@lp/ui");

var _PlanFrequencySwitch = _interopRequireDefault(require("./PlanFrequencySwitch"));

var _constants = require("../constants");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: '100%'
    },
    title: function title(_ref) {
      var isStandalone = _ref.isStandalone;
      return {
        paddingLeft: isStandalone ? 0 : null,
        paddingRight: isStandalone ? 0 : null,
        paddingTop: isStandalone ? 0 : theme.spacing(2)
      };
    },
    subheadContainer: function subheadContainer(_ref2) {
      var isStandalone = _ref2.isStandalone;
      return (0, _defineProperty2.default)({
        marginBottom: theme.spacing(3)
      }, theme.breakpoints.up(_constants.BREAKPOINTS.SMALL), {
        marginBottom: isStandalone ? 36 : 108
      });
    },
    switch: {
      marginTop: theme.spacing(3)
    }
  };
}, {
  classNamePrefix: 'PlanCompareHeader'
});

var PlanCompareHeader = function PlanCompareHeader(_ref4) {
  var headline = _ref4.headline,
      subheadline = _ref4.subheadline,
      selectedBillingFrequency = _ref4.selectedBillingFrequency,
      handleChange = _ref4.handleChange,
      canChangePlanPeriod = _ref4.canChangePlanPeriod,
      isAboveSmall = _ref4.isAboveSmall;
  var isStandalone = !headline && !subheadline;
  var classes = useStyles({
    isStandalone: isStandalone
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_ui.FullScreenDialogTitle, {
    className: classes.title,
    classesProp: {
      subheadContainer: classes.subheadContainer
    },
    headline: headline,
    subheadline: subheadline,
    justify: isStandalone ? 'center' : 'space-between'
  }, isAboveSmall && canChangePlanPeriod && /*#__PURE__*/_react.default.createElement(_PlanFrequencySwitch.default, {
    className: classes.switch,
    selectedBillingFrequency: selectedBillingFrequency,
    handleChange: handleChange
  })));
};

PlanCompareHeader.propTypes = {
  headline: _propTypes.default.string,
  subheadline: _propTypes.default.string,
  selectedBillingFrequency: _propTypes.default.oneOf([_constants.PLAN_PERIODS.MONTHLY, _constants.PLAN_PERIODS.ANNUAL]).isRequired,
  handleChange: _propTypes.default.func.isRequired,
  isAboveSmall: _propTypes.default.bool.isRequired,
  canChangePlanPeriod: _propTypes.default.bool.isRequired
};
PlanCompareHeader.defaultProps = {
  headline: null,
  subheadline: null
};
var _default = PlanCompareHeader;
exports.default = _default;