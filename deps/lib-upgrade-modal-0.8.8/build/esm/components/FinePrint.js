import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { UnderlineLink } from '@lp/ui';
var useStyles = makeStyles(function (theme) {
  return {
    finePrint: {
      color: theme.palette.grey[70],
      padding: '0 36px'
    }
  };
});

var FinePrint = function FinePrint(_ref) {
  var className = _ref.className,
      children = _ref.children,
      showRefundLink = _ref.showRefundLink;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(className, classes.finePrint)
  }, children, showRefundLink && /*#__PURE__*/React.createElement(Typography, {
    variant: "caption"
  }, "View", ' ', /*#__PURE__*/React.createElement(UnderlineLink, {
    variant: "secondary",
    typographyVariant: "caption",
    href: "https://www.leadpages.com/legal",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "refund policy"), "."));
};

FinePrint.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showRefundLink: PropTypes.bool
};
FinePrint.defaultProps = {
  showRefundLink: true
};
export default FinePrint;