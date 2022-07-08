'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var Button = _interopDefault(require('../Button'));
var withLoadingState = require('../LoadingState');
var withLoadingState__default = _interopDefault(withLoadingState);

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

var PROPS = objectSpread({}, Button.propTypes, {
  loadingState: PropTypes.string,
  successMessage: PropTypes.string
});

var DEFAULT_PROPS = objectSpread({}, Button.defaultProps, {
  loadingState: withLoadingState.LOADING_STATES.success,
  successMessage: null,
  loadingDotsInverted: false,
  loadingDotsSize: 'sm'
});

var TextWithLoading = withLoadingState__default(function (props) {
  return React.createElement("span", props);
});

var LoadingButton = function LoadingButton(_ref) {
  var children = _ref.children,
      loadingState = _ref.loadingState,
      successMessage = _ref.successMessage,
      loadingDotsInverted = _ref.loadingDotsInverted,
      loadingDotsSize = _ref.loadingDotsSize,
      propsWithoutLoadingState = objectWithoutProperties(_ref, ["children", "loadingState", "successMessage", "loadingDotsInverted", "loadingDotsSize"]);

  var buttonProps = propsWithoutLoadingState;

  if (loadingState === withLoadingState.LOADING_STATES.loading) {
    buttonProps.disabled = true;
  }

  return React.createElement(Button, buttonProps, React.createElement(TextWithLoading, {
    successMessage: successMessage,
    inverted: !buttonProps.isSecondary,
    size: loadingDotsSize,
    loadingState: loadingState
  }, children));
};

LoadingButton.propTypes = PROPS;
LoadingButton.defaultProps = DEFAULT_PROPS;

exports.LOADING_STATES = withLoadingState.LOADING_STATES;
exports.default = LoadingButton;
