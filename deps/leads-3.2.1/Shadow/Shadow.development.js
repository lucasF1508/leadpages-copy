'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Shadow_shadowL1__2zlWf {\n  -webkit-box-shadow: 0 0 2px 0 rgba(0, 0, 0, .25), 0 1px 3px 0 rgba(0, 0, 0, .2) !important;\n          box-shadow: 0 0 2px 0 rgba(0, 0, 0, .25), 0 1px 3px 0 rgba(0, 0, 0, .2) !important;\n}\n\n.Shadow_shadowL2__1zWCo {\n  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 3px 6px 0 rgba(0, 0, 0, .2) !important;\n          box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 3px 6px 0 rgba(0, 0, 0, .2) !important;\n}\n\n.Shadow_shadowL3__3Y5vk {\n  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 8px 10px 0 rgba(0, 0, 0, .25) !important;\n          box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 8px 10px 0 rgba(0, 0, 0, .25) !important;\n}\n\n.Shadow_shadowL4__1mgQb {\n  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .25), 0 12px 18px 0 rgba(0, 0, 0, .3) !important;\n          box-shadow: 0 0 10px 0 rgba(0, 0, 0, .25), 0 12px 18px 0 rgba(0, 0, 0, .3) !important;\n}\n\n.Shadow_shadowL5__1qyik {\n  -webkit-box-shadow: 0 0 12px 0 rgba(0, 0, 0, .25), 0 16px 18px 0 rgba(0, 0, 0, .35) !important;\n          box-shadow: 0 0 12px 0 rgba(0, 0, 0, .25), 0 16px 18px 0 rgba(0, 0, 0, .35) !important;\n}\n";
var styles = {"shadowL1":"Shadow_shadowL1__2zlWf","shadowL2":"Shadow_shadowL2__1zWCo","shadowL3":"Shadow_shadowL3__3Y5vk","shadowL4":"Shadow_shadowL4__1mgQb","shadowL5":"Shadow_shadowL5__1qyik"};
styleInject(css);

var levels = {
  L1: 'L1',
  L2: 'L2',
  L3: 'L3',
  L4: 'L4',
  L5: 'L5'
};

var withShadow = function withShadow(WrappedComponent) {
  return function (_ref) {
    var level = _ref.level,
        props = objectWithoutProperties(_ref, ["level"]);

    return React.createElement(WrappedComponent, _extends_1({
      className: classNames(defineProperty({}, "".concat(styles["shadow".concat(level)]), !!levels[level]))
    }, props));
  };
};

exports.default = withShadow;
exports.levels = levels;
