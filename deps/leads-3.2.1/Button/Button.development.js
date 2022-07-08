'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var reactRouterDom = require('react-router-dom');
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

var deprecationWarning = "development" !== 'production' ? function (_ref) {
  var _ref$version = _ref.version,
      version = _ref$version === void 0 ? 'next' : _ref$version,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'This file tried to warn of a deprecated feature' : _ref$message,
      _ref$condition = _ref.condition,
      condition = _ref$condition === void 0 ? true : _ref$condition;

  if (condition) {
    console.warn("LE&DS ".concat(version, " Deprecation Warning: ").concat(message));
  }
} : null;

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Button_buttonClass__1gaEF {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  position: relative;\n\n  display: inline-block;\n\n  padding: 6px 30px;\n\n  cursor: pointer;\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n  text-align: center;\n\n  white-space: nowrap;\n  text-decoration: none;\n\n  color: #ffffff; /* NOT SURE I LIKE THIS */\n\n  border: 0;\n  border-radius: 18px;\n  outline: 0;\n  overflow: hidden;\n\n  background-color: #0069ff\n}\n\n.Button_buttonClass__1gaEF.Button_danger__3e8Et {\n  background-color: #ed6347\n}\n\n.Button_buttonClass__1gaEF.Button_danger__3e8Et:hover,\n    .Button_buttonClass__1gaEF.Button_danger__3e8Et:focus,\n    .Button_buttonClass__1gaEF.Button_danger__3e8Et.Button_active___iqAA {\n  background-color: #bf0711;\n}\n\n.Button_buttonClass__1gaEF.Button_danger__3e8Et[disabled],\n    .Button_buttonClass__1gaEF.Button_danger__3e8Et[disabled]:hover {\n  opacity: 0.4;\n  background-color: #ed6347;\n}\n\n.Button_buttonClass__1gaEF:hover,\n  .Button_buttonClass__1gaEF:focus,\n  .Button_buttonClass__1gaEF.Button_active___iqAA {\n  color: #ffffff;\n  background-color: #00419f;\n}\n\n.Button_buttonClass__1gaEF:visited {\n  color: #ffffff;\n}\n\n.Button_buttonClass__1gaEF[disabled],\n  .Button_buttonClass__1gaEF[disabled]:hover {\n  cursor: not-allowed;\n  opacity: 0.4;\n  background-color: #0069ff;\n}\n\n.Button_buttonClass__1gaEF {\n  /* loading */\n}\n\n.Button_buttonClass__1gaEF.Button_loading__3ZGdj,\n  .Button_buttonClass__1gaEF.Button_loading__3ZGdj:hover {\n  cursor: not-allowed;\n  background-color: #0069ff 80;\n  /* This is 0069ff80 the 80 is opacity in css next */\n}\n\n.Button_buttonClass__1gaEF {\n  /* no background */\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM:visited,\n  .Button_buttonClass__1gaEF.Button_linkText__1Za5C {\n  font-size: inherit;\n  padding: 0;\n  color: #0069ff;\n  border-radius: 0;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM:hover,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM:focus,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_active___iqAA {\n  color: #00419f;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM[disabled],\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM[disabled]:hover {\n  color: #0069ff;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF {\n  /* no background danger */\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_danger__3e8Et,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_danger__3e8Et:visited {\n  color: #ed6347;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_danger__3e8Et:hover,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_danger__3e8Et:focus,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_danger__3e8Et.Button_active___iqAA {\n  color: #bf0711;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_danger__3e8Et[disabled],\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_danger__3e8Et[disabled]:hover {\n  color: #feaf9a;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF {\n  /* nohover background */\n}\n\n.Button_buttonClass__1gaEF.Button_noHoverBackgroundStyle__3JpF9,\n  .Button_buttonClass__1gaEF.Button_linkText__1Za5C {\n  padding: 0;\n  color: #4c515d;\n  background-color: transparent;\n}\n\n.Button_buttonClass__1gaEF.Button_noHoverBackgroundStyle__3JpF9:hover,\n  .Button_buttonClass__1gaEF.Button_noHoverBackgroundStyle__3JpF9.Button_active___iqAA,\n  .Button_buttonClass__1gaEF.Button_noHoverBackgroundStyle__3JpF9:visited {\n  color: #4c515d;\n  background-color: transparent;\n}\n\n.Button_buttonClass__1gaEF.Button_noHoverBackgroundStyle__3JpF9[disabled],\n  .Button_buttonClass__1gaEF.Button_noHoverBackgroundStyle__3JpF9[disabled]:hover {\n  color: #4c515d;\n  background-color: transparent;\n}\n\n.Button_buttonClass__1gaEF {\n  /* no background + secondary */\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_:hover,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_:focus,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_.Button_active___iqAA {\n  color: #00419f;\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_:visited {\n  color: #4c515d;\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_[disabled],\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_[disabled]:hover {\n  color: rgba(0, 105, 255, .39608);\n}\n\n.Button_buttonClass__1gaEF {\n  /* no background secondary danger */\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_.Button_danger__3e8Et,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_.Button_danger__3e8Et:visited {\n  color: #4c515d;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_.Button_danger__3e8Et:hover,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_.Button_danger__3e8Et:focus,\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_.Button_danger__3e8Et.Button_active___iqAA {\n  color: #bf0711;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_.Button_danger__3e8Et[disabled],\n  .Button_buttonClass__1gaEF.Button_noBackgroundStyle__3hWUM.Button_secondary__kDwX_.Button_danger__3e8Et[disabled]:hover {\n  color: rgba(254, 175, 154, .39608);\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF {\n  /* link text */\n}\n\n.Button_buttonClass__1gaEF.Button_linkText__1Za5C:hover,\n  .Button_buttonClass__1gaEF.Button_linkText__1Za5C.Button_active___iqAA,\n  .Button_buttonClass__1gaEF.Button_linkText__1Za5C:focus,\n  .Button_buttonClass__1gaEF.Button_linkText__1Za5C:visited {\n  color: #5e5cc4;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_linkText__1Za5C[disabled],\n  .Button_buttonClass__1gaEF.Button_linkText__1Za5C[disabled]:hover {\n  /* color: rgba(0, 0, 0, 0); */\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF {\n  /* secondary */\n}\n\n.Button_buttonClass__1gaEF.Button_secondary__kDwX_,\n  .Button_buttonClass__1gaEF.Button_secondary__kDwX_:visited {\n  color: #4c515d;\n  background-color: #e4e7ed;\n}\n\n.Button_buttonClass__1gaEF.Button_secondary__kDwX_:hover,\n  .Button_buttonClass__1gaEF.Button_secondary__kDwX_:focus,\n  .Button_buttonClass__1gaEF.Button_secondary__kDwX_.Button_active___iqAA {\n  background-color: #b1bacc;\n}\n\n.Button_buttonClass__1gaEF.Button_secondary__kDwX_[disabled],\n  .Button_buttonClass__1gaEF.Button_secondary__kDwX_[disabled]:hover {\n  opacity: 1;\n  background-color: rgba(228, 231, 237, .39608);\n  color: rgba(76, 81, 93, .39608);\n}\n\n.Button_buttonClass__1gaEF {\n  /* icon */\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G:visited {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  color: #4c515d;\n  border-radius: 18px;\n  background-color: #e4e7ed;\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G i,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G:visited i {\n  font-size: 18px;\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G:hover,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G:focus,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_active___iqAA {\n  background-color: #b1bacc;\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G[disabled],\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G[disabled]:hover {\n  background-color: #e4e7ed;\n}\n\n.Button_buttonClass__1gaEF {\n  /* icon with no background */\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noBackgroundStyle__3hWUM,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noBackgroundStyle__3hWUM:visited {\n  color: #4c515d;\n  border-radius: 18px;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noBackgroundStyle__3hWUM:hover,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noBackgroundStyle__3hWUM.Button_active___iqAA {\n  color: #4c515d;\n  background-color: #b1bacc;\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noBackgroundStyle__3hWUM[disabled],\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noBackgroundStyle__3hWUM[disabled]:hover {\n  color: #4c515d;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF {\n  /* icon with no hover background */\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9:visited {\n  color: #4c515d;\n  background-color: transparent;\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9:hover,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9:focus,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9.Button_active___iqAA {\n  color: #4c515d;\n  background-color: transparent;\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9[disabled],\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9[disabled]:hover {\n  background-color: transparent;\n}\n\n.Button_buttonClass__1gaEF {\n  /* icon with no hover background danger */\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9.Button_danger__3e8Et,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9.Button_danger__3e8Et:visited {\n  color: #4c515d;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9.Button_danger__3e8Et:hover,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9.Button_danger__3e8Et:focus,\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9.Button_danger__3e8Et.Button_active___iqAA {\n  color: #bf0711;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9.Button_danger__3e8Et[disabled],\n  .Button_buttonClass__1gaEF.Button_iconStyle__UsR9G.Button_noHoverBackgroundStyle__3JpF9.Button_danger__3e8Et[disabled]:hover {\n  color: #feaf9a;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.Button_buttonClass__1gaEF {\n  /* highlighted */\n}\n\n.Button_buttonClass__1gaEF.Button_highlighted__2-peq::after {\n  position: absolute;\n  top: 6px;\n  right: -2px;\n  width: 8px;\n  height: 8px;\n  content: '';\n  border-radius: 50%;\n  background-color: #0069ff;\n}\n\na.Button_iconStyle__UsR9G {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n  padding-top: 3px !important;\n}\n\na.Button_buttonClass__1gaEF {\n  overflow: visible;\n}\n";
var styles = {"buttonClass":"Button_buttonClass__1gaEF","danger":"Button_danger__3e8Et","active":"Button_active___iqAA","loading":"Button_loading__3ZGdj","noBackgroundStyle":"Button_noBackgroundStyle__3hWUM","linkText":"Button_linkText__1Za5C","noHoverBackgroundStyle":"Button_noHoverBackgroundStyle__3JpF9","secondary":"Button_secondary__kDwX_","iconStyle":"Button_iconStyle__UsR9G","highlighted":"Button_highlighted__2-peq"};
styleInject(css);

var Button = function Button(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      ButtonComponent = _ref.component,
      icon = _ref.icon,
      isActive = _ref.isActive,
      isLoading = _ref.isLoading,
      isSecondary = _ref.isSecondary,
      noBackground = _ref.noBackground,
      noHoverBackground = _ref.noHoverBackground,
      isLinkText = _ref.isLinkText,
      isHighlighted = _ref.isHighlighted,
      isDanger = _ref.isDanger,
      rest = objectWithoutProperties(_ref, ["children", "className", "component", "icon", "isActive", "isLoading", "isSecondary", "noBackground", "noHoverBackground", "isLinkText", "isHighlighted", "isDanger"]);

  if ("development" !== 'production') {
    deprecationWarning({
      message: 'The prop `href` will no longer be supported on button pass in `<a>` component',
      condition: ButtonComponent === 'button' && rest.href
    });
    deprecationWarning({
      message: 'The prop `to` will no longer be supported on button pass in `<Link>` component',
      condition: ButtonComponent === 'button' && rest.to
    });
    deprecationWarning({
      message: 'The prop `icon` will no longer be supported on button use `<IconButton>` component',
      condition: icon
    });
    deprecationWarning({
      message: 'The prop `isLoading` will no longer be supported on button use `<LoadingButton>` component',
      condition: isLoading
    });
    deprecationWarning({
      message: 'The prop `noBackground` will no longer be supported on button use `<Link>` component',
      condition: noBackground
    });
    deprecationWarning({
      message: 'The prop `noHoverBackground` will no longer be supported on button use `<Link>` component',
      condition: noHoverBackground
    });
    deprecationWarning({
      message: 'The prop `isLinkText` will no longer be supported on button use `<Link>` component',
      condition: isLinkText
    });
  }

  var classes = classNames(className, styles.buttonClass, (_classNames = {}, defineProperty(_classNames, styles.active, isActive), defineProperty(_classNames, styles.loading, isLoading), defineProperty(_classNames, styles.noBackgroundStyle, noBackground), defineProperty(_classNames, styles.noHoverBackgroundStyle, noHoverBackground), defineProperty(_classNames, styles.secondary, isSecondary), defineProperty(_classNames, styles.iconStyle, !!icon), defineProperty(_classNames, styles.linkText, isLinkText), defineProperty(_classNames, styles.highlighted, isHighlighted), defineProperty(_classNames, styles.danger, isDanger), _classNames));

  if (rest.to && ButtonComponent === 'button') {
    return React.createElement(reactRouterDom.Link, _extends_1({
      className: classes
    }, rest), icon && React.createElement("i", {
      className: "lp-icon"
    }, icon), children);
  }

  if (rest.href && ButtonComponent === 'button') {
    return React.createElement("a", _extends_1({
      className: classes
    }, rest), icon && React.createElement("i", {
      className: "lp-icon"
    }, icon), children);
  }

  return React.createElement(ButtonComponent, _extends_1({
    className: classes
  }, rest), icon && React.createElement("i", {
    className: "lp-icon"
  }, icon), children);
};

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSecondary: PropTypes.bool,
  noBackground: PropTypes.bool,
  isDanger: PropTypes.bool,
  isLinkText: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  to: PropTypes.string
};
Button.defaultProps = {
  children: null,
  component: 'button',
  className: '',
  href: null,
  icon: '',
  isActive: false,
  isLoading: false,
  isSecondary: false,
  noBackground: false,
  noHoverBackground: false,
  isDanger: false,
  isLinkText: false,
  isHighlighted: false,
  to: null
};

module.exports = Button;
