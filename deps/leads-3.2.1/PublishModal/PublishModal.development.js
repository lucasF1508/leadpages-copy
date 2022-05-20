'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var withColor = require('../Color');
var withColor__default = _interopDefault(withColor);
var Modal = require('../Modal');
var React = _interopDefault(require('react'));
var classnames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var Button = _interopDefault(require('../Button'));
var Tooltip = _interopDefault(require('../Tooltip'));
var withCopyToClipboard = _interopDefault(require('../CopyToClipboard'));
var Typography = require('../Typography');

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
    return React.createElement("a", {
      className: styles.displayLabelText,
      "data-qa-selector": "url-link",
      href: link
    }, displayText);
  }

  return text ? React.createElement("div", {
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
  return React.createElement("div", {
    className: classnames(styles.urlDisplayLabelContainer, className),
    "data-qa-selector": dataQaSelector
  }, React.createElement(Tooltip, {
    className: styles.urlDisplayToolTip,
    tip: urlText,
    top: true
  }, shouldDisplayLink(urlText, urlLink, isLink)), React.createElement("div", null, viewOnClick && React.createElement(Tooltip, {
    tip: "View Page",
    top: true
  }, React.createElement(Button, {
    noBackground: true,
    "data-qa-selector": "view-page",
    icon: "view",
    href: urlLink,
    target: "_blank",
    onClick: viewOnClick
  })), isLink && urlLink && React.createElement(Tooltip, {
    tip: "Copy Link",
    top: true
  }, React.createElement(CopyTextButton, {
    noBackground: true,
    "data-qa-selector": "copy-link",
    icon: "link",
    textToCopy: urlLink
  })), editOnClick && React.createElement(Tooltip, {
    tip: "Edit URL",
    top: true
  }, React.createElement(Button, {
    noBackground: true,
    "data-qa-selector": "edit-url",
    icon: "edit",
    onClick: editOnClick
  }))));
};

UrlOptionsDisplayLabel.propTypes = PROPS;
UrlOptionsDisplayLabel.defaultProps = DEFAULT_PROPS;

var css$1 = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.PublishModal_modalHeaderContent__1PF5I {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n\n  text-align: center\n}\n\n.PublishModal_modalHeaderContent__1PF5I .PublishModal_title__NIZ1n {\n  margin: 12px 0 24px;\n}\n\n.PublishModal_modalHeaderContent__1PF5I .PublishModal_urlOptionsDisplayLabel__vLwAM {\n  max-width: 500px;\n  margin: 0 0 24px;\n  text-align: left;\n}\n\n.PublishModal_modalHeaderContent__1PF5I .PublishModal_urlOptionsDisplayLabel__vLwAM,\n  .PublishModal_modalHeaderContent__1PF5I .PublishModal_link__1DoDg {\n  font-size: 15px;\n}\n\n.PublishModal_modalHeaderContent__1PF5I .PublishModal_link__1DoDg {\n  color: #f2f4f7;\n}\n\n.PublishModal_modalHeaderContent__1PF5I .PublishModal_icon__3bRXg {\n  margin: -3px 6px 0 0;\n}\n\n.PublishModal_modalHeaderContent__1PF5I > a {\n  padding: 6px 0;\n}\n\n.PublishModal_modalHeaderContent__1PF5I::after {\n  position: absolute;\n  top: 260px;\n  content: \"\";\n  border-top: 25px solid #4692ff;\n  border-right: 25px solid transparent;\n  border-bottom: 25px solid transparent;\n  border-left: 25px solid transparent;\n}\n\n.PublishModal_modalBodyContent__VMnBx {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n\n  text-align: center\n}\n\n.PublishModal_modalBodyContent__VMnBx .PublishModal_title__NIZ1n {\n  margin: 12px 0 6px;\n}\n\n.PublishModal_modalBodyContent__VMnBx .PublishModal_message__1CIt7,\n  .PublishModal_modalBodyContent__VMnBx .PublishModal_urlOptionsDisplayLabel__vLwAM,\n  .PublishModal_modalBodyContent__VMnBx .PublishModal_link__1DoDg {\n  margin: 0 0 24px;\n}\n\n.PublishModal_modalBodyContent__VMnBx .PublishModal_link__1DoDg {\n  font-size: 13px;\n  color: #4c515d;\n}\n\n.PublishModal_modalBodyContent__VMnBx .PublishModal_icon__3bRXg {\n  margin: -3px 6px 0 0;\n}\n\n.PublishModal_modalBodyContent__VMnBx > a {\n  padding: 6px 0;\n}\n";
var styles$1 = {"modalHeaderContent":"PublishModal_modalHeaderContent__1PF5I","title":"PublishModal_title__NIZ1n","urlOptionsDisplayLabel":"PublishModal_urlOptionsDisplayLabel__vLwAM","link":"PublishModal_link__1DoDg","icon":"PublishModal_icon__3bRXg","modalBodyContent":"PublishModal_modalBodyContent__VMnBx","message":"PublishModal_message__1CIt7"};
styleInject(css$1);

var ModalHeaderWithColor = withColor__default(Modal.ModalHeader);
var ColorType = withColor__default(Typography.TypographyComponent);
var ButtonWithColor = withColor__default(Button);

var PublishModal = function PublishModal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      pageUrl = _ref.pageUrl,
      onOpenAdvancedPublishingOptions = _ref.onOpenAdvancedPublishingOptions,
      viewOnClick = _ref.viewOnClick,
      linkOnClick = _ref.linkOnClick,
      editOnClick = _ref.editOnClick,
      headerTitle = _ref.headerTitle,
      children = _ref.children,
      className = _ref.className;
  return React.createElement(Modal.Modal, {
    className: className,
    isOpen: isOpen,
    onRequestClose: onClose,
    "data-qa-selector": "publish-modal"
  }, React.createElement(ModalHeaderWithColor, {
    backgroundColor: "blueLight",
    onClose: onClose,
    isHero: true
  }, React.createElement("div", {
    className: styles$1.modalHeaderContent
  }, React.createElement(ColorType, {
    className: styles$1.title,
    color: withColor.colors.greyLighter,
    type: Typography.types.inPageHeading
  }, headerTitle), React.createElement(UrlOptionsDisplayLabel, {
    className: styles$1.urlOptionsDisplayLabel,
    isLink: true,
    urlLink: pageUrl,
    urlText: pageUrl,
    viewOnClick: viewOnClick,
    linkOnClick: linkOnClick,
    editOnClick: editOnClick
  }), React.createElement(ButtonWithColor, {
    className: styles$1.link,
    color: withColor.colors.greyLighter,
    noBackground: true,
    linkText: true,
    "data-qa-selector": "publishing-options-button",
    onClick: function onClick(e) {
      e.preventDefault();
      onOpenAdvancedPublishingOptions();
    }
  }, React.createElement("i", {
    className: "lp-icon ".concat(styles$1.icon)
  }, "settings"), "Publishing Options"))), React.createElement(Modal.ModalBody, {
    isHero: true
  }, React.createElement("div", {
    className: styles$1.modalBodyContent
  }, children)));
};

PublishModal.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  headerTitle: PropTypes.string,
  viewOnClick: PropTypes.func.isRequired,
  linkOnClick: PropTypes.func.isRequired,
  editOnClick: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpenAdvancedPublishingOptions: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};
PublishModal.defaultProps = {
  headerTitle: 'Your Page is Published!',
  children: null,
  className: null
};

module.exports = PublishModal;
