'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classnames = _interopDefault(require('classnames'));
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

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  margin-right: 19px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  width: 100%;\n  height: 60px;\n  background-color: white;\n  box-shadow: ", ";\n  position: relative;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  padding: 0 19px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var defaultClassName = emotion.css(_templateObject(), Theme.shadows.l2);
var logoClass = emotion.css(_templateObject2());

var Navbar =
/*#__PURE__*/
function (_Component) {
  inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "displayName", 'Navbar');

    return _this;
  }

  createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          NavbarComponent = _this$props.component,
          baseUrl = _this$props.baseUrl,
          props = objectWithoutProperties(_this$props, ["children", "className", "component", "baseUrl"]);

      var logo = React__default.createElement("svg", {
        "data-qa-selector": "navbar-logo",
        className: logoClass,
        width: "34px",
        height: "26px",
        viewBox: "0 0 34 26"
      }, React__default.createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, React__default.createElement("g", {
        id: "on_boarding_nav",
        transform: "translate(-24.000000, -21.000000)",
        fill: "#0069FF"
      }, React__default.createElement("path", {
        d: "M57.8441686,37.1622828 L53.6029379,34.9419513 L41.2173332,41.4263917 C41.0791402,41.4987235 40.9143716,41.4987235 40.7759475,41.4263917 L28.3917294,34.9419513 L24.1509608,37.1622828 C23.9496797,37.2676608 23.9496797,37.5556013 24.1509608,37.6609793 L40.7759475,46.3657512 C40.9141405,46.438083 41.0791402,46.438083 41.2173332,46.3657512 L57.8441686,37.6609793 C58.0454497,37.5556013 58.0454497,37.2676608 57.8441686,37.1622828 M27.2582233,32.2293938 L40.7759475,39.3072784 C40.9143716,39.3796102 41.0791402,39.3796102 41.2173332,39.3072784 L54.736675,32.2293938 C54.9379561,32.1240159 54.9379561,31.8360753 54.736675,31.7306974 L50.8605696,29.7012478 L41.2175643,34.7496828 C41.0793713,34.8220146 40.9146027,34.8220146 40.7761786,34.7496828 L31.1343288,29.7012478 L27.2582233,31.7306974 C27.0569422,31.8360753 27.0569422,32.1240159 27.2582233,32.2293938 M30.1977131,27.0917574 L40.7761786,32.6305695 C40.9143716,32.7031324 41.0793713,32.7031324 41.2175643,32.6308006 L51.7971853,27.0917574 C51.9984664,26.9863795 51.9984664,26.6984389 51.7971853,26.5930609 L41.2175643,21.0542488 C41.0793713,20.9819171 40.9143716,20.9819171 40.7761786,21.0542488 L30.1977131,26.5930609 C29.996432,26.6984389 29.996432,26.9863795 30.1977131,27.0917574",
        id: "Page-1"
      }))));
      return React__default.createElement(NavbarComponent, _extends_1({
        className: classnames(className, defaultClassName)
      }, props), baseUrl ? React__default.createElement("a", {
        "data-qa-selector": "navbar-link",
        href: baseUrl
      }, logo) : logo, children);
    }
  }]);

  return Navbar;
}(React.Component);
Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  baseUrl: PropTypes.string
};
Navbar.defaultProps = {
  children: null,
  className: '',
  component: 'div',
  baseUrl: ''
};

module.exports = Navbar;
