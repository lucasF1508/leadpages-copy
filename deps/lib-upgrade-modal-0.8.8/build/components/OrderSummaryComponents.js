"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPrice = formatPrice;
exports.OrderSummaryCell = exports.useSummaryStyles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _pricing = require("../utils/pricing");

function formatPrice(price) {
  return price === 0 ? 'FREE' : (0, _pricing.minimalDisplayPrice)(price);
}

var useSummaryStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    wrapper: (0, _defineProperty2.default)({
      minWidth: 360,
      maxWidth: 696
    }, theme.breakpoints.up(1194), {
      maxWidth: 360
    }),
    header: {
      padding: '16px 24px 16px',
      textTransform: 'capitalize'
    },
    tableContainer: {
      marginBottom: theme.spacing(4),
      padding: '6px 18px 14px'
    },
    title: function title(_ref) {
      var hideLineItems = _ref.hideLineItems;
      return {
        marginRight: hideLineItems ? theme.spacing(1) : null
      };
    },
    paper: {
      marginBottom: theme.spacing(3),
      padding: '18px 36px'
    },
    price: function price(_ref2) {
      var hasDiscount = _ref2.hasDiscount;
      return hasDiscount ? {
        color: theme.palette.text.disabled,
        textDecoration: 'line-through'
      } : null;
    }
  };
}, {
  classNamePrefix: 'OrderSummary'
});
exports.useSummaryStyles = useSummaryStyles;
var OrderSummaryCell = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      borderColor: theme.palette.grey[25],
      color: theme.palette.grey[70],
      paddingLeft: 0
    },
    head: {
      paddingTop: 14
    },
    footer: {
      borderBottom: 0
    },
    alignRight: {
      verticalAlign: 'baseline',
      paddingRight: 0,
      whiteSpace: 'nowrap'
    }
  };
})(_TableCell.default);
exports.OrderSummaryCell = OrderSummaryCell;