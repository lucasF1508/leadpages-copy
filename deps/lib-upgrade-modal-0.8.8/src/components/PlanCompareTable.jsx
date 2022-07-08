import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Portal from '@material-ui/core/Portal';
import Typography from '@material-ui/core/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ALL_PLANS,
  BREAKPOINTS,
  FLOWS,
  MOST_POPULAR,
  PLAN_NAMES,
  PLAN_PERIODS,
  TWO_COL_MAX_WIDTH,
} from '../constants';
import { BUNDLE_SHAPE, COUPON_SHAPE } from '../constants/types';
import PlanColumn from './PlanColumn';
import PlanCompareHeader from './PlanCompareHeader';
import PlanCompareStickyHeader from './PlanCompareNav';
import { getDisplayPrices } from '../utils/pricing';
import ContactBlockPlan from './ContactBlockPlan';

const useStyles = makeStyles(
  theme => ({
    swiper: ({ visiblePlans, isTwoColWithContactUs }) => ({
      maxWidth: isTwoColWithContactUs
        ? TWO_COL_MAX_WIDTH
        : theme.breakpoints.values.lg,
      padding: theme.spacing(0, 3, 3),
      width: '100%',
      position: 'relative',
      transitionProperty: 'transform',
      zIndex: 1,
      overflow: 'hidden',
      margin: '0 auto',
      boxSizing: 'border-box',
      '& .swiper-wrapper': {
        display: 'flex',
        boxSizing: 'content-box',
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: 1,
        transform: 'translate3d(0px,0,0)',
        [theme.breakpoints.up(BREAKPOINTS.SMALL)]: {
          justifyContent: visiblePlans < 3 ? 'center' : null,
        },
      },
    }),
    slide: ({ visiblePlans }) => ({
      flexShrink: 0,
      width: '100%',
      height: '100%',
      position: 'relative',
      transitionProperty: 'transform',
      '&:nth-child(2)': {
        // Remove margin for centering two plan view
        marginRight: visiblePlans === 2 ? '0 !important' : null,
      },
    }),
    sentinel: {
      height: 1,
      width: '100%',
    },
    taxes: {
      width: '100%',
      fontStyle: 'italic',
      color: theme.palette.grey[70],
      opacity: 0.9,
    },
  }),
  { classNamePrefix: 'PlanCompareTable' },
);

function getNextActiveSlide(
  isAboveSmall,
  flow,
  currentPlan,
  visiblePlanLevels,
) {
  if (flow !== FLOWS.UPGRADE) {
    const proIndex = visiblePlanLevels.indexOf(PLAN_NAMES.PRO);
    if (proIndex >= 0) return proIndex;
  }

  if (isAboveSmall || flow !== FLOWS.UPGRADE) {
    return 1;
  }

  return currentPlan?.level === PLAN_NAMES.PRO ? 0 : 1;
}

function getVisiblePlanLevels(visiblePlans, planOrder) {
  return visiblePlans
    ? Object.keys(visiblePlans).sort(function(levelA, levelB) {
        const a = visiblePlans[levelA].price;
        const b = visiblePlans[levelB].price;
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
      })
    : [];
}

const PlanCompareTable = ({
  currentPlan,
  previousPlan,
  plans,
  onSelectPlan,
  planOrder,
  headline,
  headerOffset,
  subheadline,
  coupon,
  bundle,
  flow,
  defaultBillingFrequency,
  portalStickyNav,
  hasAlternateFeatures,
  contactUsPlan,
  selectPlanButtonText,
  disableSelection,
}) => {
  const stickyNavSentinelTop = useRef(null);
  const stickyNavSentinelBottom = useRef(null);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const isAboveSmall = useMediaQuery(
    theme => theme.breakpoints.up(BREAKPOINTS.SMALL),
    { noSsr: true },
  );

  const [selectedBillingFrequency, setSelectedBillingFrequency] = useState(
    defaultBillingFrequency,
  );

  const visiblePlans = plans[selectedBillingFrequency];
  const visiblePlanLevels = getVisiblePlanLevels(visiblePlans, planOrder);
  const hasContactUsPlan = !!contactUsPlan;
  const isTwoColWithContactUs =
    visiblePlanLevels.length === 2 && hasContactUsPlan;

  const [activePlanIndex, setActivePlanIndex] = useState(
    getNextActiveSlide(isAboveSmall, flow, currentPlan, visiblePlanLevels),
  );
  const canChangePlanPeriod = !!(
    plans[PLAN_PERIODS.MONTHLY] && plans[PLAN_PERIODS.ANNUAL]
  );
  const showStaticNav = !isAboveSmall && canChangePlanPeriod;

  useEffect(() => {
    if (!canChangePlanPeriod) return;
    let topObserver;
    let bottomObserver;

    if ('IntersectionObserver' in window) {
      topObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            const targetInfo = entry.boundingClientRect;
            const rootBoundsInfo = entry.rootBounds;

            if (targetInfo.bottom < rootBoundsInfo.top) {
              setShowStickyNav(true);
            }

            if (
              targetInfo.bottom >= rootBoundsInfo.top &&
              targetInfo.bottom < rootBoundsInfo.bottom
            ) {
              setShowStickyNav(false);
            }
          });
        },
        { threshold: [0] },
      );
      topObserver.observe(stickyNavSentinelTop.current);

      bottomObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            const targetInfo = entry.boundingClientRect;
            const rootBoundsInfo = entry.rootBounds;
            const ratio = entry.intersectionRatio;

            if (targetInfo.bottom > rootBoundsInfo.top && ratio === 1) {
              setShowStickyNav(true);
            }

            if (
              targetInfo.top < rootBoundsInfo.top &&
              targetInfo.bottom < rootBoundsInfo.bottom
            ) {
              setShowStickyNav(false);
            }
          });
        },
        { threshold: [1] },
      );
      bottomObserver.observe(stickyNavSentinelBottom.current);
    }

    return () => {
      if (topObserver?.disconnect) {
        topObserver.disconnect();
      }
      if (bottomObserver?.disconnect) {
        bottomObserver.disconnect();
      }
    };
  }, [canChangePlanPeriod]);

  const swiperParams = {
    slidesPerView: 1.15,
    initialSlide: activePlanIndex,
    centeredSlides: true,
    spaceBetween: visiblePlanLevels.length > 1 ? 30 : null,
    breakpoints: {
      600: {
        slidesPerView: 1.4,
        centeredSlides: true,
      },
      700: {
        slidesPerView: 1.6,
        centeredSlides: true,
      },
      [BREAKPOINTS.SMALL]: {
        slidesPerView: isTwoColWithContactUs ? 2 : 3,
        centeredSlides: false,
      },
    },
  };

  const classes = useStyles({
    visiblePlans: visiblePlanLevels.length,
    isTwoColWithContactUs,
  });

  const handleChange = event => {
    const period = event.target.checked
      ? PLAN_PERIODS.ANNUAL
      : PLAN_PERIODS.MONTHLY;
    setSelectedBillingFrequency(period);
    if (isAboveSmall) {
      const idx = getNextActiveSlide(
        isAboveSmall,
        flow,
        currentPlan,
        visiblePlanLevels,
      );
      setActivePlanIndex(idx);
      window.setTimeout(() => {
        swiper.slideTo(idx);
      }, 0);
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'billingFrequencyToggled',
      switchTo: period,
    });
  };

  useEffect(() => {
    if (swiper) {
      const idx = getNextActiveSlide(
        isAboveSmall,
        flow,
        currentPlan,
        visiblePlanLevels,
      );
      setActivePlanIndex(idx);
      swiper.slideTo(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAboveSmall, swiper, flow, currentPlan]);

  const discountPrices = visiblePlanLevels.reduce(
    (acc, planLevel) => ({
      ...acc,
      [planLevel]: getDisplayPrices(
        visiblePlans[planLevel],
        plans,
        currentPlan,
        coupon,
        flow,
      ),
    }),
    {},
  );

  const handleStickyHeaderButtonClick = i => {
    if (!isAboveSmall) {
      swiper.slideTo(i);
      setActivePlanIndex(i);
    }
  };

  return (
    <>
      <PlanCompareHeader
        headline={headline}
        subheadline={subheadline}
        selectedBillingFrequency={selectedBillingFrequency}
        handleChange={handleChange}
        isAboveSmall={isAboveSmall}
        canChangePlanPeriod={canChangePlanPeriod}
      />
      {showStaticNav && (
        <PlanCompareStickyHeader
          activePlanIndex={activePlanIndex}
          discountPrices={discountPrices}
          handleChange={handleChange}
          handleClick={handleStickyHeaderButtonClick}
          headerOffset={headerOffset}
          selectedBillingFrequency={selectedBillingFrequency}
          useButton={!isAboveSmall}
          visiblePlanLevels={visiblePlanLevels}
        />
      )}
      {canChangePlanPeriod &&
        (portalStickyNav ? (
          <Portal container={document.getElementById('upgrade-modal-root')}>
            <PlanCompareStickyHeader
              activePlanIndex={activePlanIndex}
              discountPrices={discountPrices}
              handleChange={handleChange}
              handleClick={handleStickyHeaderButtonClick}
              headerOffset={headerOffset}
              selectedBillingFrequency={selectedBillingFrequency}
              useButton={!isAboveSmall}
              visiblePlanLevels={visiblePlanLevels}
              isVisible={showStickyNav}
              isSticky
            />
          </Portal>
        ) : (
          <PlanCompareStickyHeader
            activePlanIndex={activePlanIndex}
            discountPrices={discountPrices}
            handleChange={handleChange}
            handleClick={handleStickyHeaderButtonClick}
            headerOffset={headerOffset}
            selectedBillingFrequency={selectedBillingFrequency}
            useButton={!isAboveSmall}
            visiblePlanLevels={visiblePlanLevels}
            isVisible={showStickyNav}
            isSticky
          />
        ))}
      <div ref={stickyNavSentinelTop} className={classes.sentinel} />
      <Swiper
        onSlideChange={e => setActivePlanIndex(e.activeIndex)}
        onSwiper={swiper => setSwiper(swiper)}
        className={classes.swiper}
        data-qa-selector="plan-compare-table"
        {...swiperParams}
      >
        {visiblePlanLevels.map((planLevel, i) => {
          const plan = visiblePlans[planLevel];

          return (
            <SwiperSlide
              key={planLevel}
              className={clsx(classes.slide, {
                'swiper-no-swiping': isAboveSmall,
              })}
            >
              <PlanColumn
                currentPlan={currentPlan}
                previousPlan={previousPlan}
                onSelectPlan={onSelectPlan}
                plan={plan}
                flow={flow}
                billingFrequency={selectedBillingFrequency}
                planLevel={planLevel}
                isMostPopular={planLevel === MOST_POPULAR}
                savings={discountPrices[planLevel].savings}
                monthlyPrice={discountPrices[planLevel].monthly}
                monthlyComparePrice={discountPrices[planLevel].monthlyCompare}
                hasCoupon={discountPrices[planLevel].hasCoupon}
                bundle={bundle}
                hasAlternateFeatures={hasAlternateFeatures}
                selectPlanButtonText={selectPlanButtonText}
                disableSelection={disableSelection}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {contactUsPlan && <ContactBlockPlan {...contactUsPlan} />}
      <Typography
        variant="caption"
        className={classes.taxes}
        align="center"
        paragraph
      >
        Taxes may apply, where applicable
      </Typography>
      <div ref={stickyNavSentinelBottom} className={classes.sentinel} />
    </>
  );
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
  defaultBillingFrequency: PropTypes.oneOf([
    PLAN_PERIODS.ANNUAL,
    PLAN_PERIODS.MONTHLY,
  ]),
  dialogPortal: PropTypes.bool,
  hasAlternateFeatures: PropTypes.bool,
  contactUsPlan: PropTypes.shape({
    contactLink: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    subheadline: PropTypes.string.isRequired,
  }),
  selectPlanButtonText: PropTypes.string,
  disableSelection: PropTypes.bool,
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
  disableSelection: false,
};

export default PlanCompareTable;
