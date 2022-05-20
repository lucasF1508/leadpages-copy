import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
export var Loading = function Loading(_ref) {
  var msg = _ref.msg,
      variant = _ref.variant;
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justify: "center",
    direction: "column",
    alignItems: "center",
    style: {
      height: '100%'
    }
  }, msg && /*#__PURE__*/React.createElement(Typography, {
    variant: variant,
    style: {
      paddingBottom: 10
    }
  }, msg), /*#__PURE__*/React.createElement(CircularProgress, null));
};
export default Loading;