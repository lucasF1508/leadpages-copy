'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function DivOrSpan(_ref) {
  var children = _ref.children,
      className = _ref.className,
      useDiv = _ref.useDiv;
  return useDiv ? React.createElement("div", {
    className: className
  }, children) : React.createElement("span", {
    className: className
  }, children);
}

DivOrSpan.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string,
  useDiv: PropTypes.bool
};
DivOrSpan.defaultProps = {
  className: '',
  useDiv: false
};

module.exports = DivOrSpan;
