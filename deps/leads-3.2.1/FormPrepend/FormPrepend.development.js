'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');

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

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  border-radius: 3px 0 0 3px;\n  border-right: none;\n  background-color: #e4e7ed;\n  color: #4c515d;\n  border: 1px solid #b1bacc;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n  margin-right: -1px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n\n  input,\n  button {\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n    display: block;\n    line-height: 40px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: ", ";\n    white-space: nowrap;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FormPrepend = function FormPrepend(_ref) {
  var children = _ref.children,
      prepend = _ref.prepend,
      width = _ref.width,
      className = _ref.className;
  var prependFixedWidthClassname = emotion.css(_templateObject(), width);
  return React.createElement("div", {
    className: emotion.cx(prependWrapperClassName, className)
  }, React.createElement("div", {
    title: prepend,
    "aria-label": prepend,
    className: emotion.cx(prependClassName, defineProperty({}, "".concat(prependFixedWidthClassname), !!width))
  }, prepend), children);
};

FormPrepend.propTypes = {
  children: PropTypes.node.isRequired,
  prepend: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string
};
FormPrepend.defaultProps = {
  className: '',
  width: ''
};
var prependWrapperClassName = emotion.css(_templateObject2());
var prependClassName = emotion.css(_templateObject3());

module.exports = FormPrepend;
