"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _ui = require("@lp/ui");

var _PlanFrequencySwitch = _interopRequireDefault(require("./PlanFrequencySwitch"));

var _PlanCompareButton = _interopRequireDefault(require("./PlanCompareButton"));

var _constants = require("../constants");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: function root(_ref) {
      var headerOffset = _ref.headerOffset,
          isSticky = _ref.isSticky,
          isVisible = _ref.isVisible;
      return {
        backgroundColor: isSticky ? theme.palette.common.white : 'transparent',
        borderBottom: "1px solid ".concat(theme.palette.grey[10]),
        boxShadow: !isSticky && 'none',
        marginBottom: theme.spacing(3),
        padding: 0,
        position: isSticky ? 'fixed' : 'static',
        top: headerOffset,
        right: 0,
        textAlign: 'center',
        width: '100%',
        zIndex: 2,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: theme.transitions.create('opacity', {
          duration: theme.transitions.duration.shortest
        })
      };
    },
    divider: function divider(_ref2) {
      var isSticky = _ref2.isSticky;
      return {
        backgroundColor: isSticky ? theme.palette.grey[10] : 'transparent',
        marginTop: isSticky ? 0 : theme.spacing(2)
      };
    },
    buttons: {
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.lg
    }
  };
}, {
  classNamePrefix: 'PlanCompareNav'
});

var PlanCompareNav = function PlanCompareNav(_ref3) {
  var activePlanIndex = _ref3.activePlanIndex,
      discountPrices = _ref3.discountPrices,
      handleChange = _ref3.handleChange,
      _handleClick = _ref3.handleClick,
      headerOffset = _ref3.headerOffset,
      selectedBillingFrequency = _ref3.selectedBillingFrequency,
      visiblePlanLevels = _ref3.visiblePlanLevels,
      useButton = _ref3.useButton,
      isSticky = _ref3.isSticky,
      isVisible = _ref3.isVisible;
  var classes = useStyles({
    headerOffset: headerOffset,
    isSticky: isSticky,
    isVisible: isVisible
  });
  return /*#__PURE__*/_react.default.createElement(_ui.ShadowBox, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_PlanFrequencySwitch.default, {
    selectedBillingFrequency: selectedBillingFrequency,
    handleChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    className: classes.divider
  }), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    role: "tablist",
    container: true,
    justify: visiblePlanLevels.length === 2 ? 'center' : 'flex-start',
    className: classes.buttons
  }, visiblePlanLevels.map(function (planLevel, i) {
    return /*#__PURE__*/_react.default.createElement(_PlanCompareButton.default, {
      key: planLevel,
      isActive: i === activePlanIndex,
      isSticky: isSticky,
      handleClick: function handleClick() {
        return _handleClick(i);
      },
      monthlyPrice: discountPrices[planLevel].monthly,
      planLevel: planLevel,
      useButton: useButton,
      width: 12 / visiblePlanLevels.length === 12 ? 12 : 4
    });
  })));
};

PlanCompareNav.propTypes = {
  activePlanIndex: _propTypes.default.number.isRequired,
  discountPrices: _propTypes.default.shape({}).isRequired,
  handleChange: _propTypes.default.func.isRequired,
  handleClick: _propTypes.default.func.isRequired,
  headerOffset: _propTypes.default.number.isRequired,
  selectedBillingFrequency: _propTypes.default.oneOf([_constants.PLAN_PERIODS.MONTHLY, _constants.PLAN_PERIODS.ANNUAL]).isRequired,
  visiblePlanLevels: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  useButton: _propTypes.default.bool.isRequired,
  isSticky: _propTypes.default.bool,
  isVisible: _propTypes.default.bool
};
PlanCompareNav.defaultProps = {
  isSticky: false,
  isVisible: true
};
var _default = PlanCompareNav;
exports.default = _default;