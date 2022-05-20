'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Modal = _interopDefault(require('react-modal'));
var IconButton = _interopDefault(require('../IconButton'));
var Theme = require('../Theme');
var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

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

function _templateObject18() {
  var data = taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  right: 0;\n\n  bottom: 0;\n  left: 0;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n  align-items: stretch;\n  justify-content: flex-start;\n\n  max-width: 100%;\n  height: 100%;\n  min-height: 0;\n  padding: 0;\n\n  transform: none;\n\n  background-color: white;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = taggedTemplateLiteral(["\n  overflow: hidden;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-content: stretch;\n  align-items: center;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n\n  height: 72px;\n  padding: 0 7px;\n\n  border-top: 1px solid ", ";\n  border-radius: 0 0 3px 3px;\n  background-color: ", ";\n\n  & button {\n    margin: 7px;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = taggedTemplateLiteral(["\n  ", "\n\n  min-height: 204px;\n  padding: 24px 36px;\n  flex-grow: 1;\n\n  & .is-hero {\n    height: 'inherit';\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = taggedTemplateLiteral(["\n  font-size: 38px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = taggedTemplateLiteral(["\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 50px 0 16px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = taggedTemplateLiteral(["\n  ", "\n\n  padding: 20px 0;\n  width: 100%;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n\n  display: flex;\n  align-content: stretch;\n  align-items: center;\n  flex-flow: column nowrap;\n  justify-content: center;\n\n  text-align: center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 24px 0 0;\n\n  ul {\n    flex: 0 0 51px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  cursor: pointer;\n\n  .is-hero & {\n    color: #fff;\n\n    &:hover {\n      color: #fff;\n      background-color: rgba(255, 255, 255, 0.2);\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = taggedTemplateLiteral(["\n  ", "\n\n  width: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral(["\n  ", "\n\n  width: 100%;\n\n  h1 {\n    ", "\n\n    width: 100%;\n    text-align: center;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n\n  display: flex;\n  align-content: stretch;\n  align-items: center;\n  flex-flow: column nowrap;\n  justify-content: center;\n\n  min-height: 72px;\n\n  :not(.no-background) {\n    padding: 0 12px;\n    border-bottom: 1px solid ", ";\n    background-color: ", ";\n  }\n\n  &.no-background {\n    padding: 24px 12px;\n  }\n\n  border-radius: 3px 3px 0 0;\n\n  &.is-hero {\n    height: 263px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  border-radius: 3px;\n\n  & h1 {\n    margin: 0;\n  }\n\n  .is-fullscreen & {\n    background-color: white;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  position: static;\n\n  flex: 0 1 810px;\n\n  width: 100%;\n\n  border-radius: 6px;\n  background-color: white;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n\n  .is-fullscreen & {\n    flex: none;\n    border-radius: 0;\n    box-shadow: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  z-index: 9001;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 9000;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: flex;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  width: 100%;\n  height: 100%;\n\n  transition: transform 0.5s ease, opacity 0.3s linear;\n  transform: translate3d(0, 0, 0);\n\n  background-color: rgba(2, 0, 32, 0.75);\n  backface-visibility: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 810px;\n  margin: auto;\n  padding: 25px 0;\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var grey = Theme.colors.grey,
    greyLighter = Theme.colors.greyLighter;
var bodyDefault = Theme.typographyDefs.bodyDefault,
    inPageHeading = Theme.typographyDefs.inPageHeading;
var defaultClassName = emotion.css(_templateObject());
var defaultOverlayClassName = emotion.css(_templateObject2());
var fullscreenOverlayClassName = emotion.css(_templateObject3());
var contentWrapperClassName = emotion.css(_templateObject4());
var contentClassName = emotion.css(_templateObject5());
var headerClassName = emotion.css(_templateObject6(), grey, greyLighter);
var headerContainerClassName = emotion.css(_templateObject7(), inPageHeading, inPageHeading);
var headerTitleClassName = emotion.css(_templateObject8(), inPageHeading);
var headerCloseButtonClassName = emotion.css(_templateObject9());
var headerTabsClassName = emotion.css(_templateObject10());
var iconHeaderClassName = emotion.css(_templateObject11());
var iconHeaderTitleClassName = emotion.css(_templateObject12(), inPageHeading);
var iconHeaderContainerClassName = emotion.css(_templateObject13());
var iconHeaderIconClassName = emotion.css(_templateObject14());
var bodyClassName = emotion.css(_templateObject15(), bodyDefault);
var footerClassName = emotion.css(_templateObject16(), grey, greyLighter);
var isOpenPageBodyClassName = emotion.css(_templateObject17());
var isFullscreenClassName = emotion.css(_templateObject18());

function _templateObject2$1() {
  var data = taggedTemplateLiteral(["\n      display: flex;\n      flex-direction: column;\n      height: ", ";\n    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = taggedTemplateLiteral(["\n      height: ", ";\n    "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var BaseModal = function BaseModal(_ref) {
  var _cx;

  var dataQaSelector = _ref['data-qa-selector'],
      aria = _ref.aria,
      ariaHideApp = _ref.ariaHideApp,
      children = _ref.children,
      className = _ref.className,
      contentLabel = _ref.contentLabel,
      isFullscreen = _ref.isFullscreen,
      isOpen = _ref.isOpen,
      onAfterOpen = _ref.onAfterOpen,
      onRequestClose = _ref.onRequestClose,
      overlayClassName = _ref.overlayClassName,
      fixedHeight = _ref.fixedHeight,
      inlineStyles = _ref.styles;
  var contentWrapperClass = emotion.cx(contentWrapperClassName, emotion.css(_templateObject$1(), fixedHeight));
  var contentClass = emotion.cx(contentClassName, emotion.css(_templateObject2$1(), fixedHeight));
  return React.createElement(Modal, {
    aria: aria,
    ariaHideApp: ariaHideApp,
    className: emotion.cx(defaultClassName, (_cx = {}, defineProperty(_cx, "".concat(className), className), defineProperty(_cx, "".concat(isFullscreenClassName), isFullscreen), defineProperty(_cx, 'is-fullscreen', isFullscreen), _cx)),
    bodyOpenClassName: isOpenPageBodyClassName,
    contentLabel: contentLabel,
    isOpen: isOpen,
    onAfterOpen: onAfterOpen,
    onRequestClose: onRequestClose,
    overlayClassName: emotion.cx(defaultOverlayClassName, overlayClassName, defineProperty({}, "".concat(fullscreenOverlayClassName), isFullscreen)),
    styles: inlineStyles
  }, React.createElement("div", {
    className: contentWrapperClass,
    "data-qa-selector": dataQaSelector
  }, React.createElement("div", {
    className: contentClass
  }, children)));
};

BaseModal.defaultProps = {
  'data-qa-selector': null,
  aria: {},
  ariaHideApp: true,
  className: '',
  contentLabel: 'Modal',
  isFullscreen: false,
  isOpen: true,
  onAfterOpen: function onAfterOpen() {},
  onRequestClose: function onRequestClose() {},
  fixedHeight: ''
};
BaseModal.propTypes = {
  'data-qa-selector': PropTypes.string,
  aria: PropTypes.shape({}),
  ariaHideApp: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentLabel: PropTypes.string,
  isFullscreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  fixedHeight: PropTypes.string
};

var Header = function Header(_ref) {
  var _cx;

  var children = _ref.children,
      tabs = _ref.tabs,
      onClose = _ref.onClose,
      _ref$isHero = _ref.isHero,
      isHero = _ref$isHero === void 0 ? false : _ref$isHero,
      _ref$noBackground = _ref.noBackground,
      noBackground = _ref$noBackground === void 0 ? false : _ref$noBackground,
      title = _ref.title,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      dataQaSelector = _ref['data-qa-selector'];
  return React.createElement("div", {
    className: emotion.cx(headerClassName, (_cx = {}, defineProperty(_cx, "".concat(className), className), defineProperty(_cx, "is-hero", isHero), defineProperty(_cx, 'no-background', noBackground), _cx)),
    "data-qa-selector": dataQaSelector
  }, React.createElement("div", {
    className: emotion.cx(headerContainerClassName, defineProperty({}, "".concat(headerTabsClassName), tabs))
  }, title ? React.createElement("h1", {
    className: headerTitleClassName
  }, " ", title, " ") : '', children, onClose ? React.createElement(IconButton, {
    tabIndex: "0",
    icon: "close",
    className: headerCloseButtonClassName,
    onClick: function onClick(e) {
      onClose(e);
    },
    "data-qa-selector": "close-button",
    noBackground: true
  }) : ''));
};
Header.defaultProps = {
  children: null,
  tabs: false,
  onClose: function onClose() {},
  isHero: false,
  title: '',
  className: '',
  'data-qa-selector': 'modal-header'
};
Header.propTypes = {
  children: PropTypes.node,
  tabs: PropTypes.bool,
  onClose: PropTypes.func,
  isHero: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  'data-qa-selector': PropTypes.string
};

function _templateObject2$2() {
  var data = taggedTemplateLiteral(["\n  &:before {\n    color: ", ";\n  }\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = taggedTemplateLiteral(["\n  background-color: ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var getContainerClass = function getContainerClass(bgColor) {
  return emotion.css(_templateObject$2(), bgColor);
};

var getIconClass = function getIconClass(color) {
  return emotion.css(_templateObject2$2(), color);
};

var IconHeader = function IconHeader(_ref) {
  var onClose = _ref.onClose,
      title = _ref.title,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      dataQaSelector = _ref['data-qa-selector'],
      _ref$iconConfig = _ref.iconConfig,
      iconConfig = _ref$iconConfig === void 0 ? {} : _ref$iconConfig;
  var color = iconConfig.color,
      bgColor = iconConfig.bgColor,
      icon = iconConfig.icon;
  return React.createElement("div", {
    "data-qa-selector": dataQaSelector,
    className: emotion.cx(iconHeaderClassName, className)
  }, React.createElement("div", {
    "data-qa-selector": "icon-container",
    className: emotion.cx(iconHeaderContainerClassName, getContainerClass(bgColor))
  }, React.createElement("div", {
    "data-qa-selector": "icon",
    className: emotion.cx('lp-icon', "lp-icon-".concat(icon), iconHeaderIconClassName, getIconClass(color))
  })), title && React.createElement("h1", {
    "data-qa-selector": "title",
    className: iconHeaderTitleClassName
  }, title), onClose && React.createElement(IconButton, {
    tabIndex: "0",
    icon: "close",
    className: headerCloseButtonClassName,
    onClick: function onClick(e) {
      onClose(e);
    },
    "data-qa-selector": "close-button",
    noBackground: true
  }));
};
IconHeader.defaultProps = {
  onClose: function onClose() {},
  title: '',
  className: '',
  'data-qa-selector': 'modal-icon-header',
  iconConfig: {
    bgColor: Theme.colors.purpleLighter,
    color: Theme.colors.purple,
    icon: 'like'
  }
};
IconHeader.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
  'data-qa-selector': PropTypes.string,
  iconConfig: PropTypes.shape({
    bgColor: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string
  })
};

var Footer = function Footer(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    className: emotion.cx(footerClassName, className)
  }, children);
};
Footer.defaultProps = {
  children: null,
  className: ''
};
Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var Body = function Body(_ref) {
  var _cx;

  var children = _ref.children,
      isHero = _ref.isHero,
      className = _ref.className,
      dataQaSelector = _ref['data-qa-selector'];
  return React.createElement("div", {
    className: emotion.cx(bodyClassName, (_cx = {}, defineProperty(_cx, "".concat(className), className), defineProperty(_cx, 'is-hero', isHero), _cx)),
    "data-qa-selector": dataQaSelector
  }, children);
};
Body.defaultProps = {
  children: null,
  className: '',
  isHero: false,
  'data-qa-selector': 'modal-body'
};
Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isHero: PropTypes.bool,
  'data-qa-selector': PropTypes.string
};

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function _templateObject$3() {
  var data = taggedTemplateLiteral(["\n  flex-grow: 1;\n  border-right: 1px solid ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var grey$1 = Theme.colors.grey;
var defaultClassName$1 = emotion.css(_templateObject$3(), grey$1);

var Partition = function Partition(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = objectWithoutProperties(_ref, ["children", "className"]);

  var partitionProps = objectSpread({}, rest, {
    className: emotion.cx(defaultClassName$1, className)
  });

  return React.createElement("div", partitionProps, children);
};

Partition.defaultProps = {
  children: null,
  className: ''
};
Partition.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

function _templateObject$4() {
  var data = taggedTemplateLiteral(["\n    display: flex;\n  "]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var PartitionGroup = function PartitionGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = objectWithoutProperties(_ref, ["children", "className"]);

  var defaultClassName = emotion.css(_templateObject$4());

  var partitionProps = objectSpread({}, rest, {
    className: emotion.cx(defaultClassName, className)
  });

  return React.createElement("div", partitionProps, children);
};

PartitionGroup.defaultProps = {
  children: null,
  className: ''
};
PartitionGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

exports.Modal = BaseModal;
exports.ModalHeader = Header;
exports.ModalIconHeader = IconHeader;
exports.ModalFooter = Footer;
exports.ModalBody = Body;
exports.ModalPartition = Partition;
exports.ModalPartitionGroup = PartitionGroup;
