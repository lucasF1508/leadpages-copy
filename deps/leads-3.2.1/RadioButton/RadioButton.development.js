'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');
var Theme = require('../Theme');

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
  var data = taggedTemplateLiteral(["\n  cursor: not-allowed;\n\n  & label:hover i,\n  & label:hover,\n  & label i,\n  & label {\n    cursor: not-allowed;\n\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  display: none;\n\n  &:checked + label {\n    color: ", ";\n  }\n\n  &:checked + label i {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  & i {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  ", " display: flex;\n\n  justify-content: flex-start;\n\n  text-transform: capitalize;\n  overflow-y: hidden;\n  cursor: pointer;\n\n  & i {\n    margin-right: 6px;\n    margin-top: -3px;\n  }\n\n  &:hover i {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var bodyDefault = emotion.css(Theme.typographyDefs.bodyDefault);
var radioButtonClass = emotion.css(_templateObject());
var radioButtonLabelText = emotion.css(_templateObject2(), bodyDefault, Theme.colors.blue);
var radioButtonActive = emotion.css(_templateObject3(), Theme.colors.blue);
var radioButtonStyles = emotion.css(_templateObject4(), Theme.colors.blueDarker, Theme.colors.blue);
var radioButtonDisabled = emotion.css(_templateObject5(), Theme.colors.greyDark);

var RadioButton =
/*#__PURE__*/
function (_Component) {
  inherits(RadioButton, _Component);

  function RadioButton() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(RadioButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleKeyPress", function (_ref) {
      var event = _extends_1({}, _ref);

      if (event.keyCode === 0) {
        _this.props.onChange(objectSpread({}, event, {
          target: objectSpread({}, event.target, {
            value: _this.radio.value
          })
        }));
      }
    });

    return _this;
  }

  createClass(RadioButton, [{
    key: "render",
    value: function render() {
      var _cx,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          disabled = _this$props.disabled,
          isActive = _this$props.isActive,
          labelContent = _this$props.labelContent,
          checked = _this$props.checked,
          id = _this$props.id,
          tabIndex = _this$props.tabIndex,
          props = objectWithoutProperties(_this$props, ["className", "disabled", "isActive", "labelContent", "checked", "id", "tabIndex"]);

      var lpIconClass = !!checked ? 'lp-icon-radio_button_checked' : 'lp-icon-radio_button_unchecked';
      return React__default.createElement("div", {
        className: emotion.cx(className, radioButtonClass, (_cx = {}, defineProperty(_cx, "".concat(radioButtonActive), isActive), defineProperty(_cx, "".concat(radioButtonDisabled), !!disabled), _cx))
      }, React__default.createElement("input", _extends_1({
        className: radioButtonStyles,
        id: id,
        type: "radio",
        checked: checked,
        disabled: disabled,
        ref: function ref(radio) {
          return _this2.radio = radio;
        }
      }, props)), React__default.createElement("label", {
        className: radioButtonLabelText,
        htmlFor: id,
        tabIndex: disabled ? undefined : tabIndex,
        onKeyPress: this.handleKeyPress
      }, React__default.createElement("i", {
        className: emotion.cx('lp-icon', lpIconClass)
      }), labelContent));
    }
  }]);

  return RadioButton;
}(React.Component);

RadioButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  labelContent: PropTypes.node,
  checked: PropTypes.bool,
  id: PropTypes.string,
  tabIndex: PropTypes.number
};
RadioButton.defaultProps = {
  className: '',
  disabled: false,
  isActive: false,
  labelContent: null,
  checked: false,
  id: '',
  tabIndex: 0
};

module.exports = RadioButton;
