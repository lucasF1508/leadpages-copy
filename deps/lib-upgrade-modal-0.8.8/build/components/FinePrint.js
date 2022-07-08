"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ui = require("@lp/ui");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    finePrint: {
      color: theme.palette.grey[70],
      padding: '0 36px'
    }
  };
});

var FinePrint = function FinePrint(_ref) {
  var className = _ref.className,
      children = _ref.children,
      showRefundLink = _ref.showRefundLink;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(className, classes.finePrint)
  }, children, showRefundLink && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "caption"
  }, "View", ' ', /*#__PURE__*/_react.default.createElement(_ui.UnderlineLink, {
    variant: "secondary",
    typographyVariant: "caption",
    href: "https://www.leadpages.com/legal",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "refund policy"), "."));
};

FinePrint.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  showRefundLink: _propTypes.default.bool
};
FinePrint.defaultProps = {
  showRefundLink: true
};
var _default = FinePrint;
exports.default = _default;