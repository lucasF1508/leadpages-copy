'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

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

var StickyWrapper =
/*#__PURE__*/
function (_Component) {
  inherits(StickyWrapper, _Component);

  function StickyWrapper(props) {
    var _this;

    classCallCheck(this, StickyWrapper);

    _this = possibleConstructorReturn(this, getPrototypeOf(StickyWrapper).call(this, props));
    _this.lockOnScroll = _this.lockOnScroll.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.state = {
      isStuckOnTop: false,
      isScrollingDown: false,
      previousTop: 0
    };
    return _this;
  }

  createClass(StickyWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.lockOnScroll, true);
      window.addEventListener('resize', this.lockOnScroll, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.lockOnScroll, true);
      window.removeEventListener('resize', this.lockOnScroll, true);
    }
  }, {
    key: "lockOnScroll",
    value: function lockOnScroll(event) {
      var _this2 = this;

      window.requestAnimationFrame(function () {
        var currentTop = _this2.scrollLockContainer.getBoundingClientRect().top;

        var isStuckOnTop = currentTop < 1 + _this2.props.offsetStickTrigger;
        var isScrollingDown = _this2.state.isScrollingDown;

        if (event.type === 'scroll') {
          isScrollingDown = _this2.state.previousTop < currentTop;
        }

        if (_this2.props.setIsStuck && _this2.state.isStuckOnTop !== isStuckOnTop) {
          _this2.props.setIsStuck(isStuckOnTop);
        }

        if (_this2.props.setIsScrollingDown && _this2.state.isScrollingDown !== isScrollingDown) {
          _this2.props.setIsScrollingDown(isScrollingDown);
        }

        _this2.setState(function () {
          return {
            isStuckOnTop: isStuckOnTop,
            isScrollingDown: isScrollingDown,
            previousTop: currentTop
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var isStuckOnTop = this.state.isStuckOnTop;
      return React__default.createElement("div", {
        ref: function ref(scrollLockParent) {
          _this3.scrollLockParent = scrollLockParent;
        },
        style: {
          position: 'relative',
          zIndex: isStuckOnTop ? '3500' : 'initial',
          height: this.props.height,
          width: '100%'
        }
      }, React__default.createElement("div", {
        ref: function ref(scrollLockContainer) {
          _this3.scrollLockContainer = scrollLockContainer;
        }
      }), React__default.createElement("div", {
        style: !this.state.isStuckOnTop ? {
          transition: 'all 200ms ease-in'
        } : {
          position: 'fixed',
          transition: 'all 200ms ease-in',
          top: this.props.topWhenStuck,
          width: "".concat(this.scrollLockParent.offsetWidth, "px")
        }
      }, this.props.children));
    }
  }]);

  return StickyWrapper;
}(React.Component);

StickyWrapper.propTypes = {
  setIsStuck: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  setIsScrollingDown: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  height: PropTypes.string,
  topWhenStuck: PropTypes.string,
  offsetStickTrigger: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired
};
StickyWrapper.defaultProps = {
  height: '72px',
  topWhenStuck: '0px',
  offsetStickTrigger: 0,
  setIsStuck: false,
  setIsScrollingDown: false
};

module.exports = StickyWrapper;
