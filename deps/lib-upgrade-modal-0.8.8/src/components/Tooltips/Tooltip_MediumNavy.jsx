import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import { COLORS } from '../../constants';

const useStyles = makeStyles(({ palette, shadows, typography }) => ({
  tooltip: {
    boxSizing: 'border-box',
    left: 42,
    width: 135,
    borderRadius: 3,
    backgroundColor: COLORS.alt.primaryBlue,
    boxShadow: shadows[4],
    padding: '9px 12px',
    fontFamily: typography.fontFamily,
    fontSize: 13,
    lineHeight: '18px',
    color: palette.common.white,
    zIndex: 100,
  },
  arrow: {
    fontSize: 8,
    color: COLORS.alt.primaryBlue,
  },
}));

const Tooltip_MediumNavy = props => {
  const classes = useStyles();
  const { children, placement, ...other } = props;
  return (
    <Tooltip
      open
      arrow
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
      placement={placement}
      {...other}
    >
      {children}
    </Tooltip>
  );
};

Tooltip_MediumNavy.defaultProps = {
  placement: 'bottom',
};

Tooltip_MediumNavy.propTypes = {
  placement: PropTypes.string,
};

export default Tooltip_MediumNavy;
