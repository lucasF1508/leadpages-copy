'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Input = _interopDefault(require('../Input'));
var classnames = _interopDefault(require('classnames'));
var OutsideClickHandler = _interopDefault(require('../OutsideClickHandler'));
var Option = _interopDefault(require('../Option'));
var Flyout = _interopDefault(require('../Flyout'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Link = _interopDefault(require('../Link'));
var emotion = require('emotion');
var Theme = require('../Theme');

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Select_select__3Bms0 {\n  font-family: 'Akkurat', 'Roboto', 'Helvetica', sans-serif;\n\n  position: relative;\n\n  max-width: 396px\n}\n\n.Select_select__3Bms0 .Select_label__f2w74 {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #4c515d;\n}\n\n.Select_select__3Bms0 .Select_singleInputField__1T_dn {\n  height: 100%;\n}\n\n.Select_header__1wSnl .Select_input__3dNRd {\n  font-family: 'Akkurat';\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n\n  letter-spacing: 0;\n\n  color: #797f89;\n\n  display: inline-block;\n\n  margin-top: 1px\n}\n\n.Select_header__1wSnl .Select_input__3dNRd .Select_icon__1agny {\n  margin-left: 6px;\n}\n\n.Select_open__3rA7G .Select_input__3dNRd,\n  .Select_open__3rA7G .Select_input__3dNRd:hover {\n  border-color: #0069ff;\n}\n\n.Select_open__3rA7G .Select_input__3dNRd .Select_icon__1agny, .Select_open__3rA7G .Select_input__3dNRd:hover .Select_icon__1agny {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.Select_disabled__3UCeC {\n  cursor: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n\n  opacity: 0.4;\n}\n\n.Select_input__3dNRd {\n  font-size: 15px;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n  width: 100%;\n  height: 42px;\n  padding: 0 12px;\n\n  cursor: pointer;\n  -webkit-transition: border-color 0.2s ease;\n  transition: border-color 0.2s ease;\n\n  color: #797f89;\n  border: 1px solid #b1bacc;\n  border-radius: 3px;\n  background: #ffffff\n}\n\n.Select_input__3dNRd:hover {\n  border-color: #4c515d;\n}\n\n.Select_input__3dNRd.Select_selected__1nmxZ {\n  color: #4c515d;\n}\n\n.Select_input__3dNRd .Select_icon__1agny {\n  margin-left: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n\n.Select_nativeElement__JTkrt {\n  display: none;\n}\n\n.Select_truncateEllipsis__TTX7L {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.Select_noBackground__Rl5Xz .Select_input__3dNRd {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  padding: 0;\n  border: none;\n  border-radius: 0;\n  background: transparent\n}\n\n.Select_noBackground__Rl5Xz .Select_input__3dNRd:hover,\n    .Select_noBackground__Rl5Xz .Select_input__3dNRd:focus {\n  color: #00419f;\n}\n\n/* Control scrolling behavior in options container */\n\n.Select_flyout__26Yhj {\n  padding: 0px !important;\n  overflow-y: hidden !important;\n}\n\n.Select_options__11_5- {\n  position: relative;\n  overflow: auto;\n  max-height: 324px;\n  margin: 9px 0;\n  padding: 0 9px;\n  max-height: 306px; /* Max height of Flyout 324px - 18px margin */\n}\n";
var styles = {"select":"Select_select__3Bms0","label":"Select_label__f2w74","singleInputField":"Select_singleInputField__1T_dn","header":"Select_header__1wSnl","input":"Select_input__3dNRd","icon":"Select_icon__1agny","open":"Select_open__3rA7G","disabled":"Select_disabled__3UCeC","selected":"Select_selected__1nmxZ","nativeElement":"Select_nativeElement__JTkrt","truncateEllipsis":"Select_truncateEllipsis__TTX7L","noBackground":"Select_noBackground__Rl5Xz","flyout":"Select_flyout__26Yhj","options":"Select_options__11_5-"};
styleInject(css);

var KEY_CODES = {
  TAB: 9,
  SPACE: 32,
  ENTER: 13,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  ESC: 27
};
var DIRECTIONS = {
  BEFORE: 'before',
  AFTER: 'after'
};

var Select =
/*#__PURE__*/
function (_Component) {
  inherits(Select, _Component);

  function Select(props) {
    var _this;

    classCallCheck(this, Select);

    _this = possibleConstructorReturn(this, getPrototypeOf(Select).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleKeyDown", function (event) {
      if ( // Stop focus change if open
      _this.state.open && event.keyCode === KEY_CODES.TAB || // Stop scrolling if open
      _this.state.open && event.keyCode === KEY_CODES.UP_ARROW || // Stop scrolling if open
      _this.state.open && event.keyCode === KEY_CODES.DOWN_ARROW) {
        event.preventDefault();
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleKeyUpOpen", function (event) {
      // OPEN space/up/down
      if (!_this.state.open && (event.keyCode === KEY_CODES.SPACE || event.keyCode === KEY_CODES.UP_ARROW || event.keyCode === KEY_CODES.DOWN_ARROW)) {
        return _this.setState(function (_ref) {
          var open = _ref.open,
              selectedIndex = _ref.selectedIndex;
          return {
            open: !open,
            activeIndex: selectedIndex
          };
        });
      } // CLOSE/CANCEL esc


      if (_this.state.open && event.keyCode === KEY_CODES.ESC) {
        return _this.setState(function (_ref2) {
          var open = _ref2.open,
              selectedIndex = _ref2.selectedIndex;
          return {
            open: !open,
            activeIndex: selectedIndex
          };
        });
      } // CLOSE/CHOOSE space/enter


      if (_this.state.open && (event.keyCode === KEY_CODES.ENTER || event.keyCode === KEY_CODES.SPACE)) {
        var activeIndex = _this.state.activeIndex;
        var childArray = React.Children.toArray(_this.props.children);
        var id = _this.props.id;
        var _childArray$activeInd = childArray[activeIndex].props,
            value = _childArray$activeInd.value,
            selectedText = _childArray$activeInd.selectedText,
            primaryText = _childArray$activeInd.primaryText;
        return _this.setState(function (_ref3) {
          var open = _ref3.open;
          return {
            open: !open,
            value: value,
            selectedText: selectedText || primaryText,
            selectedIndex: activeIndex
          };
        }, function () {
          _this.props.onChange({
            id: id,
            value: value
          });
        });
      }

      if (_this.state.open && (event.keyCode === KEY_CODES.UP_ARROW || event.keyCode === KEY_CODES.DOWN_ARROW)) {
        var nextPosition = event.keyCode === KEY_CODES.UP_ARROW ? DIRECTIONS.BEFORE : DIRECTIONS.AFTER;

        var nextIndex = _this.findNextChildIndex(nextPosition);

        return _this.setState(function () {
          return {
            activeIndex: nextIndex
          };
        });
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "findNextChildIndex", function (direction) {
      var currentFiltered = React.Children.toArray(_this.props.children).map(function (child, index) {
        return objectSpread({}, child, {
          origIndex: index
        });
      }).filter(function (child) {
        return !child.props.disabled;
      });
      var currentFilteredIndex = currentFiltered.findIndex(function (child) {
        return child.origIndex === _this.state.activeIndex;
      });

      if (direction === DIRECTIONS.BEFORE) {
        return currentFiltered[currentFilteredIndex - 1] ? currentFiltered[currentFilteredIndex - 1].origIndex : _this.state.activeIndex;
      }

      return currentFiltered[currentFilteredIndex + 1] ? currentFiltered[currentFilteredIndex + 1].origIndex : _this.state.activeIndex;
    });

    _this.state = {
      open: false,
      selectedText: props.placeholderText,
      value: props.value,
      activeIndex: null,
      selectedIndex: null
    };
    return _this;
  }

  createClass(Select, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setSelected(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setSelected(nextProps);
    }
  }, {
    key: "onChangeHandler",
    value: function onChangeHandler() {
      var id = this.props.id;
      var value = this.state.value;
      this.props.onChange({
        id: id,
        value: value
      });
    }
  }, {
    key: "setSelected",
    value: function setSelected(providedProps) {
      this.setState(function () {
        var selectedText = '';
        var value = '';
        var activeIndex = null;
        var selectedIndex = null;
        React.Children.map(providedProps.children, function (child, index) {
          if (child.type.displayName === 'Option' && child.props.selected) {
            selectedText = child.props.selectedText || child.props.primaryText;
            value = child.props.value;
            activeIndex = index;
            selectedIndex = index;
          }
        });
        return {
          activeIndex: activeIndex,
          selectedText: selectedText,
          value: value,
          selectedIndex: selectedIndex
        };
      });
    }
  }, {
    key: "toggleHandler",
    value: function toggleHandler(e) {
      this.setState(function (_ref4) {
        var open = _ref4.open,
            selectedIndex = _ref4.selectedIndex;
        return {
          open: !open,
          activeIndex: selectedIndex
        };
      });
      this.props.onClick(e);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children) {
      var _this2 = this;

      var _onClick = function onClick(props) {
        _this2.setState({
          open: false,
          selectedText: props.selectedText || props.primaryText,
          value: props.value
        }, _this2.onChangeHandler);
      };

      return React.Children.map(children, function (child, index) {
        return child.type.displayName === 'Option' ? React.cloneElement(child, {
          onClick: function onClick() {
            return _onClick(child.props);
          },
          selected: index === _this2.state.selectedIndex,
          active: _this2.state.open && _this2.state.activeIndex === index,
          tabIndex: null,
          parentRef: _this2.parentRef
        }) : child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _classnames2,
          _this3 = this;

      var _this$props = this.props,
          name = _this$props.name,
          className = _this$props.className,
          children = _this$props.children,
          disabled = _this$props.disabled,
          outerLabel = _this$props.outerLabel,
          placeholderText = _this$props.placeholderText,
          isSingleInput = _this$props.isSingleInput,
          tabIndex = _this$props.tabIndex,
          inputClassName = _this$props.inputClassName;
      var _this$state = this.state,
          open = _this$state.open,
          value = _this$state.value,
          selectedText = _this$state.selectedText;
      var selectClassList = classnames(className, styles.select, (_classnames = {}, defineProperty(_classnames, "".concat(styles.disabled), disabled), defineProperty(_classnames, "".concat(styles.open), !!open), defineProperty(_classnames, "".concat(styles.noBackground), this.props.noBackground), defineProperty(_classnames, "".concat(styles.header), this.props.headerSelect), _classnames));
      var selectInputClassList = classnames(inputClassName, styles.input, (_classnames2 = {}, defineProperty(_classnames2, "".concat(styles.selected), !!value), defineProperty(_classnames2, "".concat(styles.singleInputField), isSingleInput), _classnames2));
      return React__default.createElement(OutsideClickHandler, {
        onOutsideClick: function onOutsideClick() {
          return _this3.close();
        }
      }, React__default.createElement("div", {
        className: selectClassList
      }, outerLabel && React__default.createElement("div", {
        className: styles.label
      }, outerLabel), React__default.createElement("div", {
        className: selectInputClassList,
        onClick: function onClick() {
          return _this3.toggleHandler();
        },
        role: "listbox",
        tabIndex: disabled ? undefined : tabIndex,
        onKeyUp: this.handleKeyUpOpen,
        onKeyDown: this.handleKeyDown,
        onKeyPress: this.handleKeyPress
      }, React__default.createElement("span", {
        className: styles.truncateEllipsis,
        title: selectedText || placeholderText
      }, selectedText || placeholderText), React__default.createElement("i", {
        className: "lp-icon ".concat(styles.icon)
      }, "down_angle")), React__default.createElement(Flyout, {
        className: styles.flyout,
        open: open
      }, React__default.createElement("div", {
        ref: function ref(item) {
          _this3.parentRef = item;
        },
        className: styles.options
      }, this.renderChildren(children))), React__default.createElement("select", {
        name: name,
        className: styles.nativeElement,
        onChange: function onChange() {
          return _this3.onChangeHandler();
        },
        ref: function ref(select) {
          _this3.select = select;
        },
        value: value
      }, React__default.createElement("option", {
        disabled: true,
        value: ""
      }), React.Children.map(children, function (child) {
        return child.type.displayName === 'Option' ? React__default.createElement("option", {
          value: child.props.value
        }, child.props.primaryText) : null;
      }))));
    }
  }]);

  return Select;
}(React.Component);
Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  noBackground: PropTypes.bool,
  headerSelect: PropTypes.bool,
  isSingleInput: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  outerLabel: PropTypes.string,
  placeholderText: PropTypes.string,
  value: PropTypes.string,
  tabIndex: PropTypes.number
};
Select.defaultProps = {
  className: '',
  disabled: false,
  id: null,
  name: '',
  noBackground: false,
  headerSelect: false,
  isSingleInput: false,
  onClick: function onClick() {},
  onChange: function onChange() {},
  outerLabel: '',
  placeholderText: '',
  value: '',
  tabIndex: 0
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

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

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var NOOP = function NOOP() {};

var withCopyToClipboard = (function (WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(withCopyToText, _React$Component);

    function withCopyToText(props) {
      var _this;

      classCallCheck(this, withCopyToText);

      _this = possibleConstructorReturn(this, getPrototypeOf(withCopyToText).call(this, props));

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "onClick", function (e) {
        _this.copyTextToClipboard(e);
      });

      _this.state = {
        copied: false
      };
      return _this;
    }

    createClass(withCopyToText, [{
      key: "copyTextToClipboard",
      value: function copyTextToClipboard(e) {
        var textArea = this.textArea;
        textArea.select();

        try {
          var successful = document.execCommand('copy');

          if (successful) {
            this.props.onCopySuccess(e);
          } else {
            throw new Error('Unable to copy to clipboard.');
          }
        } catch (err) {
          this.props.onCopyError(err);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        // We want to avoid these styles getting overriden accidently,
        // so they are being applied inline to the element itself.
        var textStyle = {
          position: 'fixed',
          top: '-100%',
          left: '-100%',
          width: '2em',
          height: '2em',
          padding: 0,
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          background: 'transparent'
        };

        var _this$props = this.props,
            textToCopy = _this$props.textToCopy,
            onCopyError = _this$props.onCopyError,
            onCopySuccess = _this$props.onCopySuccess,
            rest = objectWithoutProperties(_this$props, ["textToCopy", "onCopyError", "onCopySuccess"]);

        return React__default.createElement(WrappedComponent, _extends_1({}, rest, {
          onClick: this.onClick
        }), React__default.createElement("textarea", {
          value: textToCopy,
          ref: function ref(textArea) {
            _this2.textArea = textArea;
          },
          style: objectSpread({}, textStyle),
          readOnly: true
        }), this.props.children);
      }
    }]);

    return withCopyToText;
  }(React__default.Component), defineProperty(_class, "displayName", "withCopyToText(".concat(getDisplayName(WrappedComponent), ")")), defineProperty(_class, "propTypes", {
    children: PropTypes.node,
    onCopyError: PropTypes.func,
    onCopySuccess: PropTypes.func,
    textToCopy: PropTypes.string
  }), defineProperty(_class, "defaultProps", {
    children: null,
    onCopyError: NOOP,
    onCopySuccess: NOOP,
    textToCopy: ''
  }), _temp;
});

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n\n  &:visited {\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n\n  height: 100%;\n  overflow: hidden;\n  padding: 0 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n\n  width: 100%;\n  max-width: 100%;\n  min-width: 416px;\n\n  height: 48px;\n  border: 1px solid ", ";\n  border-radius: 3px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  border-left: 1px solid ", ";\n  border-right: none;\n\n  border-top: none;\n  border-bottom: none;\n\n  padding: 0 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n\n  cursor: pointer;\n  outline: none;\n\n  justify-content: center;\n  width: 100px;\n  min-width: 100px;\n\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var buttonDefaultClass = emotion.css(_templateObject());
var buttonWithLinkClass = emotion.css(_templateObject2(), Theme.colors.grey);
var copyLinkClass = emotion.css(_templateObject3(), Theme.colors.grey);
var linkContainerClass = emotion.css(_templateObject4());
var linkClass = emotion.css(_templateObject5(), Theme.colors.blue);

var button = function button(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;
  return React__default.createElement("button", {
    onClick: onClick,
    className: emotion.cx(className),
    "data-qa-selector": "copy-button"
  }, children);
};

var CopyTextButton = withCopyToClipboard(button);
var COPY_LINK = 'Copy Link';
var COPY_LINK_SUCCESS = 'Copied!';
var CopyButton = function CopyButton(_ref2) {
  var linkToCopy = _ref2.linkToCopy,
      className = _ref2.className;

  var _useState = React.useState(COPY_LINK),
      _useState2 = slicedToArray(_useState, 2),
      copyText = _useState2[0],
      setCopyText = _useState2[1];

  React.useEffect(function () {
    var timer;

    if (copyText === COPY_LINK_SUCCESS) {
      timer = setInterval(function () {
        return setCopyText(COPY_LINK);
      }, 1000);
    }

    return function cleanup() {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [copyText]);
  return React__default.createElement(CopyTextButton, {
    className: emotion.cx(buttonDefaultClass, className),
    textToCopy: linkToCopy,
    onCopySuccess: function onCopySuccess() {
      return setCopyText(COPY_LINK_SUCCESS);
    }
  }, React__default.createElement("span", {
    "data-qa-selector": "copy-link-text",
    className: emotion.css(objectSpread({}, Theme.typographyDefs.bodyDefault))
  }, copyText));
};

var CopyLink = function CopyLink(_ref3) {
  var linkToCopy = _ref3.linkToCopy,
      className = _ref3.className;
  return React__default.createElement("div", {
    className: emotion.cx(copyLinkClass, className)
  }, React__default.createElement("div", {
    className: linkContainerClass
  }, React__default.createElement(Link, {
    "data-qa-selector": "copy-link",
    className: linkClass,
    href: linkToCopy,
    target: "_blank"
  }, linkToCopy)), React__default.createElement(CopyButton, {
    linkToCopy: linkToCopy,
    className: buttonWithLinkClass
  }));
};

CopyLink.propTypes = {
  linkToCopy: PropTypes.string.isRequired,
  className: PropTypes.string
};
CopyLink.defaultProps = {
  className: ''
};

function _templateObject8() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n\n  transform: translateY(calc(100% + 2px));\n\n  ", "\n  color: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  height: 20px;\n  transform: translateY(-100%);\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  flex-grow: 1;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = taggedTemplateLiteral(["\n  max-width: unset !important;\n  text-align: left;\n  height: ", ";\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  min-width: ", ";\n\n  flex-grow: ", ";\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n\n  margin-bottom: 22px;\n  margin-top: ", ";\n\n  input {\n    &:hover,\n    &:active {\n      border-color: ", " !important;\n    }\n\n    &:focus {\n      border-color: ", " !important;\n    }\n\n    :not(:active) {\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n\n  button {\n    background-color: white;\n    color: ", ";\n    overflow: visible;\n    padding: 0 15px;\n    border: 1px solid ", ";\n\n    &:hover,\n    &:active,\n    &:focus {\n      background-color: white !important;\n      color: ", ";\n    }\n  }\n\n  button,\n  .", " {\n    position: relative;\n\n    &:hover,\n    &:active,\n    &:focus {\n      outline: none;\n\n      &:before {\n        content: '';\n        position: absolute;\n        top: -1px;\n        bottom: -1px;\n        left: -1px;\n        right: -1px;\n        background-color: transparent;\n        border-radius: inherit;\n        border-color: ", ";\n\n        z-index: 3;\n      }\n    }\n\n    &:hover,\n    &:active {\n      &:before {\n        border: 1px solid ", ";\n      }\n    }\n\n    &:focus:before {\n      border: 1px solid ", ";\n    }\n  }\n\n  .", " {\n    background-color: ", ";\n  }\n\n  > * {\n    height: ", ";\n\n    ", " {\n      height: ", ";\n      border: 1px solid ", " !important;\n    }\n  }\n\n  > *:first-child {\n    ", " {\n      border-top-left-radius: 3px;\n      border-bottom-left-radius: 3px;\n    }\n  }\n\n  > *:not(:first-child) {\n    ", " {\n      border-top-left-radius: 0px;\n      border-bottom-left-radius: 0px;\n    }\n  }\n\n  > *:last-child {\n    ", " {\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px;\n    }\n  }\n\n  > *:not(:last-child) {\n    margin-right: -1px;\n\n    ", " {\n      border-top-right-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n  }\n\n  > *:first-child:last-child {\n    .", " {\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.32);\n      border: none;\n    }\n  }\n\n  > *:not(:first-child):not(:last-child) {\n    position: relative;\n    flex-grow: 1;\n    z-index: 2;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  margin: 24px 0;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = taggedTemplateLiteral(["\n  flex-grow: 1;\n\n  display: flex;\n  align-items: center;\n\n  background-color: ", ";\n  padding: 0 15px;\n  ", ";\n\n  cursor: default;\n  border-radius: inherit;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var INPUT_HEIGHT = '48px';
var selectInputClassName = 'url-input-select';
var singleOptionClass = emotion.css(_templateObject$1(), Theme.colors.greyLighter, Theme.typographyDefs.bodyDefault);
var inputSelectors = [".".concat(singleOptionClass), ".".concat(selectInputClassName), 'input', 'button'];
var inputSelectorString = inputSelectors.join(', ');
var containerClass = emotion.css(_templateObject2$1());
var getInputGroupClass = function getInputGroupClass(hasLabels) {
  return emotion.css(_templateObject3$1(), hasLabels ? '22px' : '0', Theme.colors.greyDarker, Theme.colors.blue, Theme.colors.greyDark, Theme.colors.grey, Theme.colors.greyDarker, selectInputClassName, Theme.colors.greyDarker, Theme.colors.greyDarker, Theme.colors.blue, selectInputClassName, Theme.colors.greyLighter, INPUT_HEIGHT, inputSelectorString, INPUT_HEIGHT, Theme.colors.grey, inputSelectorString, inputSelectorString, inputSelectorString, inputSelectorString, singleOptionClass);
};
var getSelectContainerClass = function getSelectContainerClass(hasInput, hasCopyLink, selectMinWidth) {
  return emotion.css(_templateObject4$1(), hasInput || hasCopyLink ? selectMinWidth : '100%', !hasInput && hasCopyLink ? 1 : 'unset');
};
var selectClass = emotion.css(_templateObject5$1(), INPUT_HEIGHT);
var inputContainerClass = emotion.css(_templateObject6());
var labelClass = emotion.css(_templateObject7(), Theme.typographyDefs.supportContent);
var errorClass = emotion.css(_templateObject8(), Theme.typographyDefs.supportContent, Theme.colors.redDark);

var selectors = {
  SINGLE_OPTION_SELECT: 'url-option-select-single',
  MULTI_OPTION_SELECT: 'url-option-select-multi',
  SELECT_ERROR: 'url-option-select-error',
  SELECT_LABEL: 'url-option-select-label',
  INPUT: 'url-input',
  INPUT_LABEL: 'url-input-label',
  INPUT_ERROR: 'url-input-error',
  COPY_LINK: 'url-copy'
};

var SingleOptionComponent = function SingleOptionComponent(_ref) {
  var value = _ref.value;
  return React__default.createElement("div", {
    "data-qa-selector": selectors.SINGLE_OPTION_SELECT,
    className: singleOptionClass
  }, value);
};

var SelectComponent = function SelectComponent(_ref2) {
  var options = _ref2.options,
      onUpdateSelect = _ref2.onUpdateSelect,
      selectValue = _ref2.selectValue,
      getOptionValue = _ref2.getOptionValue,
      getOptionDisplay = _ref2.getOptionDisplay;
  return React__default.createElement(Select, {
    "data-qa-selector": selectors.MULTI_OPTION_SELECT,
    onChange: function onChange(_ref3) {
      var value = _ref3.value;
      return onUpdateSelect(value);
    },
    className: selectClass,
    inputClassName: selectInputClassName,
    isSingleInput: true
  }, options.map(function (option) {
    var value = getOptionValue(option);
    return React__default.createElement(Option, {
      value: value,
      key: value,
      primaryText: getOptionDisplay(option),
      selected: value === selectValue
    });
  }));
};

var InputComponent = function InputComponent(_ref4) {
  var inputValue = _ref4.inputValue,
      inputPlaceholder = _ref4.inputPlaceholder,
      inputLabel = _ref4.inputLabel,
      onUpdateInput = _ref4.onUpdateInput,
      inputError = _ref4.inputError;
  return React__default.createElement("div", {
    className: inputContainerClass
  }, inputLabel && React__default.createElement("span", {
    "data-qa-selector": selectors.INPUT_LABEL,
    className: labelClass
  }, inputLabel), React__default.createElement(Input, {
    "data-qa-selector": selectors.INPUT,
    value: inputValue,
    onChange: function onChange(_ref5) {
      var target = _ref5.target;
      return onUpdateInput(target.value);
    },
    placeholder: inputPlaceholder
  }), inputError && React__default.createElement("span", {
    "data-qa-selector": selectors.INPUT_ERROR,
    className: errorClass
  }, inputError));
};

var UrlInputGroup = function UrlInputGroup(_ref6) {
  var options = _ref6.options,
      getOptionDisplay = _ref6.getOptionDisplay,
      getOptionValue = _ref6.getOptionValue,
      onUpdateSelect = _ref6.onUpdateSelect,
      selectValue = _ref6.selectValue,
      selectMinWidth = _ref6.selectMinWidth,
      selectLabel = _ref6.selectLabel,
      selectError = _ref6.selectError,
      allowInputSelection = _ref6.allowInputSelection,
      onUpdateInput = _ref6.onUpdateInput,
      inputValue = _ref6.inputValue,
      inputError = _ref6.inputError,
      inputPlaceholder = _ref6.inputPlaceholder,
      inputLabel = _ref6.inputLabel,
      allowCopyLink = _ref6.allowCopyLink,
      className = _ref6.className;
  var selectContainer = getSelectContainerClass(allowInputSelection, allowCopyLink, selectMinWidth);
  var inputGroupClass = getInputGroupClass(selectLabel || inputLabel);
  var selectDisplay;

  if (allowCopyLink && selectValue) {
    var match = options.filter(function (opt) {
      return getOptionValue(opt) === selectValue;
    });
    selectDisplay = match.length > 0 ? getOptionDisplay(match[0]) : '';
  }

  return React__default.createElement("div", {
    className: emotion.cx(containerClass, className)
  }, React__default.createElement("div", {
    className: emotion.cx(inputGroupClass)
  }, React__default.createElement("div", {
    className: selectContainer
  }, selectLabel && React__default.createElement("span", {
    "data-qa-selector": selectors.SELECT_LABEL,
    className: labelClass
  }, selectLabel), options.length === 1 ? React__default.createElement(SingleOptionComponent, {
    value: getOptionDisplay(options[0])
  }) : React__default.createElement(SelectComponent, {
    options: options,
    onUpdateSelect: onUpdateSelect,
    selectValue: selectValue,
    getOptionValue: getOptionValue,
    getOptionDisplay: getOptionDisplay
  }), selectError && React__default.createElement("span", {
    "data-qa-selector": selectors.SELECT_ERROR,
    className: errorClass
  }, selectError)), allowInputSelection && React__default.createElement(InputComponent, {
    inputValue: inputValue,
    inputPlaceholder: inputPlaceholder,
    inputLabel: inputLabel,
    onUpdateInput: onUpdateInput,
    inputError: inputError
  }), allowCopyLink && React__default.createElement("span", null, React__default.createElement(CopyButton, {
    "data-qa-selector": selectors.COPY_LINK,
    linkToCopy: "".concat(selectDisplay).concat(inputValue)
  }))));
};

UrlInputGroup.propTypes = {
  // Select
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  getOptionDisplay: PropTypes.func,
  getOptionValue: PropTypes.func,
  onUpdateSelect: PropTypes.func.isRequired,
  selectValue: PropTypes.string,
  selectMinWidth: PropTypes.string,
  selectLabel: PropTypes.string,
  selectError: PropTypes.node,
  // Input
  allowInputSelection: PropTypes.bool,
  onUpdateInput: PropTypes.func,
  inputValue: PropTypes.string,
  inputError: PropTypes.node,
  inputPlaceholder: PropTypes.string,
  inputLabel: PropTypes.string,
  allowCopyLink: PropTypes.bool,
  className: PropTypes.string
};
UrlInputGroup.defaultProps = {
  getOptionDisplay: function getOptionDisplay(opt) {
    return opt;
  },
  getOptionValue: function getOptionValue(opt) {
    return opt;
  },
  selectValue: '',
  selectMinWidth: '50%',
  selectLabel: '',
  selectError: '',
  allowInputSelection: false,
  onUpdateInput: function onUpdateInput() {},
  inputValue: '',
  inputError: '',
  inputPlaceholder: '',
  inputLabel: '',
  allowCopyLink: false,
  className: ''
};

module.exports = UrlInputGroup;
