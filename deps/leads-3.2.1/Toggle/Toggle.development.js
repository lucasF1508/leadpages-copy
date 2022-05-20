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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Toggle_toggleClass__1n7_a {\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease\n}\n\n.Toggle_toggleClass__1n7_a:hover,\n  .Toggle_toggleClass__1n7_a.Toggle_toggleActive__3QsZF {\n  cursor: pointer\n}\n\n.Toggle_toggleClass__1n7_a:hover .Toggle_toggleSwitch__2-3CG, .Toggle_toggleClass__1n7_a.Toggle_toggleActive__3QsZF .Toggle_toggleSwitch__2-3CG {\n  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 3px 6px 0 rgba(0, 0, 0, .2);\n          box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 3px 6px 0 rgba(0, 0, 0, .2);\n}\n\n.Toggle_toggleClass__1n7_a .Toggle_toggleBase__2dJoZ {\n  position: relative;\n  width: 35px;\n  height: 12px;\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n  border-radius: 6px;\n  background: #b1bacc;\n}\n\n.Toggle_toggleClass__1n7_a .Toggle_toggleBase__2dJoZ.Toggle_toggleBaseOn__3U__p {\n  background: #0069ff;\n}\n\n.Toggle_toggleClass__1n7_a .Toggle_toggleInput__30k_h {\n  display: none;\n}\n\n.Toggle_toggleClass__1n7_a .Toggle_toggleSwitch__2-3CG {\n  position: absolute;\n  top: -6px;\n  left: -7px;\n  width: 24px;\n  height: 24px;\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n  border-radius: 12px;\n  background: #fafafa;\n  -webkit-box-shadow: 0 0 2px 0 rgba(0, 0, 0, .25), 0 1px 3px 0 rgba(0, 0, 0, .2);\n          box-shadow: 0 0 2px 0 rgba(0, 0, 0, .25), 0 1px 3px 0 rgba(0, 0, 0, .2);\n}\n\n.Toggle_toggleClass__1n7_a .Toggle_toggleSwitch__2-3CG.Toggle_toggleSwitchOn__2izH0 {\n  left: 16px;\n  background: #bcdfff;\n}\n";
var styles = {"toggleClass":"Toggle_toggleClass__1n7_a","toggleActive":"Toggle_toggleActive__3QsZF","toggleSwitch":"Toggle_toggleSwitch__2-3CG","toggleBase":"Toggle_toggleBase__2dJoZ","toggleBaseOn":"Toggle_toggleBaseOn__3U__p","toggleInput":"Toggle_toggleInput__30k_h","toggleSwitchOn":"Toggle_toggleSwitchOn__2izH0"};
styleInject(css);

var Toggle = function Toggle(_ref) {
  var className = _ref.className,
      isActive = _ref.isActive,
      checked = _ref.checked,
      id = _ref.id,
      props = objectWithoutProperties(_ref, ["className", "isActive", "checked", "id"]);

  return React.createElement("div", {
    className: classNames(className, styles.toggleClass, defineProperty({}, "".concat(styles.toggleActive), isActive))
  }, React.createElement("label", {
    htmlFor: id
  }, React.createElement("div", {
    className: classNames(styles.toggleBase, defineProperty({}, "".concat(styles.toggleBaseOn), checked))
  }, React.createElement("div", {
    className: classNames(styles.toggleSwitch, defineProperty({}, "".concat(styles.toggleSwitchOn), checked))
  }))), React.createElement("input", _extends_1({
    checked: checked,
    className: styles.toggleInput,
    type: "checkbox",
    id: id
  }, props)));
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool
};
Toggle.defaultProps = {
  checked: false,
  className: '',
  id: '',
  isActive: false
};

module.exports = Toggle;
