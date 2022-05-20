'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var classNames = _interopDefault(require('classnames'));
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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Label_labelClass__31EwE {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n\n  -webkit-box-align: center;\n\n      -ms-flex-align: center;\n\n          align-items: center\n}\n\n.Label_labelClass__31EwE i {\n  margin-right: 6px;\n  color: #b1bacc;\n}\n\n.Label_labelClass__31EwE .Label_indicator__1l_T_ {\n  width: 8px;\n  height: 8px;\n  margin-right: 6px;\n  border: 2px solid #47c1bf;\n  border-radius: 8px;\n  background: #47c1bf;\n}\n\n.Label_labelClass__31EwE .Label_indicatorWithText__10Lew {\n  font-size: 13px;\n  font-weight: 700;\n  width: 23px;\n  height: 23px;\n  text-align: center;\n  border-radius: 12px;\n}\n";
var styles = {"labelClass":"Label_labelClass__31EwE","indicator":"Label_indicator__1l_T_","indicatorWithText":"Label_indicatorWithText__10Lew"};
styleInject(css);

var Label = function Label(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      iconText = _ref.iconText,
      rest = objectWithoutProperties(_ref, ["children", "className", "icon", "iconText"]);

  var Indicator = function Indicator() {
    return React.createElement("div", {
      className: classNames(styles.indicator, className)
    });
  };

  if (icon) {
    Indicator = function Indicator() {
      return React.createElement("i", {
        className: "lp-icon"
      }, icon);
    };
  }

  if (iconText) {
    Indicator = function Indicator() {
      return React.createElement("div", {
        className: classNames(className, styles.indicatorWithText)
      }, React.createElement("span", null, iconText));
    };
  }

  return React.createElement("div", _extends_1({
    className: classNames(styles.labelClass)
  }, rest), React.createElement(Indicator, null), children);
};

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  className: PropTypes.string,
  icon: PropTypes.string,
  iconText: PropTypes.string
};
Label.defaultProps = {
  children: null,
  className: '',
  icon: null,
  iconText: ''
};

module.exports = Label;
