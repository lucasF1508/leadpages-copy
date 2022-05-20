import React, { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      // This needs to overlay all page content
      zIndex: 1604,
      background: 'rgb(247, 247, 247)',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      display: 'flex',
      flexFlow: 'column',
      [breakpoints.up('sm')]: {
        overflow: 'auto',
      },
    },
  }),
  { classNamePrefix: 'PreviewBackdrop' },
);
function noScroll() {
  document.body.classList.add('no-scroll');
  return () => {
    document.body.classList.remove('no-scroll');
  };
}

const PreviewBackdrop = ({ children }) => {
  useLayoutEffect(noScroll, []);
  useEffect(() => {
    setTimeout(noScroll, 10);
  }, []);
  const classes = useStyles();

  return <div className={classes.root}>{children && children}</div>;
};

PreviewBackdrop.propTypes = {
  children: PropTypes.node,
};

PreviewBackdrop.defaultProps = {
  children: null,
};

export default PreviewBackdrop;
