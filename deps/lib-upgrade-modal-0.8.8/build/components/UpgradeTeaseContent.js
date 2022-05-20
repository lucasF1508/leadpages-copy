"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _constants = require("../constants");

var _CheckSvg = _interopRequireDefault(require("./CheckSvg"));

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 15px;\n  line-height: 24px;\n  margin-top: 28px;\n\n  a, a:visited {\n    color: ", ";\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-end;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  flex: 0 0;\n\n  img {\n    max-width: 90%;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 42px;\n  height: 42px;\n  width: 300px;\n  border: 3px solid ", ";\n  border-radius: 32px;\n  background: ", ";\n  color: #ffffff;\n  font-weight: 400;\n  font-size: 19px;\n  margin-top: 13px;\n  margin-bottom: 13px;\n  text-align: center;\n  text-decoration: none;\n  padding: 0;\n  letter-spacing: 0.5px;\n\n  &:active,\n  &:hover,\n  &:visited {\n    color: #ffffff;\n  }\n\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 13px;\n  line-height: 18px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding-right: 20px;\n\n  svg {\n    margin-top: 5px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: row;\n  font-size: 19px;\n  font-weight: 300;\n  line-height: 28px;\n  margin-bottom: 20px;\n  list-style-type: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 60px 30px;\n  background: #ffffff;\n  text-align: center;\n  color: ", ";\n  flex: 1 1 50%;\n  justify-content: center;\n  box-sizing: border-box;\n\n  h2 {\n    color: ", ";\n    font-size: 19px;\n    font-weight: 500;\n    line-height: 24px;\n    padding: 6px 0;\n  }\n\n  ul {\n    margin-top: 40px;\n    margin-bottom: 50px;\n    padding-left: 0;\n    text-align: left;\n  }\n\n  @media (min-width: 992px) {\n    width: 50%;\n    padding: 0 48px;\n    text-align: left;\n\n    h2 {\n      font-size: 23px;\n      line-height: 32px;\n    }\n\n    ul {\n      max-width: 475px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  padding-top: 30px;\n  flex: 1 1 50%;\n  box-sizing: border-box;\n  justify-content: flex-end;\n\n  h1 {\n    width: 90%;\n    font-family: 'Value Serif';\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 36px;\n    letter-spacing: -0.5px;\n    margin: 0 auto !important;\n    flex: 1 1;\n    display: flex;\n    align-items: center;\n  }\n\n  @media (max-width: 991.98px) {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: row;\n  background: ", ";\n  color: ", ";\n  font-family: 'Apercu Pro';\n  font-size: 17px;\n  font-weight: 400;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var containerClass = (0, _emotion.css)(_templateObject(), _constants.COLORS.main.secondary, _constants.COLORS.main.dark);
var promoContainerClass = (0, _emotion.css)(_templateObject2());
var mainContentClass = (0, _emotion.css)(_templateObject3(), _constants.COLORS.text.tundora, _constants.COLORS.main.dark);
var descriptionClass = (0, _emotion.css)(_templateObject4());
var listItemClass = (0, _emotion.css)(_templateObject5());
var iconWrapper = (0, _emotion.css)(_templateObject6());
var ctaCaptionClassDefault = (0, _emotion.css)(_templateObject7());
var ctaButtonClassDefault = (0, _emotion.css)(_templateObject8(), _constants.COLORS.main.primary, _constants.COLORS.main.primary, _constants.COLORS.alt.primaryHover, _constants.COLORS.alt.primaryHover);
var imageContainerClass = (0, _emotion.css)(_templateObject9());
var learnMoreContainerClass = (0, _emotion.css)(_templateObject10(), _constants.COLORS.main.primary);
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
  (0, _react.useEffect)(function () {
    if (window.LPEvents) {
      window.LPEvents.trackLinks("#".concat(upgradeTrackingId), 'Opened upgrade modal', {
        Source: 'Upgrade tease',
        Product: productName
      });
    }
  }, [productName]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: containerClass
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: promoContainerClass
  }, /*#__PURE__*/_react.default.createElement("h1", null, headline), /*#__PURE__*/_react.default.createElement("div", {
    className: imageContainerClass
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "".concat(mediaUrl).concat(image),
    alt: "feature illustration",
    "data-qa-selector": "promo-image"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: mainContentClass
  }, subheadline && /*#__PURE__*/_react.default.createElement("h2", null, subheadline), description && /*#__PURE__*/_react.default.createElement("p", {
    className: descriptionClass
  }, description), listItems && /*#__PURE__*/_react.default.createElement("ul", null, listItems.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: listItemClass,
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: iconWrapper
    }, /*#__PURE__*/_react.default.createElement(_CheckSvg.default, null)), /*#__PURE__*/_react.default.createElement("div", null, " ", item));
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    className: (0, _emotion.cx)([ctaButtonClassDefault, ctaButtonClass]),
    href: ctaLink,
    "data-qa-selector": "cta-link"
  }, ctaLabel, " ", /*#__PURE__*/_react.default.createElement(_ChevronRight.default, null)), ctaCaption && /*#__PURE__*/_react.default.createElement("p", {
    className: (0, _emotion.cx)(ctaCaptionClassDefault, ctaCaptionClass)
  }, ctaCaption), learnMoreLink && /*#__PURE__*/_react.default.createElement("div", {
    className: learnMoreContainerClass
  }, /*#__PURE__*/_react.default.createElement("a", {
    id: upgradeTrackingId,
    href: learnMoreLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn More ", /*#__PURE__*/_react.default.createElement(_ChevronRight.default, null))))));
};

UpgradeTeaseContent.propTypes = {
  headline: _propTypes.default.string.isRequired,
  subheadline: _propTypes.default.string,
  description: _propTypes.default.string,
  image: _propTypes.default.string.isRequired,
  listItems: _propTypes.default.arrayOf(_propTypes.default.string),
  ctaButtonClass: _propTypes.default.string,
  ctaCaptionClass: _propTypes.default.string,
  ctaLabel: _propTypes.default.string.isRequired,
  ctaLink: _propTypes.default.string.isRequired,
  learnMoreLink: _propTypes.default.string,
  ctaCaption: _propTypes.default.string,
  mediaUrl: _propTypes.default.string
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
var _default = UpgradeTeaseContent;
exports.default = _default;