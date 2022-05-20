"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _styles = require("@material-ui/core/styles");

var _ui = require("@lp/ui");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _core = require("@material-ui/core");

var useStyles = (0, _styles.makeStyles)(function (theme) {
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
  var matches = (0, _useMediaQuery.default)(function (theme) {
    return theme.breakpoints.up(767);
  });
  return matches && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    className: classes.root,
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_ui.ShadowBox, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    className: classes.contactBlock
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h3"
  }, headline), subheadline && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.subheadline
  }, subheadline)), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.link,
    href: contactLink,
    variant: "outlined",
    size: "large"
  }, "Contact Us")));
};

ContactBlock.propTypes = {
  contactLink: _propTypes.default.string,
  headline: _propTypes.default.string.isRequired,
  subheadline: _propTypes.default.string
};
ContactBlock.defaultProps = {
  headline: "Not seeing what you're looking for?",
  subheadline: "Contact our team to talk about custom options.",
  contactLink: 'https://support.leadpages.net/hc/en-us/requests/new/'
};
var _default = ContactBlock;
exports.default = _default;