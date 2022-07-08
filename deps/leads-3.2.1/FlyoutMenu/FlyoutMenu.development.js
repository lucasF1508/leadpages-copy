'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');
var Tooltip = _interopDefault(require('../Tooltip'));
var OutsideClickHandler = _interopDefault(require('../OutsideClickHandler'));

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

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var flyoutMenuClassName = emotion.css(_templateObject());

var FlyoutMenu = function FlyoutMenu(_ref) {
  var options = _ref.options,
      onClickOutside = _ref.onClickOutside,
      isOpen = _ref.isOpen,
      children = _ref.children,
      className = _ref.className,
      tooltipClassName = _ref.tooltipClassName,
      toolTipArrowClassName = _ref.toolTipArrowClassName,
      toolTipBodyClassName = _ref.toolTipBodyClassName;
  var flyoutRef = React.useRef();

  var _useState = React.useState({
    top: false,
    left: false,
    right: false
  }),
      _useState2 = slicedToArray(_useState, 2),
      forceDirection = _useState2[0],
      updateForceDirection = _useState2[1];

  React.useEffect(function () {
    var tipDom = flyoutRef.current.querySelector('.tip');
    var tipAnchorDom = flyoutRef.current.querySelector('.tooltip-anchor');
    if (!tipDom || !tipAnchorDom) return;
    var anchorBounds = tipAnchorDom.getBoundingClientRect();
    var tipBounds = tipDom.getBoundingClientRect();
    var updatedForceDirection = {
      top: false,
      left: false,
      right: false
    };

    if (anchorBounds.bottom + tipBounds.height > window.innerHeight) {
      updatedForceDirection = {
        top: true,
        left: false,
        right: false
      };
    } else if (anchorBounds.right + tipBounds.width > window.innerWidth) {
      updatedForceDirection = {
        top: false,
        left: true,
        right: false
      };
    } else if (anchorBounds.left + tipBounds.width < 0) {
      updatedForceDirection = {
        top: false,
        left: false,
        right: true
      };
    }

    updateForceDirection(updatedForceDirection);
  }, [isOpen]);
  var isTop = forceDirection.top;
  var isLeft = forceDirection.left;
  var isRight = forceDirection.right;
  var isBottom = !isTop && !isLeft && !isRight;
  return React__default.createElement("div", {
    ref: flyoutRef,
    className: emotion.cx(flyoutMenuClassName, className)
  }, React__default.createElement(OutsideClickHandler, {
    onOutsideClick: onClickOutside
  }, React__default.createElement(Tooltip, {
    arrowClassName: toolTipArrowClassName,
    className: tooltipClassName,
    hidden: !isOpen,
    hover: false,
    bottom: isBottom,
    top: isTop,
    left: isLeft,
    right: isRight,
    tip: options,
    tipClassName: toolTipBodyClassName
  }, children)));
};

FlyoutMenu.displayname = 'FlyoutMenu';
FlyoutMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  options: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClickOutside: PropTypes.func,
  toolTipClassName: PropTypes.string,
  toolTipBodyClassName: PropTypes.string,
  toolTipArrowClassName: PropTypes.string
};
FlyoutMenu.defaultProps = {
  className: '',
  onClickOutside: function onClickOutside() {
    return true;
  },
  toolTipClassName: '',
  toolTipBodyClassName: '',
  toolTipArrowClassName: ''
};

module.exports = FlyoutMenu;
