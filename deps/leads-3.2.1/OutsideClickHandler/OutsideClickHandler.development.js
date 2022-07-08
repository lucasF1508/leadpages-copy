'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
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

var propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  onOutsideClick: PropTypes.func,
  ele: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.object])
};
var defaultProps = {
  children: React.createElement("span", null),
  onOutsideClick: function onOutsideClick() {},
  ele: null
};

var OutsideClickHandler =
/*#__PURE__*/
function (_React$Component) {
  inherits(OutsideClickHandler, _React$Component);

  function OutsideClickHandler(props) {
    var _this;

    classCallCheck(this, OutsideClickHandler);

    _this = possibleConstructorReturn(this, getPrototypeOf(OutsideClickHandler).call(this, props));
    _this.onOutsideClick = _this.onOutsideClick.bind(assertThisInitialized(assertThisInitialized(_this)));
    return _this;
  }

  createClass(OutsideClickHandler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // `capture` flag is set to true so that a `stopPropagation` in the children
      // will not prevent all outside click handlers from firing - maja
      // this.props.ele, ios safari does not bind events to document or document.body
      var ele = this.props.ele;

      if (!ele) {
        ele = document;
      }

      ele.addEventListener('click', this.onOutsideClick, {
        capture: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var ele = this.props.ele;

      if (!ele) {
        ele = document;
      }

      ele.removeEventListener('click', this.onOutsideClick, {
        capture: true
      });
    }
  }, {
    key: "onOutsideClick",
    value: function onOutsideClick(e) {
      var isDescendantOfRoot = this.childNode.contains(e.target);

      if (!isDescendantOfRoot) {
        this.props.onOutsideClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        ref: function ref(_ref) {
          _this2.childNode = _ref;
        }
      }, this.props.children);
    }
  }]);

  return OutsideClickHandler;
}(React.Component);
OutsideClickHandler.propTypes = propTypes;
OutsideClickHandler.defaultProps = defaultProps;

module.exports = OutsideClickHandler;
