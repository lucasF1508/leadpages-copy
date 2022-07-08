"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableFooter = _interopRequireDefault(require("@material-ui/core/TableFooter"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _OrderSummaryComponents = require("../OrderSummaryComponents");

var _pricing = require("../../utils/pricing");

var UpsellSummaryRow = function UpsellSummaryRow(_ref) {
  var lineItem = _ref.lineItem,
      isBodyItem = _ref.isBodyItem,
      hideLineItems = _ref.hideLineItems;
  var hasDiscount = lineItem.discountedPrice || lineItem.discountedPrice === 0;
  var orderSummaryClasses = (0, _OrderSummaryComponents.useSummaryStyles)({
    hideLineItems: hideLineItems,
    hasDiscount: hasDiscount
  });
  var titleComponent = hideLineItems ? 'span' : 'h5';
  var priceVariant = isBodyItem ? 'h5' : 'h4';
  return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
    "data-qa-selector": "line-item"
  }, /*#__PURE__*/_react.default.createElement(_OrderSummaryComponents.OrderSummaryCell, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: titleComponent,
    variant: "h5",
    className: orderSummaryClasses.title,
    color: isBodyItem ? 'inherit' : 'textPrimary'
  }, lineItem.title), !!lineItem.detail && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: titleComponent,
    variant: "body2"
  }, lineItem.detail)), /*#__PURE__*/_react.default.createElement(_OrderSummaryComponents.OrderSummaryCell, {
    align: "right"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: priceVariant,
    component: "span",
    className: orderSummaryClasses.price
  }, lineItem.price == null ? ' ' : "$".concat((0, _pricing.minimalDisplayPrice)(lineItem.price))), hasDiscount && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: priceVariant,
    component: "span",
    color: "primary"
  }, lineItem.discountedPrice === 0 ? ' ' : ' $', (0, _OrderSummaryComponents.formatPrice)(lineItem.discountedPrice))));
};

var UpsellSummaryBody = function UpsellSummaryBody(_ref2) {
  var product = _ref2.product,
      hideLineItems = _ref2.hideLineItems;
  var lineItems = product.lineItems,
      isBilledNow = product.isBilledNow;
  var headItem = lineItems[0];
  var bodyItems = lineItems.slice(1);

  function getTotal() {
    // Hide the total if we haven't fetched the tax yet
    if (lineItems.some(function (li) {
      return li.price === null || li.discountedPrice === null;
    })) return null;
    var total = lineItems.reduce(function (subTotal, cur) {
      return cur.discountedPrice || cur.discountedPrice === 0 ? subTotal + (cur.discountedPrice || 0) : subTotal + (cur.price || 0);
    }, 0);
    return total;
  }

  var total = {
    title: 'Total',
    detail: isBilledNow && 'Billed Now',
    price: getTotal()
  };
  return /*#__PURE__*/_react.default.createElement(_Table.default, null, !hideLineItems && /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(UpsellSummaryRow, {
    lineItem: headItem
  })), !hideLineItems && bodyItems.length > 0 && /*#__PURE__*/_react.default.createElement(_TableBody.default, null, bodyItems.map(function (lineItem) {
    return /*#__PURE__*/_react.default.createElement(UpsellSummaryRow, {
      lineItem: lineItem,
      key: lineItem.title,
      isBodyItem: true
    });
  })), /*#__PURE__*/_react.default.createElement(_TableFooter.default, null, /*#__PURE__*/_react.default.createElement(UpsellSummaryRow, {
    lineItem: total,
    hideLineItems: hideLineItems
  })));
};

UpsellSummaryBody.propTypes = {
  hideLineItems: _propTypes.default.bool,
  product: _propTypes.default.shape({
    isBilledNow: _propTypes.default.bool.isRequired,
    finePrint: _propTypes.default.arrayOf(_propTypes.default.string),
    lineItems: _propTypes.default.arrayOf(_propTypes.default.shape({
      title: _propTypes.default.string.isRequired,
      price: _propTypes.default.number,
      discountedPrice: _propTypes.default.number,
      detail: _propTypes.default.string
    })).isRequired
  }).isRequired
};
UpsellSummaryBody.defaultProps = {
  hideLineItems: false
};
UpsellSummaryRow.propTypes = {
  hideLineItems: _propTypes.default.bool,
  isBodyItem: _propTypes.default.bool,
  lineItem: _propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    price: _propTypes.default.number,
    discountedPrice: _propTypes.default.number,
    detail: _propTypes.default.string
  }).isRequired
};
var _default = UpsellSummaryBody;
exports.default = _default;