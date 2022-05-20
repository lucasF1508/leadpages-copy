'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var Button = _interopDefault(require('../Button'));
var Tooltip = _interopDefault(require('../Tooltip'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.ActionMenu_expandActions__2opLE {\n  color: #b1bacc;\n}\n\n.ActionMenu_actionMenu__3ofbv {\n  position: relative;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n\n  min-width: 100px;\n  max-width: 300px;\n  height: 0\n}\n\n.ActionMenu_actionMenu__3ofbv .ActionMenu_actionMenuList__33A5I {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  visibility: hidden;\n  list-style: none;\n  -webkit-transition: opacity 0.4s ease 0.2s, visibility 0.1s ease 0.2s;\n  transition: opacity 0.4s ease 0.2s, visibility 0.1s ease 0.2s;\n  opacity: 0;\n}\n\n.ActionMenu_actionMenu__3ofbv .ActionMenu_actionMenuList__33A5I i {\n  font-size: 15px;\n  width: 30px;\n}\n\n.ActionMenu_actionMenu__3ofbv .ActionMenu_actionMenuList__33A5I > li {\n  -webkit-transform: translateY(-0.5em);\n          transform: translateY(-0.5em);\n}\n\n.ActionMenu_actionMenu__3ofbv.ActionMenu_isActive__3h9It .ActionMenu_actionMenuList__33A5I,\n  .ActionMenu_actionMenu__3ofbv:hover .ActionMenu_actionMenuList__33A5I {\n  visibility: visible;\n  -webkit-transition: opacity 0.4s ease 0.2s, visibility 0.1s ease;\n  transition: opacity 0.4s ease 0.2s, visibility 0.1s ease;\n  opacity: 1;\n}\n\n.ActionMenu_actionMenu__3ofbv.ActionMenu_isActive__3h9It .ActionMenu_actionMenuList__33A5I > li,\n  .ActionMenu_actionMenu__3ofbv:hover .ActionMenu_actionMenuList__33A5I > li {\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n}\n\n.ActionMenu_actionMenu__3ofbv .ActionMenu_expandActions__2opLE {\n  position: absolute;\n  right: 10px;\n  visibility: visible;\n  -webkit-transition: visibility 0.1s ease 0.6s;\n  transition: visibility 0.1s ease 0.6s;\n  color: #797f89;\n}\n\n.ActionMenu_actionMenu__3ofbv.ActionMenu_isActive__3h9It .ActionMenu_expandActions__2opLE,\n  .ActionMenu_actionMenu__3ofbv:hover .ActionMenu_expandActions__2opLE {\n  visibility: hidden;\n  -webkit-transition: visibility 0.1s ease 0.1s;\n  transition: visibility 0.1s ease 0.1s;\n}\n\n.ActionMenu_expandActions__2opLE > i {\n  font-size: 26px;\n}\n";
var styles = {"expandActions":"ActionMenu_expandActions__2opLE","actionMenu":"ActionMenu_actionMenu__3ofbv","actionMenuList":"ActionMenu_actionMenuList__33A5I","isActive":"ActionMenu_isActive__3h9It"};
styleInject(css);

/**
 * ActionMenu renders a menu which has an animated opening.
 *
 * @param {Array} icons     collection of icons and tooltip descriptions
 * @param {Object} actions  object which keys map to icon names expected in the `icons` param
 *
 * @return                  ActionMenu component
 */

var ActionMenu = function ActionMenu(_ref) {
  var icons = _ref.icons,
      actions = _ref.actions,
      isActive = _ref.isActive;

  var staggerTransition = function staggerTransition(index) {
    return {
      transition: ".3s ease .".concat(index, "s")
    };
  };

  var actionMenuClassNames = classNames(styles.actionMenu, defineProperty({}, styles.isActive, isActive));
  return React.createElement("div", {
    className: actionMenuClassNames
  }, React.createElement("ul", {
    className: styles.actionMenuList
  }, icons.map(function (_ref2, i) {
    var icon = _ref2.icon,
        tooltip = _ref2.tooltip,
        iconClass = _ref2.iconClass,
        _ref2$enabled = _ref2.enabled,
        enabled = _ref2$enabled === void 0 ? true : _ref2$enabled,
        isDanger = _ref2.isDanger,
        rest = objectWithoutProperties(_ref2, ["icon", "tooltip", "iconClass", "enabled", "isDanger"]);

    return React.createElement("li", {
      style: staggerTransition(i + 1),
      key: icon
    }, React.createElement(Tooltip, _extends_1({
      top: true,
      tip: tooltip
    }, rest), React.createElement(Button, {
      "data-heap": "action-menu-".concat(icon),
      icon: icon,
      disabled: !enabled,
      className: iconClass,
      noHoverBackground: true,
      isDanger: isDanger,
      onClick: actions[icon]
    })));
  })), React.createElement("a", {
    className: styles.expandActions
  }, React.createElement("i", {
    className: "lp-icon"
  }, "ellipsis")));
};

ActionMenu.displayname = 'ActionMenu';
ActionMenu.propTypes = {
  isActive: PropTypes.bool,
  icons: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({})
};
ActionMenu.defaultProps = {
  isActive: false,
  icons: [{
    icon: 'remove_circle',
    tooltip: 'Remove from Funnel'
  }, {
    icon: 'view',
    tooltip: 'View Page'
  }, {
    icon: 'analytics',
    tooltip: 'Analytics'
  }, {
    icon: 'edit',
    tooltip: 'Edit Page'
  }],
  actions: {
    remove_circle: function remove_circle() {},
    view: function view() {},
    analytics: function analytics() {},
    edit: function edit() {}
  }
};

module.exports = ActionMenu;
