import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { UnderlineLink } from '@lp/ui';

const useStyles = makeStyles(theme => ({
  finePrint: {
    color: theme.palette.grey[70],
    padding: '0 36px',
  },
}));

const FinePrint = ({ className, children, showRefundLink }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.finePrint)}>
      {children}
      {showRefundLink && (
        <Typography variant="caption">
          View{' '}
          <UnderlineLink
            variant="secondary"
            typographyVariant="caption"
            href="https://www.leadpages.com/legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            refund policy
          </UnderlineLink>
          .
        </Typography>
      )}
    </div>
  );
};

FinePrint.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  showRefundLink: PropTypes.bool,
};

FinePrint.defaultProps = {
  showRefundLink: true,
};

export default FinePrint;
