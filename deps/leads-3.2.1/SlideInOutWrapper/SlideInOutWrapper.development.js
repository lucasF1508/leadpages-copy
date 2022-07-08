'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var CSSTransitionGroup = _interopDefault(require('react-transition-group/CSSTransitionGroup'));
var DivOrSpan = _interopDefault(require('../DivOrSpan'));

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

var css = ".SlideInOutWrapper_slideInOutStyle__2Og3j {\n  -webkit-transition: all 0.2s cubic-bezier(0.68, 0.01, 0.38, 0.99);\n  transition: all 0.2s cubic-bezier(0.68, 0.01, 0.38, 0.99);\n  -webkit-transform: translateX(0%);\n          transform: translateX(0%)\n}\n.SlideInOutWrapper_slideInOutStyle__2Og3j.SlideInOutWrapper_animate__VdWxR {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 0.01;\n}\n";
var styles = {"slideInOutStyle":"SlideInOutWrapper_slideInOutStyle__2Og3j","animate":"SlideInOutWrapper_animate__VdWxR"};
styleInject(css);

var SlideInOutWrapper = function SlideInOutWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isShowing = _ref.isShowing,
      useDiv = _ref.useDiv;
  return React.createElement(CSSTransitionGroup, {
    transitionName: {
      enter: styles.animate,
      leave: styles.animate
    },
    transitionEnterTimeout: 200,
    transitionLeaveTimeout: 200
  }, isShowing ? React.createElement(DivOrSpan, {
    className: classNames(className, styles.slideInOutStyle),
    useDiv: useDiv
  }, children) : null);
};

SlideInOutWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string,
  isShowing: PropTypes.bool,
  useDiv: PropTypes.bool
};
SlideInOutWrapper.defaultProps = {
  className: '',
  isShowing: false,
  useDiv: false
};

module.exports = SlideInOutWrapper;
