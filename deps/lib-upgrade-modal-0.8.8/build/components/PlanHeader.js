"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.hideTopBorderClass = exports.hideBottomBorderClass = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _CtaButton = _interopRequireDefault(require("./CtaButton"));

var _constants = require("../constants");

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-family: 'Value Serif';\n  font-size: 40px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  line-height: 48px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  padding: 0 32px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 14px;\n  line-height: 20px;\n  padding-left: 12px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  margin: 12px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding-left: 32px;\n  padding-top: 18px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  border-top: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  border-bottom: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  color: ", ";\n  padding-bottom: 20px;\n  height: 100%;\n  border-left: 1px solid ", ";\n  text-align: left;\n  border-bottom: none;\n  border-top: none;\n  border-right: none;\n  max-width: 300px;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var planHeaderColumnClass = (0, _emotion.css)(_templateObject(), _constants.COLORS.text.redGrey, _constants.COLORS.border.midGrey);
var hideBottomBorderClass = (0, _emotion.css)(_templateObject2());
exports.hideBottomBorderClass = hideBottomBorderClass;
var hideTopBorderClass = (0, _emotion.css)(_templateObject3());
exports.hideTopBorderClass = hideTopBorderClass;
var planTitleClass = (0, _emotion.css)(_templateObject4());
var planSubtitleClass = (0, _emotion.css)(_templateObject5());
var planDescriptionClass = (0, _emotion.css)(_templateObject6(), _constants.COLORS.text.redGrey);
var planPriceContainerClass = (0, _emotion.css)(_templateObject7());
var planPriceClass = (0, _emotion.css)(_templateObject8());
var upgradeButtonContainerClass = (0, _emotion.css)(_templateObject9());

var PlanHeader = function PlanHeader(_ref) {
  var title = _ref.title,
      price = _ref.price,
      columnClass = _ref.columnClass,
      planLabel = _ref.planLabel,
      planLabelClass = _ref.planLabelClass,
      payLabel = _ref.payLabel,
      buttonLabel = _ref.buttonLabel,
      ctaAction = _ref.ctaAction,
      showButton = _ref.showButton,
      isHighlighted = _ref.isHighlighted,
      isCurrentPlan = _ref.isCurrentPlan,
      hideTopBorder = _ref.hideTopBorder,
      hideBottomBorder = _ref.hideBottomBorder,
      planDescription = _ref.planDescription,
      isBottom = _ref.isBottom;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)([columnClass, isBottom && 'no-border-bottom'])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)([planHeaderColumnClass, 'has-right-border', isHighlighted ? 'highlighted' : '', hideTopBorder ? hideTopBorderClass : '', isBottom ? hideBottomBorderClass : '']),
    "data-qa-selector": "container"
  }, !isBottom && /*#__PURE__*/_react.default.createElement("div", {
    className: planLabelClass,
    "data-qa-selector": "plan-label"
  }, planLabel), /*#__PURE__*/_react.default.createElement("div", {
    className: planTitleClass,
    "data-qa-selector": "plan-title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: planPriceContainerClass,
    "data-qa-selector": "plan-price-holder"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: planPriceClass,
    "data-qa-selector": "plan-price"
  }, "$", price), /*#__PURE__*/_react.default.createElement("div", {
    className: planSubtitleClass,
    "data-qa-selector": "plan-price-frequency"
  }, /*#__PURE__*/_react.default.createElement("div", null, "per month,"), /*#__PURE__*/_react.default.createElement("div", {
    "data-qa-selector": "pay-label"
  }, payLabel))), showButton && buttonLabel && /*#__PURE__*/_react.default.createElement("div", {
    className: upgradeButtonContainerClass,
    "data-qa-selector": "upgrade-button-container"
  }, /*#__PURE__*/_react.default.createElement(_CtaButton.default, {
    labelText: buttonLabel,
    isPrimary: isHighlighted,
    onClick: ctaAction,
    buttonProps: {
      'data-qa-selector': "".concat(title.toLowerCase(), "-header-upgrade-button")
    }
  })), planDescription && !isBottom && /*#__PURE__*/_react.default.createElement("div", {
    className: planDescriptionClass,
    "data-qa-selector": "plan-description"
  }, planDescription)));
};

PlanHeader.propTypes = {
  title: _propTypes.default.string.isRequired,
  price: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  columnClass: _propTypes.default.string,
  planLabel: _propTypes.default.string,
  planLabelClass: _propTypes.default.string,
  ctaAction: _propTypes.default.func,
  isHighlighted: _propTypes.default.bool,
  isCurrentPlan: _propTypes.default.bool,
  showButton: _propTypes.default.bool,
  buttonLabel: _propTypes.default.string,
  hideTopBorder: _propTypes.default.bool,
  hideBottomBorder: _propTypes.default.bool
};
PlanHeader.defaultProps = {
  columnClass: '',
  planLabel: '',
  planLabelClass: '',
  isHighlighted: false,
  isCurrentPlan: false,
  showButton: false,
  buttonLabel: 'Upgrade',
  hideTopBorder: false,
  hideBottomBorder: true,
  ctaAction: function ctaAction() {}
};
var _default = PlanHeader;
exports.default = _default;