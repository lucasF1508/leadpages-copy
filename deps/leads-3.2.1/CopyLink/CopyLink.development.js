'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var emotion = require('emotion');
var Theme = require('../Theme');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Link = _interopDefault(require('../Link'));

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

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

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var NOOP = function NOOP() {};

var withCopyToClipboard = (function (WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(withCopyToText, _React$Component);

    function withCopyToText(props) {
      var _this;

      classCallCheck(this, withCopyToText);

      _this = possibleConstructorReturn(this, getPrototypeOf(withCopyToText).call(this, props));

      defineProperty(assertThisInitialized(assertThisInitialized(_this)), "onClick", function (e) {
        _this.copyTextToClipboard(e);
      });

      _this.state = {
        copied: false
      };
      return _this;
    }

    createClass(withCopyToText, [{
      key: "copyTextToClipboard",
      value: function copyTextToClipboard(e) {
        var textArea = this.textArea;
        textArea.select();

        try {
          var successful = document.execCommand('copy');

          if (successful) {
            this.props.onCopySuccess(e);
          } else {
            throw new Error('Unable to copy to clipboard.');
          }
        } catch (err) {
          this.props.onCopyError(err);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        // We want to avoid these styles getting overriden accidently,
        // so they are being applied inline to the element itself.
        var textStyle = {
          position: 'fixed',
          top: '-100%',
          left: '-100%',
          width: '2em',
          height: '2em',
          padding: 0,
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          background: 'transparent'
        };

        var _this$props = this.props,
            textToCopy = _this$props.textToCopy,
            onCopyError = _this$props.onCopyError,
            onCopySuccess = _this$props.onCopySuccess,
            rest = objectWithoutProperties(_this$props, ["textToCopy", "onCopyError", "onCopySuccess"]);

        return React__default.createElement(WrappedComponent, _extends_1({}, rest, {
          onClick: this.onClick
        }), React__default.createElement("textarea", {
          value: textToCopy,
          ref: function ref(textArea) {
            _this2.textArea = textArea;
          },
          style: objectSpread({}, textStyle),
          readOnly: true
        }), this.props.children);
      }
    }]);

    return withCopyToText;
  }(React__default.Component), defineProperty(_class, "displayName", "withCopyToText(".concat(getDisplayName(WrappedComponent), ")")), defineProperty(_class, "propTypes", {
    children: PropTypes.node,
    onCopyError: PropTypes.func,
    onCopySuccess: PropTypes.func,
    textToCopy: PropTypes.string
  }), defineProperty(_class, "defaultProps", {
    children: null,
    onCopyError: NOOP,
    onCopySuccess: NOOP,
    textToCopy: ''
  }), _temp;
});

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n\n  &:visited {\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n\n  height: 100%;\n  overflow: hidden;\n  padding: 0 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n\n  width: 100%;\n  max-width: 100%;\n  min-width: 416px;\n\n  height: 48px;\n  border: 1px solid ", ";\n  border-radius: 3px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  border-left: 1px solid ", ";\n  border-right: none;\n\n  border-top: none;\n  border-bottom: none;\n\n  padding: 0 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n\n  cursor: pointer;\n  outline: none;\n\n  justify-content: center;\n  width: 100px;\n  min-width: 100px;\n\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var buttonDefaultClass = emotion.css(_templateObject());
var buttonWithLinkClass = emotion.css(_templateObject2(), Theme.colors.grey);
var copyLinkClass = emotion.css(_templateObject3(), Theme.colors.grey);
var linkContainerClass = emotion.css(_templateObject4());
var linkClass = emotion.css(_templateObject5(), Theme.colors.blue);

var button = function button(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;
  return React__default.createElement("button", {
    onClick: onClick,
    className: emotion.cx(className),
    "data-qa-selector": "copy-button"
  }, children);
};

var CopyTextButton = withCopyToClipboard(button);
var COPY_LINK = 'Copy Link';
var COPY_LINK_SUCCESS = 'Copied!';
var CopyButton = function CopyButton(_ref2) {
  var linkToCopy = _ref2.linkToCopy,
      className = _ref2.className;

  var _useState = React.useState(COPY_LINK),
      _useState2 = slicedToArray(_useState, 2),
      copyText = _useState2[0],
      setCopyText = _useState2[1];

  React.useEffect(function () {
    var timer;

    if (copyText === COPY_LINK_SUCCESS) {
      timer = setInterval(function () {
        return setCopyText(COPY_LINK);
      }, 1000);
    }

    return function cleanup() {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [copyText]);
  return React__default.createElement(CopyTextButton, {
    className: emotion.cx(buttonDefaultClass, className),
    textToCopy: linkToCopy,
    onCopySuccess: function onCopySuccess() {
      return setCopyText(COPY_LINK_SUCCESS);
    }
  }, React__default.createElement("span", {
    "data-qa-selector": "copy-link-text",
    className: emotion.css(objectSpread({}, Theme.typographyDefs.bodyDefault))
  }, copyText));
};

var CopyLink = function CopyLink(_ref3) {
  var linkToCopy = _ref3.linkToCopy,
      className = _ref3.className;
  return React__default.createElement("div", {
    className: emotion.cx(copyLinkClass, className)
  }, React__default.createElement("div", {
    className: linkContainerClass
  }, React__default.createElement(Link, {
    "data-qa-selector": "copy-link",
    className: linkClass,
    href: linkToCopy,
    target: "_blank"
  }, linkToCopy)), React__default.createElement(CopyButton, {
    linkToCopy: linkToCopy,
    className: buttonWithLinkClass
  }));
};

CopyLink.propTypes = {
  linkToCopy: PropTypes.string.isRequired,
  className: PropTypes.string
};
CopyLink.defaultProps = {
  className: ''
};

exports.default = CopyLink;
exports.CopyButton = CopyButton;
