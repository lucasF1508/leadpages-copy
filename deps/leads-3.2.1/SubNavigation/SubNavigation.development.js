'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var StickyWrapper = _interopDefault(require('../StickyWrapper'));
var IconButton = _interopDefault(require('../IconButton'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n/* TODO: this functionality was from the glamor migration and needs to be resolved */\n\n/* const MOBILE_WIDTH = 700; */\n\n.SubNavigation_text__BHQVP {\n  font-family: 'Akkurat';\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  margin: 0 0 0 12px;\n\n  -webkit-transition: all 200ms ease-in;\n\n  transition: all 200ms ease-in\n}\n\n.SubNavigation_text__BHQVP:hover {\n  cursor: auto;\n}\n\n.SubNavigation_text__BHQVP.SubNavigation_noBackButton__2K9IY {\n  margin: 0 0 0 24px;\n}\n\n.SubNavigation_editButton__2Nzw8 {\n  cursor: pointer;\n\n  opacity: 0;\n}\n\n/* .text:hover {\n  cursor: pointer;\n} */\n\n.SubNavigation_text__BHQVP:hover + .SubNavigation_editButton__2Nzw8,\n.SubNavigation_editButton__2Nzw8:hover {\n  margin-left: 3px;\n\n  -webkit-transition: all 200ms ease-in;\n\n  transition: all 200ms ease-in;\n\n  opacity: 1;\n}\n\n.SubNavigation_backArrow__Hojdp {\n  margin: 0 12px 0 0;\n\n  -webkit-transition: all 200ms ease-in;\n\n  transition: all 200ms ease-in;\n}\n\n.SubNavigation_body__2XcIV {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n\n  width: 100%;\n}\n\n.SubNavigation_controls__OtVn1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.SubNavigation_hidden__2_7va {\n  display: none;\n}\n\n.SubNavigation_header__3KKJG {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n  width: 100%;\n  min-height: 72px;\n  padding: 0 24px;\n\n  border: 1px solid #d8dce6;\n  background: white;\n}\n\n.SubNavigation_headerMobile__2_bgW {\n  min-height: 48px;\n}\n\n.SubNavigation_headerMobileWithChildren__3DyKj {\n  min-height: 96px;\n}\n\n.SubNavigation_info__2gX49 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  width: 100%;\n}\n\n.SubNavigation_main__1vvCN {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n\n  min-width: 0;\n  max-width: 50%;\n}\n\n.SubNavigation_name__lSsnO {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.SubNavigation_tab__3hq3- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n}\n\n.SubNavigation_visibilityHidden__1iwJL {\n  visibility: hidden;\n}\n";
var styles = {"text":"SubNavigation_text__BHQVP","noBackButton":"SubNavigation_noBackButton__2K9IY","editButton":"SubNavigation_editButton__2Nzw8","backArrow":"SubNavigation_backArrow__Hojdp","body":"SubNavigation_body__2XcIV","controls":"SubNavigation_controls__OtVn1","hidden":"SubNavigation_hidden__2_7va","header":"SubNavigation_header__3KKJG","headerMobile":"SubNavigation_headerMobile__2_bgW","headerMobileWithChildren":"SubNavigation_headerMobileWithChildren__3DyKj","info":"SubNavigation_info__2gX49","main":"SubNavigation_main__1vvCN","name":"SubNavigation_name__lSsnO","tab":"SubNavigation_tab__3hq3-","visibilityHidden":"SubNavigation_visibilityHidden__1iwJL"};
styleInject(css);

var deprecationWarning = "development" !== 'production' ? function (_ref) {
  var _ref$version = _ref.version,
      version = _ref$version === void 0 ? 'next' : _ref$version,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'This file tried to warn of a deprecated feature' : _ref$message,
      _ref$condition = _ref.condition,
      condition = _ref$condition === void 0 ? true : _ref$condition;

  if (condition) {
    console.warn("LE&DS ".concat(version, " Deprecation Warning: ").concat(message));
  }
} : null;

var SubNavigation =
/*#__PURE__*/
function (_Component) {
  inherits(SubNavigation, _Component);

  function SubNavigation(props) {
    var _this;

    classCallCheck(this, SubNavigation);

    _this = possibleConstructorReturn(this, getPrototypeOf(SubNavigation).call(this, props));
    _this.setIsStuck = _this.setIsStuck.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.setIsScrollingDown = _this.setIsScrollingDown.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.state = {
      isStuck: false,
      isScrollingDown: false
    };
    return _this;
  }

  createClass(SubNavigation, [{
    key: "setIsStuck",
    value: function setIsStuck(isStuck) {
      this.setState(function () {
        return {
          isStuck: isStuck
        };
      });
    }
  }, {
    key: "setIsScrollingDown",
    value: function setIsScrollingDown(isScrollingDown) {
      this.setState(function () {
        return {
          isScrollingDown: isScrollingDown
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          isMobile = _this$props.isMobile,
          hasSubHeader = _this$props.hasSubHeader,
          children = _this$props.children,
          mobile = _this$props.mobile,
          rest = objectWithoutProperties(_this$props, ["isMobile", "hasSubHeader", "children", "mobile"]);

      var height = '72px';
      var topWhenStuck = '0px'; // let topWhenStuck = '-72px';

      var offsetStickTrigger = 0;

      if (isMobile) {
        offsetStickTrigger = -36;
        height = '48px';

        if (children.length !== undefined) {
          height = '96px';
          topWhenStuck = '-48px';
        }

        if (this.state.isScrollingDown) {
          topWhenStuck = '0px'; // topWhenStuck = '-72px';
        }
      }

      if (hasSubHeader) {
        offsetStickTrigger = -72;

        if (children.length !== undefined) {
          topWhenStuck = '-72px';
        }

        if (this.state.isScrollingDown) {
          topWhenStuck = '0px';
          offsetStickTrigger = 0;
        }
      }

      return React__default.createElement(StickyWrapper, {
        setIsStuck: this.setIsStuck,
        setIsScrollingDown: this.setIsScrollingDown,
        height: height,
        topWhenStuck: topWhenStuck,
        offsetStickTrigger: offsetStickTrigger
      }, React__default.createElement("div", _extends_1({}, rest, {
        className: classNames((_classNames = {}, defineProperty(_classNames, "".concat(styles.header), !mobile), defineProperty(_classNames, "".concat(styles.headerMobile), isMobile && !children.length), defineProperty(_classNames, "".concat(styles.headerMobileWithChildren), isMobile && children.length), _classNames))
      }), React__default.createElement("div", {
        className: styles.body
      }, children)));
    }
  }]);

  return SubNavigation;
}(React.Component);

defineProperty(SubNavigation, "displayName", 'SubNavigation');

defineProperty(SubNavigation, "propTypes", {
  isMobile: PropTypes.bool,
  hasSubHeader: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
});

defineProperty(SubNavigation, "defaultProps", {
  isMobile: false,
  hasSubHeader: false,
  children: null
});
var SubNavigationMainDefaultChildren = function SubNavigationMainDefaultChildren(_ref) {
  var children = _ref.children,
      to = _ref.to,
      href = _ref.href,
      clickBack = _ref.clickBack,
      name = _ref.name,
      editText = _ref.editText;
  return React__default.createElement("div", {
    className: styles.name
  }, React__default.createElement(IconButton, {
    icon: "left_angle",
    noBackground: true,
    className: classNames(defineProperty({}, "".concat(styles.visibilityHidden), !href && !to && !clickBack)),
    href: href ? href : undefined,
    to: to ? to : undefined,
    onClick: clickBack ? clickBack : undefined
  }), name && React__default.createElement("h1", {
    className: classNames(styles.text, defineProperty({}, "".concat(styles.noBackButton), !href && !to && !clickBack))
  }, name), editText && React__default.createElement(IconButton, {
    icon: "edit",
    noBackground: true,
    "data-heap": "subnavigation-edit",
    className: classNames(styles.editButton),
    onClick: editText
  }), children && name && React__default.createElement("div", {
    className: classNames(styles.editButton)
  }, children));
};
SubNavigationMainDefaultChildren.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  href: PropTypes.string,
  to: PropTypes.string,
  clickBack: PropTypes.func,
  editText: PropTypes.func
};
SubNavigationMainDefaultChildren.defaultProps = {
  children: null,
  to: '',
  href: '',
  clickBack: null,
  editText: null
};
var SubNavigationMain =
/*#__PURE__*/
function (_Component2) {
  inherits(SubNavigationMain, _Component2);

  function SubNavigationMain(props) {
    var _this2;

    classCallCheck(this, SubNavigationMain);

    _this2 = possibleConstructorReturn(this, getPrototypeOf(SubNavigationMain).call(this, props));

    if ("development" !== 'production') {
      // This does not work with webpack yet but maybe will soon setup issues.
      deprecationWarning({
        condition: !!props.to || !!props.href || !!props.clickBack,
        message: 'SubNavigationMain prop to, href, and clickBack are being deprecated in favor of children'
      });
      deprecationWarning({
        condition: !!props.name,
        message: 'SubNavigationMain prop name is being deprecated in favor of children'
      });
      deprecationWarning({
        condition: !!props.editText,
        message: 'SubNavigationMain prop editText is being deprecated in favor of children'
      });
    }

    return _this2;
  }

  createClass(SubNavigationMain, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          name = _this$props2.name;
      return React__default.createElement("div", {
        className: styles.main
      }, React__default.createElement("div", {
        className: styles.info
      }, name && React__default.createElement(SubNavigationMainDefaultChildren, this.props), !name && children));
    }
  }]);

  return SubNavigationMain;
}(React.Component);
SubNavigationMain.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  to: PropTypes.string,
  clickBack: PropTypes.func,
  editText: PropTypes.func
};
SubNavigationMain.defaultProps = {
  children: null,
  name: null,
  to: '',
  href: '',
  clickBack: null,
  editText: null
};
function SubNavigationControls(props) {
  var children = props.children,
      rest = objectWithoutProperties(props, ["children"]);

  return React__default.createElement("div", _extends_1({}, rest, {
    className: styles.controls
  }), children);
}
SubNavigationControls.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
SubNavigationControls.defaultProps = {
  children: undefined
};
function SubNavigationTabs(props) {
  var _classNames4;

  var children = props.children,
      isMobile = props.isMobile,
      rest = objectWithoutProperties(props, ["children", "isMobile"]);

  return React__default.createElement("div", _extends_1({}, rest, {
    className: classNames((_classNames4 = {}, defineProperty(_classNames4, "".concat(styles.tab), !isMobile), defineProperty(_classNames4, "".concat(styles.hidden), isMobile), _classNames4))
  }), children);
}
SubNavigationTabs.propTypes = {
  isMobile: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
SubNavigationTabs.defaultProps = {
  isMobile: false,
  children: undefined
};

exports.default = SubNavigation;
exports.SubNavigationControls = SubNavigationControls;
exports.SubNavigationMain = SubNavigationMain;
exports.SubNavigationTabs = SubNavigationTabs;
