'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));

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

var css = ".LoadingBar_uiLoadingBar__2Msbq {\n  position: fixed;\n  z-index: 1001;\n  top: 0;\n  right: 0;\n  left: 0;\n\n  overflow: hidden;\n\n  width: 100%;\n  height: 4px;\n\n  -webkit-transform: translate3d(0, 0, 0) rotateZ(360deg);\n\n          transform: translate3d(0, 0, 0) rotateZ(360deg);\n  text-align: center;\n\n  background: #deecfd\n}\n.LoadingBar_uiLoadingBar__2Msbq::before {\n  position: absolute;\n  top: 0;\n  right: 100%;\n  bottom: 0;\n  display: block;\n  width: 85%;\n  padding: 0;\n  content: '';\n  -webkit-transform: rotateZ(360deg);\n          transform: rotateZ(360deg);\n  -webkit-animation: LoadingBar_ui-loading__21W3M 1.8s ease-out infinite;\n          animation: LoadingBar_ui-loading__21W3M 1.8s ease-out infinite;\n  background: -webkit-gradient(linear, left top, right top, from(#deecfd), color-stop(10%, #4692ff), color-stop(90%, #4692ff), to(#deecfd));\n  background: linear-gradient(to right, #deecfd 0%, #4692ff 10%, #4692ff 90%, #deecfd 100%);\n  will-change: transform;\n}\n@-webkit-keyframes LoadingBar_ui-loading__21W3M {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0) rotateZ(360deg);\n            transform: translate3d(0, 0, 0) rotateZ(360deg);\n  }\n\n  100% {\n    -webkit-transform: translate3d(236%, 0, 0) rotateZ(360deg);\n            transform: translate3d(236%, 0, 0) rotateZ(360deg);\n  }\n}\n@keyframes LoadingBar_ui-loading__21W3M {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0) rotateZ(360deg);\n            transform: translate3d(0, 0, 0) rotateZ(360deg);\n  }\n\n  100% {\n    -webkit-transform: translate3d(236%, 0, 0) rotateZ(360deg);\n            transform: translate3d(236%, 0, 0) rotateZ(360deg);\n  }\n}\n";
var styles = {"uiLoadingBar":"LoadingBar_uiLoadingBar__2Msbq","ui-loading":"LoadingBar_ui-loading__21W3M"};
styleInject(css);

var LoadingBar = function LoadingBar(_ref) {
  var className = _ref.className;
  return React.createElement("div", {
    className: classNames(className, styles.uiLoadingBar)
  });
};

LoadingBar.defaultProps = {
  className: ''
};
LoadingBar.propTypes = {
  className: PropTypes.string
};

exports.LoadingBar = LoadingBar;
exports.default = LoadingBar;
