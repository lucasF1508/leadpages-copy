import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Portal from '@material-ui/core/Portal';
import Typography from '@material-ui/core/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ALL_PLANS, BREAKPOINTS, FLOWS, MOST_POPULAR, PLAN_NAMES, PLAN_PERIODS, TWO_COL_MAX_WIDTH } from '../constants';
import { BUNDLE_SHAPE, COUPON_SHAPE } from '../constants/types';
import PlanColumn from './PlanColumn';
import PlanCompareHeader from './PlanCompareHeader';
import PlanCompareStickyHeader from './PlanCompareNav';
import { getDisplayPrices } from '../utils/pricing';
import ContactBlockPlan from './ContactBlockPlan';
var useStyles = makeStyles(function (theme) {
  return {
    swiper: function swiper(_ref) {
      var visiblePlans = _ref.visiblePlans,
          isTwoColWithContactUs = _ref.isTwoColWithContactUs;
      return {
        maxWidth: isTwoColWithContactUs ? TWO_COL_MAX_WIDTH : theme.breakpoints.values.lg,
        padding: theme.spacing(0, 3, 3),
        width: '100%',
        position: 'relative',
        transitionProperty: 'transform',
        zIndex: 1,
        overflow: 'hidden',
        margin: '0 auto',
        boxSizing: 'border-box',
        '& .swiper-wrapper': _defineProperty({
          display: 'flex',
          boxSizing: 'content-box',
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 1,
          transform: 'translate3d(0px,0,0)'
        }, theme.breakpoints.up(BREAKPOINTS.SMALL), {
          justifyContent: visiblePlans < 3 ? 'center' : null
        })
      };
    },
    slide: function slide(_ref2) {
      var visiblePlans = _ref2.visiblePlans;
      return {
        flexShrink: 0,
        width: '100%',
        height: '100%',
        position: 'relative',
        transitionProperty: 'transform',
        '&:nth-child(2)': {
          // Remove margin for centering two plan view
          marginRight: visiblePlans === 2 ? '0 !important' : null
        }
      };
    },
    sentinel: {
      height: 1,
      width: '100%'
    },
    taxes: {
      width: '100%',
      fontStyle: 'italic',
      color: theme.palette.grey[70],
      opacity: 0.9
    }
  };
}, {
  classNamePrefix: 'PlanCompareTable'
});

function getNextActiveSlide(isAboveSmall, flow, currentPlan, visiblePlanLevels) {
  if (flow !== FLOWS.UPGRADE) {
    var proIndex = visiblePlanLevels.indexOf(PLAN_NAMES.PRO);
    if (proIndex >= 0) return proIndex;
  }

  if (isAboveSmall || flow !== FLOWS.UPGRADE) {
    return 1;
  }

  return (currentPlan === null || currentPlan === void 0 ? void 0 : currentPlan.level) === PLAN_NAMES.PRO ? 0 : 1;
}

function getVisiblePlanLevels(visiblePlans, planOrder) {
  return visiblePlans ? Object.keys(visiblePlans).sort(function (levelA, levelB) {
    var a = visiblePlans[levelA].price;
    var b = visiblePlans[levelB].price;

    if (planOrder === 'ascending') {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }
    } else if (planOrder === 'descending') {
      if (a < b) {
        return 1;
      }

      if (a > b) {
        return -1;
      }
    }

    return 0;
  }) : [];
}

var PlanCompareTable = function PlanCompareTable(_ref3) {
  var currentPlan = _ref3.currentPlan,
      previousPlan = _ref3.previousPlan,
      plans = _ref3.plans,
      onSelectPlan = _ref3.onSelectPlan,
      planOrder = _ref3.planOrder,
      headline = _ref3.headline,
      headerOffset = _ref3.headerOffset,
      subheadline = _ref3.subheadline,
      coupon = _ref3.coupon,
      bundle = _ref3.bundle,
      flow = _ref3.flow,
      defaultBillingFrequency = _ref3.defaultBillingFrequency,
      portalStickyNav = _ref3.portalStickyNav,
      hasAlternateFeatures = _ref3.hasAlternateFeatures,
      contactUsPlan = _ref3.contactUsPlan,
      selectPlanButtonText = _ref3.selectPlanButtonText,
      disableSelection = _ref3.disableSelection;
  var stickyNavSentinelTop = useRef(null);
  var stickyNavSentinelBottom = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showStickyNav = _useState2[0],
      setShowStickyNav = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      swiper = _useState4[0],
      setSwiper = _useState4[1];

  var isAboveSmall = useMediaQuery(function (theme) {
    return theme.breakpoints.up(BREAKPOINTS.SMALL);
  }, {
    noSsr: true
  });

  var _useState5 = useState(defaultBillingFrequency),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedBillingFrequency = _useState6[0],
      setSelectedBillingFrequency = _useState6[1];

  var visiblePlans = plans[selectedBillingFrequency];
  var visiblePlanLevels = getVisiblePlanLevels(visiblePlans, planOrder);
  var hasContactUsPlan = !!contactUsPlan;
  var isTwoColWithContactUs = visiblePlanLevels.length === 2 && hasContactUsPlan;

  var _useState7 = useState(getNextActiveSlide(isAboveSmall, flow, currentPlan, visiblePlanLevels)),
      _useState8 = _slicedToArray(_useState7, 2),
      activePlanIndex = _useState8[0],
      setActivePlanIndex = _useState8[1];

  var canChangePlanPeriod = !!(plans[PLAN_PERIODS.MONTHLY] && plans[PLAN_PERIODS.ANNUAL]);
  var showStaticNav = !isAboveSmall && canChangePlanPeriod;
  useEffect(function () {
    if (!canChangePlanPeriod) return;
    var topObserver;
    var bottomObserver;

    if ('IntersectionObserver' in window) {
      topObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          var targetInfo = entry.boundingClientRect;
          var rootBoundsInfo = entry.rootBounds;

          if (targetInfo.bottom < rootBoundsInfo.top) {
            setShowStickyNav(true);
          }

          if (targetInfo.bottom >= rootBoundsInfo.top && targetInfo.bottom < rootBoundsInfo.bottom) {
            setShowStickyNav(false);
          }
        });
      }, {
        threshold: [0]
      });
      topObserver.observe(stickyNavSentinelTop.current);
      bottomObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          var targetInfo = entry.boundingClientRect;
          var rootBoundsInfo = entry.rootBounds;
          var ratio = entry.intersectionRatio;

          if (targetInfo.bottom > rootBoundsInfo.top && ratio === 1) {
            setShowStickyNav(true);
          }

          if (targetInfo.top < rootBoundsInfo.top && targetInfo.bottom < rootBoundsInfo.bottom) {
            setShowStickyNav(false);
          }
        });
      }, {
        threshold: [1]
      });
      bottomObserver.observe(stickyNavSentinelBottom.current);
    }

    return function () {
      var _topObserver, _bottomObserver;

      if ((_topObserver = topObserver) === null || _topObserver === void 0 ? void 0 : _topObserver.disconnect) {
        topObserver.disconnect();
      }

      if ((_bottomObserver = bottomObserver) === null || _bottomObserver === void 0 ? void 0 : _bottomObserver.disconnect) {
        bottomObserver.disconnect();
      }
    };
  }, [canChangePlanPeriod]);
  var swiperParams = {
    slidesPerView: 1.15,
    initialSlide: activePlanIndex,
    centeredSlides: true,
    spaceBetween: visiblePlanLevels.length > 1 ? 30 : null,
    breakpoints: _defineProperty({
      600: {
        slidesPerView: 1.4,
        centeredSlides: true
      },
      700: {
        slidesPerView: 1.6,
        centeredSlides: true
      }
    }, BREAKPOINTS.SMALL, {
      slidesPerView: isTwoColWithContactUs ? 2 : 3,
      centeredSlides: false
    })
  };
  var classes = useStyles({
    visiblePlans: visiblePlanLevels.length,
    isTwoColWithContactUs: isTwoColWithContactUs
  });

  var handleChange = function handleChange(event) {
    var period = event.target.checked ? PLAN_PERIODS.ANNUAL : PLAN_PERIODS.MONTHLY;
    setSelectedBillingFrequency(period);

    if (isAboveSmall) {
      var idx = getNextActiveSlide(isAboveSmall, flow, currentPlan, visiblePlanLevels);
      setActivePlanIndex(idx);
      window.setTimeout(function () {
        swiper.slideTo(idx);
      }, 0);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'billingFrequencyToggled',
      switchTo: period
    });
  };

  useEffect(function () {
    if (swiper) {
      var idx = getNextActiveSlide(isAboveSmall, flow, currentPlan, visiblePlanLevels);
      setActivePlanIndex(idx);
      swiper.slideTo(idx);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isAboveSmall, swiper, flow, currentPlan]);
  var discountPrices = visiblePlanLevels.reduce(function (acc, planLevel) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, planLevel, getDisplayPrices(visiblePlans[planLevel], plans, currentPlan, coupon, flow)));
  }, {});

  var handleStickyHeaderButtonClick = function handleStickyHeaderButtonClick(i) {
    if (!isAboveSmall) {
      swiper.slideTo(i);
      setActivePlanIndex(i);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanCompareHeader, {
    headline: headline,
    subheadline: subheadline,
    selectedBillingFrequency: selectedBillingFrequency,
    handleChange: handleChange,
    isAboveSmall: isAboveSmall,
    canChangePlanPeriod: canChangePlanPeriod
  }), showStaticNav && /*#__PURE__*/React.createElement(PlanCompareStickyHeader, {
    activePlanIndex: activePlanIndex,
    discountPrices: discountPrices,
    handleChange: handleChange,
    handleClick: handleStickyHeaderButtonClick,
    headerOffset: headerOffset,
    selectedBillingFrequency: selectedBillingFrequency,
    useButton: !isAboveSmall,
    visiblePlanLevels: visiblePlanLevels
  }), canChangePlanPeriod && (portalStickyNav ? /*#__PURE__*/React.createElement(Portal, {
    container: document.getElementById('upgrade-modal-root')
  }, /*#__PURE__*/React.createElement(PlanCompareStickyHeader, {
    activePlanIndex: activePlanIndex,
    discountPrices: discountPrices,
    handleChange: handleChange,
    handleClick: handleStickyHeaderButtonClick,
    headerOffset: headerOffset,
    selectedBillingFrequency: selectedBillingFrequency,
    useButton: !isAboveSmall,
    visiblePlanLevels: visiblePlanLevels,
    isVisible: showStickyNav,
    isSticky: true
  })) : /*#__PURE__*/React.createElement(PlanCompareStickyHeader, {
    activePlanIndex: activePlanIndex,
    discountPrices: discountPrices,
    handleChange: handleChange,
    handleClick: handleStickyHeaderButtonClick,
    headerOffset: headerOffset,
    selectedBillingFrequency: selectedBillingFrequency,
    useButton: !isAboveSmall,
    visiblePlanLevels: visiblePlanLevels,
    isVisible: showStickyNav,
    isSticky: true
  })), /*#__PURE__*/React.createElement("div", {
    ref: stickyNavSentinelTop,
    className: classes.sentinel
  }), /*#__PURE__*/React.createElement(Swiper, _extends({
    onSlideChange: function onSlideChange(e) {
      return setActivePlanIndex(e.activeIndex);
    },
    onSwiper: function onSwiper(swiper) {
      return setSwiper(swiper);
    },
    className: classes.swiper,
    "data-qa-selector": "plan-compare-table"
  }, swiperParams), visiblePlanLevels.map(function (planLevel, i) {
    var plan = visiblePlans[planLevel];
    return /*#__PURE__*/React.createElement(SwiperSlide, {
      key: planLevel,
      className: clsx(classes.slide, {
        'swiper-no-swiping': isAboveSmall
      })
    }, /*#__PURE__*/React.createElement(PlanColumn, {
      currentPlan: currentPlan,
      previousPlan: previousPlan,
      onSelectPlan: onSelectPlan,
      plan: plan,
      flow: flow,
      billingFrequency: selectedBillingFrequency,
      planLevel: planLevel,
      isMostPopular: planLevel === MOST_POPULAR,
      savings: discountPrices[planLevel].savings,
      monthlyPrice: discountPrices[planLevel].monthly,
      monthlyComparePrice: discountPrices[planLevel].monthlyCompare,
      hasCoupon: discountPrices[planLevel].hasCoupon,
      bundle: bundle,
      hasAlternateFeatures: hasAlternateFeatures,
      selectPlanButtonText: selectPlanButtonText,
      disableSelection: disableSelection
    }));
  })), contactUsPlan && /*#__PURE__*/React.createElement(ContactBlockPlan, contactUsPlan), /*#__PURE__*/React.createElement(Typography, {
    variant: "caption",
    className: classes.taxes,
    align: "center",
    paragraph: true
  }, "Taxes may apply, where applicable"), /*#__PURE__*/React.createElement("div", {
    ref: stickyNavSentinelBottom,
    className: classes.sentinel
  }));
};

PlanCompareTable.propTypes = {
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  plans: PropTypes.object,
  onSelectPlan: PropTypes.func.isRequired,
  planOrder: PropTypes.oneOf(['ascending', 'descending']),
  headerOffset: PropTypes.number,
  flow: PropTypes.oneOf([FLOWS.SIGNUP, FLOWS.UPGRADE, FLOWS.REACTIVATION]),
  coupon: PropTypes.shape(COUPON_SHAPE),
  bundle: PropTypes.shape(BUNDLE_SHAPE),
  previousPlan: PropTypes.string,
  defaultBillingFrequency: PropTypes.oneOf([PLAN_PERIODS.ANNUAL, PLAN_PERIODS.MONTHLY]),
  dialogPortal: PropTypes.bool,
  hasAlternateFeatures: PropTypes.bool,
  contactUsPlan: PropTypes.shape({
    contactLink: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    subheadline: PropTypes.string.isRequired
  }),
  selectPlanButtonText: PropTypes.string,
  disableSelection: PropTypes.bool
};
PlanCompareTable.defaultProps = {
  plans: ALL_PLANS,
  planOrder: 'descending',
  headline: null,
  subheadline: null,
  headerOffset: 0,
  flow: FLOWS.SIGNUP,
  previousPlan: null,
  defaultBillingFrequency: PLAN_PERIODS.ANNUAL,
  portalStickyNav: false,
  hasAlternateFeatures: false,
  contactUsPlan: null,
  selectPlanButtonText: null,
  disableSelection: false
};
export default PlanCompareTable;