import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../constants';
var useStyles = makeStyles(function (_ref) {
  var palette = _ref.palette,
      shadows = _ref.shadows,
      typography = _ref.typography;
  return {
    tooltip: {
      width: 220,
      backgroundColor: palette.common.white,
      boxShadow: shadows[4],
      marginTop: 8,
      padding: '1.5rem',
      fontSize: 12,
      lineHeight: '18px',
      color: COLORS.text.tundora,
      fontFamily: typography.fontFamily
    }
  };
});

var Tooltip_GreatWhite = function Tooltip_GreatWhite(props) {
  var classes = useStyles();

  var children = props.children,
      placement = props.placement,
      other = _objectWithoutProperties(props, ["children", "placement"]);

  return /*#__PURE__*/React.createElement(Tooltip, _extends({
    classes: {
      tooltip: classes.tooltip
    },
    placement: placement
  }, other, {
    style: {
      cursor: 'help'
    }
  }), children);
};

Tooltip_GreatWhite.defaultProps = {
  placement: 'bottom-start'
};
Tooltip_GreatWhite.propTypes = {
  placement: PropTypes.string
};
export default Tooltip_GreatWhite;