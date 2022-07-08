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
      zIndex: 100
    },
    arrow: {
      fontSize: 8,
      color: COLORS.alt.primaryBlue
    }
  };
});

var Tooltip_MediumNavy = function Tooltip_MediumNavy(props) {
  var classes = useStyles();

  var children = props.children,
      placement = props.placement,
      other = _objectWithoutProperties(props, ["children", "placement"]);

  return /*#__PURE__*/React.createElement(Tooltip, _extends({
    open: true,
    arrow: true,
    classes: {
      tooltip: classes.tooltip,
      arrow: classes.arrow
    },
    placement: placement
  }, other), children);
};

Tooltip_MediumNavy.defaultProps = {
  placement: 'bottom'
};
Tooltip_MediumNavy.propTypes = {
  placement: PropTypes.string
};
export default Tooltip_MediumNavy;