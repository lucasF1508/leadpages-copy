'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');
var Theme = require('../Theme');
var CardListItem = _interopDefault(require('../CardListItem'));

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

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

function _templateObject7() {
  var data = taggedTemplateLiteral(["\n                z-index: 2;\n              "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral(["\n    top: ", "px;\n    left: ", "px;\n    display: inherit;\n    visibility: visible;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n    position: absolute;\n    z-index: 10;\n    visibility: hidden;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n    width: ", "px;\n    height: ", "px;\n    position: absolute;\n    top: 0;\n    left: 0;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n    &.active {\n      z-index: 2;\n    }\n    &:hover,\n    &.active {\n      transform: scale(1.22);\n      box-shadow: ", ";\n    }\n\n    &:hover {\n      z-index: 3;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n    width: ", "px;\n    height: ", "px;\n    text-align: center;\n    margin: ", "px;\n    visibility: visible;\n    z-index: 2;\n    overflow: visible;\n    transition: all 0.1s ease-in;\n    position: relative;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  background-color: #fff;\n  position: relative;\n  box-sizing: content-box;\n  flex-wrap: wrap;\n  margin: 0px auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var defaultClassName = emotion.css(_templateObject());

var getLabelCss = function getLabelCss(itemMargin) {
  return emotion.css(Theme.typographyDefs.bodyHeading, "\n    margin-bottom: 20px;\n    margin-left: ".concat(itemMargin, "px;\n    width: 100%;\n  "));
};

var getCardItemCss = function getCardItemCss(itemSize, itemMargin) {
  return emotion.css(_templateObject2(), itemSize, itemSize, itemMargin);
};

var getCardItemHoverCss = function getCardItemHoverCss() {
  return emotion.css(_templateObject3(), Theme.shadows.l1);
};

var getCardItemRefCss = function getCardItemRefCss(itemSize) {
  return emotion.css(_templateObject4(), itemSize, itemSize);
};

var getTooltipCss = function getTooltipCss() {
  return emotion.css(_templateObject5());
};

var getActiveTooltipCss = function getActiveTooltipCss(activeBounds) {
  if (!activeBounds) {
    return null;
  }

  return emotion.css(_templateObject6(), activeBounds.top, activeBounds.left);
};

var CardList =
/*#__PURE__*/
function (_Component) {
  inherits(CardList, _Component);

  function CardList(props) {
    var _this;

    classCallCheck(this, CardList);

    _this = possibleConstructorReturn(this, getPrototypeOf(CardList).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "displayName", 'CardList');

    _this.cardRefs = {};
    return _this;
  }

  createClass(CardList, [{
    key: "getActiveCardBounds",
    value: function getActiveCardBounds() {
      if (!this.cardListRef || !this.tooltipRef) {
        return null;
      }

      var _this$props = this.props,
          activeItem = _this$props.activeItem,
          itemSize = _this$props.itemSize;

      if (!activeItem && activeItem !== 0 || !this.cardRefs[activeItem]) {
        return null;
      }

      var cardListBounds = this.cardListRef.getBoundingClientRect();
      var tooltipBounds = this.tooltipRef.getBoundingClientRect();
      var bounds = this.cardRefs[activeItem].getBoundingClientRect();
      var width = bounds.width,
          height = bounds.height,
          left = bounds.left,
          top = bounds.top; // add item card does not have the CSS transform, adjust left position accordingly

      if (Math.round(width) === itemSize) {
        width = width * 1.22;
        left = left - itemSize * 0.11;
      } // add item card does not have the CSS transform, adjust top position accordingly


      if (Math.round(height) === itemSize) {
        height = height * 1.22;
        top = top - itemSize * 0.11;
      } // position relative to parent container top


      top = top + height - cardListBounds.top; // position relative to parent container width

      left = left - cardListBounds.left; // center tooltip position using tooltip width

      left = left - (tooltipBounds.width - width) / 2;
      return {
        left: left,
        top: top
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          CardListComponent = _this$props2.component,
          addItem = _this$props2.addItem,
          setActiveItem = _this$props2.setActiveItem,
          _removeItem = _this$props2.removeItem,
          activeItem = _this$props2.activeItem,
          items = _this$props2.items,
          itemMargin = _this$props2.itemMargin,
          itemSize = _this$props2.itemSize,
          label = _this$props2.label,
          props = objectWithoutProperties(_this$props2, ["children", "className", "component", "addItem", "setActiveItem", "removeItem", "activeItem", "items", "itemMargin", "itemSize", "label"]);

      var cardItemCss = getCardItemCss(itemSize, itemMargin);
      var cardItemHoverCss = getCardItemHoverCss();
      var cardItemRefCss = getCardItemRefCss(itemSize);
      var labelCss = getLabelCss(itemMargin);
      var activeCardBounds = null;
      var tooltipCss = null;
      var activeTooltipCss = null;

      if (children) {
        activeCardBounds = this.getActiveCardBounds();
        tooltipCss = getTooltipCss();
        activeTooltipCss = getActiveTooltipCss(activeCardBounds);
      }

      return React__default.createElement(CardListComponent, _extends_1({
        className: emotion.cx(className, defaultClassName)
      }, props, {
        ref: function ref(item) {
          return _this2.cardListRef = item;
        }
      }), label && React__default.createElement("div", {
        "data-qa-selector": "card-list-label",
        className: labelCss
      }, label), items.map(function (item, index) {
        return React__default.createElement(CardListItem, {
          key: index,
          removeItem: function removeItem() {
            return _removeItem(index);
          },
          onClick: function onClick() {
            return setActiveItem(index);
          },
          className: emotion.cx(cardItemCss, cardItemHoverCss, activeItem === index && 'active')
        }, item, React__default.createElement("div", {
          className: emotion.cx(cardItemRefCss),
          ref: function ref(item) {
            return _this2.cardRefs[index] = item;
          }
        }));
      }), addItem && React__default.createElement(CardListItem, {
        isAddItem: true,
        onClick: addItem,
        className: emotion.cx(cardItemCss, emotion.css(_templateObject7()))
      }, React__default.createElement("div", {
        className: emotion.cx(cardItemRefCss),
        ref: function ref(item) {
          return _this2.cardRefs[items.length] = item;
        }
      })), children && React__default.createElement("div", {
        ref: function ref(item) {
          return _this2.tooltipRef = item;
        },
        "data-qa-selector": "card-list-tooltip",
        className: emotion.cx(tooltipCss, activeTooltipCss)
      }, children), React__default.createElement("div", {
        role: "button",
        tabIndex: "0",
        style: {
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "".concat(activeItem || activeItem === 0 ? 'block' : 'none')
        },
        onClick: function onClick() {
          setActiveItem(null);
        }
      }));
    }
  }]);

  return CardList;
}(React.Component);
CardList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  addItem: PropTypes.func,
  setActiveItem: PropTypes.func,
  removeItem: PropTypes.func,
  activeItem: PropTypes.number,
  items: PropTypes.array,
  itemMargin: PropTypes.number,
  itemSize: PropTypes.number.isRequired,
  label: PropTypes.string
};
CardList.defaultProps = {
  children: null,
  className: '',
  component: 'div',
  addItem: null,
  setActiveItem: null,
  removeItem: null,
  activeItem: null,
  items: [],
  itemMargin: 8,
  label: ''
};

module.exports = CardList;
