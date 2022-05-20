import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import UpsellSummaryBody from './UpsellSummaryBody';

import { useSummaryStyles } from '../OrderSummaryComponents';
import FinePrint from '../FinePrint';

const UpsellSummary = ({
  product,
  children,
  className,
  PaperProps,
  hideFinePrint,
  hideLineItems,
}) => {
  const summaryClasses = useSummaryStyles();

  const { finePrint } = product;

  return (
    <div className={clsx(summaryClasses.wrapper, className)}>
      <Paper className={summaryClasses.paper} {...PaperProps}>
        <UpsellSummaryBody product={product} hideLineItems={hideLineItems} />
        {children}
      </Paper>
      {!hideFinePrint && (
        <FinePrint>
          {finePrint.map(text => (
            <Typography key={text} variant="caption" paragraph>
              {text}
            </Typography>
          ))}
        </FinePrint>
      )}
    </div>
  );
};

export default UpsellSummary;

UpsellSummary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  hideFinePrint: PropTypes.bool,
  hideLineItems: PropTypes.bool,
  product: PropTypes.shape({
    isBilledNow: PropTypes.bool.isRequired,
    finePrint: PropTypes.arrayOf(PropTypes.string),
    lineItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountedPrice: PropTypes.number,
        detail: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

UpsellSummary.defaultProps = {
  hideFinePrint: false,
  hideLineItems: false,
};
