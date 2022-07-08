import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { ShadowBox } from '@lp/ui';
import PlanFrequencySwitch from './PlanFrequencySwitch';
import PlanCompareButton from './PlanCompareButton';
import { PLAN_PERIODS } from '../constants';
var useStyles = makeStyles(function (theme) {
  return {
    root: function root(_ref) {
      var headerOffset = _ref.headerOffset,
          isSticky = _ref.isSticky,
          isVisible = _ref.isVisible;
      return {
        backgroundColor: isSticky ? theme.palette.common.white : 'transparent',
        borderBottom: "1px solid ".concat(theme.palette.grey[10]),
        boxShadow: !isSticky && 'none',
        marginBottom: theme.spacing(3),
        padding: 0,
        position: isSticky ? 'fixed' : 'static',
        top: headerOffset,
        right: 0,
        textAlign: 'center',
        width: '100%',
        zIndex: 2,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: theme.transitions.create('opacity', {
          duration: theme.transitions.duration.shortest
        })
      };
    },
    divider: function divider(_ref2) {
      var isSticky = _ref2.isSticky;
      return {
        backgroundColor: isSticky ? theme.palette.grey[10] : 'transparent',
        marginTop: isSticky ? 0 : theme.spacing(2)
      };
    },
    buttons: {
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.lg
    }
  };
}, {
  classNamePrefix: 'PlanCompareNav'
});

var PlanCompareNav = function PlanCompareNav(_ref3) {
  var activePlanIndex = _ref3.activePlanIndex,
      discountPrices = _ref3.discountPrices,
      handleChange = _ref3.handleChange,
      _handleClick = _ref3.handleClick,
      headerOffset = _ref3.headerOffset,
      selectedBillingFrequency = _ref3.selectedBillingFrequency,
      visiblePlanLevels = _ref3.visiblePlanLevels,
      useButton = _ref3.useButton,
      isSticky = _ref3.isSticky,
      isVisible = _ref3.isVisible;
  var classes = useStyles({
    headerOffset: headerOffset,
    isSticky: isSticky,
    isVisible: isVisible
  });
  return /*#__PURE__*/React.createElement(ShadowBox, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(PlanFrequencySwitch, {
    selectedBillingFrequency: selectedBillingFrequency,
    handleChange: handleChange
  }), /*#__PURE__*/React.createElement(Divider, {
    className: classes.divider
  }), /*#__PURE__*/React.createElement(Grid, {
    role: "tablist",
    container: true,
    justify: visiblePlanLevels.length === 2 ? 'center' : 'flex-start',
    className: classes.buttons
  }, visiblePlanLevels.map(function (planLevel, i) {
    return /*#__PURE__*/React.createElement(PlanCompareButton, {
      key: planLevel,
      isActive: i === activePlanIndex,
      isSticky: isSticky,
      handleClick: function handleClick() {
        return _handleClick(i);
      },
      monthlyPrice: discountPrices[planLevel].monthly,
      planLevel: planLevel,
      useButton: useButton,
      width: 12 / visiblePlanLevels.length === 12 ? 12 : 4
    });
  })));
};

PlanCompareNav.propTypes = {
  activePlanIndex: PropTypes.number.isRequired,
  discountPrices: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  headerOffset: PropTypes.number.isRequired,
  selectedBillingFrequency: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL]).isRequired,
  visiblePlanLevels: PropTypes.arrayOf(PropTypes.string).isRequired,
  useButton: PropTypes.bool.isRequired,
  isSticky: PropTypes.bool,
  isVisible: PropTypes.bool
};
PlanCompareNav.defaultProps = {
  isSticky: false,
  isVisible: true
};
export default PlanCompareNav;