'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var classNames = _interopDefault(require('classnames'));
var LoadingDotsComp = _interopDefault(require('../LoadingDots'));

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

var css = ".withLoadingState_error__lZvUu,\n.withLoadingState_success__o0QB6 {\n  font-size: 24px;\n  line-height: normal;\n}\n\n.withLoadingState_error__lZvUu {\n  color: #ed6347;\n}\n\n.withLoadingState_success__o0QB6 {\n  color: #0069ff;\n}\n\n.withLoadingState_inverse__3q2I8 {\n  color: #ffffff;\n}\n\n.withLoadingState_medium__3wB8J,\n.withLoadingState_small__jAc8U,\n.withLoadingState_extraSmall__KyUjj {\n  font-size: 16px;\n}\n\n.withLoadingState_loadingState__2xvun {\n  position: relative;\n\n  width: 100%;\n}\n\n.withLoadingState_hasSuccess__3vq4z .withLoadingState_success__o0QB6 {\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.withLoadingState_hasError__263oC .withLoadingState_error__lZvUu {\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.withLoadingState_hasLoading__nzy02 .withLoadingState_loading__3bGE6 {\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.withLoadingState_originalComponent__ev7x1 {\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n\n  opacity: 1;\n}\n\n.withLoadingState_hiddenOriginalComponent__sbCGr {\n  opacity: 0;\n}\n\n.withLoadingState_loading__3bGE6,\n.withLoadingState_success__o0QB6,\n.withLoadingState_error__lZvUu {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n\n  -webkit-transition: 0.5s ease;\n\n  transition: 0.5s ease;\n\n  -webkit-transform: translate(-50%, 0);\n\n          transform: translate(-50%, 0);\n\n  opacity: 0;\n}\n";
var styles = {"error":"withLoadingState_error__lZvUu","success":"withLoadingState_success__o0QB6","inverse":"withLoadingState_inverse__3q2I8","medium":"withLoadingState_medium__3wB8J","small":"withLoadingState_small__jAc8U","extraSmall":"withLoadingState_extraSmall__KyUjj","loadingState":"withLoadingState_loadingState__2xvun","hasSuccess":"withLoadingState_hasSuccess__3vq4z","hasError":"withLoadingState_hasError__263oC","hasLoading":"withLoadingState_hasLoading__nzy02","loading":"withLoadingState_loading__3bGE6","originalComponent":"withLoadingState_originalComponent__ev7x1","hiddenOriginalComponent":"withLoadingState_hiddenOriginalComponent__sbCGr"};
styleInject(css);

var LOADING_STATES = {
  error: 'error',
  loading: 'loading',
  success: 'success'
};
var LOADING_STATES_ARRAY = [LOADING_STATES.error, LOADING_STATES.loading, LOADING_STATES.success];

var withLoadingState = function withLoadingState(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      inherits(LoadingState, _React$Component);

      function LoadingState(props) {
        var _this;

        classCallCheck(this, LoadingState);

        _this = possibleConstructorReturn(this, getPrototypeOf(LoadingState).call(this, props));
        _this.state = {
          showOriginalComponent: props.loadingState !== LOADING_STATES.loading
        };
        return _this;
      }

      createClass(LoadingState, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var _this2 = this;

          var loadingState = this.props.loadingState;

          if (prevProps.loadingState === loadingState || !LOADING_STATES_ARRAY.some(function (state) {
            return loadingState === state;
          })) {
            return;
          }

          this.setState(function () {
            return {
              showOriginalComponent: false
            };
          }, function () {
            // Show loading dots as long as component is loading
            if (loadingState === LOADING_STATES.loading) {
              return;
            } // Only show error/success states 2000ms after loading completes


            _this2.timeout = setTimeout(function () {
              _this2.setState(function () {
                return {
                  showOriginalComponent: true
                };
              });

              _this2.timeout = null;
            }, 2000);
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _classNames, _classNames2, _classNames3;

          var _this$props = this.props,
              loadingState = _this$props.loadingState,
              inverted = _this$props.inverted,
              size = _this$props.size,
              successMessage = _this$props.successMessage,
              props = objectWithoutProperties(_this$props, ["loadingState", "inverted", "size", "successMessage"]);

          var showOriginalComponent = this.state.showOriginalComponent;
          var errorClassList = classNames('lp-icon', styles.error, (_classNames = {}, defineProperty(_classNames, "".concat(styles.medium), size === 'md'), defineProperty(_classNames, "".concat(styles.small), size === 'sm'), defineProperty(_classNames, "".concat(styles.extraSmall), size === 'xs'), _classNames));
          var successClassList = classNames(styles.success, (_classNames2 = {}, defineProperty(_classNames2, "".concat(styles.inverse), inverted), defineProperty(_classNames2, "".concat(styles.medium), size === 'md'), defineProperty(_classNames2, "".concat(styles.small), size === 'sm'), defineProperty(_classNames2, "".concat(styles.extraSmall), size === 'xs'), _classNames2));
          var loadingStateClassList = classNames(styles.loadingState, (_classNames3 = {}, defineProperty(_classNames3, "".concat(styles.hasLoading), !showOriginalComponent && loadingState === 'loading'), defineProperty(_classNames3, "".concat(styles.hasSuccess), !showOriginalComponent && loadingState === 'success'), defineProperty(_classNames3, "".concat(styles.hasError), !showOriginalComponent && loadingState === 'error'), _classNames3));
          var originalComponentClassList = classNames(styles.originalComponent, defineProperty({}, "".concat(styles.hiddenOriginalComponent), !this.state.showOriginalComponent));
          var useSuccessMessage = successMessage ? React.createElement("span", {
            className: successClassList
          }, successMessage) : React.createElement("i", {
            className: "lp-icon ".concat(successClassList),
            "data-qa-selector": "loadingDotsCheck"
          }, "check");
          return React.createElement("div", {
            className: loadingStateClassList
          }, React.createElement(Component, _extends_1({
            "data-qa-selector": "originalComponent",
            className: originalComponentClassList
          }, props)), React.createElement(LoadingDotsComp, {
            className: styles.loading,
            "data-qa-selector": "loadingDots",
            inverted: inverted,
            size: size
          }), useSuccessMessage, React.createElement("i", {
            className: errorClassList,
            "data-qa-selector": "loadingDotsError"
          }, "error"));
        }
      }]);

      return LoadingState;
    }(React.Component)
  );
};

exports.default = withLoadingState;
exports.LOADING_STATES = LOADING_STATES;
