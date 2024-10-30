import { styled } from '@design'
import { AnimatePresence, m as motion } from 'framer-motion'
import Text from '@components/Text'
import { create } from 'zustand'
import TemplateTabsDetails from './TemplateTabsDetails'
import TemplateTabsIncluded from './TemplateTabsIncluded'
import TemplateTabsNavigation from './TemplateTabsNavigation'
import TemplateTabsReviews from './TemplateTabsReviews'

export const useTabsStore = create((set) => ({
  activeTab: 'details',
  setActiveTab: (activeTab) => set({ activeTab }),
}))

const $TemplateTabs = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.625rem',
})

const $TemplateTabsContent = styled('div', {
  position: 'relative',
})

const $TemplateTab = styled(motion.div, {})

export const $TemplateTabInner = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$4_5',

  '@>1025': {
    flexDirection: 'row',
  },
})

export const $TemplateTabColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  gap: '$3',

  a: {
    minWidth: 'unset',
    px: '$3',
  },

  variants: {
    columnSpan: {
      small: {
        '@>1025': {
          maxWidth: '$cols4',
        },
      },
      large: {
        '@>1025': {
          maxWidth: '$cols8',
        },
      },
    },
  },

  defaultVariants: {
    columnSpan: 'small',
  },
})

export const $TemplateTabData = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4_5',

  '@>1025': {
    maxWidth: '$cols4',
  },
})

export const $TemplateTabContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  w: '100%',

  '@>1025': {
    maxWidth: '$cols6',
    margin: '0 auto',
  },
})

export const $TemplateTabTitle = styled('h2', {
  typeSizes: '3xl',
  fontWeight: '$bold',

  '@>769': {
    typeSizes: '4xl',
  },

  '@>1025': {
    typeSizes: '5xl',
  },
})

export const $TemplateTabText = styled(Text, {
  lineHeight: '$l',
  color: '$textAlt',

  '@>1025': {
    lineHeight: '1.6',
  },
})

const $TabHidden = styled('div', {
  visibility: 'hidden',
  position: 'absolute',
  top: 0,
  left: 0,
  height: 0,
  width: 0,
})

const TemplateTabs = ({
  details = {},
  reviews = {},
  included = {},
  kind,
  defaultReviews,
}) => {
  const { activeTab, setActiveTab } = useTabsStore()
  const tabs = [
    {
      title: 'Details',
      key: 'details',
      element: TemplateTabsDetails,
      data: details,
    },
    {
      title: "What's Included",
      key: 'included',
      element: TemplateTabsIncluded,
      data: included,
    },
    {
      title: 'Reviews',
      key: 'reviews',
      element: TemplateTabsReviews,
      data: { ...reviews, defaultReviews },
    },
  ]

  return (
    <$TemplateTabs>
      <TemplateTabsNavigation
        setActiveTab={setActiveTab}
        tabs={tabs}
        activeTab={activeTab}
      />
      <$TemplateTabsContent>
        <AnimatePresence initial={false} mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.key && (
                <$TemplateTab
                  id={tab.key}
                  key={tab.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <tab.element data={tab.data} kind={kind} />
                </$TemplateTab>
              )
          )}
        </AnimatePresence>
        {tabs.map(
          (tab) =>
            activeTab !== tab.key && (
              <$TabHidden key={tab.key} id={tab.key} aria-hidden>
                <tab.element data={tab.data} kind={kind} />
              </$TabHidden>
            )
        )}
      </$TemplateTabsContent>
    </$TemplateTabs>
  )
}

export default TemplateTabs
