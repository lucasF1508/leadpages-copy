import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import UpsellSummaryBody from './UpsellSummaryBody';
import { useSummaryStyles } from '../OrderSummaryComponents';
import FinePrint from '../FinePrint';

var UpsellSummary = function UpsellSummary(_ref) {
  var product = _ref.product,
      children = _ref.children,
      className = _ref.className,
      PaperProps = _ref.PaperProps,
      hideFinePrint = _ref.hideFinePrint,
      hideLineItems = _ref.hideLineItems;
  var summaryClasses = useSummaryStyles();
  var finePrint = product.finePrint;
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(summaryClasses.wrapper, className)
  }, /*#__PURE__*/React.createElement(Paper, _extends({
    className: summaryClasses.paper
  }, PaperProps), /*#__PURE__*/React.createElement(UpsellSummaryBody, {
    product: product,
    hideLineItems: hideLineItems
  }), children), !hideFinePrint && /*#__PURE__*/React.createElement(FinePrint, null, finePrint.map(function (text) {
    return /*#__PURE__*/React.createElement(Typography, {
      key: text,
      variant: "caption",
      paragraph: true
    }, text);
  })));
};

export default UpsellSummary;
UpsellSummary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  hideFinePrint: PropTypes.bool,
  hideLineItems: PropTypes.bool,
  product: PropTypes.shape({
    isBilledNow: PropTypes.bool.isRequired,
    finePrint: PropTypes.arrayOf(PropTypes.string),
    lineItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountedPrice: PropTypes.number,
      detail: PropTypes.string
    })).isRequired
  }).isRequired
};
UpsellSummary.defaultProps = {
  hideFinePrint: false,
  hideLineItems: false
};