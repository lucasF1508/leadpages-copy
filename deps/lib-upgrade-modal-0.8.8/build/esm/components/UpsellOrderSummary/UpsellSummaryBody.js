import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import Typography from '@material-ui/core/Typography';
import { formatPrice, useSummaryStyles, OrderSummaryCell } from '../OrderSummaryComponents';
import { minimalDisplayPrice } from '../../utils/pricing';

var UpsellSummaryRow = function UpsellSummaryRow(_ref) {
  var lineItem = _ref.lineItem,
      isBodyItem = _ref.isBodyItem,
      hideLineItems = _ref.hideLineItems;
  var hasDiscount = lineItem.discountedPrice || lineItem.discountedPrice === 0;
  var orderSummaryClasses = useSummaryStyles({
    hideLineItems: hideLineItems,
    hasDiscount: hasDiscount
  });
  var titleComponent = hideLineItems ? 'span' : 'h5';
  var priceVariant = isBodyItem ? 'h5' : 'h4';
  return /*#__PURE__*/React.createElement(TableRow, {
    "data-qa-selector": "line-item"
  }, /*#__PURE__*/React.createElement(OrderSummaryCell, null, /*#__PURE__*/React.createElement(Typography, {
    component: titleComponent,
    variant: "h5",
    className: orderSummaryClasses.title,
    color: isBodyItem ? 'inherit' : 'textPrimary'
  }, lineItem.title), !!lineItem.detail && /*#__PURE__*/React.createElement(Typography, {
    component: titleComponent,
    variant: "body2"
  }, lineItem.detail)), /*#__PURE__*/React.createElement(OrderSummaryCell, {
    align: "right"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: priceVariant,
    component: "span",
    className: orderSummaryClasses.price
  }, lineItem.price == null ? ' ' : "$".concat(minimalDisplayPrice(lineItem.price))), hasDiscount && /*#__PURE__*/React.createElement(Typography, {
    variant: priceVariant,
    component: "span",
    color: "primary"
  }, lineItem.discountedPrice === 0 ? ' ' : ' $', formatPrice(lineItem.discountedPrice))));
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
  return /*#__PURE__*/React.createElement(Table, null, !hideLineItems && /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(UpsellSummaryRow, {
    lineItem: headItem
  })), !hideLineItems && bodyItems.length > 0 && /*#__PURE__*/React.createElement(TableBody, null, bodyItems.map(function (lineItem) {
    return /*#__PURE__*/React.createElement(UpsellSummaryRow, {
      lineItem: lineItem,
      key: lineItem.title,
      isBodyItem: true
    });
  })), /*#__PURE__*/React.createElement(TableFooter, null, /*#__PURE__*/React.createElement(UpsellSummaryRow, {
    lineItem: total,
    hideLineItems: hideLineItems
  })));
};

UpsellSummaryBody.propTypes = {
  hideLineItems: PropTypes.bool,
  product: PropTypes.shape({
    isBilledNow: PropTypes.bool.isRequired,
    finePrint: PropTypes.arrayOf(PropTypes.string),
    lineItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number,
      discountedPrice: PropTypes.number,
      detail: PropTypes.string
    })).isRequired
  }).isRequired
};
UpsellSummaryBody.defaultProps = {
  hideLineItems: false
};
UpsellSummaryRow.propTypes = {
  hideLineItems: PropTypes.bool,
  isBodyItem: PropTypes.bool,
  lineItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    discountedPrice: PropTypes.number,
    detail: PropTypes.string
  }).isRequired
};
export default UpsellSummaryBody;