"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _constants = require("../constants");

var _PlanFeatureRow = _interopRequireDefault(require("./PlanFeatureRow"));

var _UpgradeTableHeader = _interopRequireDefault(require("./UpgradeTableHeader"));

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  margin: 24px auto;\n  font-size: 12px;\n  font-style: italic;\n  color: #878584;\n  opacity: 0.9;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  border-bottom: 1px solid ", ";\n  display: flex;\n  flex: 1 0 168px;\n  align-items: center;\n  justify-content: center;\n\n  &.css-", " {\n    border: none;\n  }\n\n  &:last-child {\n    & .has-right-border {\n      border-right: 1px solid ", ";\n    }\n  }\n\n  &.no-border-bottom {\n    border-bottom: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  border-left: 1px solid ", ";\n  padding: 18px 0 12px;\n  width: 100%;\n  max-width: 300px;\n\n  svg path {\n    fill: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex !important;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Apercu Pro';\n  font-size: 15px;\n  font-weight: 400;\n  text-align: center;\n  max-width: 990px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 119px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var tableContainerClass = (0, _emotion.css)(_templateObject());
var tableItemBaseClass = (0, _emotion.css)(_templateObject2());
var tableItemClass = (0, _emotion.css)(_templateObject3(), tableItemBaseClass, _constants.COLORS.border.midGrey, _constants.COLORS.main.primary);
var headerClass = (0, _emotion.css)(_templateObject4());
var tableColumnClass = (0, _emotion.css)(_templateObject5(), _constants.COLORS.border.midGrey, headerClass.name, _constants.COLORS.border.midGrey);
var tableRowClass = (0, _emotion.css)(_templateObject6());
var tableHeaderContainerClass = (0, _emotion.css)(_templateObject7());
var taxNoteClass = (0, _emotion.css)(_templateObject8());

var LegacyPlanCompareTable = function LegacyPlanCompareTable(_ref) {
  var features = _ref.features,
      plans = _ref.plans,
      onSelectPlan = _ref.onSelectPlan,
      planOrder = _ref.planOrder,
      defaultBillingFrequency = _ref.defaultBillingFrequency;

  var _useState = (0, _react.useState)(defaultBillingFrequency),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedBillingFrequency = _useState2[0],
      setSelectedBillingFrequency = _useState2[1];

  var visiblePlans = plans[selectedBillingFrequency];
  var visiblePlanLevels = visiblePlans ? Object.keys(visiblePlans).sort(function (levelA, levelB) {
    var a = visiblePlans[levelA].price;
    var b = visiblePlans[levelB].price;

    if (planOrder === 'ascending') {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }
    } else if (planOrder === 'descending') {
      if (a < b) {
        return 1;
      }

      if (a > b) {
        return -1;
      }
    }

    return 0;
  }) : [];

  var handleChange = function handleChange(event) {
    setSelectedBillingFrequency(event.target.value);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'billingFrequencyToggled',
      switchTo: event.target.value
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)('compare-table-container', tableContainerClass)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: tableHeaderContainerClass
  }, /*#__PURE__*/_react.default.createElement(_UpgradeTableHeader.default, {
    onChange: handleChange,
    selectedValue: selectedBillingFrequency,
    tableItemClass: tableItemClass,
    tableColumnClass: tableColumnClass,
    plans: visiblePlans,
    activePlanLevels: visiblePlanLevels,
    rootPlans: plans,
    onSelectPlan: onSelectPlan,
    showButtons: true
  })), features && features.map(function (_ref2, index) {
    var label = _ref2.label,
        subLabel = _ref2.subLabel,
        tooltip = _ref2.tooltip,
        plans = _ref2.plans;
    return /*#__PURE__*/_react.default.createElement(_PlanFeatureRow.default, {
      key: index,
      label: label,
      subLabel: subLabel,
      tooltip: tooltip,
      selectedBillingFrequency: selectedBillingFrequency,
      plans: plans,
      activePlanLevels: visiblePlanLevels,
      tableColumnClass: tableColumnClass,
      tableRowClass: tableRowClass,
      tableItemClass: tableItemClass
    });
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: tableHeaderContainerClass
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: tableHeaderContainerClass
  }, /*#__PURE__*/_react.default.createElement(_UpgradeTableHeader.default, {
    onChange: handleChange,
    selectedValue: selectedBillingFrequency,
    tableItemClass: tableItemClass,
    tableColumnClass: tableColumnClass,
    plans: visiblePlans,
    activePlanLevels: visiblePlanLevels,
    onSelectPlan: onSelectPlan,
    showButtons: true,
    rootPlans: plans,
    isBottom: true
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: taxNoteClass
  }, "Taxes may apply, where applicable")));
};

LegacyPlanCompareTable.propTypes = {
  features: _propTypes.default.array,
  plans: _propTypes.default.object,
  onSelectPlan: _propTypes.default.func.isRequired,
  planOrder: _propTypes.default.oneOf(['ascending', 'descending']),
  defaultBillingFrequency: _propTypes.default.oneOf([_constants.PLAN_PERIODS.ANNUAL, _constants.PLAN_PERIODS.MONTHLY])
};
LegacyPlanCompareTable.defaultProps = {
  plans: _constants.ALL_PLANS,
  features: _constants.FEATURES,
  planOrder: 'ascending',
  defaultBillingFrequency: _constants.PLAN_PERIODS.ANNUAL
};
var _default = LegacyPlanCompareTable;
exports.default = _default;