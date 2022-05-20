'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');
var Theme = require('../Theme');

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

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n  transition: all 0.25s ease;\n  text-align: center;\n\n  white-space: nowrap;\n  text-decoration: none;\n\n  border: 0;\n  border-radius: 18px;\n  outline: 0;\n\n  width: 36px;\n  height: 36px;\n  padding: 0;\n\n  color: ", ";\n  border-radius: 18px;\n  background-color: ", ";\n\n  &:visited {\n    width: 36px;\n    height: 36px;\n    padding: 0;\n\n    color: ", ";\n    border-radius: 18px;\n    background-color: ", ";\n  }\n\n  & i,\n  &:visited i {\n    font-size: 18px;\n    line-height: 36px;\n  }\n\n  &:focus {\n    background-color: inherit;\n    color: ", ";\n  }\n\n  &:focus {\n    background-color: inherit;\n  }\n\n  &:hover,\n  &:hover:focus,\n  &.active {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    cursor: not-allowed;\n    opacity: 0.4;\n    background-color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  &::after {\n    position: absolute;\n    top: 6px;\n    right: -2px;\n\n    width: 8px;\n    height: 8px;\n\n    content: '';\n\n    border-radius: 50%;\n\n    background-color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  color: ", ";\n  background-color: rgba(0, 0, 0, 0);\n\n  &:visited {\n    color: ", ";\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  &:hover,\n  &:focus,\n  &.active {\n    color: ", ";\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    color: ", ";\n    background-color: rgba(0, 0, 0, 0);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0);\n\n  &:visited {\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  &:hover,\n  &:focus,\n  &.active {\n    background-color: rgba(0, 0, 0, 0);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0);\n\n  &:visited {\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: rgba(0, 0, 0, 0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var blue = Theme.colors.blue,
    redDark = Theme.colors.redDark,
    redLight = Theme.colors.redLight,
    greyDarker = Theme.colors.greyDarker,
    greyLight = Theme.colors.greyLight,
    grey = Theme.colors.grey;
var noBackgroundClassName = emotion.css(_templateObject());
var noHoverBackgroundClassName = emotion.css(_templateObject2());
var isDangerClassName = emotion.css(_templateObject3(), greyDarker, greyDarker, redDark, redLight);
var isHighlightedClassName = emotion.css(_templateObject4(), blue);
var defaultClassName = emotion.css(_templateObject5(), greyDarker, greyLight, greyDarker, greyLight, greyDarker, greyDarker, grey, greyLight);

var IconButton =
/*#__PURE__*/
function (_Component) {
  inherits(IconButton, _Component);

  function IconButton() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, IconButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(IconButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "displayName", 'IconButton');

    return _this;
  }

  createClass(IconButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          IconButtonComponent = _this$props.component,
          icon = _this$props.icon,
          noBackground = _this$props.noBackground,
          noHoverBackground = _this$props.noHoverBackground,
          isDanger = _this$props.isDanger,
          isActive = _this$props.isActive,
          isHighlighted = _this$props.isHighlighted,
          props = objectWithoutProperties(_this$props, ["children", "className", "component", "icon", "noBackground", "noHoverBackground", "isDanger", "isActive", "isHighlighted"]);

      return React__default.createElement(IconButtonComponent, _extends_1({
        className: emotion.cx(defaultClassName, noBackground && noBackgroundClassName, noHoverBackground && noHoverBackgroundClassName, noHoverBackground && isDanger && isDangerClassName, isHighlighted && isHighlightedClassName, isActive && 'active', className)
      }, props), icon && React__default.createElement("i", {
        className: "lp-icon"
      }, icon), children);
    }
  }]);

  return IconButton;
}(React.Component);
IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  icon: PropTypes.string,
  noBackground: PropTypes.bool,
  noHoverBackground: PropTypes.bool,
  isDanger: PropTypes.bool,
  isActive: PropTypes.bool,
  isHighlighted: PropTypes.bool
};
IconButton.defaultProps = {
  children: null,
  className: '',
  component: 'button',
  icon: null,
  noBackground: false,
  noHoverBackground: false,
  isDanger: false,
  isActive: false,
  isHighlighted: false
};

module.exports = IconButton;
