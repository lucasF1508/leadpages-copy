"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _Portal = _interopRequireDefault(require("@material-ui/core/Portal"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _react2 = require("swiper/react");

var _constants = require("../constants");

var _types = require("../constants/types");

var _PlanColumn = _interopRequireDefault(require("./PlanColumn"));

var _PlanCompareHeader = _interopRequireDefault(require("./PlanCompareHeader"));

var _PlanCompareNav = _interopRequireDefault(require("./PlanCompareNav"));

var _pricing = require("../utils/pricing");

var _ContactBlockPlan = _interopRequireDefault(require("./ContactBlockPlan"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    swiper: function swiper(_ref) {
      var visiblePlans = _ref.visiblePlans,
          isTwoColWithContactUs = _ref.isTwoColWithContactUs;
      return {
        maxWidth: isTwoColWithContactUs ? _constants.TWO_COL_MAX_WIDTH : theme.breakpoints.values.lg,
        padding: theme.spacing(0, 3, 3),
        width: '100%',
        position: 'relative',
        transitionProperty: 'transform',
        zIndex: 1,
        overflow: 'hidden',
        margin: '0 auto',
        boxSizing: 'border-box',
        '& .swiper-wrapper': (0, _defineProperty2.default)({
          display: 'flex',
          boxSizing: 'content-box',
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 1,
          transform: 'translate3d(0px,0,0)'
        }, theme.breakpoints.up(_constants.BREAKPOINTS.SMALL), {
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
  if (flow !== _constants.FLOWS.UPGRADE) {
    var proIndex = visiblePlanLevels.indexOf(_constants.PLAN_NAMES.PRO);
    if (proIndex >= 0) return proIndex;
  }

  if (isAboveSmall || flow !== _constants.FLOWS.UPGRADE) {
    return 1;
  }

  return (currentPlan === null || currentPlan === void 0 ? void 0 : currentPlan.level) === _constants.PLAN_NAMES.PRO ? 0 : 1;
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
  var stickyNavSentinelTop = (0, _react.useRef)(null);
  var stickyNavSentinelBottom = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showStickyNav = _useState2[0],
      setShowStickyNav = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      swiper = _useState4[0],
      setSwiper = _useState4[1];

  var isAboveSmall = (0, _useMediaQuery.default)(function (theme) {
    return theme.breakpoints.up(_constants.BREAKPOINTS.SMALL);
  }, {
    noSsr: true
  });

  var _useState5 = (0, _react.useState)(defaultBillingFrequency),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      selectedBillingFrequency = _useState6[0],
      setSelectedBillingFrequency = _useState6[1];

  var visiblePlans = plans[selectedBillingFrequency];
  var visiblePlanLevels = getVisiblePlanLevels(visiblePlans, planOrder);
  var hasContactUsPlan = !!contactUsPlan;
  var isTwoColWithContactUs = visiblePlanLevels.length === 2 && hasContactUsPlan;

  var _useState7 = (0, _react.useState)(getNextActiveSlide(isAboveSmall, flow, currentPlan, visiblePlanLevels)),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      activePlanIndex = _useState8[0],
      setActivePlanIndex = _useState8[1];

  var canChangePlanPeriod = !!(plans[_constants.PLAN_PERIODS.MONTHLY] && plans[_constants.PLAN_PERIODS.ANNUAL]);
  var showStaticNav = !isAboveSmall && canChangePlanPeriod;
  (0, _react.useEffect)(function () {
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
    breakpoints: (0, _defineProperty2.default)({
      600: {
        slidesPerView: 1.4,
        centeredSlides: true
      },
      700: {
        slidesPerView: 1.6,
        centeredSlides: true
      }
    }, _constants.BREAKPOINTS.SMALL, {
      slidesPerView: isTwoColWithContactUs ? 2 : 3,
      centeredSlides: false
    })
  };
  var classes = useStyles({
    visiblePlans: visiblePlanLevels.length,
    isTwoColWithContactUs: isTwoColWithContactUs
  });

  var handleChange = function handleChange(event) {
    var period = event.target.checked ? _constants.PLAN_PERIODS.ANNUAL : _constants.PLAN_PERIODS.MONTHLY;
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

  (0, _react.useEffect)(function () {
    if (swiper) {
      var idx = getNextActiveSlide(isAboveSmall, flow, currentPlan, visiblePlanLevels);
      setActivePlanIndex(idx);
      swiper.slideTo(idx);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isAboveSmall, swiper, flow, currentPlan]);
  var discountPrices = visiblePlanLevels.reduce(function (acc, planLevel) {
    return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, acc), {}, (0, _defineProperty2.default)({}, planLevel, (0, _pricing.getDisplayPrices)(visiblePlans[planLevel], plans, currentPlan, coupon, flow)));
  }, {});

  var handleStickyHeaderButtonClick = function handleStickyHeaderButtonClick(i) {
    if (!isAboveSmall) {
      swiper.slideTo(i);
      setActivePlanIndex(i);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PlanCompareHeader.default, {
    headline: headline,
    subheadline: subheadline,
    selectedBillingFrequency: selectedBillingFrequency,
    handleChange: handleChange,
    isAboveSmall: isAboveSmall,
    canChangePlanPeriod: canChangePlanPeriod
  }), showStaticNav && /*#__PURE__*/_react.default.createElement(_PlanCompareNav.default, {
    activePlanIndex: activePlanIndex,
    discountPrices: discountPrices,
    handleChange: handleChange,
    handleClick: handleStickyHeaderButtonClick,
    headerOffset: headerOffset,
    selectedBillingFrequency: selectedBillingFrequency,
    useButton: !isAboveSmall,
    visiblePlanLevels: visiblePlanLevels
  }), canChangePlanPeriod && (portalStickyNav ? /*#__PURE__*/_react.default.createElement(_Portal.default, {
    container: document.getElementById('upgrade-modal-root')
  }, /*#__PURE__*/_react.default.createElement(_PlanCompareNav.default, {
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
  })) : /*#__PURE__*/_react.default.createElement(_PlanCompareNav.default, {
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
  })), /*#__PURE__*/_react.default.createElement("div", {
    ref: stickyNavSentinelTop,
    className: classes.sentinel
  }), /*#__PURE__*/_react.default.createElement(_react2.Swiper, (0, _extends2.default)({
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
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: planLevel,
      className: (0, _clsx.default)(classes.slide, {
        'swiper-no-swiping': isAboveSmall
      })
    }, /*#__PURE__*/_react.default.createElement(_PlanColumn.default, {
      currentPlan: currentPlan,
      previousPlan: previousPlan,
      onSelectPlan: onSelectPlan,
      plan: plan,
      flow: flow,
      billingFrequency: selectedBillingFrequency,
      planLevel: planLevel,
      isMostPopular: planLevel === _constants.MOST_POPULAR,
      savings: discountPrices[planLevel].savings,
      monthlyPrice: discountPrices[planLevel].monthly,
      monthlyComparePrice: discountPrices[planLevel].monthlyCompare,
      hasCoupon: discountPrices[planLevel].hasCoupon,
      bundle: bundle,
      hasAlternateFeatures: hasAlternateFeatures,
      selectPlanButtonText: selectPlanButtonText,
      disableSelection: disableSelection
    }));
  })), contactUsPlan && /*#__PURE__*/_react.default.createElement(_ContactBlockPlan.default, contactUsPlan), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "caption",
    className: classes.taxes,
    align: "center",
    paragraph: true
  }, "Taxes may apply, where applicable"), /*#__PURE__*/_react.default.createElement("div", {
    ref: stickyNavSentinelBottom,
    className: classes.sentinel
  }));
};

PlanCompareTable.propTypes = {
  headline: _propTypes.default.string,
  subheadline: _propTypes.default.string,
  plans: _propTypes.default.object,
  onSelectPlan: _propTypes.default.func.isRequired,
  planOrder: _propTypes.default.oneOf(['ascending', 'descending']),
  headerOffset: _propTypes.default.number,
  flow: _propTypes.default.oneOf([_constants.FLOWS.SIGNUP, _constants.FLOWS.UPGRADE, _constants.FLOWS.REACTIVATION]),
  coupon: _propTypes.default.shape(_types.COUPON_SHAPE),
  bundle: _propTypes.default.shape(_types.BUNDLE_SHAPE),
  previousPlan: _propTypes.default.string,
  defaultBillingFrequency: _propTypes.default.oneOf([_constants.PLAN_PERIODS.ANNUAL, _constants.PLAN_PERIODS.MONTHLY]),
  dialogPortal: _propTypes.default.bool,
  hasAlternateFeatures: _propTypes.default.bool,
  contactUsPlan: _propTypes.default.shape({
    contactLink: _propTypes.default.string.isRequired,
    headline: _propTypes.default.string.isRequired,
    subheadline: _propTypes.default.string.isRequired
  }),
  selectPlanButtonText: _propTypes.default.string,
  disableSelection: _propTypes.default.bool
};
PlanCompareTable.defaultProps = {
  plans: _constants.ALL_PLANS,
  planOrder: 'descending',
  headline: null,
  subheadline: null,
  headerOffset: 0,
  flow: _constants.FLOWS.SIGNUP,
  previousPlan: null,
  defaultBillingFrequency: _constants.PLAN_PERIODS.ANNUAL,
  portalStickyNav: false,
  hasAlternateFeatures: false,
  contactUsPlan: null,
  selectPlanButtonText: null,
  disableSelection: false
};
var _default = PlanCompareTable;
exports.default = _default;