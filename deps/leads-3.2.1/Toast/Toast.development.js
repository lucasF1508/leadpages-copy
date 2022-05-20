'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var classnames = _interopDefault(require('classnames'));
var Button = _interopDefault(require('../Button'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Toast_toast__38QLC {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n\n  max-width: 360px;\n  margin: 30px;\n\n  border-radius: 3px;\n  background-color: #ffffff;\n  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .25), 0 12px 18px 0 rgba(0, 0, 0, .3);\n          box-shadow: 0 0 10px 0 rgba(0, 0, 0, .25), 0 12px 18px 0 rgba(0, 0, 0, .3);\n}\n\n.Toast_indicator__1ouAy {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 60px;\n          flex: 0 0 60px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  background-color: #ffffff\n}\n\n.Toast_indicator__1ouAy.Toast_error__eWFOQ {\n  color: #ed6347;\n}\n\n.Toast_indicator__1ouAy.Toast_warning__1NrKm {\n  color: #eec200;\n}\n\n.Toast_indicator__1ouAy.Toast_message__2NFCS {\n  color: #0069ff;\n}\n\n.Toast_indicator__1ouAy > .Toast_indicatorIcons__ZwI_d {\n  font-size: 30px;\n}\n\n.Toast_toastMessage__TCmPn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.Toast_toastLink__3G3CO {\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.Toast_content__3uDC9 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  padding: 18px 18px 18px 0;\n\n  text-align: left\n}\n\n.Toast_content__3uDC9 .Toast_toastMessage__TCmPn {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #4c515d;\n}\n\n.Toast_close__d9X82 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 48px;\n          flex: 0 0 48px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n\n  padding: 12px 12px 0 0;\n}\n";
var styles = {"toast":"Toast_toast__38QLC","indicator":"Toast_indicator__1ouAy","error":"Toast_error__eWFOQ","warning":"Toast_warning__1NrKm","message":"Toast_message__2NFCS","indicatorIcons":"Toast_indicatorIcons__ZwI_d","toastMessage":"Toast_toastMessage__TCmPn","toastLink":"Toast_toastLink__3G3CO","content":"Toast_content__3uDC9","close":"Toast_close__d9X82"};
styleInject(css);

var Toast =
/*#__PURE__*/
function (_React$Component) {
  inherits(Toast, _React$Component);

  function Toast() {
    classCallCheck(this, Toast);

    return possibleConstructorReturn(this, getPrototypeOf(Toast).apply(this, arguments));
  }

  createClass(Toast, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          message = _this$props.message,
          href = _this$props.href,
          to = _this$props.to,
          onClick = _this$props.onClick,
          linkText = _this$props.linkText,
          severity = _this$props.severity,
          onClose = _this$props.onClose,
          closeIcon = _this$props.closeIcon;
      if (!message) return null;
      return React.createElement("div", {
        className: classnames(className, styles.toast)
      }, Toast.getSeverity(severity), React.createElement("div", {
        className: styles.content
      }, React.createElement("div", {
        className: styles.toastMessage
      }, message), linkText && React.createElement("div", null, React.createElement(Button, _extends_1({
        noBackground: true,
        className: styles.toastLink
      }, {
        href: href,
        to: to,
        onClick: onClick
      }), linkText))), React.createElement("div", {
        className: styles.close
      }, React.createElement(Button, {
        icon: closeIcon,
        noBackground: true,
        onClick: onClose
      })));
    }
  }], [{
    key: "getSeverity",
    value: function getSeverity(severity) {
      var severityIcon = {
        ERROR: React.createElement("div", {
          className: classnames(styles.indicator, styles.error)
        }, React.createElement("i", {
          className: classnames('lp-icon', styles.indicatorIcons)
        }, "error")),
        WARNING: React.createElement("div", {
          className: classnames(styles.indicator, styles.warning)
        }, React.createElement("i", {
          className: classnames('lp-icon', styles.indicatorIcons)
        }, "info")),
        MESSAGE: React.createElement("div", {
          className: classnames(styles.indicator, styles.message)
        }, React.createElement("i", {
          className: classnames('lp-icon', styles.indicatorIcons)
        }, "check_circle"))
      };

      if (severityIcon[severity]) {
        return severityIcon[severity];
      }

      return null;
    }
  }]);

  return Toast;
}(React.Component);

defineProperty(Toast, "severity", {
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  MESSAGE: 'MESSAGE'
});
Toast.propTypes = {
  className: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  href: PropTypes.string,
  to: PropTypes.string,
  linkText: PropTypes.string,
  severity: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  closeIcon: PropTypes.string
};
Toast.defaultProps = {
  className: '',
  message: null,
  href: undefined,
  to: undefined,
  linkText: '',
  severity: Toast.severity.MESSAGE,
  closeIcon: 'close',
  onClick: function onClick() {},
  onClose: function onClose() {}
};

module.exports = Toast;
