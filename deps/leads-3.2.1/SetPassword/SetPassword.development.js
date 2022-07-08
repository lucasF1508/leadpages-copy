'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Input = _interopDefault(require('../Input'));
var Tooltip = _interopDefault(require('../Tooltip'));
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

function _templateObject8() {
  var data = taggedTemplateLiteral(["\n  top: 51px;\n  right: 24px;\n  position: absolute;\n  cursor: pointer;\n\n  & i {\n    font-size: 15px;\n    color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral(["\n  margin-bottom: 16px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding-bottom: 4px;\n\n  @media (max-width: 767px) {\n    flex: 0 0 100%;\n  }\n  @media (min-width: 768px) {\n    flex: 0 0 50%;\n  }\n\n  i {\n    font-size: 15px;\n    margin: 0 6px 0 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 85%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  margin: 26px 0;\n  display: block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  margin: 0 0 14px;\n  display: block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var bodyHeading = Theme.typographyDefs.bodyHeading,
    supportContent = Theme.typographyDefs.supportContent;
var green = Theme.colors.green,
    grey = Theme.colors.grey;
var defaultClassName = emotion.css(_templateObject());
var defaultLabelStyles = emotion.css(_templateObject2());
var labelStyles = emotion.css(bodyHeading, defaultLabelStyles);
var defaultSubLabelStyles = emotion.css(_templateObject3());
var subLabelStyles = emotion.css(supportContent, defaultSubLabelStyles);
var subLabelListStyles = emotion.css(_templateObject4());
var subLabelListItemStyles = emotion.css(_templateObject5());
var subLabelListItemComplete = emotion.css(_templateObject6(), green);
var helperTextStyles = emotion.css(_templateObject7());
var viewIcon = emotion.css(_templateObject8(), grey);

var SetPassword =
/*#__PURE__*/
function (_Component) {
  inherits(SetPassword, _Component);

  function SetPassword(props) {
    var _this;

    classCallCheck(this, SetPassword);

    _this = possibleConstructorReturn(this, getPrototypeOf(SetPassword).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "displayName", 'SetPassword');

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOnChange", function (_ref) {
      var target = _ref.target;
      var password = target.value;

      _this.props.onChange(password);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "toggleTextType", function () {
      _this.setState(function (state) {
        return {
          showPassword: !state.showPassword
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "onSubmit", function (event) {
      event.preventDefault();

      _this.props.onSubmit();
    });

    _this.state = {
      showPassword: false
    };
    return _this;
  }

  createClass(SetPassword, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          SetPasswordComponent = _this$props.component,
          password = _this$props.password,
          validations = _this$props.validations,
          onChange = _this$props.onChange,
          onSubmit = _this$props.onSubmit,
          props = objectWithoutProperties(_this$props, ["children", "className", "component", "password", "validations", "onChange", "onSubmit"]);

      var showPassword = this.state.showPassword;
      return React__default.createElement(SetPasswordComponent, _extends_1({
        className: emotion.cx(defaultClassName, className)
      }, props), React__default.createElement("form", {
        onSubmit: this.onSubmit
      }, React__default.createElement("label", {
        htmlFor: "password",
        className: labelStyles
      }, "Create a Password"), React__default.createElement(Input, {
        isSingleInput: true,
        name: "password",
        type: showPassword ? 'text' : 'password',
        placeholder: "Enter a secure password",
        value: password,
        onChange: this.handleOnChange
      }), React__default.createElement("div", {
        className: viewIcon,
        onClick: this.toggleTextType,
        "data-test": "test"
      }, React__default.createElement(Tooltip, {
        tip: showPassword ? 'Hide' : 'Show'
      }, React__default.createElement("i", {
        className: emotion.cx('lp-icon')
      }, showPassword ? 'hide' : 'view')))), validations.length > 0 && React__default.createElement("div", {
        className: subLabelStyles
      }, React__default.createElement("p", {
        className: helperTextStyles
      }, "Please make sure your password contains:"), React__default.createElement("div", {
        className: subLabelListStyles
      }, validations.map(function (_ref2, index) {
        var content = _ref2.content,
            passedCheck = _ref2.passedCheck;
        return React__default.createElement("div", {
          key: index,
          className: emotion.cx(subLabelListItemStyles, passedCheck && subLabelListItemComplete)
        }, content());
      }))));
    }
  }]);

  return SetPassword;
}(React.Component);
SetPassword.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  password: PropTypes.string,
  validations: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    passedCheck: PropTypes.bool
  }))
};
SetPassword.defaultProps = {
  children: null,
  className: '',
  component: 'div',
  onChange: function onChange() {
    console.log('default');
  },
  onSubmit: function onSubmit() {
    console.log('default');
  },
  password: '',
  validations: []
};

module.exports = SetPassword;
