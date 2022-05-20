'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Modal = require('../Modal');
var LoadingState = require('../LoadingState');
var LoadingButton = _interopDefault(require('../LoadingButton'));
var Input = _interopDefault(require('../Input'));
var Select = _interopDefault(require('../Select'));
var Option = _interopDefault(require('../Option'));
var React = require('react');
var React__default = _interopDefault(React);
var classnames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var Button = _interopDefault(require('../Button'));
var Tooltip = _interopDefault(require('../Tooltip'));
var withCopyToClipboard = _interopDefault(require('../CopyToClipboard'));
var Typography = require('../Typography');

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

var css$2 = ".RenameAssetModal_content__GPLTP {\n  height: inherit;\n}\n\n.RenameAssetModal_firstSectionHeader__z54aC {\n  margin: 0 0 6px;\n}\n\n.RenameAssetModal_sectionHeader__2eUe_ {\n  margin: 24px 0 0;\n}\n\n.RenameAssetModal_renameModalSelect__1HQ8Z {\n  position: fixed;\n\n  width: 350px;\n}\n";
var styles$2 = {"content":"RenameAssetModal_content__GPLTP","firstSectionHeader":"RenameAssetModal_firstSectionHeader__z54aC","sectionHeader":"RenameAssetModal_sectionHeader__2eUe_","renameModalSelect":"RenameAssetModal_renameModalSelect__1HQ8Z"};
styleInject(css$2);

var RenameAssetModal =
/*#__PURE__*/
function (_Component) {
  inherits(RenameAssetModal, _Component);

  function RenameAssetModal(props) {
    var _this;

    classCallCheck(this, RenameAssetModal);

    _this = possibleConstructorReturn(this, getPrototypeOf(RenameAssetModal).call(this, props));
    _this.submitAsset = _this.submitAsset.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.cancelAndClose = _this.cancelAndClose.bind(assertThisInitialized(assertThisInitialized(_this)));
    return _this;
  }

  createClass(RenameAssetModal, [{
    key: "submitAsset",
    value: function submitAsset(e) {
      var onSave = this.props.onSave;
      e.preventDefault();
      onSave();
    }
  }, {
    key: "cancelAndClose",
    value: function cancelAndClose(e) {
      var onClose = this.props.onClose;
      e.preventDefault();
      onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          onClose = _this$props.onClose,
          handleOnChange = _this$props.handleOnChange,
          assetType = _this$props.assetType,
          assetUrl = _this$props.assetUrl,
          assetName = _this$props.assetName,
          assetLastUpdatedString = _this$props.assetLastUpdatedString,
          onEditUrl = _this$props.onEditUrl,
          onSelectChange = _this$props.onSelectChange,
          selectOptions = _this$props.selectOptions,
          selectValue = _this$props.selectValue,
          slugMessage = _this$props.slugMessage,
          slugHasError = _this$props.slugHasError,
          renameError = _this$props.renameError,
          slugValue = _this$props.slugValue,
          slugPlaceholder = _this$props.slugPlaceholder,
          onSlugChange = _this$props.onSlugChange,
          hideUrlEdit = _this$props.hideUrlEdit,
          loadingState = _this$props.loadingState;
      return React__default.createElement(Modal.Modal, {
        isOpen: isOpen,
        onRequestClose: onClose
      }, React__default.createElement(Modal.ModalHeader, {
        title: "Rename ".concat(assetType),
        onClose: onClose
      }), React__default.createElement("form", {
        onSubmit: this.submitAsset
      }, React__default.createElement(Modal.ModalBody, null, React__default.createElement("div", {
        className: styles$2.content
      }, React__default.createElement(Typography.TypographyComponent, {
        className: styles$2.firstSectionHeader,
        type: Typography.types.headingDefault
      }, "".concat(assetType, " Name")), React__default.createElement(Input, {
        id: "assetName",
        isSingleInput: true,
        placeholder: assetName,
        value: assetName,
        onChange: handleOnChange,
        hasError: !!renameError,
        helperText: renameError
      }), !hideUrlEdit && React__default.createElement("div", null, React__default.createElement(Typography.TypographyComponent, {
        className: styles$2.sectionHeader,
        type: Typography.types.headingDefault
      }, assetType.toLowerCase() === 'funnel' ? "".concat(assetType, " entry URL") : "".concat(assetType, " URL")), React__default.createElement(PageUrlEdit, _extends_1({
        selectClassName: styles$2.renameModalSelect
      }, {
        assetUrl: assetUrl,
        assetName: assetName,
        assetLastUpdatedString: assetLastUpdatedString,
        onEditUrl: true,
        onSelectChange: onSelectChange,
        selectOptions: selectOptions,
        selectValue: selectValue,
        slugMessage: slugMessage,
        slugHasError: slugHasError,
        slugValue: slugValue,
        slugPlaceholder: slugPlaceholder,
        onSlugChange: onSlugChange
      }))))), React__default.createElement(Modal.ModalFooter, null, React__default.createElement(Button, {
        onClick: this.cancelAndClose,
        type: "reset",
        isSecondary: true
      }, "Cancel"), React__default.createElement(LoadingButton, {
        inverted: true,
        loadingState: loadingState
      }, "Save"))));
    }
  }]);

  return RenameAssetModal;
}(React.Component);
RenameAssetModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  assetName: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  hideUrlEdit: PropTypes.bool,
  loadingState: PropTypes.string
};
RenameAssetModal.defaultProps = {
  isOpen: false,
  hideUrlEdit: false,
  loadingState: LoadingState.LOADING_STATES.success
};

module.exports = RenameAssetModal;
