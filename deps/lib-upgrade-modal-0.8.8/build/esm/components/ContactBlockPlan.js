import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ShadowBox, VSTypography } from '@lp/ui';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { BREAKPOINTS, TWO_COL_MAX_WIDTH } from '../constants';
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      margin: theme.spacing(3, 'auto', 6),
      maxWidth: TWO_COL_MAX_WIDTH,
      padding: theme.spacing(0, 3)
    },
    contactBlock: _defineProperty({
      boxSizing: 'border-box',
      padding: theme.spacing(0, 7)
    }, theme.breakpoints.down(BREAKPOINTS.SMALL), {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: theme.spacing(0, 3),
      '& $header': {
        padding: theme.spacing(3, 0)
      },
      '& $headline': {
        fontSize: 22
      },
      '& $link': {
        marginBottom: theme.spacing(4)
      }
    }),
    header: {
      paddingTop: 45,
      paddingBottom: 60,
      flexBasis: '68%'
    },
    headline: {},
    subheadline: {
      marginTop: theme.spacing(3),
      color: theme.palette.secondary.contrastText
    },
    link: {},
    buttonText: {
      marginRight: theme.spacing(1)
    }
  };
}, {
  classNamePrefix: 'ContactBlock'
});

var ContactBlockPlan = function ContactBlockPlan(_ref) {
  var contactLink = _ref.contactLink,
      headline = _ref.headline,
      subheadline = _ref.subheadline;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(Grid, {
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
  }, /*#__PURE__*/React.createElement(VSTypography, {
    className: classes.headline,
    component: "h3",
    variant: "h4"
  }, headline), subheadline && /*#__PURE__*/React.createElement(Typography, {
    className: classes.subheadline
  }, subheadline)), /*#__PURE__*/React.createElement(Button, {
    className: classes.link,
    href: contactLink,
    variant: "outlined",
    size: "medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.buttonText
  }, "Contact Us"), /*#__PURE__*/React.createElement(ChevronRightIcon, null))));
};

ContactBlockPlan.propTypes = {
  contactLink: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired
};
export default ContactBlockPlan;