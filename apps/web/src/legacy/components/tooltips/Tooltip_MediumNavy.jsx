import React from 'react';
import PropTypes from 'prop-types';
import MuiTooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, shadows }) => ({
  tooltip: {
    boxSizing: 'border-box',
    top: '-10px',
    width: 150,
    borderRadius: 3,
    backgroundColor: '#0b236d',
    boxShadow: shadows[4],
    padding: '9px 12px',
    fontSize: 13,
    lineHeight: '18px',
    color: palette.common.white,
    zIndex: 100,
  },
  arrow: {
    fontSize: 8,
    color: '#0b236d',
  },
}));

const Tooltip = props => {
  const classes = useStyles();
  const { children, placement, ...other } = props;
  return (
    <MuiTooltip open arrow classes={{ tooltip: classes.tooltip, arrow: classes.arrow }} placement={placement} {...other}>
      {children}
    </MuiTooltip>
  );
};

Tooltip.defaultProps = {
  placement: 'bottom',
};

Tooltip.propTypes = {
  placement: PropTypes.string,
};

export default Tooltip;
