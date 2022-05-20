'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
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

var css = ".FadeInOutWrapper_fadeInOutStyle__3W_qK {\n  -webkit-transition: opacity 0.2s ease-in;\n  transition: opacity 0.2s ease-in;\n}\n\n.FadeInOutWrapper_fadeInOutStyle__3W_qK.FadeInOutWrapper_animate__2uPrl {\n  opacity: 0.1;\n}\n";
var styles = {"fadeInOutStyle":"FadeInOutWrapper_fadeInOutStyle__3W_qK","animate":"FadeInOutWrapper_animate__2uPrl"};
styleInject(css);

var FadeInOutWrapper = function FadeInOutWrapper(_ref) {
  var children = _ref.children,
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
    className: styles.fadeInOutStyle,
    useDiv: useDiv
  }, children) : null);
};

FadeInOutWrapper.propTypes = {
  isShowing: PropTypes.bool,
  useDiv: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};
FadeInOutWrapper.defaultProps = {
  isShowing: false,
  useDiv: false
};

module.exports = FadeInOutWrapper;
