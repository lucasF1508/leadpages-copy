import { styled } from '@design'
import { FiChevronRight as ArrowRight } from '@react-icons/all-files/fi/FiChevronRight'
import { FiChevronLeft as ArrowLeft } from '@react-icons/all-files/fi/FiChevronLeft'
import { m as motion } from 'framer-motion'
import useCarousel from '@hooks/useCarousel'

const $TemplateTabsNavigation = styled('div', {
  position: 'relative',
  borderBottom: '2px solid $colors$lightGray3',
})

const $TemplateTabsNavigationInner = styled('div', {
  overflow: 'hidden',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  position: 'relative',
  maxWidth: '100%',
})

const $TemplateTabsNavigationContents = styled('nav', {
  display: 'flex',
  gap: '0.875rem',
})

const $TemplateTabsArrow = styled(motion.div, {
  position: 'absolute',
  top: 'calc(50% - 3px)',
  color: '$primary',
  padding: '$1',
  zIndex: 1,

  '&:first-of-type': {
    left: 0,
    transform: 'translate(-100%, -50%)',
  },

  '&:last-of-type': {
    right: 0,
    transform: 'translate(100%, -50%)',
  },

  '@>420': {
    display: 'none',
  },
})

const $TemplateTabsIndicator = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '3px',
  backgroundColor: '$primary',
  transform: 'scaleX(0)',
  transition: 'transform 0.3s ease',

  variants: {
    isActive: {
      true: {
        transform: 'scaleX(1)',
      },
    },
  },
})

const $TemplateTabsItem = styled('div', {
  position: 'relative',
  cursor: 'pointer',
  color: '$textAlt',
  paddingBottom: '$1_5',
  px: '$2_5',
  typeSizes: 'base',
  whiteSpace: 'nowrap',
  top: '1px',
  flex: '0 0 auto',

  '&:hover': {
    [`& ${$TemplateTabsIndicator}`]: {
      transform: 'scaleX(1)',
    },
  },

  variants: {
    isActive: {
      true: {
        color: '$primary',
      },
    },
  },
})

const $SliderGradient = styled('div', {
  bottom: 0,
  top: 0,
  position: 'absolute',
  width: '10px',

  variants: {
    side: {
      left: {
        left: '100%',
        background:
          'linear-gradient(90deg, #F9F9F9 0%, rgba(249, 249, 249, 0) 100%);',
      },
      right: {
        right: '100%',
        background:
          'linear-gradient(90deg, rgba(249, 249, 249, 0) 0%, #f9f9f9 100%);',
      },
    },
  },
})

const TemplateTabsNavigation = ({ setActiveTab, tabs, activeTab }) => {
  const { ref, scrollNext, scrollPrev, api } = useCarousel({
    align: 'start',
    inViewThreshold: 1.0,
    startIndex: 0,
    breakpoints: {
      '(min-width: 420px)': { active: false },
    },
  })

  return (
    <$TemplateTabsNavigation>
      <$TemplateTabsArrow
        onClick={scrollPrev}
        animate={{ opacity: api?.canScrollPrev() ? 1 : 0 }}
        exit={{ opacity: 0 }}
      >
        <$SliderGradient side="left" />
        <ArrowLeft />
      </$TemplateTabsArrow>
      <$TemplateTabsNavigationInner ref={ref}>
        <$TemplateTabsNavigationContents>
          {tabs?.map(({ key, title }) => (
            <$TemplateTabsItem
              onClick={() => setActiveTab(key)}
              key={key}
              isActive={activeTab === key}
            >
              {title}
              <$TemplateTabsIndicator isActive={activeTab === key} />
            </$TemplateTabsItem>
          ))}
        </$TemplateTabsNavigationContents>
      </$TemplateTabsNavigationInner>
      <$TemplateTabsArrow
        onClick={scrollNext}
        animate={{ opacity: api?.canScrollNext() ? 1 : 0 }}
        exit={{ opacity: 0 }}
      >
        <$SliderGradient side="right" />
        <ArrowRight />
      </$TemplateTabsArrow>
    </$TemplateTabsNavigation>
  )
}

export default TemplateTabsNavigation
