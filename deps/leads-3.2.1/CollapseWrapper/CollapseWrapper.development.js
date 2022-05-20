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

var css = ".CollapseWrapper_collapseStyle__2yJzv.CollapseWrapper_enter__2jq09 {\n    max-height: 0;\n    opacity: 0.01;\n}\n.CollapseWrapper_collapseStyle__2yJzv.CollapseWrapper_enterActive__2vE69 {\n    max-height: 100px;\n    -webkit-transition: 0.2s ease-in;\n    transition: 0.2s ease-in;\n    opacity: 1;\n}\n.CollapseWrapper_collapseStyle__2yJzv.CollapseWrapper_leave__S8ap1 {\n    max-height: 100px;\n    opacity: 1;\n}\n.CollapseWrapper_collapseStyle__2yJzv.CollapseWrapper_leaveActive__iDeqN {\n    max-height: 0;\n    -webkit-transition: 0.2s ease-in;\n    transition: 0.2s ease-in;\n    opacity: 0.01;\n}\n";
var styles = {"collapseStyle":"CollapseWrapper_collapseStyle__2yJzv","enter":"CollapseWrapper_enter__2jq09","enterActive":"CollapseWrapper_enterActive__2vE69","leave":"CollapseWrapper_leave__S8ap1","leaveActive":"CollapseWrapper_leaveActive__iDeqN"};
styleInject(css);

var CollapseWrapper = function CollapseWrapper(_ref) {
  var children = _ref.children,
      enterTime = _ref.enterTime,
      shouldCollapse = _ref.shouldCollapse,
      leaveTime = _ref.leaveTime,
      useDiv = _ref.useDiv;
  return React.createElement(CSSTransitionGroup, {
    transitionName: {
      enter: styles.enter,
      enterActive: styles.enterActive,
      leave: styles.leave,
      leaveActive: styles.leaveActive
    },
    transitionEnterTimeout: enterTime,
    transitionLeaveTimeout: leaveTime
  }, !shouldCollapse ? React.createElement(DivOrSpan, {
    className: styles.collapseStyle,
    useDiv: useDiv
  }, children) : null);
};

CollapseWrapper.propTypes = {
  shouldCollapse: PropTypes.bool,
  useDiv: PropTypes.bool,
  enterTime: PropTypes.number,
  leaveTime: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired
};
CollapseWrapper.defaultProps = {
  shouldCollapse: false,
  useDiv: false,
  enterTime: 200,
  leaveTime: 200
};

module.exports = CollapseWrapper;
