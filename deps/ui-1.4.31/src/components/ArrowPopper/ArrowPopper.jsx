import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Tooltip } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative',
    boxShadow: `0 10px 20px -5px ${theme.palette.greyTransparent[50]}`,
    // Overrides Safari fix on MuiPaper in theme because it causes layout issues and is not needed in this component.
    willChange: 'auto',
  },
  shadowContainer: {
    padding: `12px 20px`,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    zIndex: 1,
  },

  popperArrow: {
    '&[x-placement*="bottom"] $arrow': {
      marginLeft: 0,
      marginRight: 0,

      top: -9,
      marginTop: 0,
    },
    '&[x-placement*="top"] $arrow': {
      marginLeft: 0,
      marginRight: 0,

      bottom: -9,
      marginBottom: 0,
    },
    '&[x-placement*="right"] $arrow': {
      marginTop: 0,
      marginBottom: 0,
      height: 20,
      width: 20,

      left: -9,
      marginLeft: 0,
    },
    '&[x-placement*="left"] $arrow': {
      marginTop: 0,
      marginBottom: 0,
      height: 20,
      width: 20,

      right: -9,
      marginRight: 0,
    },
  },
  tooltipArrow: {
    padding: 0,
    maxWidth: 'unset',
  },
  arrow: {
    width: 20,
    height: 20,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    transform: 'rotate(45deg)',
    boxShadow: `0 10px 20px -5px ${theme.palette.greyTransparent[50]}`,

    '&:before': {
      content: 'none',
    },
  },
}));

export default function ArrowPopper(props) {
  const { children, containerClassName, PaperProps, title, ...rest } = props;
  const classes = useStyles(props);
  const { className: paperClassName, ...paperPropsRest } = PaperProps;

  const Tip = (
    <Paper className={clsx(classes.paper, paperClassName)} {...paperPropsRest}>
      <div className={clsx(classes.shadowContainer, containerClassName)}>{title}</div>
    </Paper>
  );

  return (
    <Tooltip
      arrow
      TransitionComponent={Fade}
      title={Tip}
      classes={{
        popperArrow: classes.popperArrow,
        tooltip: classes.tooltipArrow,
        arrow: classes.arrow,
      }}
      {...rest}
    >
      {children}
    </Tooltip>
  );
}

// See Material UI Tooltip component API for all possible props
// https://material-ui.com/api/tooltip/
ArrowPopper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  PaperProps: PropTypes.shape({}),
  title: PropTypes.node.isRequired,
};

ArrowPopper.defaultProps = {
  className: '',
  containerClassName: '',
  PaperProps: {
    elevation: 0,
  },
};
