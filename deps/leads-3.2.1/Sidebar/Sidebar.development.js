'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var TransitionGroup = _interopDefault(require('react-transition-group/TransitionGroup'));
var anime = _interopDefault(require('animejs'));
var Button = _interopDefault(require('../Button'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Sidebar_sidebar__3RxO3 {\n  position: fixed;\n  z-index: 4000;\n  top: 0;\n  right: 0;\n  bottom: 0;\n\n  overflow: hidden;\n\n  width: 461px;\n\n  -webkit-transform: translateX(100%) translateX(12px);\n\n          transform: translateX(100%) translateX(12px);\n\n  background-color: white;\n  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .25), 0 12px 18px 0 rgba(0, 0, 0, .3);\n          box-shadow: 0 0 10px 0 rgba(0, 0, 0, .25), 0 12px 18px 0 rgba(0, 0, 0, .3);\n}\n\n.Sidebar_sidebarContent__svdzn {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n\n  width: 415px;\n\n  -webkit-transform: translateX(0%);\n\n          transform: translateX(0%);\n}\n\n.Sidebar_header__3eO51 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n\n  height: 72px;\n  padding: 0 24px;\n\n  border-bottom: 1px solid rgba(177, 186, 204, .4);\n\n  -webkit-box-align: center;\n  -webkit-box-pack: justify;/* stylelint-disable-line */\n}\n\n.Sidebar_goBack__2JKbX {\n  margin-right: 12px;\n\n  cursor: pointer;\n}\n\n.Sidebar_title__3M4ac {\n  -ms-flex: 1 1 50%;\n      flex: 1 1 50%;\n  -webkit-box-flex: 1;\n}\n\n.Sidebar_goBack__2JKbX,\n.Sidebar_mainTitle__12p5d,\n.Sidebar_title__3M4ac {\n  font-family: 'Akkurat';\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n}\n\n.Sidebar_mainTitle__12p5d {\n  -ms-flex: 1 1 50%;\n      flex: 1 1 50%;\n  -webkit-box-flex: 1;\n}\n\n.Sidebar_subtitle__1vj5t {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  -ms-flex: 1 1 50%;\n\n      flex: 1 1 50%;\n\n  -webkit-box-flex: 1;\n}\n\n.Sidebar_contentConatiner__2ftl9 {\n  position: relative;\n\n  height: calc(100% - 72px);\n\n  background-color: #f2f4f7;\n}\n\n.Sidebar_contentArea__1h215 {\n  height: 100%;\n}\n\n.Sidebar_content__3Yobp {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: scroll;\n}\n";
var styles = {"sidebar":"Sidebar_sidebar__3RxO3","sidebarContent":"Sidebar_sidebarContent__svdzn","header":"Sidebar_header__3eO51","goBack":"Sidebar_goBack__2JKbX","title":"Sidebar_title__3M4ac","mainTitle":"Sidebar_mainTitle__12p5d","subtitle":"Sidebar_subtitle__1vj5t","contentConatiner":"Sidebar_contentConatiner__2ftl9","contentArea":"Sidebar_contentArea__1h215","content":"Sidebar_content__3Yobp"};
styleInject(css);

var animateSidebarIn = function animateSidebarIn(sidebar, sidebarContent) {
  anime.timeline().add({
    targets: sidebar,
    offset: 0,
    translateX: [{
      value: '100%',
      duration: 0,
      elasticity: 0
    }, {
      value: '10%',
      duration: 500,
      delay: 0,
      elasticity: 0
    }],
    scaleX: [{
      value: 1.05,
      duration: 50,
      delay: 50,
      easing: 'easeOutExpo'
    }, {
      value: 1,
      duration: 450,
      elasticity: 0
    }],
    zIndex: [{
      value: 4001,
      duration: 0
    }, {
      value: 4001,
      duration: 400
    }]
  }).add({
    targets: sidebarContent,
    offset: 0,
    translateX: [{
      value: '10%',
      duration: 0,
      elasticity: 0
    }, {
      value: '0%',
      duration: 500,
      delay: 0,
      elasticity: 0
    }],
    scaleX: [{
      value: 1,
      duration: 50,
      delay: 50,
      easing: 'easeOutExpo'
    }, {
      value: 1,
      duration: 450,
      elasticity: 0
    }]
  });
};

var animateSidebarOut = function animateSidebarOut(sidebar, callback) {
  anime({
    targets: sidebar,
    direction: 'reverse',
    translateX: [{
      value: '100%',
      duration: 0,
      elasticity: 0
    }, {
      value: '10%',
      duration: 400,
      delay: 0,
      elasticity: 0
    }],
    scaleX: [{
      value: 1.05,
      duration: 50,
      delay: 50,
      easing: 'easeOutExpo'
    }, {
      value: 1,
      duration: 350,
      elasticity: 0
    }],
    zIndex: [{
      value: 3999,
      duration: 0
    }, {
      value: 3999,
      duration: 400
    }],
    complete: callback
  });
};

var Sidebar =
/*#__PURE__*/
function (_Component) {
  inherits(Sidebar, _Component);

  function Sidebar() {
    classCallCheck(this, Sidebar);

    return possibleConstructorReturn(this, getPrototypeOf(Sidebar).apply(this, arguments));
  }

  createClass(Sidebar, [{
    key: "componentDidAppear",
    value: function componentDidAppear() {
      animateSidebarIn(this.sidebar, this.sidebarContent);
    }
  }, {
    key: "componentDidEnter",
    value: function componentDidEnter() {
      animateSidebarIn(this.sidebar, this.sidebarContent);
    }
  }, {
    key: "componentWillLeave",
    value: function componentWillLeave(callback) {
      animateSidebarOut(this.sidebar, callback);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return React__default.createElement("div", {
        ref: function ref(sidebar) {
          _this.sidebar = sidebar;
        },
        className: classNames(className, "".concat(styles.sidebar))
      }, React__default.createElement("div", {
        className: classNames(className, "".concat(styles.sidebarContent)),
        ref: function ref(sidebarContent) {
          _this.sidebarContent = sidebarContent;
        }
      }, children));
    }
  }]);

  return Sidebar;
}(React.Component);

var AnimatedSidebar = function AnimatedSidebar(props) {
  return React__default.createElement(TransitionGroup, {
    component: "div"
  }, props.isOpen ? React__default.createElement(Sidebar, props) : null);
};

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
AnimatedSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
Sidebar.defaultProps = {
  className: '',
  isOpen: false,
  children: null
};

var SidebarHeader = function SidebarHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      onClose = _ref.onClose,
      onGoBack = _ref.onGoBack,
      children = _ref.children,
      className = _ref.className;
  return React__default.createElement("div", {
    className: classNames(styles.header, className)
  }, !onGoBack ? null : React__default.createElement("div", {
    tabIndex: "0",
    role: "link",
    onClick: onGoBack,
    className: styles.goBack
  }, "<"), React__default.createElement("div", {
    className: styles.title
  }, React__default.createElement("div", {
    className: styles.mainTitle
  }, title), React__default.createElement("div", {
    className: styles.subtitle
  }, subtitle)), onClose && React__default.createElement(Button, {
    className: styles.closeIcon,
    icon: "close",
    noBackground: true,
    onClick: function onClick() {
      onClose();
    }
  }), children);
};

SidebarHeader.propTypes = {
  onClose: PropTypes.func,
  onGoBack: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
SidebarHeader.defaultProps = {
  onGoBack: null,
  title: '',
  subtitle: '',
  children: null,
  onClose: null
};

var SidebarContent = function SidebarContent(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React__default.createElement("div", {
    className: styles.contentConatiner
  }, React__default.createElement("div", {
    className: styles.contentArea
  }, React__default.createElement("div", {
    className: classNames("".concat(styles.content), className)
  }, children)));
};

SidebarContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
SidebarContent.defaultProps = {
  className: '',
  children: null
};

exports.default = AnimatedSidebar;
exports.SidebarHeader = SidebarHeader;
exports.SidebarContent = SidebarContent;
