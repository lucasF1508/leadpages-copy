'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');
var Button = _interopDefault(require('../Button'));
var Link = _interopDefault(require('../Link'));
var CopyLink = _interopDefault(require('../CopyLink'));
var Modal = require('../Modal');
var Theme = require('../Theme');

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n\n  &:visited {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  ", ";\n  margin-top: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  margin: 16px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  max-width: 600px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var modalClass = emotion.css(_templateObject());
var infoClass = emotion.css(_templateObject2());
var supportClass = emotion.css(_templateObject3(), Theme.typographyDefs.supportContent);
var linkClass = emotion.css(_templateObject4(), Theme.typographyDefs.supportContent, Theme.colors.greyDarker, Theme.colors.greyDarker);

var SharePage = function SharePage(_ref) {
  var isOpen = _ref.isOpen,
      shareUrl = _ref.shareUrl,
      onClose = _ref.onClose,
      serviceTermsUrl = _ref.serviceTermsUrl;
  return React.createElement(Modal.Modal, {
    ariaHideApp: false,
    className: modalClass,
    isOpen: isOpen,
    onRequestClose: onClose
  }, React.createElement(Modal.ModalHeader, {
    onClose: onClose,
    title: "Share Page Template"
  }), React.createElement(Modal.ModalBody, null, React.createElement("p", {
    className: infoClass
  }, "This unique url allows you to share your customized version of this template with anyone, even if they're not a Leadpages customer."), React.createElement(CopyLink, {
    "data-qa-selector": "share-page-url",
    linkToCopy: shareUrl
  }), React.createElement("p", {
    className: supportClass
  }, "By sharing this page, you are agreeing to our", ' ', React.createElement(Link, {
    "data-qa-selector": "share-page-service-terms",
    className: linkClass,
    target: "_blank",
    href: serviceTermsUrl
  }, "terms of service"), ' ', "and acknowledging that you own all content on the page.")), React.createElement(Modal.ModalFooter, null, React.createElement(Button, {
    "data-qa-selector": "share-page-done",
    onClick: onClose
  }, "Done")));
};

SharePage.propTypes = {
  isOpen: PropTypes.bool,
  shareUrl: PropTypes.string.isRequired,
  serviceTermsUrl: PropTypes.string.isRequired
};
SharePage.defaultProps = {
  isOpen: false
};

module.exports = SharePage;
