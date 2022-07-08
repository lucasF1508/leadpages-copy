'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');
var Theme = require('../Theme');

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

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

function _templateObject11() {
  var data = taggedTemplateLiteral(["\n  ", " right: 100%;\n\n  &::after {\n    left: 14px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = taggedTemplateLiteral(["\n  ", " left: calc(125% + 15px);\n  transform: translateY(-50%);\n\n  &.is-visible {\n    ", " left: calc(100% + 15px);\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = taggedTemplateLiteral(["\n  ", " left: 100%;\n\n  &::after {\n    left: -6px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = taggedTemplateLiteral(["\n  ", " top: 50%;\n  right: calc(125% + 15px);\n\n  &.is-visible {\n    right: calc(100% + 15px);\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral(["\n  ", " bottom: 100%;\n\n  &::after {\n    top: 14px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral(["\n  ", " top: calc(125% + 20px);\n\n  &.is-visible {\n    ", " top: calc(100% + 15px);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  ", " top: 100%;\n\n  &::after {\n    top: -6px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  ", " bottom: calc(125% + 20px);\n\n  &.is-visible {\n    ", " bottom: calc(100% + 15px);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n\n  overflow: hidden;\n\n  &::after {\n    position: absolute;\n\n    width: 12px;\n    height: 12px;\n\n    content: '';\n\n    transform-origin: 50% 50%;\n\n    background: #ffffff;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1000;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 11px 20px;\n\n  white-space: nowrap;\n\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: ", ";\n\n  transition: opacity 0.3s ease;\n\n  opacity: 0;\n  visibility: hidden;\n\n  &.is-hoverable {\n    pointer-events: none;\n  }\n\n  &.is-visible {\n    opacity: 1;\n    visibility: visible;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  cursor: default;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var supportContent = Theme.typographyDefs.supportContent;
var tooltipClassName = emotion.css(_templateObject());
var tipStyles = emotion.css(_templateObject2(), Theme.shadows.l3);
var tipClassName = emotion.css(supportContent, tipStyles);
var arrowClassName = emotion.css(_templateObject3());
var topBottomTipStyle = "\n  left: 50%;\n\n  transform: translateX(-50%);\n";
var topBottomArrowStyle = "\n  left: 50%;\n\n  width: 40px;\n  height: 20px;\n\n  transform: translateX(-50%);\n\n  &::after {\n    left: 50%;\n\n    transform: translateX(-50%) rotate(45deg);\n\n    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25),\n      5px 5px 10px 0 rgba(0, 0, 0, 0.2);\n  }\n";
var topTipClassName = emotion.css(_templateObject4(), topBottomTipStyle, topBottomTipStyle);
var topArrowClassName = emotion.css(_templateObject5(), topBottomArrowStyle);
var bottomTipClassName = emotion.css(_templateObject6(), topBottomTipStyle, topBottomTipStyle);
var bottomArrowClassName = emotion.css(_templateObject7(), topBottomArrowStyle);
var leftRightTipStyle = "\n  top: 50%;\n\n  transform: translateY(-50%);\n";
var leftRightArrowStyle = "\n  top: 50%;\n\n  width: 20px;\n  height: 40px;\n\n  transform: translateY(-50%);\n\n  &::after {\n    top: 50%;\n\n    transform: translateY(-50%) rotate(45deg);\n\n    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);\n  }\n";
var leftTipClassName = emotion.css(_templateObject8(), leftRightTipStyle);
var leftArrowClassName = emotion.css(_templateObject9(), leftRightArrowStyle);
var rightTipClassName = emotion.css(_templateObject10(), leftRightTipStyle, leftRightTipStyle);
var rightArrowClassName = emotion.css(_templateObject11(), leftRightArrowStyle);

var bool = PropTypes.bool,
    node = PropTypes.node,
    string = PropTypes.string;

var Tooltip = function Tooltip(_ref) {
  var _cx, _cx2;

  var children = _ref.children,
      className = _ref.className,
      tipClassName$$1 = _ref.tipClassName,
      arrowClassName$$1 = _ref.arrowClassName,
      tip = _ref.tip,
      left = _ref.left,
      top = _ref.top,
      bottom = _ref.bottom,
      right = _ref.right,
      hover = _ref.hover,
      hidden = _ref.hidden,
      isDiv = _ref.isDiv,
      withArrow = _ref.withArrow,
      rest = objectWithoutProperties(_ref, ["children", "className", "tipClassName", "arrowClassName", "tip", "left", "top", "bottom", "right", "hover", "hidden", "isDiv", "withArrow"]);

  var tooltipAnchor = React.useRef(null);

  var _useState = React.useState(!hover && !hidden),
      _useState2 = slicedToArray(_useState, 2),
      tooltipHovered = _useState2[0],
      settooltipHovered = _useState2[1];

  if ("development" !== 'production' && (top && right || top && bottom || top && left || right && bottom || right && left || bottom && left)) {
    console.error('Tooltip has to many directions defined');
  }

  var showTooltip = function showTooltip() {
    return settooltipHovered(true);
  };

  var hideTooltip = function hideTooltip() {
    return settooltipHovered(false);
  };

  React.useEffect(function () {
    if (tooltipAnchor.current && hover) {
      tooltipAnchor.current.addEventListener('mouseenter', showTooltip);
      tooltipAnchor.current.addEventListener('mouseleave', hideTooltip);
    }

    return function () {
      if (tooltipAnchor.current && hover) {
        tooltipAnchor.current.removeEventListener('mouseenter', showTooltip);
        tooltipAnchor.current.removeEventListener('mouseleave', hideTooltip);
      }
    };
  }, [hover]);
  var classes = emotion.cx(tooltipClassName, {
    left: left,
    top: top || !top && !bottom && !right && !left,
    bottom: bottom,
    right: right
  }, className);
  var tipClasses = emotion.cx('tip', tipClassName, (_cx = {
    'is-hoverable': !!hover,
    'is-visible': !hidden && (tooltipHovered || !hover)
  }, defineProperty(_cx, leftTipClassName, left), defineProperty(_cx, topTipClassName, top || !top && !bottom && !right && !left), defineProperty(_cx, bottomTipClassName, bottom), defineProperty(_cx, rightTipClassName, right), _cx), tipClassName$$1);
  var arrowClasses = emotion.cx(arrowClassName, (_cx2 = {}, defineProperty(_cx2, leftArrowClassName, left), defineProperty(_cx2, topArrowClassName, top || !top && !bottom && !right && !left), defineProperty(_cx2, bottomArrowClassName, bottom), defineProperty(_cx2, rightArrowClassName, right), _cx2), arrowClassName$$1);
  var TooltipComponent = isDiv ? 'div' : 'span';
  return React__default.createElement(TooltipComponent, {
    className: classes
  }, React__default.createElement("div", {
    className: tipClasses
  }, tip, withArrow && React__default.createElement("div", {
    className: arrowClasses
  })), React__default.createElement("span", _extends_1({
    className: "tooltip-anchor",
    "data-qa-selector": "tooltip-anchor",
    ref: tooltipAnchor
  }, rest), children));
};

Tooltip.propTypes = {
  bottom: bool,
  children: node,
  className: string,
  tipClassName: string,
  arrowClassName: string,
  hidden: bool,
  hover: bool,
  isDiv: bool,
  left: bool,
  right: bool,
  tip: node,
  top: bool,
  withArrow: bool
};
Tooltip.defaultProps = {
  bottom: false,
  children: null,
  className: '',
  tipClassName: '',
  arrowClassName: '',
  hidden: false,
  hover: true,
  isDiv: false,
  left: false,
  right: false,
  tip: null,
  top: false,
  withArrow: true
};

module.exports = Tooltip;
