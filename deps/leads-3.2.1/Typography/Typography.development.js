'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var classNames = _interopDefault(require('classnames'));
var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Typography_largeDisplayHeading__2aEB1 {\n  font-family: 'Akkurat';\n  font-size: 30px;\n  font-weight: 300;\n  line-height: 48px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  font-size: 30px !important;\n}\n\n.Typography_mediumDisplayHeading__1u1L- {\n  font-family: 'Akkurat';\n  font-size: 25px;\n  font-weight: 400;\n  line-height: 36px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  font-size: 25px !important;\n}\n\n.Typography_inPageHeading__1i8Xf {\n  font-family: 'Akkurat';\n  font-size: 21px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  font-size: 21px !important;\n}\n\n.Typography_headingDefault__MMn47 {\n  font-family: 'Akkurat';\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  font-size: 17px !important;\n}\n\n.Typography_bodyHeading__28opj {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  font-size: 15px !important;\n}\n\n.Typography_bodyDefault__2_PUh {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  font-size: 15px !important;\n}\n\n.Typography_supportContent__3Cw1k {\n  font-family: 'Akkurat';\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n\n  letter-spacing: 0;\n\n  color: #797f89;\n\n  font-size: 13px !important;\n}\n\n.Typography_tableHeader__bJen1 {\n  font-family: 'Akkurat';\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n\n  letter-spacing: 0;\n\n  color: #797f89;\n\n  font-size: 13px !important;\n}\n\n.Typography_inlineLink__1DDcu {\n  font-family: 'Akkurat';\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #0069ff;\n\n  font-size: 14px !important;\n}\n";
var styles = {"largeDisplayHeading":"Typography_largeDisplayHeading__2aEB1","mediumDisplayHeading":"Typography_mediumDisplayHeading__1u1L-","inPageHeading":"Typography_inPageHeading__1i8Xf","headingDefault":"Typography_headingDefault__MMn47","bodyHeading":"Typography_bodyHeading__28opj","bodyDefault":"Typography_bodyDefault__2_PUh","supportContent":"Typography_supportContent__3Cw1k","tableHeader":"Typography_tableHeader__bJen1","inlineLink":"Typography_inlineLink__1DDcu"};
styleInject(css);

var types = {
  largeDisplayHeading: 'largeDisplayHeading',
  mediumDisplayHeading: 'mediumDisplayHeading',
  inPageHeading: 'inPageHeading',
  headingDefault: 'headingDefault',
  bodyHeading: 'bodyHeading',
  bodyDefault: 'bodyDefault',
  supportContent: 'supportContent',
  tableHeader: 'tableHeader',
  inlineLink: 'inlineLink'
};

var withTypography = function withTypography(WrappedComponent) {
  return function (_ref) {
    var type = _ref.type,
        className = _ref.className,
        props = objectWithoutProperties(_ref, ["type", "className"]);

    return React.createElement(WrappedComponent, _extends_1({
      className: classNames(className, defineProperty({}, "".concat(styles["".concat(type)]), !!types[type]))
    }, props));
  };
};

var TypographyComponent = withTypography(function (props) {
  return React.createElement("div", props);
});

var PROPS = {
  children: PropTypes.node.isRequired
};

var DefaultHeading$$1 = function DefaultHeading$$1(_ref) {
  var children = _ref.children;
  return React.createElement(TypographyComponent, {
    type: types.headingDefault
  }, children);
};

DefaultHeading$$1.propTypes = PROPS;

var PROPS$1 = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
var DEFAULT_PROPS = {
  className: ''
};

var SupportContent$$1 = function SupportContent$$1(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement(TypographyComponent, {
    className: className,
    type: types.supportContent
  }, children);
};

SupportContent$$1.propTypes = PROPS$1;
SupportContent$$1.defaultProps = DEFAULT_PROPS;

exports.default = withTypography;
exports.types = types;
exports.TypographyComponent = TypographyComponent;
exports.DefaultHeading = DefaultHeading$$1;
exports.SupportContent = SupportContent$$1;
