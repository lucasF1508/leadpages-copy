'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Input = _interopDefault(require('../Input'));
var Select = _interopDefault(require('../Select'));
var Option = _interopDefault(require('../Option'));
var Typography = require('../Typography');
var React = require('react');
var React__default = _interopDefault(React);
var classnames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var Button = _interopDefault(require('../Button'));
var Tooltip = _interopDefault(require('../Tooltip'));
var withCopyToClipboard = _interopDefault(require('../CopyToClipboard'));

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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.UrlOptionsDisplayLabel_urlDisplayLabelContainer__1EmCv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n\n  min-width: 500px;\n  height: 48px;\n  padding: 0 12px;\n\n  border-radius: 3px;\n  background-color: #e4e7ed;\n}\n\n.UrlOptionsDisplayLabel_urlDisplayLabelContainer__1EmCv .UrlOptionsDisplayLabel_displayLabelText__2g3uO {\n  display: block;\n  overflow: hidden;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n  width: 100%;\n\n  cursor: default;\n  text-align: left;\n  white-space: nowrap;\n  text-decoration: none;\n  text-overflow: ellipsis;\n\n  color: inherit;\n}\n\n.UrlOptionsDisplayLabel_urlDisplayToolTip__27gV2 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n\n  min-width: 0;\n}\n";
var styles = {"urlDisplayLabelContainer":"UrlOptionsDisplayLabel_urlDisplayLabelContainer__1EmCv","displayLabelText":"UrlOptionsDisplayLabel_displayLabelText__2g3uO","urlDisplayToolTip":"UrlOptionsDisplayLabel_urlDisplayToolTip__27gV2"};
styleInject(css);

var CopyTextButton = withCopyToClipboard(Button);
var PROPS = {
  className: PropTypes.string,
  editOnClick: PropTypes.func,
  isLink: PropTypes.bool,
  urlLink: PropTypes.string,
  urlText: PropTypes.string.isRequired,
  viewOnClick: PropTypes.func,
  'data-qa-selector': PropTypes.string
};
var DEFAULT_PROPS = {
  className: null,
  editOnClick: null,
  isLink: false,
  urlLink: null,
  viewOnClick: null,
  'data-qa-selector': 'url-options-display-label'
};
var shouldDisplayLink = function shouldDisplayLink(text, link, isLink) {
  if (link && isLink) {
    var displayText = text || link;
    return React__default.createElement("a", {
      className: styles.displayLabelText,
      "data-qa-selector": "url-link",
      href: link
    }, displayText);
  }

  return text ? React__default.createElement("div", {
    className: styles.displayLabelText,
    "data-qa-selector": "url-text"
  }, text) : null;
};

var UrlOptionsDisplayLabel = function UrlOptionsDisplayLabel(_ref) {
  var urlText = _ref.urlText,
      urlLink = _ref.urlLink,
      isLink = _ref.isLink,
      viewOnClick = _ref.viewOnClick,
      editOnClick = _ref.editOnClick,
      className = _ref.className,
      dataQaSelector = _ref['data-qa-selector'];
  return React__default.createElement("div", {
    className: classnames(styles.urlDisplayLabelContainer, className),
    "data-qa-selector": dataQaSelector
  }, React__default.createElement(Tooltip, {
    className: styles.urlDisplayToolTip,
    tip: urlText,
    top: true
  }, shouldDisplayLink(urlText, urlLink, isLink)), React__default.createElement("div", null, viewOnClick && React__default.createElement(Tooltip, {
    tip: "View Page",
    top: true
  }, React__default.createElement(Button, {
    noBackground: true,
    "data-qa-selector": "view-page",
    icon: "view",
    href: urlLink,
    target: "_blank",
    onClick: viewOnClick
  })), isLink && urlLink && React__default.createElement(Tooltip, {
    tip: "Copy Link",
    top: true
  }, React__default.createElement(CopyTextButton, {
    noBackground: true,
    "data-qa-selector": "copy-link",
    icon: "link",
    textToCopy: urlLink
  })), editOnClick && React__default.createElement(Tooltip, {
    tip: "Edit URL",
    top: true
  }, React__default.createElement(Button, {
    noBackground: true,
    "data-qa-selector": "edit-url",
    icon: "edit",
    onClick: editOnClick
  }))));
};

UrlOptionsDisplayLabel.propTypes = PROPS;
UrlOptionsDisplayLabel.defaultProps = DEFAULT_PROPS;

var css$1 = ".UrlEdit_editUrlContent__3RMtl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n\n  margin: 6px 0\n}\n.UrlEdit_editUrlContent__3RMtl > .UrlEdit_editSubdomain__2C3Ai,\n  .UrlEdit_editUrlContent__3RMtl > .UrlEdit_editSlug__2RKnE {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.UrlEdit_editUrlContent__3RMtl .UrlEdit_editSlug__2RKnE input {\n  height: 36px;\n}\n.UrlEdit_editUrlContent__3RMtl > .UrlEdit_editSlug__2RKnE,\n  .UrlEdit_editUrlContent__3RMtl > .UrlEdit_editUrlSave__15M-k {\n  margin-left: 12px;\n}\n.UrlEdit_editUrlContent__3RMtl > .UrlEdit_editUrlSave__15M-k {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  min-height: 100%;\n  margin-left: 12px;\n}\n.UrlEdit_editUrlContent__3RMtl .UrlEdit_supportLabel__sRCh6 {\n  margin: 0 0 6px;\n}\n.UrlEdit_urlEditSelect__3CXj2 {\n  width: 115px;\n}\n.UrlEdit_urlEditLink__2D_NW {\n  margin: 18px 0;\n}\n";
var styles$1 = {"editUrlContent":"UrlEdit_editUrlContent__3RMtl","editSubdomain":"UrlEdit_editSubdomain__2C3Ai","editSlug":"UrlEdit_editSlug__2RKnE","editUrlSave":"UrlEdit_editUrlSave__15M-k","supportLabel":"UrlEdit_supportLabel__sRCh6","urlEditSelect":"UrlEdit_urlEditSelect__3CXj2","urlEditLink":"UrlEdit_urlEditLink__2D_NW"};
styleInject(css$1);

var PROPS$1 = {
  url: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  subContent: PropTypes.string,
  hasError: PropTypes.bool,
  isSuccess: PropTypes.bool
};
var DEFAULT_PROPS$1 = {
  url: '',
  onClose: function onClose() {},
  subContent: '',
  hasError: false,
  isSuccess: false
};

var getProtocol = function getProtocol(url) {
  var protocolIndex = url.indexOf('://');
  return protocolIndex > -1 ? url.substring(0, protocolIndex + 3) : 'https://';
};

var UrlEdit =
/*#__PURE__*/
function (_Component) {
  inherits(UrlEdit, _Component);

  function UrlEdit(props) {
    var _this;

    classCallCheck(this, UrlEdit);

    _this = possibleConstructorReturn(this, getPrototypeOf(UrlEdit).call(this, props));
    _this.state = objectSpread({
      isEditing: !_this.props.url || _this.props.hasError
    }, _this.getStateFromUrl());
    _this.handleEditOnClick = _this.editOnClick.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.handleViewOnClick = _this.viewOnClick.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.handleOnProtocolSelect = _this.onProtocolSelect.bind(assertThisInitialized(assertThisInitialized(_this)));
    return _this;
  }

  createClass(UrlEdit, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasError) {
        this.setState(function () {
          return {
            isEditing: true
          };
        });
      }

      if (nextProps.isSuccess) {
        this.setState(function () {
          return {
            isEditing: false
          };
        });
      }
    }
  }, {
    key: "onProtocolSelect",
    value: function onProtocolSelect(_ref) {
      var value = _ref.value;
      this.setState(function () {
        return {
          protocol: value
        };
      });
    }
  }, {
    key: "getStateFromUrl",
    value: function getStateFromUrl() {
      var url = this.props.url;
      var urlProtocol = getProtocol(url);
      return {
        editedUrl: url.replace(urlProtocol, ''),
        protocol: urlProtocol
      };
    }
  }, {
    key: "editOnClick",
    value: function editOnClick() {
      this.setState(function () {
        return {
          isEditing: true
        };
      });
    }
  }, {
    key: "viewOnClick",
    value: function viewOnClick() {
      // TODO: Url validation?
      var _this$state = this.state,
          editedUrl = _this$state.editedUrl,
          protocol = _this$state.protocol;
      window.open("".concat(protocol).concat(editedUrl));
    }
  }, {
    key: "closeEditor",
    value: function closeEditor() {
      var _this2 = this;

      var onClose = this.props.onClose;
      this.setState(function () {
        return objectSpread({
          isEditing: false
        }, _this2.getStateFromUrl());
      });
      onClose();
    }
  }, {
    key: "saveUrl",
    value: function saveUrl() {
      var onChange = this.props.onChange;
      var _this$state2 = this.state,
          protocol = _this$state2.protocol,
          editedUrl = _this$state2.editedUrl;
      onChange("".concat(protocol).concat(editedUrl));
    }
  }, {
    key: "updateEditedUrl",
    value: function updateEditedUrl(event) {
      var value = event.target.value;
      this.setState(function () {
        return {
          editedUrl: value
        };
      });
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var stateProtocol = this.state.protocol;
      return ['https://', 'http://'].map(function (protocol) {
        return React__default.createElement(Option, {
          key: protocol,
          selected: protocol === stateProtocol,
          value: protocol,
          primaryText: protocol
        }, protocol);
      });
    }
  }, {
    key: "renderEditor",
    value: function renderEditor() {
      var _this3 = this;

      var _this$props = this.props,
          hasError = _this$props.hasError,
          subContent = _this$props.subContent;
      var _this$state3 = this.state,
          protocol = _this$state3.protocol,
          editedUrl = _this$state3.editedUrl;
      return React__default.createElement("div", null, React__default.createElement(Typography.DefaultHeading, null, React__default.createElement(Button, {
        noBackground: true,
        icon: "left_angle",
        onClick: function onClick() {
          return _this3.closeEditor();
        }
      }), "Edit URL"), React__default.createElement("div", {
        className: styles$1.editUrlContent
      }, React__default.createElement(Select, {
        onChange: this.handleOnProtocolSelect,
        value: protocol,
        className: styles$1.urlEditSelect
      }, this.renderOptions()), React__default.createElement("div", {
        className: styles$1.editSlug
      }, React__default.createElement(Input, {
        value: editedUrl,
        hasError: hasError,
        subContent: subContent,
        onChange: function onChange(e) {
          return _this3.updateEditedUrl(e);
        }
      })), React__default.createElement("div", {
        className: styles$1.editUrlSave
      }, React__default.createElement(Button, {
        "data-heap": "publish-options-url-save",
        onClick: function onClick() {
          return _this3.saveUrl();
        }
      }, "Save URL"))));
    }
  }, {
    key: "renderUrlOptions",
    value: function renderUrlOptions() {
      var _this$state4 = this.state,
          editedUrl = _this$state4.editedUrl,
          protocol = _this$state4.protocol;
      return React__default.createElement(UrlOptionsDisplayLabel, {
        editOnClick: this.handleEditOnClick,
        viewOnClick: function viewOnClick() {},
        urlText: "".concat(protocol).concat(editedUrl),
        urlLink: "".concat(protocol).concat(editedUrl)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isEditing = this.state.isEditing;
      return isEditing ? this.renderEditor() : this.renderUrlOptions();
    }
  }]);

  return UrlEdit;
}(React.Component);

defineProperty(UrlEdit, "propTypes", PROPS$1);

defineProperty(UrlEdit, "defaultProps", DEFAULT_PROPS$1);

module.exports = UrlEdit;
