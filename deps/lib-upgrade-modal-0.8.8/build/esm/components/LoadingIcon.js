import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &,\n  &:before,\n  &:after {\n    border-radius: 50%;\n    width: 2.5em;\n    height: 2.5em;\n    animation-fill-mode: both;\n    animation: loader 1.8s infinite ease-in-out;\n  }\n\n  & {\n    color: ", ";\n    font-size: 9px;\n    margin: 40px auto;\n    position: relative;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n  }\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n  }\n\n  &:before {\n    left: -3.5em;\n    animation-delay: -0.32s;\n  }\n  &:after {\n    left: 3.5em;\n  }\n\n  @keyframes loader {\n    0%,\n    80%,\n    100% {\n      box-shadow: 0 2.5em 0 -1.3em;\n    }\n    40% {\n      box-shadow: 0 2.5em 0 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import { css } from 'emotion';
import { COLORS } from '../constants';
var loaderAnimationClass = css(_templateObject(), COLORS.main.primary);
export default (function () {
  return /*#__PURE__*/React.createElement("div", {
    className: loaderAnimationClass
  });
});