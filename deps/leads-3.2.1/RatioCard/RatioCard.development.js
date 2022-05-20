'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var Button = _interopDefault(require('../Button'));
var React = require('react');
var React__default = _interopDefault(React);

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.RatioCard_templateCard__12MWG {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.RatioCard_templateCardActive__3ciys {\n  background-color: #0069ff;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  position: absolute;\n  z-index: 5;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-transition: 1s all ease;\n  transition: 1s all ease;\n}\n\n.RatioCard_templateCardPreview__2N_m1 {\n  position: relative;\n\n  overflow: hidden;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n\n  max-height: 324px;\n\n  -webkit-transition: all 0.2s ease-in-out;\n\n  transition: all 0.2s ease-in-out;\n\n  border-radius: 5px;\n  background: #ffffff;\n\n  -webkit-box-shadow: 0 0 2px 0 rgba(0, 0, 0, .25), 0 1px 3px 0 rgba(0, 0, 0, .2);\n\n          box-shadow: 0 0 2px 0 rgba(0, 0, 0, .25), 0 1px 3px 0 rgba(0, 0, 0, .2)\n}\n\n.RatioCard_templateCardPreview__2N_m1:hover {\n  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 8px 10px 0 rgba(0, 0, 0, .25);\n          box-shadow: 0 0 6px 0 rgba(0, 0, 0, .25), 0 8px 10px 0 rgba(0, 0, 0, .25);\n}\n\n.RatioCard_cardThumbnail__eb4-W {\n  z-index: -1;\n\n  width: 100%;\n}\n\n.RatioCard_overlay__2mxBS {\n  position: absolute;\n  top: 0;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n\n  width: 100%;\n  height: 100%;\n\n  -webkit-transition: opacity 0.4s ease;\n\n  transition: opacity 0.4s ease;\n\n  opacity: 0;\n  background: rgba(254, 254, 254, .8);\n}\n\n.RatioCard_overlayWithOpacity__3SnbZ:hover {\n  opacity: 1;\n}\n\n.RatioCard_overlayButton__2Isa4 {\n  margin-top: 24px;\n}\n\n.RatioCard_overlayContainer__3gk5_ {\n  font-weight: lighter;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n\n  width: 55%;\n  margin: auto;\n}\n\n@media (max-width: 1200px) {\n\n  .RatioCard_overlayContainer__3gk5_ {\n    width: 75%;\n  }\n}\n\n.RatioCard_templateCardTextContainer__1Lm9W {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  position: relative;\n\n  overflow: hidden;\n\n  margin: 12px 0 0;\n\n  text-overflow: ellipsis;\n}\n\n.RatioCard_templateCardText__SRrwW {\n  -webkit-transition: 1s all ease;\n  transition: 1s all ease;\n\n  opacity: 0;\n}\n\n.RatioCard_templateCardText__SRrwW.RatioCard_loaded__32IT9 {\n  opacity: 1;\n}\n\n.RatioCard_cardRatioManager__1JXgg {\n  position: relative;\n\n  width: 100%;\n  padding-bottom: 57%;\n}\n\n.RatioCard_cardRatioContainer__25bm5 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.RatioCard_cardRatioLoadingContainer__1F-pc {\n  position: relative;\n\n  width: 100%;\n  height: 100%;\n\n  background: #ffffff;\n\n  position: absolute;\n  top: 0;\n  z-index: 0;\n  opacity: 1;\n  -webkit-transition: 1s all ease;\n  transition: 1s all ease;\n}\n\n.RatioCard_cardRatioLoadingContainer__1F-pc.RatioCard_loaded__32IT9 {\n  opacity: 0;\n}\n\n@-webkit-keyframes RatioCard_loadingCardAnimation__1bFzy {\n  0% {\n    left: 4%;\n  }\n\n  50% {\n    left: 79%;\n  }\n\n  100% {\n    left: 4%;\n  }\n}\n\n@keyframes RatioCard_loadingCardAnimation__1bFzy {\n  0% {\n    left: 4%;\n  }\n\n  50% {\n    left: 79%;\n  }\n\n  100% {\n    left: 4%;\n  }\n}\n\n.RatioCard_cardRatioLoading__1Kuq8 {\n  position: absolute;\n  height: 100%;\n  width: 49px;\n  top: 0;\n  left: 55px; /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n  background: -webkit-gradient(\n    linear,\n    left top, right top,\n    from(rgba(255, 255, 255, 0)),\n    color-stop(30%, rgba(255, 255, 255, .4)),\n    color-stop(70%, rgba(255, 255, 255, .4)),\n    to(rgba(255, 255, 255, 0))\n  );\n  background: linear-gradient(\n    to right,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(255, 255, 255, .4) 30%,\n    rgba(255, 255, 255, .4) 70%,\n    rgba(255, 255, 255, 0) 100%\n  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgb(0, 255, 255)', endColorstr='rgb(0, 255, 255)',GradientType=1 ); /* IE6-9 */\n  -webkit-animation: RatioCard_loadingCardAnimation__1bFzy 7s infinite;\n  animation: RatioCard_loadingCardAnimation__1bFzy 7s infinite;\n}\n\n.RatioCard_cardRatioLoadingName__3p754 {\n  position: absolute;\n  top: -12px;\n  -webkit-transition: 1s all ease;\n  transition: 1s all ease;\n  opacity: 1;\n}\n\n.RatioCard_cardRatioLoadingName__3p754.RatioCard_loaded__32IT9 {\n  opacity: 0;\n}\n";
var styles = {"templateCard":"RatioCard_templateCard__12MWG","templateCardActive":"RatioCard_templateCardActive__3ciys","templateCardPreview":"RatioCard_templateCardPreview__2N_m1","cardThumbnail":"RatioCard_cardThumbnail__eb4-W","overlay":"RatioCard_overlay__2mxBS","overlayWithOpacity":"RatioCard_overlayWithOpacity__3SnbZ","overlayButton":"RatioCard_overlayButton__2Isa4","overlayContainer":"RatioCard_overlayContainer__3gk5_","templateCardTextContainer":"RatioCard_templateCardTextContainer__1Lm9W","templateCardText":"RatioCard_templateCardText__SRrwW","loaded":"RatioCard_loaded__32IT9","cardRatioManager":"RatioCard_cardRatioManager__1JXgg","cardRatioContainer":"RatioCard_cardRatioContainer__25bm5","cardRatioLoadingContainer":"RatioCard_cardRatioLoadingContainer__1F-pc","cardRatioLoading":"RatioCard_cardRatioLoading__1Kuq8","loadingCardAnimation":"RatioCard_loadingCardAnimation__1bFzy","cardRatioLoadingName":"RatioCard_cardRatioLoadingName__3p754"};
styleInject(css);

var RatioCardLoading = function RatioCardLoading(_ref) {
  var isLoading = _ref.isLoading;
  return React__default.createElement("div", {
    className: "".concat(styles.cardRatioLoadingContainer, " ").concat(isLoading ? '' : styles.loaded)
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 367 207",
    style: {
      opacity: 0.3
    }
  }, React__default.createElement("rect", {
    id: "Rectangle-2-Copy",
    fill: "#E4E7ED",
    x: "0",
    y: "-1",
    width: "367",
    height: "207"
  }), React__default.createElement("rect", {
    id: "Rectangle-23-Copy",
    fill: "#FFFFFF",
    x: "0",
    y: "18",
    width: "367",
    height: "207"
  }), React__default.createElement("path", {
    d: "M183.5,47 L182.548852,46.1419973 C179.173811,43.0777018 176.964693,41.0859097 176.964693,38.6038304 C176.964693,36.5813953 178.529485,35.0186047 180.55451,35.0186047 C181.689751,35.0186047 182.79431,35.5701778 183.5,36.3975376 C184.20569,35.5701778 185.310249,35.0186047 186.44549,35.0186047 C188.470515,35.0186047 190.035307,36.5813953 190.035307,38.6038304 C190.035307,41.0859097 187.826189,43.1083447 184.451148,46.1726402 L183.5,47 Z",
    id: "Favorite/fill-Copy",
    fill: "#B1BACC",
    fillRule: "nonzero"
  }), React__default.createElement("rect", {
    id: "Rectangle-3-Copy",
    fill: "#E4E7ED",
    x: "34.9930233",
    y: "61.4511628",
    width: "297.013953",
    height: "117.781395",
    rx: "3.41395349"
  }), React__default.createElement("rect", {
    id: "Rectangle-3-Copy-3",
    fill: "#B1BACC",
    x: "147.653488",
    y: "145.946512",
    width: "71.6930233",
    height: "17.0697674",
    rx: "8.53488372"
  }), React__default.createElement("rect", {
    id: "Rectangle-3-Copy-4",
    fill: "#FFFFFF",
    x: "84.4953488",
    y: "96.227907",
    width: "198.009302",
    height: "21.3372093",
    rx: "3.41395349"
  }), React__default.createElement("rect", {
    id: "Rectangle-Copy",
    fill: "#B1BACC",
    x: "7.68139535",
    y: "7.68139535",
    width: "4.26744186",
    height: "4.26744186",
    rx: "2.13372093"
  }), React__default.createElement("rect", {
    id: "Rectangle-Copy-2",
    fill: "#B1BACC",
    x: "14.5093023",
    y: "7.68139535",
    width: "4.26744186",
    height: "4.26744186",
    rx: "2.13372093"
  }), React__default.createElement("rect", {
    id: "Rectangle-Copy-3",
    fill: "#B1BACC",
    x: "22.1906977",
    y: "7.68139535",
    width: "4.26744186",
    height: "4.26744186",
    rx: "2.13372093"
  }), React__default.createElement("defs", null, React__default.createElement("polygon", {
    id: "polyclip",
    points: "-242.167,270 -330,270 -90,0 -2.167,0"
  })), React__default.createElement("clipPath", {
    id: "clipper"
  }, React__default.createElement("use", {
    xlinkHref: "#polyclip",
    style: {
      overflow: 'visible'
    }
  })), React__default.createElement("g", {
    style: {
      opacity: 0.5,
      clipPath: 'url(#clipper)'
    }
  }, React__default.createElement("rect", {
    id: "Rectangle-237-Copy",
    fill: "#ffffff",
    x: "0",
    y: "-1",
    width: "367",
    height: "207"
  })), isLoading && React__default.createElement("animateTransform", {
    xlinkHref: "#polyclip",
    attributeName: "transform",
    type: "translate",
    from: "-200 0",
    to: "3200 0",
    begin: "0s",
    dur: "3s",
    repeatCount: "indefinite"
  })));
};
var RatioCardLoadingName = function RatioCardLoadingName(_ref2) {
  var isLoading = _ref2.isLoading;
  return React__default.createElement("div", {
    className: "".concat(styles.cardRatioLoadingName, " ").concat(isLoading ? '' : styles.loaded)
  }, React__default.createElement("svg", {
    width: "367px",
    height: "50px",
    viewBox: "0 0 367 50",
    style: {
      width: '70%',
      margin: '0 auto'
    }
  }, React__default.createElement("rect", {
    id: "Rectangle-2-Copy",
    fill: "#E4E7ED",
    x: "0",
    y: "0",
    width: "367",
    height: "50",
    rx: "3"
  })));
};

var RatioCard =
/*#__PURE__*/
function (_Component) {
  inherits(RatioCard, _Component);

  function RatioCard(props) {
    var _this;

    classCallCheck(this, RatioCard);

    _this = possibleConstructorReturn(this, getPrototypeOf(RatioCard).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleImageLoad", function () {
      _this.setState(function () {
        return {
          imageLoadingStatus: _this.props.isLoading ? 'loading' : 'success'
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleImageError", function () {
      _this.setState(function () {
        return {
          imageLoadingStatus: _this.props.isLoading ? 'loading' : 'error'
        };
      });
    });

    _this.state = {
      imageLoadingStatus: props.isLoading || props.thumbnailFullUrl ? 'loading' : 'error'
    };
    return _this;
  }

  createClass(RatioCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          thumbnailFullUrl = _this$props.thumbnailFullUrl,
          name = _this$props.name,
          imageRef = _this$props.imageRef,
          imageAlt = _this$props.imageAlt,
          isActive = _this$props.isActive,
          onClick = _this$props.onClick,
          children = _this$props.children,
          primary = _this$props.primary,
          secondary = _this$props.secondary;
      return React__default.createElement("div", {
        className: styles.templateCard
      }, React__default.createElement("div", {
        className: styles.templateCardPreview
      }, React__default.createElement("div", {
        className: styles.cardRatioManager
      }, isActive && React__default.createElement("div", {
        className: styles.templateCardActive,
        "data-qa-selector": "active-indicator"
      }), React__default.createElement("div", {
        className: styles.cardRatioContainer
      }, React__default.createElement(RatioCardLoading, {
        isLoading: this.state.imageLoadingStatus !== 'success'
      }), React__default.createElement("img", {
        ref: imageRef,
        className: styles.cardThumbnail,
        src: thumbnailFullUrl,
        alt: imageAlt || name,
        onLoad: this.handleImageLoad,
        onError: this.handleImageError,
        "data-qa-selector": "thumbnail-image"
      })), this.state.imageLoadingStatus !== 'loading' && React__default.createElement("div", {
        "data-qa-selector": "image-overlay",
        role: onClick ? 'button' : undefined,
        tabIndex: onClick ? 0 : undefined,
        onClick: onClick || undefined,
        className: classNames(styles.overlay, defineProperty({}, styles.overlayWithOpacity, !!(primary || secondary || children)))
      }, React__default.createElement("div", {
        className: styles.overlayContainer
      }, !!children && children, !children && primary && React__default.createElement(Button, {
        "data-qa-selector": "overlay-button-primary",
        href: primary.href,
        to: primary.to,
        onClick: primary.onClick
      }, primary.text), !children && secondary && React__default.createElement(Button, {
        "data-qa-selector": "overlay-button-secondary",
        className: primary ? styles.overlayButton : '',
        isSecondary: true,
        href: secondary.href,
        to: secondary.to,
        onClick: secondary.onClick
      }, secondary.text))))), React__default.createElement("div", {
        className: styles.templateCardTextContainer
      }, React__default.createElement(RatioCardLoadingName, {
        isLoading: this.state.imageLoadingStatus === 'loading'
      }), React__default.createElement("div", {
        className: "".concat(styles.templateCardText, " ").concat(this.state.imageLoadingStatus === 'loading' ? '' : styles.loaded)
      }, name || '')));
    }
  }]);

  return RatioCard;
}(React.Component);

RatioCard.propTypes = {
  thumbnailFullUrl: PropTypes.string,
  name: PropTypes.string,
  isLoading: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  imageRef: PropTypes.func,
  imageAlt: PropTypes.string,
  primary: PropTypes.shape({
    text: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func
  }),
  secondary: PropTypes.shape({
    text: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func
  }),
  children: PropTypes.node
};
RatioCard.defaultProps = {
  onClick: null,
  thumbnailFullUrl: '',
  name: '',
  isLoading: false,
  isActive: false,
  primary: null,
  secondary: null,
  imageRef: function imageRef() {},
  imageAlt: '',
  children: null
};

module.exports = RatioCard;
