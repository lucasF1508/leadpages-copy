import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import { COLORS } from '../../constants';

const useStyles = makeStyles(({ palette, shadows, typography }) => ({
  tooltip: {
    width: 220,
    backgroundColor: palette.common.white,
    boxShadow: shadows[4],
    marginTop: 8,
    padding: '1.5rem',
    fontSize: 12,
    lineHeight: '18px',
    color: COLORS.text.tundora,
    fontFamily: typography.fontFamily,
  },
}));

const Tooltip_GreatWhite = props => {
  const classes = useStyles();
  const { children, placement, ...other } = props;
  return (
    <Tooltip classes={{ tooltip: classes.tooltip }} placement={placement} {...other} style={{cursor: 'help'}}>
      {children}
    </Tooltip> 
  );
};

Tooltip_GreatWhite.defaultProps = {
  placement: 'bottom-start',
};

Tooltip_GreatWhite.propTypes = {
  placement: PropTypes.string,
};

export default Tooltip_GreatWhite;