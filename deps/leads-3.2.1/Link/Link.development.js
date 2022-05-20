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

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  color: ", ";\n\n  &:visited {\n    color: ", ";\n  }\n\n  &:hover,\n  &:focus,\n  &.active {\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  color: ", ";\n\n  &:visited {\n    color: ", ";\n  }\n\n  &:hover,\n  &:focus,\n  &.active {\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  color: ", ";\n\n  &:visited {\n    color: ", ";\n  }\n\n  &:hover,\n  &:focus,\n  &.active {\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  color: ", ";\n  position: relative;\n\n  cursor: pointer;\n  transition: all 0.25s ease;\n\n  white-space: nowrap;\n  text-decoration: none;\n\n  border: 0;\n  outline: 0;\n  background-color: rgba(0, 0, 0, 0);\n\n  &:hover,\n  &:focus,\n  &.active {\n    color: ", ";\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  &:visited {\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    cursor: not-allowed;\n\n    opacity: 0.4;\n  }\n\n  & i {\n    align-items: flex-start;\n\n    box-sizing: border-box;\n    padding-top: 3px !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var blue = Theme.colors.blue,
    blueDark = Theme.colors.blueDark,
    purple = Theme.colors.purple,
    red = Theme.colors.red,
    redDark = Theme.colors.redDark,
    redLight = Theme.colors.redLight,
    greyDarker = Theme.colors.greyDarker;
var bodyDefault = Theme.typographyDefs.bodyDefault;
var buttonClassName = emotion.css(_templateObject(), blue, blueDark, purple);
var defaultClassName = emotion.css(bodyDefault, buttonClassName);
var dangerClassName = emotion.css(_templateObject2(), red, red, redDark, redLight);
var secondaryClassName = emotion.css(_templateObject3(), greyDarker, greyDarker, blueDark, blue);
var secondaryDangerClassName = emotion.css(_templateObject4(), greyDarker, red, redDark, redLight);

var Link =
/*#__PURE__*/
function (_Component) {
  inherits(Link, _Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "displayName", 'Link');

    return _this;
  }

  createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          LinkComponent = _this$props.component,
          isActive = _this$props.isActive,
          isDanger = _this$props.isDanger,
          isSecondary = _this$props.isSecondary,
          props = objectWithoutProperties(_this$props, ["children", "className", "component", "isActive", "isDanger", "isSecondary"]);

      return React__default.createElement(LinkComponent, _extends_1({
        className: emotion.cx(defaultClassName, isSecondary && secondaryClassName, isDanger && dangerClassName, isSecondary && isDanger && secondaryDangerClassName, isActive && 'active', className)
      }, props), children);
    }
  }]);

  return Link;
}(React.Component);
Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  isActive: PropTypes.bool,
  isDanger: PropTypes.bool,
  isSecondary: PropTypes.bool
};
Link.defaultProps = {
  children: null,
  className: '',
  component: 'a',
  isActive: false,
  isDanger: false,
  isSecondary: false
};

module.exports = Link;
