'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));

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

var css = ".Option_option__3YhwD {\n  font-size: 15px;\n\n  position: relative;\n\n  padding: 9px;\n\n  cursor: pointer\n}\n.Option_option__3YhwD:hover,\n  .Option_option__3YhwD:focus,\n  .Option_option__3YhwD.Option_active__1iVaI {\n  border-radius: 3px;\n  outline: 0;\n  background-color: #0069ff\n}\n.Option_option__3YhwD:hover .Option_primaryText__h5hHu,\n    .Option_option__3YhwD:hover .Option_secondaryText__1OCgm,\n    .Option_option__3YhwD:focus .Option_primaryText__h5hHu,\n    .Option_option__3YhwD:focus .Option_secondaryText__1OCgm,\n    .Option_option__3YhwD.Option_active__1iVaI .Option_primaryText__h5hHu,\n    .Option_option__3YhwD.Option_active__1iVaI .Option_secondaryText__1OCgm {\n  color: #ffffff;\n}\n.Option_option__3YhwD:hover.Option_hasSecondaryText__DIhg9 .Option_optionInner__1gsmJ, .Option_option__3YhwD:focus.Option_hasSecondaryText__DIhg9 .Option_optionInner__1gsmJ, .Option_option__3YhwD.Option_active__1iVaI.Option_hasSecondaryText__DIhg9 .Option_optionInner__1gsmJ {\n  border-color: transparent;\n}\n.Option_option__3YhwD.Option_disabled__3U8Hj {\n  pointer-events: none;\n  opacity: 1\n}\n.Option_option__3YhwD.Option_disabled__3U8Hj .Option_primaryText__h5hHu {\n  opacity: 0.4;\n}\n.Option_option__3YhwD .Option_primaryText__h5hHu {\n  font-size: 15px;\n  color: #4c515d;\n}\n.Option_option__3YhwD .Option_secondaryText__1OCgm {\n  font-size: 12px;\n  color: #797f89;\n}\n.Option_option__3YhwD.Option_hasSecondaryText__DIhg9 {\n  padding: 0 9px\n}\n.Option_option__3YhwD.Option_hasSecondaryText__DIhg9 .Option_optionInner__1gsmJ {\n  padding: 12px 0;\n  border-bottom: 1px solid #b1bacc;\n}\n.Option_option__3YhwD.Option_hasSecondaryText__DIhg9:last-child .Option_optionInner__1gsmJ {\n  border-bottom: none;\n}\n.Option_option__3YhwD.Option_selected__16BLs:hover::before,\n  .Option_option__3YhwD.Option_selected__16BLs:focus::before,\n  .Option_option__3YhwD.Option_selected__16BLs.Option_active__1iVaI,\n  .Option_option__3YhwD.Option_selected__16BLs.Option_active__1iVaI::before {\n  color: #ffffff;\n}\n.Option_option__3YhwD.Option_selected__16BLs::before {\n  font-family: 'LeadPages-Icons';\n  position: absolute;\n  top: 50%;\n  content: '\\E206';\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  color: #0069ff;\n}\n.Option_option__3YhwD.Option_selected__16BLs .Option_primaryText__h5hHu,\n  .Option_option__3YhwD.Option_selected__16BLs .Option_secondaryText__1OCgm {\n  margin-left: 24px;\n}\n.Option_truncateEllipsis__1Phy_ {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n";
var styles = {"option":"Option_option__3YhwD","active":"Option_active__1iVaI","primaryText":"Option_primaryText__h5hHu","secondaryText":"Option_secondaryText__1OCgm","hasSecondaryText":"Option_hasSecondaryText__DIhg9","optionInner":"Option_optionInner__1gsmJ","disabled":"Option_disabled__3U8Hj","selected":"Option_selected__16BLs","truncateEllipsis":"Option_truncateEllipsis__1Phy_"};
styleInject(css);

var Option =
/*#__PURE__*/
function (_Component) {
  inherits(Option, _Component);

  function Option(props) {
    var _this;

    classCallCheck(this, Option);

    _this = possibleConstructorReturn(this, getPrototypeOf(Option).call(this, props));
    _this.state = {
      selected: props.selected
    };
    return _this;
  }

  createClass(Option, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected !== this.props.selected) {
        this.setState(function () {
          return {
            selected: nextProps.selected
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          active = _this$props.active,
          parentRef = _this$props.parentRef;

      if (!prevProps.active && active) {
        var option = this.option ? this.option : null;

        if (!option || !option.getBoundingClientRect || !parentRef.getBoundingClientRect) {
          return;
        }

        var optionRect = option.getBoundingClientRect();
        var parentRect = parentRef.getBoundingClientRect();

        if (optionRect.top < parentRect.top) {
          var diff = optionRect.top - parentRect.top;
          parentRef.scrollTop = parentRef.scrollTop + diff;
          return;
        }

        if (optionRect.bottom > parentRect.bottom) {
          var _diff = optionRect.bottom - parentRect.bottom;

          parentRef.scrollTop = parentRef.scrollTop + _diff;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          onClick = _this$props2.onClick,
          primaryText = _this$props2.primaryText,
          secondaryText = _this$props2.secondaryText,
          value = _this$props2.value,
          selectedText = _this$props2.selectedText,
          tabIndex = _this$props2.tabIndex,
          parentRef = _this$props2.parentRef,
          active = _this$props2.active,
          rest = objectWithoutProperties(_this$props2, ["children", "className", "onClick", "primaryText", "secondaryText", "value", "selectedText", "tabIndex", "parentRef", "active"]);

      var optionClassList = classNames(className, styles.option, (_classNames = {}, defineProperty(_classNames, "".concat(styles.selected), this.state.selected), defineProperty(_classNames, "".concat(styles.disabled), this.props.disabled), defineProperty(_classNames, "".concat(styles.active), this.props.active), defineProperty(_classNames, "".concat(styles.hasSecondaryText), !!this.props.secondaryText), _classNames));
      return React__default.createElement("div", _extends_1({
        "aria-selected": this.state.selected,
        className: optionClassList,
        "data-value": value,
        key: value,
        onClick: onClick,
        role: "option",
        tabIndex: tabIndex,
        ref: function ref(option) {
          return _this2.option = option;
        }
      }, rest), React__default.createElement("div", {
        className: styles.optionInner
      }, React__default.createElement("div", {
        className: classNames(styles.primaryText, styles.truncateEllipsis),
        title: primaryText
      }, children || primaryText), secondaryText && React__default.createElement("div", {
        className: classNames(styles.secondaryText, styles.truncateEllipsis),
        title: secondaryText
      }, secondaryText)));
    }
  }]);

  return Option;
}(React.Component);
Option.displayName = 'Option';
Option.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  selected: PropTypes.bool,
  // selectedText is used in parent select component
  // eslint-disable-next-line react/no-unused-prop-types
  selectedText: PropTypes.string,
  value: PropTypes.string,
  tabIndex: PropTypes.number,
  parentRef: PropTypes.object
};
Option.defaultProps = {
  active: false,
  children: null,
  className: '',
  disabled: false,
  onClick: function onClick() {},
  primaryText: '',
  secondaryText: '',
  selected: false,
  selectedText: '',
  value: '',
  tabIndex: 0,
  parentRef: {}
};

module.exports = Option;
