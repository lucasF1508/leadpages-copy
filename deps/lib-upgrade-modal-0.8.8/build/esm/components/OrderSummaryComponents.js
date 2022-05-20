import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { minimalDisplayPrice } from '../utils/pricing';
export function formatPrice(price) {
  return price === 0 ? 'FREE' : minimalDisplayPrice(price);
}
export var useSummaryStyles = makeStyles(function (theme) {
  return {
    wrapper: _defineProperty({
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
export var OrderSummaryCell = withStyles(function (theme) {
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
})(TableCell);