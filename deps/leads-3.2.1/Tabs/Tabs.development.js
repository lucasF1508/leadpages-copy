'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));

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

var css = ".TabGroup_tabGroup__2fKQX {\n  font-size: 15px;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n\n  margin: 0 auto;\n  padding: 0;\n\n  list-style-type: none;\n\n  cursor: pointer;\n\n  color: #797f89;\n}\n";
var styles = {"tabGroup":"TabGroup_tabGroup__2fKQX"};
styleInject(css);

var TabGroup = function TabGroup(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React__default.createElement("ul", {
    className: classNames(className, styles.tabGroup)
  }, children);
};

TabGroup.displayName = 'TabGroup';
TabGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  className: PropTypes.string
};
TabGroup.defaultProps = {
  className: null
};

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

var css$1 = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.TabLink_link__2jt32 {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  font-size: 15px;\n  line-height: 2;\n\n  position: relative;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n\n  margin: 0 6px;\n\n  -webkit-transition: color 0.5s ease;\n\n  transition: color 0.5s ease;\n  text-align: center\n}\n\n.TabLink_link__2jt32:hover {\n  color: #00044c;\n}\n\n.TabLink_link__2jt32::after {\n  position: absolute;\n  right: 0;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 0;\n  margin: auto;\n  content: \"\";\n  -webkit-transition: height 0.2s linear;\n  transition: height 0.2s linear;\n  background-color: #0069ff;\n}\n\n.TabLink_link__2jt32.TabLink_linkActive__1VqIt {\n  color: #00044c;\n}\n\n.TabLink_link__2jt32.TabLink_linkActive__1VqIt::after {\n  height: 3px;\n}\n\n.TabLink_link__2jt32 button {\n  font-size: inherit;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  padding: 0 18px;\n  cursor: pointer;\n  text-align: center;\n  color: inherit;\n  border: none;\n  border-width: 0;\n  border-style: none;\n  border-color: inherit;\n  -o-border-image: none;\n     border-image: none;\n  -o-border-image: initial;\n     border-image: initial;\n  outline: 0;\n  background-color: inherit;\n  -webkit-appearance: none;\n}\n";
var styles$1 = {"link":"TabLink_link__2jt32","linkActive":"TabLink_linkActive__1VqIt"};
styleInject(css$1);

var TabLink = function TabLink(_ref) {
  var children = _ref.children,
      active = _ref.active,
      onClick = _ref.onClick,
      props = objectWithoutProperties(_ref, ["children", "active", "onClick"]);

  return React__default.createElement("li", {
    className: classNames(styles$1.link, defineProperty({}, "".concat(styles$1.linkActive), active))
  }, React__default.createElement("button", _extends_1({
    type: "button",
    onClick: onClick
  }, props), children));
};

TabLink.displayName = 'TabLink';
TabLink.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};
TabLink.defaultProps = {
  active: false,
  onClick: undefined
};

// ie less state managment. and the url could drive the view

var TabContent = function TabContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      activeIndex = _ref.activeIndex;
  return React__default.createElement("div", {
    className: classNames('ui-tabs-content', className)
  }, React.Children.map(children, function (child, i) {
    if (i !== activeIndex) {
      return null;
    }

    return child;
  }));
};

TabContent.displayName = 'TabContent';
TabContent.propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string
};
TabContent.defaultProps = {
  activeIndex: 0,
  className: ''
};

exports.TabGroup = TabGroup;
exports.TabLink = TabLink;
exports.TabContent = TabContent;
