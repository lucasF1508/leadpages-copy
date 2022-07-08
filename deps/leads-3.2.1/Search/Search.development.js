'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var Input = _interopDefault(require('../Input'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Search_searchClass__3qaeB {\n  position: relative\n}\n\n.Search_searchClass__3qaeB button {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  height: 100%;\n  padding: 0 6px;\n  cursor: pointer;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  border: none;\n  background: none;\n}\n\n.Search_searchClass__3qaeB i {\n  color: #b1bacc;\n}\n";
var styles = {"searchClass":"Search_searchClass__3qaeB"};
styleInject(css);

var Search =
/*#__PURE__*/
function (_Component) {
  inherits(Search, _Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOnSubmit", function (e) {
      e.preventDefault(); // Pass event along in case consumer needs it.

      e.persist();

      _this.props.onSubmit(e, _this.input.value);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "clearSearch", function (e) {
      e.preventDefault(); // Pass event along in case consumer needs it.

      e.persist();
      _this.input.value = '';

      _this.props.onSubmit(e, '');
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "assignInputRef", function (input) {
      _this.input = input;

      _this.props.inputRef(input);
    });

    return _this;
  }

  createClass(Search, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSubmit = _this$props.onSubmit,
          className = _this$props.className,
          inputRef = _this$props.inputRef,
          value = _this$props.value,
          props = objectWithoutProperties(_this$props, ["onSubmit", "className", "inputRef", "value"]);

      return React__default.createElement("div", {
        className: classNames(className, styles.searchClass, {})
      }, React__default.createElement("form", {
        onSubmit: this.handleOnSubmit
      }, React__default.createElement(Input, _extends_1({
        inputRef: this.assignInputRef,
        value: value
      }, props)), React__default.createElement("button", {
        type: "button",
        onClick: this.clearSearch
      }, React__default.createElement("i", {
        className: "lp-icon"
      }, !!value || this.input && this.input.value ? 'close_circle' : 'search'))));
    }
  }]);

  return Search;
}(React.Component);

defineProperty(Search, "propTypes", {
  className: PropTypes.string,
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  inputRef: PropTypes.func
});

defineProperty(Search, "defaultProps", {
  className: '',
  value: '',
  onSubmit: function onSubmit() {},
  inputRef: function inputRef() {}
});

module.exports = Search;
