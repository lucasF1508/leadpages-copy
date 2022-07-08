import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-size: 15px;\n  line-height: 24px;\n  margin-top: 28px;\n\n  a, a:visited {\n    color: ", ";\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-end;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  flex: 0 0;\n\n  img {\n    max-width: 90%;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 42px;\n  height: 42px;\n  width: 300px;\n  border: 3px solid ", ";\n  border-radius: 32px;\n  background: ", ";\n  color: #ffffff;\n  font-weight: 400;\n  font-size: 19px;\n  margin-top: 13px;\n  margin-bottom: 13px;\n  text-align: center;\n  text-decoration: none;\n  padding: 0;\n  letter-spacing: 0.5px;\n\n  &:active,\n  &:hover,\n  &:visited {\n    color: #ffffff;\n  }\n\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  line-height: 18px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding-right: 20px;\n\n  svg {\n    margin-top: 5px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  font-size: 19px;\n  font-weight: 300;\n  line-height: 28px;\n  margin-bottom: 20px;\n  list-style-type: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 60px 30px;\n  background: #ffffff;\n  text-align: center;\n  color: ", ";\n  flex: 1 1 50%;\n  justify-content: center;\n  box-sizing: border-box;\n\n  h2 {\n    color: ", ";\n    font-size: 19px;\n    font-weight: 500;\n    line-height: 24px;\n    padding: 6px 0;\n  }\n\n  ul {\n    margin-top: 40px;\n    margin-bottom: 50px;\n    padding-left: 0;\n    text-align: left;\n  }\n\n  @media (min-width: 992px) {\n    width: 50%;\n    padding: 0 48px;\n    text-align: left;\n\n    h2 {\n      font-size: 23px;\n      line-height: 32px;\n    }\n\n    ul {\n      max-width: 475px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  padding-top: 30px;\n  flex: 1 1 50%;\n  box-sizing: border-box;\n  justify-content: flex-end;\n\n  h1 {\n    width: 90%;\n    font-family: 'Value Serif';\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 36px;\n    letter-spacing: -0.5px;\n    margin: 0 auto !important;\n    flex: 1 1;\n    display: flex;\n    align-items: center;\n  }\n\n  @media (max-width: 991.98px) {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  background: ", ";\n  color: ", ";\n  font-family: 'Apercu Pro';\n  font-size: 17px;\n  font-weight: 400;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { COLORS } from '../constants';
import CheckSvg from './CheckSvg';
var containerClass = css(_templateObject(), COLORS.main.secondary, COLORS.main.dark);
var promoContainerClass = css(_templateObject2());
var mainContentClass = css(_templateObject3(), COLORS.text.tundora, COLORS.main.dark);
var descriptionClass = css(_templateObject4());
var listItemClass = css(_templateObject5());
var iconWrapper = css(_templateObject6());
var ctaCaptionClassDefault = css(_templateObject7());
var ctaButtonClassDefault = css(_templateObject8(), COLORS.main.primary, COLORS.main.primary, COLORS.alt.primaryHover, COLORS.alt.primaryHover);
var imageContainerClass = css(_templateObject9());
var learnMoreContainerClass = css(_templateObject10(), COLORS.main.primary);
var upgradeTrackingId = 'upgrade-tease-content';

var UpgradeTeaseContent = function UpgradeTeaseContent(_ref) {
  var headline = _ref.headline,
      subheadline = _ref.subheadline,
      description = _ref.description,
      image = _ref.image,
      listItems = _ref.listItems,
      ctaLabel = _ref.ctaLabel,
      ctaLink = _ref.ctaLink,
      ctaCaption = _ref.ctaCaption,
      mediaUrl = _ref.mediaUrl,
      ctaButtonClass = _ref.ctaButtonClass,
      ctaCaptionClass = _ref.ctaCaptionClass,
      learnMoreLink = _ref.learnMoreLink,
      productName = _ref.productName;
  useEffect(function () {
    if (window.LPEvents) {
      window.LPEvents.trackLinks("#".concat(upgradeTrackingId), 'Opened upgrade modal', {
        Source: 'Upgrade tease',
        Product: productName
      });
    }
  }, [productName]);
  return /*#__PURE__*/React.createElement("div", {
    className: containerClass
  }, /*#__PURE__*/React.createElement("div", {
    className: promoContainerClass
  }, /*#__PURE__*/React.createElement("h1", null, headline), /*#__PURE__*/React.createElement("div", {
    className: imageContainerClass
  }, /*#__PURE__*/React.createElement("img", {
    src: "".concat(mediaUrl).concat(image),
    alt: "feature illustration",
    "data-qa-selector": "promo-image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: mainContentClass
  }, subheadline && /*#__PURE__*/React.createElement("h2", null, subheadline), description && /*#__PURE__*/React.createElement("p", {
    className: descriptionClass
  }, description), listItems && /*#__PURE__*/React.createElement("ul", null, listItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: listItemClass,
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: iconWrapper
    }, /*#__PURE__*/React.createElement(CheckSvg, null)), /*#__PURE__*/React.createElement("div", null, " ", item));
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: cx([ctaButtonClassDefault, ctaButtonClass]),
    href: ctaLink,
    "data-qa-selector": "cta-link"
  }, ctaLabel, " ", /*#__PURE__*/React.createElement(ChevronRightIcon, null)), ctaCaption && /*#__PURE__*/React.createElement("p", {
    className: cx(ctaCaptionClassDefault, ctaCaptionClass)
  }, ctaCaption), learnMoreLink && /*#__PURE__*/React.createElement("div", {
    className: learnMoreContainerClass
  }, /*#__PURE__*/React.createElement("a", {
    id: upgradeTrackingId,
    href: learnMoreLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn More ", /*#__PURE__*/React.createElement(ChevronRightIcon, null))))));
};

UpgradeTeaseContent.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string),
  ctaButtonClass: PropTypes.string,
  ctaCaptionClass: PropTypes.string,
  ctaLabel: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  learnMoreLink: PropTypes.string,
  ctaCaption: PropTypes.string,
  mediaUrl: PropTypes.string
};
UpgradeTeaseContent.defaultProps = {
  subheadline: null,
  description: null,
  listItems: null,
  ctaCaption: null,
  mediaUrl: '',
  learnMoreLink: null,
  ctaButtonClass: '',
  ctaCaptionClass: ''
};
export default UpgradeTeaseContent;