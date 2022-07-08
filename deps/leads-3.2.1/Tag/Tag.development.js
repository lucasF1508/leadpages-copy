'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var IconButton = _interopDefault(require('../IconButton'));
var Color = require('../Color');

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Tag_tagContianer__243dK {\n  position: relative;\n\n  max-height: 20px;\n}\n\n.Tag_tag__1X0V0 {\n  font-family: 'Akkurat';\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n\n  letter-spacing: 0;\n\n  color: #797f89;\n\n  line-height: 12px;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n\n  overflow: hidden;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  -webkit-box-sizing: content-box;\n\n          box-sizing: content-box;\n  width: 100%;\n  height: 14px;\n  padding: 2px 0;\n\n  text-align: center;\n  text-overflow: ellipsis;\n\n  border-radius: 3px;\n}\n\n.Tag_inverseText__G2DYe {\n  color: white;\n}\n\n.Tag_withButton__2fup_ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.Tag_tagContianer__243dK .Tag_editButton__3HOz0 {\n  line-height: normal;\n\n  -ms-flex-negative: 0;\n\n      flex-shrink: 0;\n\n  width: 18px !important;\n  height: 18px !important;\n  margin-left: 3px\n}\n\n.Tag_tagContianer__243dK .Tag_editButton__3HOz0 > i {\n  font-size: 12px;\n  margin-top: -1px;\n}\n\n.Tag_inputSelect__26zqZ {\n  position: absolute;\n\n  top: 0;\n  right: 26px;\n  bottom: 0;\n  left: 0;\n\n  cursor: pointer\n}\n\n.Tag_inputSelect__26zqZ.Tag_noPointer__k36sp {\n  cursor: auto;\n  cursor: initial;\n}\n";
var styles = {"tagContianer":"Tag_tagContianer__243dK","tag":"Tag_tag__1X0V0","inverseText":"Tag_inverseText__G2DYe","withButton":"Tag_withButton__2fup_","editButton":"Tag_editButton__3HOz0","inputSelect":"Tag_inputSelect__26zqZ","noPointer":"Tag_noPointer__k36sp"};
styleInject(css);

var Tag =
/*#__PURE__*/
function (_Component) {
  inherits(Tag, _Component);

  function Tag() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Tag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Tag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      value: _this.props.value,
      isEditing: false
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOnChange", function (e) {
      var value = e.target.value;
      var onChange = _this.props.onChange;

      _this.setState(function () {
        return {
          value: value
        };
      });

      onChange(e);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOnClick", function () {
      var onClick = _this.props.onClick;

      var _assertThisInitialize = assertThisInitialized(assertThisInitialized(_this)),
          inputRef = _assertThisInitialize.inputRef;

      _this.setState(function (_ref) {
        var isEditing = _ref.isEditing;
        return {
          isEditing: !isEditing
        };
      }, function () {
        if (_this.state.isEditing) {
          return inputRef.focus();
        }

        return onClick(inputRef.value);
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOnKeyDown", function (e) {
      var _assertThisInitialize2 = assertThisInitialized(assertThisInitialized(_this)),
          inputRef = _assertThisInitialize2.inputRef;

      var onKeyDown = _this.props.onKeyDown;
      var value = e.target.value; // If 'Enter'

      if (e.keyCode === 13) {
        _this.setState(function () {
          return {
            isEditing: false
          };
        });

        inputRef.blur();
        onKeyDown(value);
      }
    });

    return _this;
  }

  createClass(Tag, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref2) {
      var nextValue = _ref2.value;
      var value = this.props.value;

      if (value !== nextValue) {
        this.setState(function () {
          return {
            value: nextValue
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isEditing = this.state.isEditing;
      var _this$props = this.props,
          isEditable = _this$props.isEditable,
          onSelect = _this$props.onSelect,
          backgroundColor = _this$props.backgroundColor,
          borderColor = _this$props.borderColor,
          color = _this$props.color;
      return React__default.createElement("div", {
        className: classNames(styles.tagContianer, defineProperty({}, "".concat(styles.withButton), isEditable))
      }, !isEditing && React__default.createElement("div", {
        tabIndex: "0",
        role: "button",
        onClick: onSelect,
        className: classNames(styles.inputSelect, defineProperty({}, "".concat(styles.noPointer), !isEditable)),
        style: {
          right: isEditable ? '21px' : 0
        }
      }), React__default.createElement("input", {
        className: classNames(styles.tag, defineProperty({}, "".concat(styles.inverseText), !isEditing)),
        style: {
          border: "1px solid ".concat(Color.hexCodes[borderColor || backgroundColor]),
          backgroundColor: isEditing ? '#ffffff' : Color.hexCodes[backgroundColor],
          color: isEditing ? '#000000' : Color.hexCodes[color || '#ffffff']
        },
        ref: function ref(input) {
          _this2.inputRef = input;
        },
        value: this.state.value,
        onKeyDown: this.handleOnKeyDown,
        onChange: this.handleOnChange
      }), isEditable && React__default.createElement(IconButton, {
        noBackground: true,
        className: styles.editButton,
        icon: isEditing ? 'check' : 'edit',
        onClick: this.handleOnClick
      }));
    }
  }]);

  return Tag;
}(React.Component);
Tag.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string
};
Tag.defaultProps = {
  onChange: function onChange() {},
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onKeyDown: function onKeyDown() {},
  backgroundColor: '',
  borderColor: '',
  color: '',
  value: ''
};

module.exports = Tag;
