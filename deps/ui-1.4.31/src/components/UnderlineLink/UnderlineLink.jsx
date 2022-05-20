import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(
  ({ palette }) => ({
    root: {
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottomStyle: 'solid',

      '&:hover, &:focus': {
        borderBottomColor: palette.primary.dark,
      },
    },
    primary: {
      borderBottomWidth: '3px',
      color: '#000000',
      borderBottomColor: 'transparent',
      paddingBottom: '.57em',
    },
    secondary: {
      borderBottomWidth: '2px',
      color: palette.secondary.contrastText,
      borderBottomColor: palette.primary.lightAlt,
      paddingBottom: '.21em',
    },
  }),
  { classNamePrefix: 'UnderlineLink' },
);

export default function UnderlineLink({
  variant,
  typographyVariant,
  children,
  className,
  ...props
}) {
  const classes = useStyles();

  return (
    <Link
      className={clsx(
        classes.root,
        variant === 'primary' ? classes.primary : classes.secondary,
        className,
      )}
      color="initial"
      underline="none"
      variant={typographyVariant}
      {...props}
    >
      {children}
    </Link>
  );
}

// See Material UI Link component API for all possible props
// https://material-ui.com/api/link/
UnderlineLink.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  typographyVariant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

UnderlineLink.defaultProps = {
  variant: 'primary',
  typographyVariant: 'body2',
  className: '',
};
