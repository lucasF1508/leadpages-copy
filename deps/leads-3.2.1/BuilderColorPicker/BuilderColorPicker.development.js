'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _isEqual = _interopDefault(require('lodash/isEqual'));
var reactColor = require('react-color');
var PropTypes = _interopDefault(require('prop-types'));
var checkboard = require('react-color/lib/helpers/checkboard');
var color = _interopDefault(require('react-color/lib/helpers/color'));
var common = require('react-color/lib/components/common');
var Link = _interopDefault(require('../Link'));
var React = _interopDefault(require('react'));
var tinycolor = _interopDefault(require('tinycolor2'));
var Input = _interopDefault(require('../Input'));
var Theme = require('../Theme');
var emotion = require('emotion');

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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
  var data = taggedTemplateLiteral(["\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);\n  border-radius: 3px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  width: 36px;\n  height: 36px;\n  margin: 0 8px 8px 0;\n  background: url(", ") center left;\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  margin: 0 -10px 16px;\n  padding: 10px 0 0 10px;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n\n  &.no-presets: {\n    margin: 0 -10px 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var colors = emotion.css(_templateObject());
var swatchWrap = emotion.css(_templateObject2(), checkboard.get('white', 'rgba(0,0,0,.08)', 8));
var swatchBorder = emotion.css(_templateObject3());

var bodyDefault = Theme.typographyDefs.bodyDefault;
var SketchPresetColors = function SketchPresetColors(_ref) {
  var colors$$1 = _ref.colors,
      label = _ref.label,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      labelAction = _ref.labelAction,
      labelActionText = _ref.labelActionText,
      qaSelector = _ref.qaSelector,
      onSwatchHover = _ref.onSwatchHover;

  var handleClick = function handleClick(hex, e) {
    onClick({
      hex: hex,
      source: 'hex'
    }, e);
  };

  return React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, label && React.createElement("label", {
    style: objectSpread({}, bodyDefault, {
      color: '#b1bacc'
    })
  }, label), labelAction && labelActionText && React.createElement(Link, {
    component: "button",
    onClick: labelAction,
    style: {
      color: '#a4c8fd',
      fontSize: '14px',
      fontWeight: '700'
    },
    "data-heap": "".concat(label.replace(' ', '-').toLowerCase(), "-add"),
    "data-qa-selector": qaSelector
  }, labelActionText)), React.createElement("div", {
    className: emotion.cx(colors, (!colors$$1 || !colors$$1.length) && 'no-presets')
  }, colors$$1.map(function (colorObjOrString) {
    var c = typeof colorObjOrString === 'string' ? {
      color: colorObjOrString
    } : colorObjOrString;
    var colorObj = tinycolor(c.color);
    var colorSwatchTitle = colorObj.toHexString();

    if (colorObj.getAlpha() < 1) {
      colorSwatchTitle = "".concat(colorSwatchTitle, " | ").concat(parseFloat(colorObj.getAlpha()) * 100, "% opacity");
    }

    return React.createElement("div", {
      key: c.color,
      className: swatchWrap,
      "data-heap": "".concat(label.replace(' ', '-').toLowerCase(), "-color")
    }, React.createElement(common.Swatch, _extends_1({}, c, {
      title: colorSwatchTitle,
      onClick: handleClick,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ".concat(c.color)
      }
    })), React.createElement("div", {
      className: swatchBorder
    }));
  })));
};
SketchPresetColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string
  })]))
};

function _templateObject2$1() {
  var data = taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 24px;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var fields = emotion.css(_templateObject$1());
var input = emotion.css(_templateObject2$1());

var SketchFields =
/*#__PURE__*/
function (_React$Component) {
  inherits(SketchFields, _React$Component);

  function SketchFields(props) {
    var _this;

    classCallCheck(this, SketchFields);

    _this = possibleConstructorReturn(this, getPrototypeOf(SketchFields).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleChange", function (e) {
      var value = e.target.value;
      var color$$1 = tinycolor(value);
      var shouldSubmitColor = value && value.length === 6 && color$$1.isValid() && color$$1.getFormat() === 'hex';

      _this.setState(function () {
        return {
          hex: value
        };
      }, function () {
        if (shouldSubmitColor) {
          _this.handleSubmit();
        }
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handlePaste", function (e) {
      if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
      }

      var hex = (e.clipboardData || window.clipboardData).getData('text');

      _this.setState(function () {
        return {
          hex: hex
        };
      }, _this.handleSubmit);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleSubmit", function (e) {
      e && typeof e.preventDefault === 'function' && e.preventDefault();
      var onChange = _this.props.onChange;
      var hex = _this.state.hex;
      var color$$1 = tinycolor(hex);

      if (color$$1.isValid()) {
        return onChange({
          r: color$$1.toRgb().r,
          g: color$$1.toRgb().g,
          b: color$$1.toRgb().b,
          a: color$$1.toRgb().a,
          source: 'rgb'
        }, e);
      }

      color$$1 = tinycolor("rgba(".concat(hex, ")"));

      if (color$$1.isValid()) {
        return onChange({
          r: color$$1.toRgb().r,
          g: color$$1.toRgb().g,
          b: color$$1.toRgb().b,
          a: color$$1.toRgb().a,
          source: 'rgb'
        }, e);
      }

      color$$1 = tinycolor("rgb(".concat(hex, ")"));

      if (color$$1.isValid()) {
        return onChange({
          r: color$$1.toRgb().r,
          g: color$$1.toRgb().g,
          b: color$$1.toRgb().b,
          a: color$$1.toRgb().a,
          source: 'rgb'
        }, e);
      }
    });

    _this.state = {
      hex: _this.props.hex
    };
    return _this;
  }

  createClass(SketchFields, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.input.addEventListener('paste', this.handlePaste, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.input.removeEventListener('paste', this.handlePaste, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // allows any currently appiled color in builder to be default selection when the custom color picker is opened.
      if (prevProps.hex !== this.props.hex) {
        this.setState(function () {
          return {
            hex: _this2.props.hex
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var hex = this.state.hex;
      return React.createElement("div", {
        className: fields
      }, React.createElement("div", {
        style: objectSpread({}, Theme.typographyDefs.bodyDefault, {
          color: '#B1BACC',
          flex: '0 0 90px'
        })
      }, "Color Code"), React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement(Input, {
        inputSelfClass: input,
        value: hex && hex.replace('#', ''),
        onChange: this.handleChange,
        onBlur: this.handleSubmit,
        inputRef: function inputRef(input$$1) {
          _this3.input = input$$1;
        },
        "data-heap": "add-custom-color__color-code"
      })));
    }
  }]);

  return SketchFields;
}(React.Component);

function _templateObject13() {
  var data = taggedTemplateLiteral(["\n  color: #a4c8fd;\n  display: flex;\n  align-items: center;\n  padding-left: 0;\n  margin: 0 0 8px;\n\n  i {\n    padding-top: 0 !important;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = taggedTemplateLiteral(["\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  height: 16px;\n  margin-top: 4px;\n  overflow: hidden;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = taggedTemplateLiteral(["\n  border-radius: 2px;\n  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.15),\n    inset 0 0 4px rgba(0, 0, 0, 0.25);\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  height: 16px;\n  overflow: hidden;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  border-radius: 2px;\n  background: ", ";\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral(["\n  width: 36px;\n  height: 36px;\n  position: relative;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n  overflow: hidden;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral(["\n  padding: 4px 0;\n  flex: 1;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  border-radius: 3px;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = taggedTemplateLiteral(["\n  width: 100%;\n  padding-bottom: 56%;\n  position: relative;\n  overflow: hidden;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  transform: translate(-7px, 1px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  top: 8px;\n  left: 20px;\n  right: 20px;\n  bottom: 0px;\n  background-color: #00044c;\n  padding: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: 100ms opacity 0s ease-in, 0s visibility 100ms ease-in;\n\n  &.show {\n    opacity: 1;\n    visibility: visible;\n    transition: 100ms opacity 0s ease-in, 0s visibility 0s ease-in;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var customColorPicker = emotion.css(_templateObject$2());
var picker = emotion.css(_templateObject2$2());
var saturation = emotion.css(_templateObject3$1());
var Saturation = emotion.css(_templateObject4());
var controls = emotion.css(_templateObject5());
var sliders = emotion.css(_templateObject6());
var color$1 = emotion.css(_templateObject7());
var activeColor = function activeColor(rgb) {
  return emotion.css(_templateObject8(), "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
};
var hue = emotion.css(_templateObject9());
var Hue = emotion.css(_templateObject10());
var alpha = emotion.css(_templateObject11());
var Alpha = emotion.css(_templateObject12());
var backButton = emotion.css(_templateObject13());

var Pointer = function Pointer() {
  return React.createElement("div", {
    className: picker
  });
};

var CustomColorPicker =
/*#__PURE__*/
function (_React$Component) {
  inherits(CustomColorPicker, _React$Component);

  function CustomColorPicker(props) {
    var _this;

    classCallCheck(this, CustomColorPicker);

    _this = possibleConstructorReturn(this, getPrototypeOf(CustomColorPicker).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOnChange", function (data) {
      var colors = color.toState(data, data.h || _this.state.oldHue);

      _this.setState(function () {
        return objectSpread({}, colors);
      }, _this.handleApplyColor);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleApplyColor", function () {
      _this.props.onChange(_this.state.rgb);
    });

    _this.state = objectSpread({}, color.toState(props.color, 0));
    return _this;
  }

  createClass(CustomColorPicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.color !== this.props.color) {
        this.setState(function () {
          return objectSpread({}, color.toState(_this2.props.color, 0));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          rgb = _this$state.rgb,
          hex = _this$state.hex,
          hsv = _this$state.hsv,
          hsl = _this$state.hsl,
          renderers = _this$state.renderers;
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          onClose = _this$props.onClose;
      return React.createElement("div", {
        "data-heap": "add-custom-color",
        className: emotion.cx(customColorPicker, isOpen && 'show')
      }, React.createElement(Link, {
        "data-heap": "add-custom-color__back",
        className: backButton,
        component: "button",
        onClick: onClose
      }, React.createElement("i", {
        className: "lp-icon"
      }, "left_arrow"), " Back"), React.createElement("div", {
        "data-heap": "add-custom-color__saturation",
        className: saturation
      }, React.createElement(common.Saturation, {
        className: Saturation,
        hsl: hsl,
        hsv: hsv,
        onChange: this.handleOnChange
      })), React.createElement("div", {
        className: controls
      }, React.createElement("div", {
        className: sliders
      }, React.createElement("div", {
        "data-heap": "add-custom-color__hue",
        className: hue
      }, React.createElement(common.Hue, {
        className: Hue,
        hsl: hsl,
        onChange: this.handleOnChange,
        pointer: Pointer
      })), React.createElement("div", {
        className: alpha
      }, React.createElement(common.Checkboard, {
        white: "#fff"
      }), React.createElement(common.Alpha, {
        "data-heap": "add-custom-color__alpha",
        className: Alpha,
        rgb: rgb,
        hsl: hsl,
        renderers: renderers,
        onChange: this.handleOnChange,
        pointer: Pointer
      }))), React.createElement("div", {
        className: color$1
      }, React.createElement(common.Checkboard, {
        white: "#fff"
      }), React.createElement("div", {
        className: activeColor(rgb)
      }))), React.createElement(SketchFields, {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        onChange: this.handleOnChange
      }));
    }
  }]);

  return CustomColorPicker;
}(React.Component);

function _templateObject$3() {
  var data = taggedTemplateLiteral(["\n  padding: 10px 18px 0 20px;\n  box-sizing: initial;\n  background: #00044c;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.15);\n  height: 305px;\n  max-width: 258px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var picker$1 = emotion.css(_templateObject$3());

var Sketch =
/*#__PURE__*/
function (_React$Component) {
  inherits(Sketch, _React$Component);

  function Sketch(props) {
    var _this;

    classCallCheck(this, Sketch);

    _this = possibleConstructorReturn(this, getPrototypeOf(Sketch).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleClose", function () {
      _this.handleOnCustomColorChoice(_this.state.customColor);

      _this.setState(function (_ref) {
        var customColor = _ref.customColor,
            presetColors = _ref.presetColors;
        return {
          isCustomColorPickerOpen: false,
          customColor: null,
          presetColors: _this.sanitizePresetColors(presetColors, customColor)
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOpen", function () {
      _this.setState(function () {
        return {
          isCustomColorPickerOpen: true
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOnCustomChange", function (color$$1) {
      _this.setState(function () {
        return {
          customColor: tinycolor(color$$1).toRgbString()
        };
      });

      _this.props.onChange(color$$1);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOnCustomColorChoice", function (color$$1) {
      if (color$$1 && _this.props.onCustomColorChoice) {
        _this.props.onCustomColorChoice(color$$1);
      }
    });

    _this.state = {
      isCustomColorPickerOpen: false,
      customColor: null,
      presetColors: _this.sanitizePresetColors(props.presetColors)
    };
    return _this;
  }

  createClass(Sketch, [{
    key: "sanitizePresetColors",
    value: function sanitizePresetColors(presets, customColor) {
      var colors = customColor ? [customColor].concat(toConsumableArray(presets)) : toConsumableArray(presets);
      return toConsumableArray(new Set(colors.map(function (color$$1) {
        return tinycolor(color$$1).toRgbString();
      })));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (!_isEqual(prevProps.presetColors, this.props.presetColors)) {
        this.setState(function () {
          return {
            presetColors: _this2.sanitizePresetColors(_this2.props.presetColors)
          };
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isCustomColorPickerOpen) {
        this.handleOnCustomColorChoice(this.state.customColor);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onSwatchHover = _this$props.onSwatchHover,
          brandColors = _this$props.brandColors,
          className = _this$props.className,
          brandColorsAction = _this$props.brandColorsAction;
      var presetColors = this.state.presetColors;
      return React.createElement("div", {
        className: emotion.cx('sketch-picker', picker$1, className)
      }, !this.state.isCustomColorPickerOpen && React.createElement(React.Fragment, null, React.createElement(SketchPresetColors, {
        colors: brandColors,
        onClick: onChange,
        onSwatchHover: onSwatchHover,
        label: "Brand Colors",
        labelAction: brandColorsAction,
        labelActionText: brandColors.length > 0 ? 'EDIT' : 'ADD',
        qaSelector: "brand-colors-view"
      }), React.createElement(SketchPresetColors, {
        colors: presetColors,
        onClick: onChange,
        onSwatchHover: onSwatchHover,
        label: "Recent Colors",
        labelAction: this.handleOpen,
        labelActionText: "ADD",
        qaSelector: "recent-colors-add"
      })), React.createElement(CustomColorPicker, {
        onClose: this.handleClose,
        isOpen: this.state.isCustomColorPickerOpen,
        color: this.props.color,
        onChange: this.handleOnCustomChange
      }));
    }
  }]);

  return Sketch;
}(React.Component);
Sketch.propTypes = {
  brandColors: PropTypes.arrayOf(PropTypes.string),
  presetColors: PropTypes.arrayOf(PropTypes.string)
};
Sketch.defaultProps = {
  brandColors: [],
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
};
var BuilderColorPicker = reactColor.CustomPicker(Sketch);

module.exports = BuilderColorPicker;
