import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FullScreenDialogTitle } from '@lp/ui';
import PlanFrequencySwitch from './PlanFrequencySwitch';
import { BREAKPOINTS, PLAN_PERIODS } from '../constants';
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      width: '100%'
    },
    title: function title(_ref) {
      var isStandalone = _ref.isStandalone;
      return {
        paddingLeft: isStandalone ? 0 : null,
        paddingRight: isStandalone ? 0 : null,
        paddingTop: isStandalone ? 0 : theme.spacing(2)
      };
    },
    subheadContainer: function subheadContainer(_ref2) {
      var isStandalone = _ref2.isStandalone;
      return _defineProperty({
        marginBottom: theme.spacing(3)
      }, theme.breakpoints.up(BREAKPOINTS.SMALL), {
        marginBottom: isStandalone ? 36 : 108
      });
    },
    switch: {
      marginTop: theme.spacing(3)
    }
  };
}, {
  classNamePrefix: 'PlanCompareHeader'
});

var PlanCompareHeader = function PlanCompareHeader(_ref4) {
  var headline = _ref4.headline,
      subheadline = _ref4.subheadline,
      selectedBillingFrequency = _ref4.selectedBillingFrequency,
      handleChange = _ref4.handleChange,
      canChangePlanPeriod = _ref4.canChangePlanPeriod,
      isAboveSmall = _ref4.isAboveSmall;
  var isStandalone = !headline && !subheadline;
  var classes = useStyles({
    isStandalone: isStandalone
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(FullScreenDialogTitle, {
    className: classes.title,
    classesProp: {
      subheadContainer: classes.subheadContainer
    },
    headline: headline,
    subheadline: subheadline,
    justify: isStandalone ? 'center' : 'space-between'
  }, isAboveSmall && canChangePlanPeriod && /*#__PURE__*/React.createElement(PlanFrequencySwitch, {
    className: classes.switch,
    selectedBillingFrequency: selectedBillingFrequency,
    handleChange: handleChange
  })));
};

PlanCompareHeader.propTypes = {
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  selectedBillingFrequency: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL]).isRequired,
  handleChange: PropTypes.func.isRequired,
  isAboveSmall: PropTypes.bool.isRequired,
  canChangePlanPeriod: PropTypes.bool.isRequired
};
PlanCompareHeader.defaultProps = {
  headline: null,
  subheadline: null
};
export default PlanCompareHeader;