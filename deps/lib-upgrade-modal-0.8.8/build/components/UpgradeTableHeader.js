"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _Tooltip_MediumNavy = _interopRequireDefault(require("./Tooltips/Tooltip_MediumNavy"));

var _constants = require("../constants");

var _PlanHeader = _interopRequireDefault(require("./PlanHeader"));

var _RadioButtonGroup = _interopRequireDefault(require("./RadioButtonGroup"));

var _PlanFeatureRow = require("./PlanFeatureRow");

var _billingOptions;

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  border: none;\n  align-items: center;\n  align-self: center;\n\n  //overriding a leads v3 override\n  & .tip {\n    color: #ffffff !important;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  background-color: #d1c6f9;\n  color: #0b236d;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  height: 36px;\n  color: ", ";\n  font-size: 12px;\n  line-height: 36px;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var billingOptions = (_billingOptions = {}, (0, _defineProperty2.default)(_billingOptions, _constants.PLAN_PERIODS.MONTHLY, {
  label: 'Monthly',
  value: _constants.PLAN_PERIODS.MONTHLY,
  id: 'monthly',
  footnote: 'paid monthly'
}), (0, _defineProperty2.default)(_billingOptions, _constants.PLAN_PERIODS.ANNUAL, {
  label: 'Annual',
  value: _constants.PLAN_PERIODS.ANNUAL,
  id: 'annual',
  footnote: 'paid annually'
}), _billingOptions);
var planHeaderLabelClass = (0, _emotion.css)(_templateObject(), _constants.COLORS.text.tundora);
var mostPopularClass = (0, _emotion.css)(_templateObject2(), planHeaderLabelClass);
var planHeaderControlsClass = (0, _emotion.css)(_templateObject3());
var tableRowClass = (0, _emotion.css)(_templateObject4());

var makePlanHeader = function makePlanHeader(_ref) {
  var title = _ref.title,
      _ref$plan = _ref.plan,
      id = _ref$plan.id,
      planLevel = _ref$plan.planLevel,
      period = _ref$plan.period,
      description = _ref$plan.description,
      monthlyPrice = _ref$plan.monthlyPrice,
      isCurrentPlan = _ref$plan.isCurrentPlan,
      buttonText = _ref$plan.buttonText,
      payLabel = _ref.payLabel,
      _ref$planLabelDefault = _ref.planLabelDefault,
      planLabelDefault = _ref$planLabelDefault === void 0 ? '' : _ref$planLabelDefault,
      tableColumnClass = _ref.tableColumnClass,
      _ref$isHighlighted = _ref.isHighlighted,
      isHighlighted = _ref$isHighlighted === void 0 ? false : _ref$isHighlighted,
      showButton = _ref.showButton,
      onSelectPlan = _ref.onSelectPlan,
      isBottom = _ref.isBottom;
  return /*#__PURE__*/_react.default.createElement(_PlanHeader.default, {
    key: id,
    title: title,
    planDescription: description,
    price: monthlyPrice,
    columnClass: tableColumnClass,
    planLabel: isCurrentPlan ? 'Current Plan' : planLabelDefault,
    planLabelClass: isHighlighted ? mostPopularClass : planHeaderLabelClass,
    showButton: showButton,
    ctaAction: function ctaAction(e) {
      e.preventDefault();

      if (window.LPEvents) {
        window.LPEvents.track('Clicked upgrade', {
          Source: 'Upgrade modal'
        });
      }

      onSelectPlan(id, planLevel, period);
    },
    buttonLabel: buttonText,
    payLabel: payLabel,
    isCurrentPlan: isCurrentPlan,
    isHighlighted: isHighlighted,
    hideTopBorder: isBottom,
    hideBottomBorder: !isBottom,
    isBottom: isBottom
  });
};

var UpgradeTableHeader = function UpgradeTableHeader(_ref2) {
  var plans = _ref2.plans,
      activePlanLevels = _ref2.activePlanLevels,
      rootPlans = _ref2.rootPlans,
      selectedValue = _ref2.selectedValue,
      tableItemClass = _ref2.tableItemClass,
      tableColumnClass = _ref2.tableColumnClass,
      onChange = _ref2.onChange,
      showButtons = _ref2.showButtons,
      onSelectPlan = _ref2.onSelectPlan,
      isBottom = _ref2.isBottom;
  var options = {
    tableColumnClass: tableColumnClass,
    onSelectPlan: onSelectPlan,
    showButton: showButtons,
    payLabel: selectedValue ? billingOptions[selectedValue].footnote : '',
    isBottom: isBottom
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: tableRowClass,
    "data-qa-selector": "header-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)([tableColumnClass, _PlanFeatureRow.wide, isBottom && 'no-border-bottom'])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)(planHeaderControlsClass, 'annual-tip')
  }, /*#__PURE__*/_react.default.createElement(_Tooltip_MediumNavy.default, {
    title: _constants.VERBIAGE.upgradeTableHeader.annualDiscount,
    open: selectedValue === _constants.PLAN_PERIODS.MONTHLY,
    PopperProps: {
      disablePortal: true,
      popperOptions: {
        modifiers: {
          flip: {
            enabled: false
          },
          preventOverflow: {
            enabled: false,
            boundariesElement: 'scrollParent'
          }
        }
      }
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_RadioButtonGroup.default, {
    items: billingOptions,
    onChange: onChange,
    selectedValue: selectedValue,
    rootPlans: rootPlans,
    isBottom: isBottom
  }))))), activePlanLevels.map(function (plan) {
    return makePlanHeader((0, _objectSpread2.default)({
      title: plan.charAt(0).toUpperCase() + plan.slice(1),
      plan: plans[plan],
      planLabelDefault: plan === 'pro' ? 'Most Popular' : '',
      isHighlighted: plan === 'pro'
    }, options));
  }));
};

UpgradeTableHeader.propTypes = {
  tableItemClass: _propTypes.default.string,
  tableColumnClass: _propTypes.default.string,
  plans: _propTypes.default.object.isRequired,
  selectedValue: _propTypes.default.string,
  showButtons: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired,
  onSelectPlan: _propTypes.default.func,
  isBottom: _propTypes.default.bool
};
UpgradeTableHeader.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
  showButtons: false,
  selectedValue: '',
  onSelectPlan: null,
  isBottom: false
};
var _default = UpgradeTableHeader;
exports.default = _default;