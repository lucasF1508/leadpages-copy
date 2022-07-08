'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var classnames = _interopDefault(require('classnames'));
var anime = _interopDefault(require('animejs'));
var isEqual = _interopDefault(require('lodash/isEqual'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
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

/**
 * paging
 *
 * @param {Array} items=[] Array of objects to page
 * @param {Number} pagesize=3 the size of the array returned in every page
 * @returns {Object} Functions to allow the paging
 */
function paging() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var pagesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var listLength = items.length;
  var lastIndex = listLength - 1;
  var begining = 0;
  var end = pagesize;

  function start() {
    return items.slice(0, pagesize);
  }

  function listEnd() {
    return items.slice(listLength - pagesize, listLength);
  }

  function next() {
    if (begining + pagesize >= lastIndex - 1) {
      return listEnd();
    }

    begining += pagesize;
    end += pagesize;
    return items.slice(begining, end);
  }

  function previous() {
    if (begining - pagesize <= 0) {
      return start();
    }

    begining -= pagesize;
    end -= pagesize;
    return items.slice(begining, end);
  }

  function getItems() {
    return items;
  }

  return {
    start: start,
    next: next,
    previous: previous,
    getItems: getItems
  };
}

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.DrawerCard_templateCard__Kx96Q {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.DrawerCard_templateCardPreview__2jlwC {\n  position: relative;\n\n  overflow: hidden;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n\n  max-height: 324px;\n\n  -webkit-transition: all 0.2s ease-in-out;\n\n  transition: all 0.2s ease-in-out;\n\n  border-radius: 3px;\n  background: #202365\n}\n\n.DrawerCard_templateCardPreview__2jlwC:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 8px 10px 0 rgba(0, 0, 0, .25);\n          box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 8px 10px 0 rgba(0, 0, 0, .25);\n}\n\n.DrawerCard_cardThumbnail__182V3 {\n  z-index: -1;\n\n  width: 100%;\n}\n\n.DrawerCard_overlay__2Fvk2 {\n  position: absolute;\n  top: 0;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n\n  width: 100%;\n  height: 100%;\n\n  -webkit-transition: opacity 0.4s ease;\n\n  transition: opacity 0.4s ease;\n\n  opacity: 0;\n  background: rgba(254, 254, 254, .8)\n}\n\n.DrawerCard_overlay__2Fvk2:hover {\n  opacity: 1;\n}\n\n.DrawerCard_overlayButton__1CQZg {\n  margin-top: 24px;\n}\n\n.DrawerCard_overlayContainer__2g-Cm {\n  font-weight: lighter;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n\n  width: 55%;\n  margin: auto;\n}\n\n@media (max-width: 1200px) {\n\n  .DrawerCard_overlayContainer__2g-Cm {\n    width: 75%;\n  }\n}\n\n.DrawerCard_templateCardText__9FTkZ {\n  font-family: 'Akkurat';\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  overflow: hidden;\n\n  margin: 24px 0 0;\n\n  text-overflow: ellipsis;\n\n  color: #ffffff;\n}\n\n.DrawerCard_cardRatioManager__3e3I5 {\n  position: relative;\n\n  width: 100%;\n  padding-bottom: 87%;\n}\n\n.DrawerCard_cardRatioContainer__3k1a7 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n";
var styles = {"templateCard":"DrawerCard_templateCard__Kx96Q","templateCardPreview":"DrawerCard_templateCardPreview__2jlwC","cardThumbnail":"DrawerCard_cardThumbnail__182V3","overlay":"DrawerCard_overlay__2Fvk2","overlayButton":"DrawerCard_overlayButton__1CQZg","overlayContainer":"DrawerCard_overlayContainer__2g-Cm","templateCardText":"DrawerCard_templateCardText__9FTkZ","cardRatioManager":"DrawerCard_cardRatioManager__3e3I5","cardRatioContainer":"DrawerCard_cardRatioContainer__3k1a7"};
styleInject(css);

var DrawerCard = function DrawerCard(_ref) {
  var item = _ref.item,
      imageRef = _ref.imageRef;
  return React__default.createElement("div", {
    className: styles.templateCard
  }, React__default.createElement("div", {
    className: styles.templateCardPreview
  }, React__default.createElement("div", {
    className: styles.cardRatioManager
  }, React__default.createElement("div", {
    className: styles.cardRatioContainer
  }, React__default.createElement("img", {
    ref: imageRef,
    className: styles.cardThumbnail,
    src: item.thumbnailFullUrl,
    alt: item.name
  })), React__default.createElement("div", {
    className: styles.overlay
  }, React__default.createElement("div", {
    className: styles.overlayContainer
  }, item.primary && React__default.createElement(Button, {
    href: item.primary.href,
    to: item.primary.to
  }, item.primary.text), item.secondary && React__default.createElement(Button, {
    className: item.primary ? styles.overlayButton : '',
    isSecondary: true,
    href: item.secondary.href,
    to: item.secondary.to
  }, item.secondary.text))))), React__default.createElement("div", {
    className: styles.templateCardText
  }, item.name));
};

DrawerCard.propTypes = {
  item: PropTypes.shape({
    thumbnailFullUrl: PropTypes.string,
    name: PropTypes.string,
    primary: PropTypes.shape({
      text: PropTypes.string,
      to: PropTypes.string,
      href: PropTypes.string
    }),
    secondary: PropTypes.shape({
      text: PropTypes.string,
      to: PropTypes.string,
      href: PropTypes.string
    })
  }),
  imageRef: PropTypes.func
};
DrawerCard.defaultProps = {
  item: {
    thumbnailFullUrl: '',
    name: '',
    primary: null,
    secondary: null
  },
  imageRef: function imageRef() {}
};

var css$1 = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Drawer_templateDrawer__2WArG {\n  position: relative;\n\n  overflow: hidden;\n\n  width: 100%;\n\n  text-align: center;\n\n  color: #ffffff;\n  background-color: #202365;\n}\n\n@media (max-width: 840px) {\n\n  .Drawer_templateDrawer__2WArG {\n    display: none;\n  }\n}\n\n.Drawer_templateDrawerContent__1W1cj {\n  position: relative;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n\n  width: 1150px;\n  height: 100%;\n  margin: auto;\n}\n\n@media (max-width: 1200px) {\n\n  .Drawer_templateDrawerContent__1W1cj {\n    width: 95%;\n  }\n}\n\n.Drawer_templates__3DeLN {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Drawer_templateDrawerHeader__18bvO {\n  margin-bottom: 24px;\n}\n\n.Drawer_header__2FIob {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  margin: 36px 0 0;\n\n  text-transform: capitalize;\n\n  color: #ffffff;\n}\n\n.Drawer_subheader__SYDvM {\n  font-family: 'Akkurat';\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  line-height: 20px;\n\n  margin: 24px 0 0;\n\n  color: #ffffff;\n}\n\n.Drawer_templateDrawerFooter__2ihVI {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  margin: 36px 0;\n\n  vertical-align: middle;\n}\n\n.Drawer_closeButton__1IU6h {\n  position: absolute;\n  top: 20px;\n  right: 5px;\n}\n\n@media (max-width: 992px) {\n\n  .Drawer_closeButton__1IU6h {\n    top: 5px;\n    right: 0;\n  }\n}\n\n.Drawer_templateDrawer__2WArG .Drawer_templateDrawerContent__1W1cj .Drawer_closeButton__1IU6h .Drawer_button__xmgBm,\n.Drawer_templateDrawer__2WArG .Drawer_templateDrawerContent__1W1cj .Drawer_templates__3DeLN .Drawer_button__xmgBm {\n  color: #ffffff;\n}\n\n.Drawer_templateDrawer__2WArG .Drawer_templateDrawerContent__1W1cj .Drawer_closeButton__1IU6h .Drawer_button__xmgBm:hover,\n.Drawer_templateDrawer__2WArG .Drawer_templateDrawerContent__1W1cj .Drawer_templates__3DeLN .Drawer_button__xmgBm:hover {\n  color: #ffffff;\n  background-color: rgba(228, 231, 237, .27);\n}\n\n.Drawer_templateDrawer__2WArG .Drawer_templateDrawerContent__1W1cj .Drawer_templates__3DeLN .Drawer_button__xmgBm {\n  font-size: 4em;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 5%;\n          flex: 1 5%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  width: 5%;\n  height: inherit;\n  margin: 0 6px;\n\n  -webkit-transition: all 0.25s ease;\n\n  transition: all 0.25s ease;\n\n  border-radius: 3px\n}\n\n.Drawer_templateDrawer__2WArG .Drawer_templateDrawerContent__1W1cj .Drawer_templates__3DeLN .Drawer_button__xmgBm i {\n  font-size: 1.1em;\n}\n\n.Drawer_templatesWrapper__2yB2g {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n\n  width: 100%;\n}\n\n@media (max-width: 1200px) {\n\n  .Drawer_templatesWrapper__2yB2g {\n    width: 90%;\n  }\n}\n";
var styles$1 = {"templateDrawer":"Drawer_templateDrawer__2WArG","templateDrawerContent":"Drawer_templateDrawerContent__1W1cj","templates":"Drawer_templates__3DeLN","templateDrawerHeader":"Drawer_templateDrawerHeader__18bvO","header":"Drawer_header__2FIob","subheader":"Drawer_subheader__SYDvM","templateDrawerFooter":"Drawer_templateDrawerFooter__2ihVI","closeButton":"Drawer_closeButton__1IU6h","button":"Drawer_button__xmgBm","templatesWrapper":"Drawer_templatesWrapper__2yB2g"};
styleInject(css$1);

var DrawerHeader = function DrawerHeader(_ref) {
  var header = _ref.header,
      subheader = _ref.subheader;
  return React__default.createElement("div", {
    className: styles$1.templateDrawerHeader
  }, React__default.createElement("h3", {
    className: styles$1.header
  }, header), subheader ? React__default.createElement("div", {
    className: styles$1.subheader
  }, subheader) : null);
};
DrawerHeader.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string
};
DrawerHeader.defaultProps = {
  header: '',
  subheader: ''
};

var DrawerFooter = function DrawerFooter(_ref) {
  var children = _ref.children;
  return React__default.createElement("div", {
    className: styles$1.templateDrawerFooter
  }, children);
};
DrawerFooter.propTypes = {
  children: PropTypes.node
};
DrawerFooter.defaultProps = {
  children: null
};

function animateOpen(drawer, drawerContent, height) {
  anime.timeline().add({
    targets: drawer,
    offset: 0,
    height: [{
      value: 0,
      duration: 50,
      delay: 0,
      elasticity: 0,
      easing: 'easeOutExpo'
    }, {
      value: height,
      duration: 500,
      delay: 0,
      elasticity: 0
    }]
  }).add({
    targets: drawerContent,
    offset: 0,
    translateY: [{
      value: -250,
      duration: 0,
      delay: 0,
      elasticity: 0
    }, {
      value: 0,
      duration: 500,
      delay: 0,
      elasticity: 0
    }]
  });
}

function animateClose(drawer, drawerContent, callback) {
  anime({
    targets: drawer,
    complete: callback,
    height: [{
      value: 0,
      duration: 500,
      delay: 0,
      elasticity: 0,
      easing: 'easeOutExpo'
    }]
  });
}

var Drawer =
/*#__PURE__*/
function (_Component) {
  inherits(Drawer, _Component);

  function Drawer(props) {
    var _this;

    classCallCheck(this, Drawer);

    _this = possibleConstructorReturn(this, getPrototypeOf(Drawer).call(this, props));
    _this.state = {
      isOpen: props.isOpen,
      isPaged: props.isPaged,
      templates: [],
      hasNoItems: props.getHasNoItems(),
      openHeight: null
    };

    if (props.isPaged) {
      var pages = paging(props.items);
      _this.state.items = pages.start();
      _this.state.pages = pages;
    } else {
      _this.state.items = props.items;
      _this.state.hasNoItems = props.getHasNoItems();
    }

    _this.closeDrawer = _this.closeDrawer.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.openDrawer = _this.openDrawer.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.getNext = _this.getNext.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.getPrevious = _this.getPrevious.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.setOpenHeight = _this.setOpenHeight.bind(assertThisInitialized(assertThisInitialized(_this)));
    return _this;
  }

  createClass(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setOpenHeight();
      /*
        This event listener was added to reset the
        hieght if the use adjusted window size.
        If the drawer is open it currently will not
        resize until being closed then open.
      */

      window.addEventListener('resize', this.setOpenHeight.bind(this, true));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen !== this.props.isOpen) {
        if (nextProps.isOpen) {
          this.openDrawer();
        } else {
          this.closeDrawer();
        }
      } // If new items come in we want to reload the pages.


      if (!isEqual(nextProps.items, this.props.items)) {
        if (nextProps.isPaged) {
          var pages = paging(nextProps.items);
          this.setState(function () {
            return {
              items: pages.start(),
              pages: pages
            };
          });
        } else {
          this.setState(function () {
            return {
              items: nextProps.items,
              hasNoItems: nextProps.getHasNoItems()
            };
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setOpenHeight(this, true));
    }
  }, {
    key: "getNext",
    value: function getNext() {
      var _this2 = this;

      this.setState(function () {
        return {
          items: _this2.state.pages.next()
        };
      });
    }
  }, {
    key: "getPrevious",
    value: function getPrevious() {
      var _this3 = this;

      this.setState(function () {
        return {
          items: _this3.state.pages.previous()
        };
      });
    }
  }, {
    key: "setOpenHeight",
    value: function setOpenHeight() {
      var _this4 = this;

      this.setState(function (state, props) {
        var openHeight = 0;

        if (_this4.drawer) {
          // setting the drawer height to auto
          // so we can get the animate to hieght
          var currentHeight = _this4.drawer.style.height;
          _this4.drawer.style.height = 'auto'; // to get the true height we need the
          // images to load to thier height
          // but we can't wait for them to load

          var currentImageHeight = _this4.imageElement.style.height;
          _this4.imageElement.style.height = "".concat(_this4.imageElement.clientWidth, "px");
          openHeight = "".concat(_this4.drawer.clientHeight, "px");
          _this4.drawer.style.height = props.isOpen ? currentHeight : 0;
          _this4.imageElement.style.height = currentImageHeight;
        }

        return {
          openHeight: openHeight
        };
      });
    }
  }, {
    key: "closeDrawer",
    value: function closeDrawer(e) {
      animateClose(this.drawer, this.drawerContent, this.props.onClose());
    }
  }, {
    key: "openDrawer",
    value: function openDrawer(e) {
      animateOpen(this.drawer, this.drawerContent, this.state.openHeight);
      this.props.onOpen();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          isPaged = _this$state.isPaged,
          items = _this$state.items;
      var _this$props = this.props,
          header = _this$props.header,
          subheader = _this$props.subheader,
          closeTip = _this$props.closeTip,
          footerText = _this$props.footerText,
          footerHref = _this$props.footerHref,
          footerLink = _this$props.footerLink;
      return React__default.createElement("div", {
        ref: function ref(drawer) {
          _this5.drawer = drawer;
        },
        className: classnames(styles$1.templateDrawer)
      }, React__default.createElement("div", {
        ref: function ref(drawerContent) {
          _this5.drawerContent = drawerContent;
        },
        className: styles$1.templateDrawerContent
      }, React__default.createElement("div", {
        className: styles$1.closeButton
      }, closeTip && React__default.createElement(Tooltip, {
        left: true,
        tip: closeTip
      }, React__default.createElement(Button, {
        className: styles$1.button,
        icon: "close",
        noBackground: true,
        onClick: this.closeDrawer
      })), !closeTip && React__default.createElement(Button, {
        className: styles$1.button,
        icon: "close",
        noBackground: true,
        onClick: this.closeDrawer
      })), React__default.createElement(DrawerHeader, {
        header: header,
        subheader: subheader
      }), React__default.createElement("div", {
        className: styles$1.templates
      }, isPaged ? React__default.createElement(Button, {
        className: styles$1.button,
        icon: "left_angle",
        noBackground: true,
        onClick: this.getPrevious
      }) : null, React__default.createElement("div", {
        className: styles$1.templatesWrapper
      }, items.length !== 0 ? items.map(function (item, i) {
        return React__default.createElement("div", {
          style: {
            width: '32%',
            maxWidth: '367px'
          }
        }, React__default.createElement(item.type, _extends_1({}, item.props, {
          key: item.id,
          imageRef: i === 0 ? function (el) {
            _this5.imageElement = el;
          } : null
        })));
      }) : React__default.createElement(DrawerCard, {
        item: {},
        key: "123",
        imageRef: function imageRef(el) {
          _this5.imageElement = el;
        }
      })), isPaged ? React__default.createElement(Button, {
        className: styles$1.button,
        icon: "right_angle",
        noBackground: true,
        onClick: this.getNext
      }) : null), React__default.createElement(DrawerFooter, null, React__default.createElement(Button, {
        onClick: this.closeDrawer,
        isSecondary: true,
        href: footerHref,
        to: footerLink
      }, footerText))));
    }
  }]);

  return Drawer;
}(React.Component);

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  isPaged: PropTypes.bool,
  header: PropTypes.string,
  subheader: PropTypes.string,
  closeTip: PropTypes.string,
  footerText: PropTypes.string,
  footerHref: PropTypes.string,
  footerLink: PropTypes.string,
  getHasNoItems: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
Drawer.defaultProps = {
  isOpen: false,
  isPaged: false,
  header: '',
  subheader: '',
  closeTip: null,
  footerText: null,
  footerHref: null,
  footerLink: null,
  getHasNoItems: function getHasNoItems() {},
  onClose: function onClose() {},
  onOpen: function onOpen() {}
};

module.exports = Drawer;
