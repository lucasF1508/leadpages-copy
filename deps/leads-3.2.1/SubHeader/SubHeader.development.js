'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var StickyWrapper = _interopDefault(require('../StickyWrapper'));

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

var css = ".SubHeader_subHeader__1ddIz {\n  height: 60px;\n\n  -webkit-transition: -webkit-box-shadow 0.35s ease-in-out;\n\n  transition: -webkit-box-shadow 0.35s ease-in-out;\n\n  transition: box-shadow 0.35s ease-in-out;\n\n  transition: box-shadow 0.35s ease-in-out, -webkit-box-shadow 0.35s ease-in-out;\n\n  background: #f2f4f7\n}\n.SubHeader_subHeader__1ddIz.SubHeader_stuck__cSJhB {\n  -webkit-box-shadow: 0 4px 6px 0 rgba(0, 0, 0, .12);\n          box-shadow: 0 4px 6px 0 rgba(0, 0, 0, .12);\n}\n.SubHeader_childrenContainer__39dEO {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n\n  max-width: 1175px;\n  height: 100%;\n  margin: 0 auto;\n}\n.SubHeader_main__3NdiC a {\n  color: #797f89;\n}\n";
var styles = {"subHeader":"SubHeader_subHeader__1ddIz","stuck":"SubHeader_stuck__cSJhB","childrenContainer":"SubHeader_childrenContainer__39dEO","main":"SubHeader_main__3NdiC"};
styleInject(css);

var SubHeader =
/*#__PURE__*/
function (_Component) {
  inherits(SubHeader, _Component);

  function SubHeader(props) {
    var _this;

    classCallCheck(this, SubHeader);

    _this = possibleConstructorReturn(this, getPrototypeOf(SubHeader).call(this, props));
    _this.setIsStuck = _this.setIsStuck.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.setIsScrollingDown = _this.setIsScrollingDown.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.state = {
      isStuck: false,
      isScrollingDown: false
    };
    return _this;
  }

  createClass(SubHeader, [{
    key: "setIsStuck",
    value: function setIsStuck(isStuck) {
      this.setState(function () {
        return {
          isStuck: isStuck
        };
      });
    }
  }, {
    key: "setIsScrollingDown",
    value: function setIsScrollingDown(isScrollingDown) {
      this.setState(function () {
        return {
          isScrollingDown: isScrollingDown
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var height = '60px';
      var topWhenStuck = '0px'; // let topWhenStuck = '-72px';

      var offsetStickTrigger = 0;

      if (this.state.isStuck) {
        offsetStickTrigger = 72;
        height = '72px';

        if (this.state.isScrollingDown) {
          topWhenStuck = '72px';
          offsetStickTrigger = 72;
        }
      }

      return React__default.createElement(StickyWrapper, {
        setIsStuck: this.setIsStuck,
        setIsScrollingDown: this.setIsScrollingDown,
        height: height,
        topWhenStuck: topWhenStuck,
        offsetStickTrigger: offsetStickTrigger
      }, React__default.createElement("div", {
        style: {
          height: height
        },
        className: classNames(this.props.className, styles.subHeader, defineProperty({}, "".concat(styles.stuck), this.state.isStuck))
      }, React__default.createElement("div", {
        className: classNames(this.props.childContainerClassName, styles.childrenContainer)
      }, this.props.children)));
    }
  }]);

  return SubHeader;
}(React.Component);

defineProperty(SubHeader, "displayName", 'SubHeader');

defineProperty(SubHeader, "propTypes", {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  className: PropTypes.string,
  childContainerClassName: PropTypes.string
});

defineProperty(SubHeader, "defaultProps", {
  children: null,
  className: null,
  childContainerClassName: null
});
var SubHeaderMain = function SubHeaderMain(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React__default.createElement("div", {
    className: classNames(className, styles.main)
  }, children);
};
SubHeaderMain.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string
};
SubHeaderMain.defaultProps = {
  className: null
};
var SubHeaderControls = function SubHeaderControls(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return React__default.createElement("div", {
    className: className
  }, children);
};
SubHeaderControls.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string
};
SubHeaderControls.defaultProps = {
  className: null
};

exports.default = SubHeader;
exports.SubHeaderMain = SubHeaderMain;
exports.SubHeaderControls = SubHeaderControls;
