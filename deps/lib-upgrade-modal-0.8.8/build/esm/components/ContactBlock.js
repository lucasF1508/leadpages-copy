import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { ShadowBox } from '@lp/ui';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      margin: theme.spacing(3, 'auto', 6),
      maxWidth: theme.breakpoints.values.lg,
      padding: theme.spacing(0, 3)
    },
    contactBlock: {
      boxSizing: 'border-box',
      padding: theme.spacing(0, 7)
    },
    header: {
      paddingTop: 45,
      paddingBottom: 60
    },
    subheadline: {
      marginTop: theme.spacing(3)
    },
    link: {
      // TODO: Remove this override for LEGO
      '&:visited': {
        color: theme.palette.primary.main
      }
    }
  };
}, {
  classNamePrefix: 'ContactBlock'
});

var ContactBlock = function ContactBlock(_ref) {
  var contactLink = _ref.contactLink,
      headline = _ref.headline,
      subheadline = _ref.subheadline;
  var classes = useStyles();
  var matches = useMediaQuery(function (theme) {
    return theme.breakpoints.up(767);
  });
  return matches && /*#__PURE__*/React.createElement(Grid, {
    className: classes.root,
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(ShadowBox, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    className: classes.contactBlock
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h3"
  }, headline), subheadline && /*#__PURE__*/React.createElement(Typography, {
    className: classes.subheadline
  }, subheadline)), /*#__PURE__*/React.createElement(Button, {
    className: classes.link,
    href: contactLink,
    variant: "outlined",
    size: "large"
  }, "Contact Us")));
};

ContactBlock.propTypes = {
  contactLink: PropTypes.string,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string
};
ContactBlock.defaultProps = {
  headline: "Not seeing what you're looking for?",
  subheadline: "Contact our team to talk about custom options.",
  contactLink: 'https://support.leadpages.net/hc/en-us/requests/new/'
};
export default ContactBlock;