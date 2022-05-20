"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _UpsellSummaryBody = _interopRequireDefault(require("./UpsellSummaryBody"));

var _OrderSummaryComponents = require("../OrderSummaryComponents");

var _FinePrint = _interopRequireDefault(require("../FinePrint"));

var UpsellSummary = function UpsellSummary(_ref) {
  var product = _ref.product,
      children = _ref.children,
      className = _ref.className,
      PaperProps = _ref.PaperProps,
      hideFinePrint = _ref.hideFinePrint,
      hideLineItems = _ref.hideLineItems;
  var summaryClasses = (0, _OrderSummaryComponents.useSummaryStyles)();
  var finePrint = product.finePrint;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(summaryClasses.wrapper, className)
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, (0, _extends2.default)({
    className: summaryClasses.paper
  }, PaperProps), /*#__PURE__*/_react.default.createElement(_UpsellSummaryBody.default, {
    product: product,
    hideLineItems: hideLineItems
  }), children), !hideFinePrint && /*#__PURE__*/_react.default.createElement(_FinePrint.default, null, finePrint.map(function (text) {
    return /*#__PURE__*/_react.default.createElement(_Typography.default, {
      key: text,
      variant: "caption",
      paragraph: true
    }, text);
  })));
};

var _default = UpsellSummary;
exports.default = _default;
UpsellSummary.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  hideFinePrint: _propTypes.default.bool,
  hideLineItems: _propTypes.default.bool,
  product: _propTypes.default.shape({
    isBilledNow: _propTypes.default.bool.isRequired,
    finePrint: _propTypes.default.arrayOf(_propTypes.default.string),
    lineItems: _propTypes.default.arrayOf(_propTypes.default.shape({
      title: _propTypes.default.string.isRequired,
      price: _propTypes.default.number.isRequired,
      discountedPrice: _propTypes.default.number,
      detail: _propTypes.default.string
    })).isRequired
  }).isRequired
};
UpsellSummary.defaultProps = {
  hideFinePrint: false,
  hideLineItems: false
};