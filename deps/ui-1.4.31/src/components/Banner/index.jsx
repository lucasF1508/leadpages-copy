import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { primaryColors } from '../../themes/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    root: ({ backgroundColor, color }) => ({
      backgroundColor,
      color,
      textAlign: 'center',
      padding: theme.spacing(1),
    }),
    bannerText: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(1),
      lineHeight: 1,
    },
    ctaContainer: {
      padding: theme.spacing(1),
    },
    ctaButton: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      '&:hover, &:focus': {
        backgroundColor: '#ccc',
        color: theme.palette.primary.dark,
      },
    },
  }),
  { classNamePrefix: 'Banner' },
);

const Banner = ({
  className,
  bannerText,
  CTA,
  backgroundColor,
  color,
  isShowing,
  isShown,
  onShown,
  ...other
}) => {
  const classes = useStyles({
    backgroundColor,
    color,
  });

  const renderCTA = element => {
    const config = {};

    if (element.type === Button) {
      config.className = clsx(classes.ctaButton, CTA.props.className);
      config.size = CTA.props.size ? CTA.props.size : 'small';
    }

    return React.cloneElement(element, config);
  };

  return (
    <Collapse
      in={isShowing}
      appear={!isShown}
      enter={!isShown}
      timeout={300}
      onEntered={onShown}
      {...other}
    >
      <Box
        className={clsx(className, classes.root)}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        data-qa-selector="banner-container"
      >
        <Typography className={classes.bannerText}>{bannerText}</Typography>
        {CTA && <div className={classes.ctaContainer}>{renderCTA(CTA)}</div>}
      </Box>
    </Collapse>
  );
};

const WrappedBanner = ({ selector, isShown, ...props }) => {
  const mountElement = useRef();

  useEffect(() => {
    mountElement.current = document.querySelector(selector);
  }, [selector]);

  const [isShowing, setIsShowing] = useState(isShown ? true : false);

  if (!isShown) {
    setTimeout(() => {
      setIsShowing(true);
    }, 0);
  }

  return (
    <>
      {mountElement.current ? (
        createPortal(
          <Banner isShowing={isShowing} isShown={isShown} {...props} />,
          mountElement.current,
        )
      ) : (
        <Banner isShowing={isShowing} isShown={isShown} {...props} />
      )}
    </>
  );
};

export default WrappedBanner;

WrappedBanner.propTypes = {
  className: PropTypes.string,
  selector: PropTypes.string,
  bannerText: PropTypes.string.isRequired,
  CTA: PropTypes.node,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  isShown: PropTypes.bool,
  onShown: PropTypes.func,
};

WrappedBanner.defaultProps = {
  className: '',
  CTA: null,
  selector: null,
  backgroundColor: primaryColors.indigo,
  color: primaryColors.white,
  isShown: false,
  onShown: () => {},
};
