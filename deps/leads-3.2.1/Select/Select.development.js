'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);
var classnames = _interopDefault(require('classnames'));
var OutsideClickHandler = _interopDefault(require('../OutsideClickHandler'));
require('../Option');
var Flyout = _interopDefault(require('../Flyout'));

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

module.exports = Select;
