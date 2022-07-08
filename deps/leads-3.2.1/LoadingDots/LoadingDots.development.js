'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n@-webkit-keyframes LoadingDots_loading__1GXI1 {\n  0%,\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n\n@keyframes LoadingDots_loading__1GXI1 {\n  0%,\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n\n.LoadingDots_loading__1GXI1 {\n  min-width: 75px;\n\n  text-align: center;\n}\n\n.LoadingDots_loading__1GXI1.LoadingDots_md__3SzqX {\n  min-width: 55px\n}\n\n.LoadingDots_loading__1GXI1.LoadingDots_md__3SzqX .LoadingDots_dots__3sRJQ {\n  width: 16px;\n  height: 16px;\n}\n\n.LoadingDots_loading__1GXI1.LoadingDots_sm__2adXs {\n  min-width: 45px\n}\n\n.LoadingDots_loading__1GXI1.LoadingDots_sm__2adXs .LoadingDots_dots__3sRJQ {\n  width: 12px;\n  height: 12px;\n}\n\n.LoadingDots_loading__1GXI1.LoadingDots_xs__1-l5A {\n  min-width: 25px\n}\n\n.LoadingDots_loading__1GXI1.LoadingDots_xs__1-l5A .LoadingDots_dots__3sRJQ {\n  width: 6px;\n  height: 6px;\n  margin: -1px;\n}\n\n.LoadingDots_loading__1GXI1.LoadingDots_inverted__2m6lh .LoadingDots_dots__3sRJQ {\n  background-color: white;\n}\n\n.LoadingDots_loading__1GXI1 .LoadingDots_dots__3sRJQ {\n  display: inline-block;\n\n  width: 24px;\n  height: 24px;\n\n  -webkit-animation: LoadingDots_loading__1GXI1 1.3s infinite ease-in-out;\n\n          animation: LoadingDots_loading__1GXI1 1.3s infinite ease-in-out;\n  vertical-align: middle;\n\n  border-radius: 50%;\n  background-color: #0069ff\n}\n\n.LoadingDots_loading__1GXI1 .LoadingDots_dots__3sRJQ.LoadingDots_dot1__2tUCQ {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n\n.LoadingDots_loading__1GXI1 .LoadingDots_dots__3sRJQ.LoadingDots_dot2__3Op4O {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n\n.LoadingDots_loading__1GXI1 .LoadingDots_dots__3sRJQ.LoadingDots_dot3__3QvYz {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n";
var styles = {"loading":"LoadingDots_loading__1GXI1","md":"LoadingDots_md__3SzqX","dots":"LoadingDots_dots__3sRJQ","sm":"LoadingDots_sm__2adXs","xs":"LoadingDots_xs__1-l5A","inverted":"LoadingDots_inverted__2m6lh","dot1":"LoadingDots_dot1__2tUCQ","dot2":"LoadingDots_dot2__3Op4O","dot3":"LoadingDots_dot3__3QvYz"};
styleInject(css);

var LoadingDots = function LoadingDots(_ref) {
  var className = _ref.className,
      inverted = _ref.inverted,
      size = _ref.size;
  return React.createElement("div", {
    className: classNames(className, styles.loading, styles[size], defineProperty({}, "".concat(styles.inverted), inverted))
  }, React.createElement("div", {
    className: "".concat(styles.dots, " ").concat(styles.dot1)
  }), React.createElement("div", {
    className: "".concat(styles.dots, " ").concat(styles.dot2)
  }), React.createElement("div", {
    className: "".concat(styles.dots, " ").concat(styles.dot3)
  }));
};

LoadingDots.defaultProps = {
  className: '',
  inverted: false,
  size: ''
};
LoadingDots.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool,
  size: PropTypes.string
};

module.exports = LoadingDots;
