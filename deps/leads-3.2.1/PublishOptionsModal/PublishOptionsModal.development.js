'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Tabs = require('../Tabs');
var Checkbox = _interopDefault(require('../Checkbox'));
var LoadingState = require('../LoadingState');
var LoadingButton = _interopDefault(require('../LoadingButton'));
var Input = _interopDefault(require('../Input'));
var Select = _interopDefault(require('../Select'));
var Option = _interopDefault(require('../Option'));
var Tooltip = _interopDefault(require('../Tooltip'));
var UrlEdit = _interopDefault(require('../UrlEdit'));
var classnames = _interopDefault(require('classnames'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');
var Button = _interopDefault(require('../Button'));
var Modal = require('../Modal');
var withCopyToClipboard = _interopDefault(require('../CopyToClipboard'));
var Typography = require('../Typography');

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

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  min-height: 426px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var defaultTabs = {
  url: 'URL',
  wordpress: 'Wordpress & HTML',
  template: 'Share'
};
var campaignTabs = {
  url: 'URL',
  wordpress: 'Wordpress'
};
var modalContentClassName = emotion.css(_templateObject());

var PublishOptionsModal =
/*#__PURE__*/
function (_Component) {
  inherits(PublishOptionsModal, _Component);

  function PublishOptionsModal(props) {
    var _this;

    classCallCheck(this, PublishOptionsModal);

    _this = possibleConstructorReturn(this, getPrototypeOf(PublishOptionsModal).call(this, props));
    _this.state = {
      tabView: props.tabView
    };
    _this.setStateHelper = _this.setStateHelper.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.setTabView = _this.setTabView.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.renderModalTab = _this.renderModalTab.bind(assertThisInitialized(assertThisInitialized(_this)));
    return _this;
  }

  createClass(PublishOptionsModal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.tabView !== this.state.tabView) {
        this.setTabView(nextProps.tabView);
      }
    }
  }, {
    key: "setStateHelper",
    value: function setStateHelper(newState) {
      return this.setState(function () {
        return objectSpread({}, newState);
      });
    }
  }, {
    key: "setTabView",
    value: function setTabView(view) {
      this.props.setTabView(view);
      this.setStateHelper({
        tabView: view
      });
      return view;
    }
  }, {
    key: "renderModalTab",
    value: function renderModalTab(view) {
      var _this2 = this;

      return React__default.createElement(Tabs.TabLink, {
        key: view,
        active: this.state.tabView === view,
        onClick: function onClick() {
          return _this2.setTabView(view);
        }
      }, view);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          onAfterOpen = _this$props.onAfterOpen,
          onRequestClose = _this$props.onRequestClose,
          tabViews = _this$props.tabViews,
          title = _this$props.title;
      var isTabbed = Object.keys(tabViews).length >= 2;
      return React__default.createElement(Modal.Modal, {
        isOpen: isOpen,
        onAfterOpen: onAfterOpen,
        onRequestClose: onRequestClose,
        className: emotion.cx('publishOptionsModal', className)
      }, React__default.createElement(Modal.ModalHeader, {
        tabs: isTabbed,
        onClose: onRequestClose
      }, React__default.createElement("h1", null, title), isTabbed && React__default.createElement(Tabs.TabGroup, {
        small: true
      }, Object.keys(tabViews).map(function (view) {
        return _this3.renderModalTab(tabViews[view]);
      }))), React__default.createElement("div", {
        className: emotion.cx(defineProperty({}, modalContentClassName, isTabbed))
      }, children));
    }
  }]);

  return PublishOptionsModal;
}(React.Component);
PublishOptionsModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  setTabView: PropTypes.func,
  tabView: PropTypes.string,
  tabViews: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string
};
PublishOptionsModal.defaultProps = {
  className: '',
  children: null,
  isOpen: false,
  onAfterOpen: function onAfterOpen() {},
  onRequestClose: function onRequestClose() {},
  setTabView: function setTabView() {},
  tabView: '',
  tabViews: defaultTabs,
  title: 'Publishing Options'
};

var Promote = function Promote(_ref) {
  var className = _ref.className;
  return React__default.createElement(Modal.ModalBody, {
    className: className
  }, React__default.createElement("div", {
    className: "renameModal-content"
  }, "Promote"));
};

Promote.propTypes = {
  className: PropTypes.string
};
Promote.defaultProps = {
  className: ''
};

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

var css$1 = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.PageUrlEdit_editUrlContent__3gwp1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n\n  margin: 6px 0\n}\n\n.PageUrlEdit_editUrlContent__3gwp1 > .PageUrlEdit_editSubdomain__1EOOx,\n  .PageUrlEdit_editUrlContent__3gwp1 > .PageUrlEdit_editSlug__1CJHU {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.PageUrlEdit_editUrlContent__3gwp1 > .PageUrlEdit_editSlug__1CJHU,\n  .PageUrlEdit_editUrlContent__3gwp1 > .PageUrlEdit_editUrlSave__3Sdb7 {\n  margin-left: 12px;\n}\n\n.PageUrlEdit_editUrlContent__3gwp1 > .PageUrlEdit_editUrlSave__3Sdb7 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  min-height: 100%;\n  margin-left: 12px;\n  padding-top: 24px;\n}\n\n.PageUrlEdit_editUrlContent__3gwp1 .PageUrlEdit_supportLabel__3X_UV {\n  margin: 0 0 6px;\n}\n\n.PageUrlEdit_editUrlContent__3gwp1 .PageUrlEdit_errorMessage__3V2wV {\n  color: #bf0711;\n}\n\n.PageUrlEdit_urlEditLink__d-aQx {\n  margin: 18px 0;\n}\n";
var styles$1 = {"editUrlContent":"PageUrlEdit_editUrlContent__3gwp1","editSubdomain":"PageUrlEdit_editSubdomain__1EOOx","editSlug":"PageUrlEdit_editSlug__1CJHU","editUrlSave":"PageUrlEdit_editUrlSave__3Sdb7","supportLabel":"PageUrlEdit_supportLabel__3X_UV","errorMessage":"PageUrlEdit_errorMessage__3V2wV","urlEditLink":"PageUrlEdit_urlEditLink__d-aQx"};
styleInject(css$1);

var PROPS$1 = {
  assetUrl: PropTypes.string,
  headerComponent: PropTypes.node.isRequired,
  onEditClick: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  pageUrlLoadingState: PropTypes.string,
  onSaveClick: PropTypes.func.isRequired,
  viewOnClick: PropTypes.func,
  selectOptions: PropTypes.oneOfType([PropTypes.instanceOf(Option), PropTypes.arrayOf(PropTypes.instanceOf(Option))]),
  onSelectChange: PropTypes.func,
  onSelectClick: PropTypes.func,
  selectPlaceHolder: PropTypes.string,
  selectValue: PropTypes.string,
  selectClassName: PropTypes.string,
  slugValue: PropTypes.string,
  slugPlaceholder: PropTypes.string,
  slugMessage: PropTypes.func,
  hasSlugError: PropTypes.bool,
  onSlugChange: PropTypes.func
};
var DEFAULT_PROPS$1 = {
  isEditing: false,
  pageUrlLoadingState: LoadingState.LOADING_STATES.success,
  assetUrl: '',
  assetName: '',
  selectValue: '',
  assetLastUpdatedString: '',
  viewOnClick: function viewOnClick() {},
  selectOptions: React__default.createElement(Option, {
    primaryText: "my Option",
    value: "foo"
  }),
  onSelectChange: undefined,
  onSelectClick: undefined,
  selectPlaceHolder: '',
  selectClassName: '',
  slugValue: '',
  slugPlaceholder: '',
  slugMessage: function slugMessage() {},
  hasSlugError: false,
  onSlugChange: undefined
};

var printErrorMessage = function printErrorMessage(errorMessageFun) {
  var error = errorMessageFun();

  if (typeof error === 'string') {
    return React__default.createElement(Typography.SupportContent, {
      className: styles$1.errorMessage
    }, error);
  }

  return error;
};

var PageUrlEdit = function PageUrlEdit(_ref) {
  var pageUrlLoadingState = _ref.pageUrlLoadingState,
      assetUrl = _ref.assetUrl,
      onSaveClick = _ref.onSaveClick,
      onEditClick = _ref.onEditClick,
      selectValue = _ref.selectValue,
      selectOptions = _ref.selectOptions,
      onSelectChange = _ref.onSelectChange,
      onSelectClick = _ref.onSelectClick,
      selectPlaceHolder = _ref.selectPlaceHolder,
      selectClassName = _ref.selectClassName,
      isEditing = _ref.isEditing,
      viewOnClick = _ref.viewOnClick,
      slugValue = _ref.slugValue,
      slugPlaceholder = _ref.slugPlaceholder,
      onSlugChange = _ref.onSlugChange,
      slugMessage = _ref.slugMessage,
      hasSlugError = _ref.hasSlugError,
      headerComponent = _ref.headerComponent;

  if (isEditing) {
    return React__default.createElement("div", null, onEditClick && React__default.createElement(Typography.TypographyComponent, {
      type: Typography.types.headingDefault
    }, React__default.createElement(Button, {
      noBackground: true,
      icon: "left_angle",
      onClick: onEditClick
    }), "Edit URL"), React__default.createElement("div", {
      className: styles$1.editUrlContent
    }, React__default.createElement("div", {
      className: styles$1.editSubdomain
    }, React__default.createElement(Typography.TypographyComponent, {
      className: styles$1.supportLabel,
      type: Typography.types.supportContent
    }, "Sub Domain"), selectOptions && React__default.createElement(Select, {
      onChange: onSelectChange,
      className: selectClassName,
      onClick: onSelectClick,
      placeholderText: selectPlaceHolder,
      value: selectValue,
      id: "domainSelect"
    }, selectOptions)), React__default.createElement("div", {
      className: styles$1.editSlug
    }, React__default.createElement(Typography.TypographyComponent, {
      className: styles$1.supportLabel,
      type: Typography.types.supportContent
    }, "Slug"), React__default.createElement(Input, {
      value: slugValue,
      placeholder: slugValue || slugPlaceholder || 'your-slug-here',
      onChange: onSlugChange,
      hasError: hasSlugError
    }), !!slugMessage && printErrorMessage(slugMessage)), React__default.createElement("div", {
      className: styles$1.editUrlSave
    }, React__default.createElement(LoadingButton, {
      loadingState: pageUrlLoadingState,
      onClick: onSaveClick
    }, "Save URL"))));
  }

  return React__default.createElement("div", null, headerComponent, React__default.createElement(UrlOptionsDisplayLabel, {
    className: styles$1.urlEditLink,
    editOnClick: onEditClick,
    viewOnClick: viewOnClick,
    urlText: assetUrl,
    urlLink: assetUrl,
    isLink: true
  }));
};

PageUrlEdit.propTypes = PROPS$1;
PageUrlEdit.defaultProps = DEFAULT_PROPS$1;

var css$2 = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.PublishOptionsModal_publishOptionsModal__2lkw7 .PublishOptionsModal_modalContentDivision__2nqi1 {\n  margin: 30px 0;\n\n  color: #b1bacc;\n}\n";
var styles$2 = {"publishOptionsModal":"PublishOptionsModal_publishOptionsModal__2lkw7","modalContentDivision":"PublishOptionsModal_modalContentDivision__2nqi1"};
styleInject(css$2);

var css$3 = "\n.UrlTab_checkboxContainer__2j_CH {\n  margin-bottom: 12px\n}\n.UrlTab_checkboxContainer__2j_CH .UrlTab_checkboxSupportText__2yLMO {\n  margin-left: 28px;\n}\n.UrlTab_checkboxSupportText__2yLMO,\n.UrlTab_redirectUrlInput__2otL7 {\n  width: auto;\n  margin-left: 28px;\n}\n.UrlTab_supportCheckbox__3EE3r {\n  margin-left: 28px\n}\n.UrlTab_supportCheckbox__3EE3r label div {\n  margin-top: .333em;\n}\n";
var localStyles = {"checkboxContainer":"UrlTab_checkboxContainer__2j_CH","checkboxSupportText":"UrlTab_checkboxSupportText__2yLMO","redirectUrlInput":"UrlTab_redirectUrlInput__2otL7","supportCheckbox":"UrlTab_supportCheckbox__3EE3r"};
styleInject(css$3);

var PROPS$2 = {
  assetUrl: PropTypes.string,
  headerComponent: PropTypes.node.isRequired,
  isEditingPageUrl: PropTypes.bool,
  pageUrlLoadingState: PropTypes.string,
  onPageUrlSaveClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  onRedirectPageChecked: PropTypes.func.isRequired,
  onRedirectUrlEditClosed: PropTypes.func,
  redirectPageChecked: PropTypes.bool,
  shouldRedirectDesktopOnly: PropTypes.bool,
  redirectUrl: PropTypes.string,
  onRedirectUrlSave: PropTypes.func,
  onRedirectToDesktopChanged: PropTypes.func,
  onSlugChange: PropTypes.func.isRequired,
  slugValue: PropTypes.string,
  slugMessage: PropTypes.func,
  hasSlugError: PropTypes.bool,
  onEditClick: PropTypes.func,
  onSelectChange: PropTypes.func.isRequired,
  selectClassName: PropTypes.string,
  onSelectClick: PropTypes.func.isRequired,
  selectPlaceHolder: PropTypes.string,
  selectValue: PropTypes.string,
  selectOptions: PropTypes.node.isRequired,
  hasRedirectError: PropTypes.bool,
  redirectErrorText: PropTypes.string,
  isRedirectSaveSuccess: PropTypes.bool
};
var DEFAULT_PROPS$2 = {
  assetUrl: '',
  className: '',
  slugValue: '',
  isEditingPageUrl: false,
  pageUrlLoadingState: LoadingState.LOADING_STATES.success,
  slugMessage: function slugMessage() {},
  hasSlugError: false,
  selectPlaceHolder: '',
  selectClassName: '',
  selectValue: '',
  hideFromSearchChecked: false,
  redirectPageChecked: false,
  shouldRedirectDesktopOnly: false,
  redirectUrl: 'https://',
  onRedirectUrlSave: undefined,
  onRedirectToDesktopChanged: function onRedirectToDesktopChanged() {},
  onRedirectUrlEditClosed: function onRedirectUrlEditClosed() {},
  onEditClick: undefined,
  hasRedirectError: false,
  redirectErrorText: '',
  isRedirectSaveSuccess: false
};

var Url =
/*#__PURE__*/
function (_Component) {
  inherits(Url, _Component);

  function Url(props) {
    var _this;

    classCallCheck(this, Url);

    _this = possibleConstructorReturn(this, getPrototypeOf(Url).call(this, props));
    _this.state = {
      onEditUrl: false,
      redirectUrl: props.redirectUrl
    };
    _this.handleOnRedirectUrlSave = props.onRedirectUrlSave;
    _this.handleOnRedirectUrlChange = _this.onRedirectUrlChange.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.handleOnRedirectCheckboxChanged = _this.onRedirectCheckboxChanged.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.handleOnRedirectToDesktopChanged = _this.onRedirectToDesktopChanged.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.handleOnPageUrlSaveClick = _this.onPageUrlSaveClick.bind(assertThisInitialized(assertThisInitialized(_this)));
    return _this;
  }

  createClass(Url, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.redirectUrl !== this.state.redirectUrl) {
        this.setState(function () {
          return {
            redirectUrl: nextProps.redirectUrl
          };
        });
      }
    }
  }, {
    key: "onRedirectUrlChange",
    value: function onRedirectUrlChange(value) {
      this.props.onRedirectUrlSave(value);
      this.setState(function () {
        return {
          redirectUrl: value
        };
      });
    }
  }, {
    key: "onRedirectCheckboxChanged",
    value: function onRedirectCheckboxChanged(_ref) {
      var target = _ref.target;
      var onRedirectPageChecked = this.props.onRedirectPageChecked;
      onRedirectPageChecked(target.checked);
    }
  }, {
    key: "onRedirectToDesktopChanged",
    value: function onRedirectToDesktopChanged(_ref2) {
      var target = _ref2.target;
      var onRedirectToDesktopChanged = this.props.onRedirectToDesktopChanged;
      onRedirectToDesktopChanged(target.checked);
    }
  }, {
    key: "onPageUrlSaveClick",
    value: function onPageUrlSaveClick() {
      var onPageUrlSaveClick = this.props.onPageUrlSaveClick;
      onPageUrlSaveClick();
    }
  }, {
    key: "renderRedirectForm",
    value: function renderRedirectForm() {
      var _this$props = this.props,
          redirectPageChecked = _this$props.redirectPageChecked,
          onRedirectUrlEditClosed = _this$props.onRedirectUrlEditClosed,
          shouldRedirectDesktopOnly = _this$props.shouldRedirectDesktopOnly,
          hasRedirectError = _this$props.hasRedirectError,
          redirectErrorText = _this$props.redirectErrorText,
          isRedirectSaveSuccess = _this$props.isRedirectSaveSuccess;

      if (!redirectPageChecked) {
        return null;
      }

      return [React__default.createElement(UrlEdit, {
        url: this.state.redirectUrl,
        onClose: onRedirectUrlEditClosed,
        onChange: this.handleOnRedirectUrlChange,
        hasError: hasRedirectError,
        subContent: redirectErrorText,
        isSuccess: isRedirectSaveSuccess
      }), React__default.createElement("div", {
        className: localStyles.checkboxContainer
      }, React__default.createElement(Checkbox, {
        id: "redirect-desktop-checkbox",
        className: localStyles.supportCheckbox,
        checked: shouldRedirectDesktopOnly,
        onChange: this.handleOnRedirectToDesktopChanged,
        labelContent: React__default.createElement(Typography.SupportContent, null, "Only redirect desktop traffic")
      }))];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          assetUrl = _this$props2.assetUrl,
          className = _this$props2.className,
          redirectPageChecked = _this$props2.redirectPageChecked,
          onSlugChange = _this$props2.onSlugChange,
          slugValue = _this$props2.slugValue,
          slugMessage = _this$props2.slugMessage,
          hasSlugError = _this$props2.hasSlugError,
          isEditingPageUrl = _this$props2.isEditingPageUrl,
          pageUrlLoadingState = _this$props2.pageUrlLoadingState,
          onSelectChange = _this$props2.onSelectChange,
          onEditClick = _this$props2.onEditClick,
          selectClassName = _this$props2.selectClassName,
          onSelectClick = _this$props2.onSelectClick,
          selectPlaceHolder = _this$props2.selectPlaceHolder,
          selectValue = _this$props2.selectValue,
          selectOptions = _this$props2.selectOptions,
          headerComponent = _this$props2.headerComponent;
      return React__default.createElement(Modal.ModalBody, {
        className: classnames(className, styles$2.publishOptionsModalContent)
      }, React__default.createElement(PageUrlEdit, {
        assetUrl: assetUrl,
        headerComponent: headerComponent,
        onEditClick: onEditClick,
        isEditing: isEditingPageUrl,
        pageUrlLoadingState: pageUrlLoadingState,
        onSaveClick: this.handleOnPageUrlSaveClick,
        onSlugChange: onSlugChange,
        slugValue: slugValue,
        slugMessage: slugMessage,
        hasSlugError: hasSlugError,
        onSelectChange: onSelectChange,
        selectClassName: selectClassName,
        onSelectClick: onSelectClick,
        selectPlaceHolder: selectPlaceHolder,
        selectValue: selectValue,
        selectOptions: selectOptions
      }), ' ', this.handleOnRedirectUrlSave ? React__default.createElement("div", null, React__default.createElement("hr", {
        className: styles$2.modalContentDivision
      }), React__default.createElement("div", {
        className: localStyles.checkboxContainer
      }, React__default.createElement(Checkbox, {
        id: "url-tab-redirect-page-checkbox",
        onChange: this.handleOnRedirectCheckboxChanged,
        checked: redirectPageChecked,
        labelContent: "Redirect This URL"
      }), React__default.createElement(Typography.SupportContent, {
        className: classnames(styles$2.supportContent, localStyles.checkboxSupportText)
      }, "Redirecting a URL is useful when a campaign has ended and you need to send traffic to an alternate URL.")), this.renderRedirectForm()) : React__default.createElement("div", null));
    }
  }]);

  return Url;
}(React.Component);
Url.propTypes = PROPS$2;
Url.defaultProps = DEFAULT_PROPS$2;

var css$4 = ".WordpressTab_wordpressUrlContainer__1J_Wr {\n  margin: 18px 0;\n}\n\n.WordpressTab_downloadLink__1nOV3 {\n  margin: 0 6px 0 3px;\n}\n\n.WordpressTab_wordpressDownloadButton__ZVmfy {\n  margin: 18px 0;\n}\n\n.WordpressTab_wordpressDownloadButton__ZVmfy,\n.WordpressTab_downloadLink__1nOV3 {\n  font-size: 13px;\n}\n";
var localStyles$1 = {"wordpressUrlContainer":"WordpressTab_wordpressUrlContainer__1J_Wr","downloadLink":"WordpressTab_downloadLink__1nOV3","wordpressDownloadButton":"WordpressTab_wordpressDownloadButton__ZVmfy"};
styleInject(css$4);

var Wordpress = function Wordpress(_ref) {
  var assetName = _ref.assetName,
      assetUrl = _ref.assetUrl,
      pluginUrl = _ref.pluginUrl,
      pluginVersion = _ref.pluginVersion,
      dynamicPageUrl = _ref.dynamicPageUrl,
      staticPageUrl = _ref.staticPageUrl;
  return React__default.createElement(Modal.ModalBody, {
    className: classnames(classnames, styles$2.publishOptionsModalContent)
  }, React__default.createElement(Typography.TypographyComponent, {
    type: Typography.types.headingDefault
  }, "Publish on Wordpress"), React__default.createElement(Typography.TypographyComponent, {
    className: classnames(styles$2.supportContent),
    type: Typography.types.supportContent
  }, "On the Leadpages tab in your Wordpress admin, select & publish:"), React__default.createElement("div", {
    className: localStyles$1.wordpressUrlContainer
  }, React__default.createElement(UrlOptionsDisplayLabel, {
    urlText: assetName,
    urlLink: assetUrl
  })), React__default.createElement(Typography.TypographyComponent, {
    type: Typography.types.supportContent
  }, "Don't have our Wordpress plugin yet?", React__default.createElement(Button, {
    isLinkText: true,
    className: localStyles$1.downloadLink,
    href: pluginUrl
  }, "Download Now"), "(", pluginVersion, ")"), React__default.createElement("hr", {
    className: styles$2.modalContentDivision
  }), React__default.createElement(Typography.TypographyComponent, {
    type: Typography.types.headingDefault
  }, "Publish on Another Server"), React__default.createElement(Typography.TypographyComponent, {
    className: classnames(styles$2.supportContent),
    type: Typography.types.supportContent
  }, "A dynamic HTML copy of your Leadpage will automatically update anytime you make changes to your page."), React__default.createElement(Button, {
    className: localStyles$1.wordpressDownloadButton,
    isSecondary: true,
    href: dynamicPageUrl
  }, React__default.createElement("i", {
    className: "lp-icon"
  }, "file_download"), "Download Dynamic HTML"), !!staticPageUrl && React__default.createElement(Typography.TypographyComponent, {
    type: Typography.types.supportContent
  }, "Or,", React__default.createElement(Button, {
    isLinkText: true,
    className: localStyles$1.downloadLink,
    href: staticPageUrl
  }, "download static HTML file."), React__default.createElement("b", null, "Warning:"), "This will prevent analytics, split testing & the page builder from functioning normally. We cannot offer support for this."));
};

Wordpress.propTypes = {
  className: PropTypes.string,
  assetName: PropTypes.string,
  assetUrl: PropTypes.string,
  pluginUrl: PropTypes.string.isRequired,
  pluginVersion: PropTypes.string.isRequired,
  dynamicPageUrl: PropTypes.string,
  staticPageUrl: PropTypes.string
};
Wordpress.defaultProps = {
  className: '',
  assetName: '',
  assetUrl: null,
  pluginUrl: '#',
  pluginVersion: '',
  dynamicPageUrl: '',
  staticPageUrl: ''
};

var css$5 = ".CampaignWordpressTab_wordpressUrlContainer__2TM8K {\n  margin: 18px 0;\n}\n\n.CampaignWordpressTab_downloadLink__1fO4o {\n  margin: 0 6px 0 3px;\n}\n\n.CampaignWordpressTab_wordpressDownloadButton__20qwg {\n  margin: 18px 0;\n}\n\n.CampaignWordpressTab_wordpressDownloadButton__20qwg,\n.CampaignWordpressTab_downloadLink__1fO4o {\n  font-size: 13px;\n}\n";
var localStyles$2 = {"wordpressUrlContainer":"CampaignWordpressTab_wordpressUrlContainer__2TM8K","downloadLink":"CampaignWordpressTab_downloadLink__1fO4o","wordpressDownloadButton":"CampaignWordpressTab_wordpressDownloadButton__20qwg"};
styleInject(css$5);

var CampaignWordpress = function CampaignWordpress(_ref) {
  var assetName = _ref.assetName,
      assetUrl = _ref.assetUrl,
      pluginUrl = _ref.pluginUrl,
      pluginVersion = _ref.pluginVersion;
  return React__default.createElement(Modal.ModalBody, {
    className: classnames(classnames, styles$2.publishOptionsModalContent)
  }, React__default.createElement(Typography.TypographyComponent, {
    type: Typography.types.headingDefault
  }, "Publish on Wordpress"), React__default.createElement(Typography.TypographyComponent, {
    className: classnames(styles$2.supportContent),
    type: Typography.types.supportContent
  }, "On the Leadpages tab in your Wordpress admin, select & publish:"), React__default.createElement("div", {
    className: localStyles$2.wordpressUrlContainer
  }, React__default.createElement(UrlOptionsDisplayLabel, {
    urlText: "".concat(assetName, " (Campaigns)"),
    urlLink: assetUrl
  })), React__default.createElement(Typography.TypographyComponent, {
    type: Typography.types.supportContent
  }, "Don't have our Wordpress plugin yet?", React__default.createElement(Button, {
    isLinkText: true,
    className: localStyles$2.downloadLink,
    href: pluginUrl,
    "data-heap": "campaigns-wordpress-download-now"
  }, "Download Now"), "(", pluginVersion, ")"));
};

CampaignWordpress.propTypes = {
  assetName: PropTypes.string,
  assetUrl: PropTypes.string,
  pluginUrl: PropTypes.string.isRequired,
  pluginVersion: PropTypes.string.isRequired
};
CampaignWordpress.defaultProps = {
  assetName: '',
  assetUrl: null,
  pluginUrl: '#',
  pluginVersion: ''
};

var css$6 = ".TemplateTab_templateUrlCopyContainer__1cAOn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n\n  margin: 18px 0;\n}\n\n.TemplateTab_templateUrlCopy__rVIvH {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 132px;\n          flex: 0 0 132px;\n\n  margin-left: 12px;\n}\n\n.TemplateTab_templateUrlInput__2bgUa {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.TemplateTab_templateTOSLink__NsHdS {\n  font-size: 13px;\n\n  margin: 0 6px;\n}\n";
var localStyles$3 = {"templateUrlCopyContainer":"TemplateTab_templateUrlCopyContainer__1cAOn","templateUrlCopy":"TemplateTab_templateUrlCopy__rVIvH","templateUrlInput":"TemplateTab_templateUrlInput__2bgUa","templateTOSLink":"TemplateTab_templateTOSLink__NsHdS"};
styleInject(css$6);

var CopyTextButton$1 = withCopyToClipboard(Button);

var Template = function Template(_ref) {
  var assetName = _ref.assetName,
      assetUrl = _ref.assetUrl,
      tosUrl = _ref.tosUrl,
      className = _ref.className;
  return React__default.createElement(Modal.ModalBody, {
    className: classnames(className, styles$2.publishOptionsModalContent, localStyles$3.templateContainer)
  }, React__default.createElement(Typography.TypographyComponent, {
    type: Typography.types.headingDefault
  }, "Share Page Template"), React__default.createElement(Typography.TypographyComponent, {
    className: classnames(styles$2.supportContent),
    type: Typography.types.supportContent
  }, "Share a template of this page with anyone (even if they're not a Leadpages customer)."), React__default.createElement("div", {
    className: localStyles$3.templateUrlCopyContainer
  }, React__default.createElement(UrlOptionsDisplayLabel, {
    className: localStyles$3.templateUrlInput,
    urlText: assetName,
    urlLink: assetUrl
  }), React__default.createElement("div", {
    className: localStyles$3.templateUrlCopy
  }, React__default.createElement(CopyTextButton$1, {
    textToCopy: assetUrl
  }, "Copy Link"))), React__default.createElement(Typography.TypographyComponent, {
    type: Typography.types.supportContent
  }, "By sharing this page, you agree to our", React__default.createElement(Button, {
    isLinkText: true,
    href: tosUrl,
    className: localStyles$3.templateTOSLink
  }, "terms of service.")));
};

Template.propTypes = {
  assetName: PropTypes.string.isRequired,
  className: PropTypes.string,
  assetUrl: PropTypes.string.isRequired,
  tosUrl: PropTypes.string.isRequired
};
Template.defaultProps = {
  className: ''
};

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  padding: 24px;\n  margin: 24px 0;\n  display: block;\n  word-break: break-all;\n  background: #4c515d;\n  border: 1px solid #0069ff;\n  border-radius: 3px;\n  color: #f2f4f7;\n  font-size: 0.875rem;\n  font-weight: 100;\n  line-height: 1.2;\n  white-space: pre-wrap;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = taggedTemplateLiteral(["\n  display: block !important;\n  margin: 0 auto;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var CopyTextButton$2 = withCopyToClipboard(Button);
var buttonClassName = emotion.css(_templateObject$1());
var embedCodeClassName = emotion.css(_templateObject2());

var EmbedTab = function EmbedTab(_ref) {
  var children = _ref.children,
      copyButtonText = _ref.copyButtonText,
      className = _ref.className,
      description = _ref.description,
      embedCode = _ref.embedCode;
  return React__default.createElement(Modal.ModalBody, {
    className: className
  }, React__default.createElement(Typography.TypographyComponent, {
    type: Typography.types.bodyDefault
  }, description), React__default.createElement("code", {
    className: embedCodeClassName
  }, embedCode), children, React__default.createElement(CopyTextButton$2, {
    className: buttonClassName,
    textToCopy: embedCode
  }, copyButtonText));
};

EmbedTab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  copyButtonText: PropTypes.string,
  description: PropTypes.string,
  embedCode: PropTypes.string
};
EmbedTab.defaultProps = {
  children: null,
  className: '',
  copyButtonText: 'Copy Code',
  description: 'To use your bar copy and paste the following code before the closing </body> tag on your site or blog.',
  embedCode: ''
};

exports.default = PublishOptionsModal;
exports.defaultTabs = defaultTabs;
exports.campaignTabs = campaignTabs;
exports.Promote = Promote;
exports.Template = Template;
exports.Url = Url;
exports.Wordpress = Wordpress;
exports.CampaignWordpress = CampaignWordpress;
exports.Embed = EmbedTab;
