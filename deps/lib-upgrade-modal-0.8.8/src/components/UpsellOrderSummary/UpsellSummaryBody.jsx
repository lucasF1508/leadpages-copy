import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import Typography from '@material-ui/core/Typography';

import {
  formatPrice,
  useSummaryStyles,
  OrderSummaryCell,
} from '../OrderSummaryComponents';
import { minimalDisplayPrice } from '../../utils/pricing';

const UpsellSummaryRow = ({ lineItem, isBodyItem, hideLineItems }) => {
  const hasDiscount =
    lineItem.discountedPrice || lineItem.discountedPrice === 0;
  const orderSummaryClasses = useSummaryStyles({ hideLineItems, hasDiscount });
  const titleComponent = hideLineItems ? 'span' : 'h5';
  const priceVariant = isBodyItem ? 'h5' : 'h4';

  return (
    <TableRow data-qa-selector="line-item">
      <OrderSummaryCell>
        <Typography
          component={titleComponent}
          variant="h5"
          className={orderSummaryClasses.title}
          color={isBodyItem ? 'inherit' : 'textPrimary'}
        >
          {lineItem.title}
        </Typography>
        {!!lineItem.detail && (
          <Typography component={titleComponent} variant="body2">
            {lineItem.detail}
          </Typography>
        )}
      </OrderSummaryCell>
      <OrderSummaryCell align="right">
        <Typography
          variant={priceVariant}
          component="span"
          className={orderSummaryClasses.price}
        >
          {lineItem.price == null
            ? ' '
            : `$${minimalDisplayPrice(lineItem.price)}`}
        </Typography>
        {hasDiscount && (
          <Typography variant={priceVariant} component="span" color="primary">
            {lineItem.discountedPrice === 0 ? ' ' : ' $'}
            {formatPrice(lineItem.discountedPrice)}
          </Typography>
        )}
      </OrderSummaryCell>
    </TableRow>
  );
};

const UpsellSummaryBody = ({ product, hideLineItems }) => {
  const { lineItems, isBilledNow } = product;
  const headItem = lineItems[0];
  const bodyItems = lineItems.slice(1);

  function getTotal() {
    // Hide the total if we haven't fetched the tax yet
    if (lineItems.some(li => li.price === null || li.discountedPrice === null))
      return null;

    const total = lineItems.reduce(
      (subTotal, cur) =>
        cur.discountedPrice || cur.discountedPrice === 0
          ? subTotal + (cur.discountedPrice || 0)
          : subTotal + (cur.price || 0),
      0,
    );
    return total;
  }

  const total = {
    title: 'Total',
    detail: isBilledNow && 'Billed Now',
    price: getTotal(),
  };

  return (
    <Table>
      {!hideLineItems && (
        <TableHead>
          <UpsellSummaryRow lineItem={headItem} />
        </TableHead>
      )}

      {!hideLineItems && bodyItems.length > 0 && (
        <TableBody>
          {bodyItems.map(lineItem => (
            <UpsellSummaryRow
              lineItem={lineItem}
              key={lineItem.title}
              isBodyItem
            />
          ))}
        </TableBody>
      )}

      <TableFooter>
        <UpsellSummaryRow lineItem={total} hideLineItems={hideLineItems} />
      </TableFooter>
    </Table>
  );
};

UpsellSummaryBody.propTypes = {
  hideLineItems: PropTypes.bool,
  product: PropTypes.shape({
    isBilledNow: PropTypes.bool.isRequired,
    finePrint: PropTypes.arrayOf(PropTypes.string),
    lineItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number,
        discountedPrice: PropTypes.number,
        detail: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

UpsellSummaryBody.defaultProps = {
  hideLineItems: false,
};

UpsellSummaryRow.propTypes = {
  hideLineItems: PropTypes.bool,
  isBodyItem: PropTypes.bool,
  lineItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    discountedPrice: PropTypes.number,
    detail: PropTypes.string,
  }).isRequired,
};

export default UpsellSummaryBody;
