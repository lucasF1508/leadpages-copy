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

function _templateObject9() {
  var data = taggedTemplateLiteral(["\n  cursor: not-allowed;\n\n  & label:hover i,\n  & label:hover,\n  & label i,\n  & label {\n    cursor: not-allowed;\n\n    color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = taggedTemplateLiteral(["\n  & label {\n    color: ", ";\n\n    & i {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral(["\n  i {\n    color: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  padding-top: 3px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  ", ";\n\n  display: flex;\n\n  align-items: center;\n  justify-content: flex-start;\n  cursor: pointer;\n\n  &:hover i {\n    color: ", ";\n  }\n\n  & i {\n    margin-right: 6px;\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  align-items: flex-start;\n"]);

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
var supportContent = emotion.css(Theme.typographyDefs.supportContent);
var checkboxClass = emotion.css(_templateObject());
var checkboxAlignTop = emotion.css(_templateObject2());
var checkboxLabelText = emotion.css(_templateObject3(), bodyDefault, Theme.colors.blue, Theme.colors.greyDark);
var checkboxLabelTextAlignTop = emotion.css(_templateObject4());
var checkboxLabelSubtext = emotion.css(_templateObject5(), supportContent);
var checkboxStyles = emotion.css(_templateObject6());
var checkboxActive = emotion.css(_templateObject7(), Theme.colors.blue);
var checkboxChecked = emotion.css(_templateObject8(), Theme.colors.blueDarker, Theme.colors.blue);
var checkboxDisabled = emotion.css(_templateObject9(), Theme.colors.grey);

var Checkbox =
/*#__PURE__*/
function (_Component) {
  inherits(Checkbox, _Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleKeyPress", function (_ref) {
      var event = _extends_1({}, _ref);

      if (event.keyCode === 0) {
        _this.props.onChange(objectSpread({}, event, {
          target: objectSpread({}, event.target, {
            checked: !_this.checkbox.checked
          })
        }));
      }
    });

    return _this;
  }

  createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _cx,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          disabled = _this$props.disabled,
          id = _this$props.id,
          isActive = _this$props.isActive,
          checked = _this$props.checked,
          fontStyle = _this$props.fontStyle,
          labelContent = _this$props.labelContent,
          subContent = _this$props.subContent,
          tabIndex = _this$props.tabIndex,
          alignTop = _this$props.alignTop,
          props = objectWithoutProperties(_this$props, ["className", "disabled", "id", "isActive", "checked", "fontStyle", "labelContent", "subContent", "tabIndex", "alignTop"]);

      return React__default.createElement("div", {
        className: emotion.cx(checkboxClass, (_cx = {}, defineProperty(_cx, "".concat(className), className), defineProperty(_cx, "".concat(checkboxActive), isActive), defineProperty(_cx, "".concat(checkboxDisabled), !!disabled), defineProperty(_cx, "".concat(checkboxChecked), !!checked), defineProperty(_cx, "".concat(checkboxAlignTop), !!alignTop), _cx))
      }, React__default.createElement("div", null, React__default.createElement("input", _extends_1({
        className: checkboxStyles,
        id: id,
        type: "checkbox",
        checked: checked,
        disabled: disabled,
        ref: function ref(checkbox) {
          return _this2.checkbox = checkbox;
        }
      }, props)), React__default.createElement("label", {
        className: checkboxLabelText,
        htmlFor: id,
        tabIndex: disabled ? undefined : tabIndex,
        onKeyPress: this.handleKeyPress
      }, !!checked && React__default.createElement("i", {
        className: "lp-icon lp-icon-enclosed_checkmark"
      }), !checked && React__default.createElement("i", {
        className: "lp-icon lp-icon-unchecked_box"
      }))), React__default.createElement("div", null, React__default.createElement("label", {
        className: emotion.cx(checkboxLabelText, defineProperty({}, "".concat(checkboxLabelTextAlignTop), alignTop)),
        htmlFor: id,
        style: {
          fontStyle: fontStyle
        }
      }, labelContent), subContent && React__default.createElement("label", {
        htmlFor: id,
        className: checkboxLabelSubtext
      }, subContent)));
    }
  }]);

  return Checkbox;
}(React.Component);

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelContent: PropTypes.node,
  subContent: PropTypes.node,
  fontStyle: PropTypes.oneOf(['inherit', 'initial', 'normal', 'italic', 'oblique', 'unset']),
  tabIndex: PropTypes.number,
  alignTop: PropTypes.bool
};
Checkbox.defaultProps = {
  alignTop: false,
  disabled: false,
  className: '',
  isActive: false,
  checked: false,
  children: null,
  fontStyle: 'normal',
  labelContent: null,
  subContent: null,
  tabIndex: 0
};

module.exports = Checkbox;
