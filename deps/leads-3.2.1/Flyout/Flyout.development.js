'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var React = require('react');
var React__default = _interopDefault(React);

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Flyout_flyout__3FETg {\n  position: absolute;\n  z-index: 1;\n  top: 100%;\n\n  overflow-y: hidden;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  max-height: 0;\n  padding: 0 9px;\n\n  -webkit-transition: all 0.3s cubic-bezier(0.32, 1.25, 0.44, 1.06);\n\n  transition: all 0.3s cubic-bezier(0.32, 1.25, 0.44, 1.06);\n\n  opacity: 0;\n  border: 0 solid #b1bacc;\n  border-radius: 3px;\n  background: #ffffff;\n  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .25), 0 12px 18px 0 rgba(0, 0, 0, .3);\n          box-shadow: 0 0 10px 0 rgba(0, 0, 0, .25), 0 12px 18px 0 rgba(0, 0, 0, .3)\n}\n\n.Flyout_flyout__3FETg.Flyout_open__1yiCH {\n  overflow-y: auto;\n  max-height: 324px;\n  margin-top: 6px;\n  padding: 9px;\n  opacity: 1;\n  border: 1px solid #b1bacc;\n}\n";
var styles = {"flyout":"Flyout_flyout__3FETg","open":"Flyout_open__1yiCH"};
styleInject(css);

var Flyout =
/*#__PURE__*/
function (_Component) {
  inherits(Flyout, _Component);

  function Flyout(props) {
    var _this;

    classCallCheck(this, Flyout);

    _this = possibleConstructorReturn(this, getPrototypeOf(Flyout).call(this, props));
    _this.state = {
      open: props.open
    };
    return _this;
  }

  createClass(Flyout, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.props.open) {
        this.setState(function () {
          return {
            open: nextProps.open
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          props = objectWithoutProperties(_this$props, ["children", "className"]);

      var flyoutClassList = classNames(styles.flyout, className, defineProperty({}, "".concat(styles.open), this.state.open));
      return (// TODO: CSSTransitionGroup maybe?
        React__default.createElement("div", _extends_1({
          className: flyoutClassList
        }, props), children)
      );
    }
  }]);

  return Flyout;
}(React.Component);
Flyout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool
};
Flyout.defaultProps = {
  children: null,
  className: '',
  open: true
};

module.exports = Flyout;
