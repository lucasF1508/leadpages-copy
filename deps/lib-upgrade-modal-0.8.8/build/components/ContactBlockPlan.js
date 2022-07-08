"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _ui = require("@lp/ui");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _constants = require("../constants");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: theme.spacing(3, 'auto', 6),
      maxWidth: _constants.TWO_COL_MAX_WIDTH,
      padding: theme.spacing(0, 3)
    },
    contactBlock: (0, _defineProperty2.default)({
      boxSizing: 'border-box',
      padding: theme.spacing(0, 7)
    }, theme.breakpoints.down(_constants.BREAKPOINTS.SMALL), {
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
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
  }, /*#__PURE__*/_react.default.createElement(_ui.VSTypography, {
    className: classes.headline,
    component: "h3",
    variant: "h4"
  }, headline), subheadline && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.subheadline
  }, subheadline)), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.link,
    href: contactLink,
    variant: "outlined",
    size: "medium"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: classes.buttonText
  }, "Contact Us"), /*#__PURE__*/_react.default.createElement(_ChevronRight.default, null))));
};

ContactBlockPlan.propTypes = {
  contactLink: _propTypes.default.string.isRequired,
  headline: _propTypes.default.string.isRequired,
  subheadline: _propTypes.default.string.isRequired
};
var _default = ContactBlockPlan;
exports.default = _default;