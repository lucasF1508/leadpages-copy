import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Value Serif';\n  font-size: 40px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  line-height: 48px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  padding: 0 32px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  line-height: 20px;\n  padding-left: 12px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  margin: 12px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding-left: 32px;\n  padding-top: 18px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-top: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  padding-bottom: 20px;\n  height: 100%;\n  border-left: 1px solid ", ";\n  text-align: left;\n  border-bottom: none;\n  border-top: none;\n  border-right: none;\n  max-width: 300px;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import CtaButton from './CtaButton';
import { COLORS } from '../constants';
var planHeaderColumnClass = css(_templateObject(), COLORS.text.redGrey, COLORS.border.midGrey);
export var hideBottomBorderClass = css(_templateObject2());
export var hideTopBorderClass = css(_templateObject3());
var planTitleClass = css(_templateObject4());
var planSubtitleClass = css(_templateObject5());
var planDescriptionClass = css(_templateObject6(), COLORS.text.redGrey);
var planPriceContainerClass = css(_templateObject7());
var planPriceClass = css(_templateObject8());
var upgradeButtonContainerClass = css(_templateObject9());

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
  return /*#__PURE__*/React.createElement("div", {
    className: cx([columnClass, isBottom && 'no-border-bottom'])
  }, /*#__PURE__*/React.createElement("div", {
    className: cx([planHeaderColumnClass, 'has-right-border', isHighlighted ? 'highlighted' : '', hideTopBorder ? hideTopBorderClass : '', isBottom ? hideBottomBorderClass : '']),
    "data-qa-selector": "container"
  }, !isBottom && /*#__PURE__*/React.createElement("div", {
    className: planLabelClass,
    "data-qa-selector": "plan-label"
  }, planLabel), /*#__PURE__*/React.createElement("div", {
    className: planTitleClass,
    "data-qa-selector": "plan-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: planPriceContainerClass,
    "data-qa-selector": "plan-price-holder"
  }, /*#__PURE__*/React.createElement("div", {
    className: planPriceClass,
    "data-qa-selector": "plan-price"
  }, "$", price), /*#__PURE__*/React.createElement("div", {
    className: planSubtitleClass,
    "data-qa-selector": "plan-price-frequency"
  }, /*#__PURE__*/React.createElement("div", null, "per month,"), /*#__PURE__*/React.createElement("div", {
    "data-qa-selector": "pay-label"
  }, payLabel))), showButton && buttonLabel && /*#__PURE__*/React.createElement("div", {
    className: upgradeButtonContainerClass,
    "data-qa-selector": "upgrade-button-container"
  }, /*#__PURE__*/React.createElement(CtaButton, {
    labelText: buttonLabel,
    isPrimary: isHighlighted,
    onClick: ctaAction,
    buttonProps: {
      'data-qa-selector': "".concat(title.toLowerCase(), "-header-upgrade-button")
    }
  })), planDescription && !isBottom && /*#__PURE__*/React.createElement("div", {
    className: planDescriptionClass,
    "data-qa-selector": "plan-description"
  }, planDescription)));
};

PlanHeader.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  columnClass: PropTypes.string,
  planLabel: PropTypes.string,
  planLabelClass: PropTypes.string,
  ctaAction: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isCurrentPlan: PropTypes.bool,
  showButton: PropTypes.bool,
  buttonLabel: PropTypes.string,
  hideTopBorder: PropTypes.bool,
  hideBottomBorder: PropTypes.bool
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
export default PlanHeader;