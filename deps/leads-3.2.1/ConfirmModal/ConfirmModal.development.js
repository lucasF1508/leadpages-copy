'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');
var Button = _interopDefault(require('../Button'));
var IconButton = _interopDefault(require('../IconButton'));
var Modal = require('../Modal');

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

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  justify-content: center;\n  width: 100%;\n  padding: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  min-height: 50px;\n  display: flex;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  width: 360px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var defaultClassName = emotion.css(_templateObject());
var modalBodyClassName = emotion.css(_templateObject2());
var modalFooterClassName = emotion.css(_templateObject3());

var ConfirmModal = function ConfirmModal(_ref) {
  var aria = _ref.aria,
      ariaHideApp = _ref.ariaHideApp,
      className = _ref.className,
      cancelButtonText = _ref.cancelButtonText,
      confirmButtonText = _ref.confirmButtonText,
      children = _ref.children,
      isOpen = _ref.isOpen,
      onCanceled = _ref.onCanceled,
      onConfirmDelete = _ref.onConfirmDelete,
      ModalShell = _ref.component;
  return React.createElement(ModalShell, {
    aria: aria,
    ariaHideApp: ariaHideApp,
    className: emotion.cx(defaultClassName, className),
    isOpen: isOpen,
    onRequestClose: onCanceled
  }, React.createElement(Modal.ModalBody, {
    className: modalBodyClassName
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0
    }
  }, React.createElement(IconButton, {
    onClick: onCanceled,
    icon: "close",
    noBackground: true,
    noHoverBackground: true
  })), React.createElement("div", {
    style: {
      alignSelf: 'center'
    }
  }, children)), React.createElement(Modal.ModalFooter, {
    className: modalFooterClassName
  }, React.createElement(Button, {
    isSecondary: true,
    onClick: onCanceled
  }, cancelButtonText), React.createElement(Button, {
    isSecondary: true,
    onClick: onConfirmDelete
  }, confirmButtonText)));
};

ConfirmModal.propTypes = {
  aria: PropTypes.shape({}),
  ariaHideApp: PropTypes.bool,
  className: PropTypes.string,
  cancelButtonText: PropTypes.string,
  confirmButtonText: PropTypes.string,
  isOpen: PropTypes.bool,
  component: PropTypes.node
};
ConfirmModal.defaultProps = {
  aria: {},
  ariaHideApp: true,
  className: '',
  cancelButtonText: 'Cancel',
  confirmButtonText: 'Confirm',
  isOpen: false,
  component: Modal.Modal
};

module.exports = ConfirmModal;
