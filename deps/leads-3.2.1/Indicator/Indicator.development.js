'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Indicator_indicator__2o2Xo {\n  display: inline-block;\n\n  width: 8px;\n  height: 8px;\n  margin-right: 6px;\n\n  border-radius: 8px;\n}\n\n.Indicator_indicator__2o2Xo.Indicator_success__1mFh9 {\n  border: 2px solid #47c1bf;\n  background: #47c1bf;\n}\n\n.Indicator_indicator__2o2Xo.Indicator_info__10E2l {\n  border: 2px solid #b1bacc;\n  background: #b1bacc;\n}\n\n.Indicator_indicator__2o2Xo.Indicator_warning__3Vms1 {\n  border: 2px solid #eec200;\n  background: #eec200;\n}\n\n.Indicator_indicator__2o2Xo.Indicator_error__1Actj {\n  border: 2px solid #ed6347;\n  background: #ed6347;\n}\n";
var styles = {"indicator":"Indicator_indicator__2o2Xo","success":"Indicator_success__1mFh9","info":"Indicator_info__10E2l","warning":"Indicator_warning__3Vms1","error":"Indicator_error__1Actj"};
styleInject(css);

var Indicator = function Indicator(_ref) {
  var status = _ref.status,
      className = _ref.className;
  return React.createElement("div", {
    className: classNames(styles.indicator, styles[status], className)
  });
};

Indicator.propTypes = {
  status: PropTypes.string,
  className: PropTypes.string
};
Indicator.defaultProps = {
  status: 'success',
  className: ''
};

module.exports = Indicator;
