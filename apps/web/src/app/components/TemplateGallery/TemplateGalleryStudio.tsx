'use client'

import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useInfiniteScrollRef, useTemplateState } from '@lp/template-gallery'
import { AnimatePresence, motion } from 'motion/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useShallow } from 'zustand/react/shallow'
import AnimateChangeInHeight from '@/components/Framer/AnimateChangeInHeight'
import Section from '@/components/Section'
import TemplateSwitch, { type TemplateFilterType } from '@/components/TemplateSwitch'
import templateGalleryStore from '@/stores/templateGalleryStore'
import { TemplateKind } from '@/types/template-constants'
import TemplateGalleryCards, {
  TemplateGalleryCardsLoading,
} from './TemplateGalleryCards'
import TemplateGalleryLegacyBanner from './TemplateGalleryLegacyBanner'
import TemplateGalleryNoResults from './TemplateGalleryNoResults'
import TemplateGallerySearch from './TemplateGallerySearch'
import TemplateGallerySidebar, {
  TemplateGallerySidebarLoading,
} from './TemplateGallerySidebar'
import TemplateGalleryToggle from './TemplateGalleryToggle'

const baseUrl = process.env.STARGATE_API_TEMPLATES_URL!

/**
 * Fetch templates from Sanity that don't have valid Mandrel IDs
 */
const fetchSanityTemplatesWithoutMandrelId = async (kind: TemplateKind) => {
  try {
    // Map TemplateKind to the value expected by the API
    const kindValue = kind === TemplateKind.Leadpage ? 'Leadpage' : 'Site'
    
    const response = await fetch('/api/sanity-templates', {
      body: JSON.stringify({ kind: kindValue }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
    
    if (!response.ok) {
      return []
    }
    
    const data = await response.json()
    
    return data.templates || []
  } catch (error: any) {
    return []
  }
}

interface TemplateShowcase {
  "page": 0 | 1
  "section": 0 | 1
}

interface GalleryComponentsShowcase {
  "collapseBtn": 0 | 1
  "showAll": 0 | 1
  "switch": 0 | 1
}
interface TemplateGalleryStudioProps {
  galleryComponentsShowcase: GalleryComponentsShowcase,
  kind?: TemplateKind,
  templateShowcase?: TemplateShowcase,
}

/**
 * Filters out templates that have a valid Mandrel ID
 * Only includes templates without Mandrel ID or with invalid/test IDs
 */
const filterTemplatesWithoutMandrelId = (templates: any[]) => templates.filter((template) => {
    const templateId = template?._meta?.id || template?.template?.id || ''
    if (!templateId || templateId.trim() === '') {
      return true // Include if no ID
    }
    if (
      templateId.includes('example') ||
      templateId.includes('test') ||
      templateId.includes('ejemplo') ||
      templateId.includes('prueba')
    ) {
      return true // Include if temporary/test ID
    }
    if (templateId.length < 10) {
      return true // Include if short/invalid ID
    }
    return false // Exclude if valid Mandrel ID
  })

const TemplateGalleryStudio = ({
  galleryComponentsShowcase = {
    collapseBtn: 0,
    showAll: 1,
    switch: 0,
  },
  kind = TemplateKind.Leadpage,
  templateShowcase = {
    page: 1,
    section: 0,
  },
}: TemplateGalleryStudioProps) => {
  const showAllEnabled = galleryComponentsShowcase?.showAll === 1
  const showPageEnabled = templateShowcase?.page === 1
  const showSectionEnabled = templateShowcase?.section === 1

  const [activeFilter, setActiveFilter] =
    useState<TemplateFilterType>('all')
  const [viewMode, setViewMode] = useState<'all' | 'summary'>(
    showAllEnabled ? 'all' : 'summary'
  )

  const {
    baseFilters,
    generateQueryStringFromPath,
    legacyTemplateFilter,
    onUpdateQueryString,
    tracker,
  } = templateGalleryStore(
    useShallow((state) => ({
      baseFilters: state.baseFilters,
      generateQueryStringFromPath: state.generateQueryStringFromPath,
      legacyTemplateFilter: state.legacyTemplateFilter,
      onUpdateQueryString: state.onUpdateQueryString,
      tracker: state.tracker,
    }))
  )

  const queryString = generateQueryStringFromPath(
    usePathname()!,
    useSearchParams()!
  )

  const [pageState, pageActions] = useTemplateState({
    baseFilters,
    baseUrl,
    hideSidebar: false,
    kind: TemplateKind.Leadpage,
    onUpdateQueryString,
    queryString,
    tracker,
  })

  const [sectionState, sectionActions] = useTemplateState({
    baseFilters,
    baseUrl,
    hideSidebar: false,
    kind: TemplateKind.Site,
    onUpdateQueryString,
    queryString,
    tracker,
  })

  // Fetch templates from Sanity that don't have Mandrel IDs
  const [sanityPageTemplates, setSanityPageTemplates] = useState<any[]>([])
  const [sanitySectionTemplates, setSanitySectionTemplates] = useState<any[]>([])
  const [sanityTemplatesLoaded, setSanityTemplatesLoaded] = useState(false)

  useEffect(() => {
    const fetchSanityTemplates = async () => {
      if (showPageEnabled) {
        const pageTemplates = await fetchSanityTemplatesWithoutMandrelId(TemplateKind.Leadpage)
        setSanityPageTemplates(pageTemplates)
      }
      if (showSectionEnabled) {
        const sectionTemplates = await fetchSanityTemplatesWithoutMandrelId(TemplateKind.Site)
        setSanitySectionTemplates(sectionTemplates)
      }
      setSanityTemplatesLoaded(true)
    }
    fetchSanityTemplates()
  }, [showPageEnabled, showSectionEnabled])

  // Only show templates from Sanity (without Mandrel ID)
  // Don't include Mandrel templates at all - only Sanity templates
  const pageTemplates = showPageEnabled ? sanityPageTemplates : []
  const sectionTemplates = showSectionEnabled ? sanitySectionTemplates : []
  
  const allTemplates = showAllEnabled ? [...pageTemplates, ...sectionTemplates] : pageTemplates

  const pageHasLoaded = pageState?.ui?.hasLoaded && sanityTemplatesLoaded
  const sectionHasLoaded = sectionState?.ui?.hasLoaded && sanityTemplatesLoaded
  const hasLoaded = pageHasLoaded && sectionHasLoaded
  
  const hasPageTemplates = !!pageTemplates?.length
  const hasSectionTemplates = !!sectionTemplates?.length
  const hasTemplates = hasPageTemplates || hasSectionTemplates

  const pageInfiniteRef = useInfiniteScrollRef(pageState, pageActions, 1000)
  const sectionInfiniteRef = useInfiniteScrollRef(sectionState, sectionActions, 1000)

  const showPageSection =
    activeFilter === 'all' || activeFilter === 'templates'
  const showSectionSection =
    activeFilter === 'all' || activeFilter === 'sections'

  const handleSeeAll = (filter: TemplateFilterType) => {
    setActiveFilter(filter)
    setViewMode('all')
  }

  const filteredAllTemplates =
    activeFilter === 'templates'
      ? pageTemplates
      : activeFilter === 'sections'
        ? sectionTemplates
        : allTemplates

  const fadeInProps = {
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    initial: { opacity: 0 },
  }

  useEffect(() => {
    if (!pageHasLoaded) {
      pageActions.init()
    }
    if (!sectionHasLoaded) {
      sectionActions.init()
    }
  }, [])

  // New marketing layout for landing page templates
  if (kind === TemplateKind.Leadpage) {
    return (
      <div className="bg-transparent pb-16">
        <section
          className="relative z-content"
          id="template-gallery"
        >
          <div className="px-4 md:px-8 lg:px-10 xl:px-12 pt-8 md:pt-10 pb-10 md:pb-14">
            <div className="max-w-[110rem] mx-auto w-full">
              {galleryComponentsShowcase?.switch === 1 && <TemplateSwitch
                activeFilter={activeFilter}
                className="mb-10 md:mb-12"
                onFilterChange={(filter) => {
                  setActiveFilter(filter)
                  setViewMode('summary')
                }}
              />}

              {!hasLoaded ? (
                <TemplateGalleryCardsLoading kind={kind} />
              ) : !hasTemplates ? (
                <TemplateGalleryNoResults actions={pageActions} />
              ) : viewMode === 'summary' ? (
                <div className="space-y-14 md:space-y-16">
                {showPageEnabled && showPageSection && hasPageTemplates && (
                  <div>
                    <div className="flex items-baseline justify-between mb-4 md:mb-5">
                      <div>
                        <h2 className="type-h5 sm:type-h4 md:type-h2 text-white">
                          Page Templates
                        </h2>
                      </div>
                      {galleryComponentsShowcase?.collapseBtn === 1 && <button
                        className="text-sm md:text-base font-medium text-white/70 hover:text-white transition-colors underline underline-offset-4"
                        onClick={() => handleSeeAll('templates')}
                        type="button"
                      >
                        See All
                      </button>}
                    </div>
                    <TemplateGalleryCards
                      marketingLayout
                      taxons={pageState.taxons}
                      templates={showAllEnabled ? pageTemplates : pageTemplates.slice(0, 8)}
                    />
                  </div>
                )}

                {showSectionEnabled && showSectionSection && hasSectionTemplates && (
                  <div>
                    <div className="flex items-baseline justify-between mb-4 md:mb-5">
                      <div>
                        <h2 className="type-h5 sm:type-h4 md:type-h2 text-white">
                          Section Templates
                        </h2>
                      </div>
                      {galleryComponentsShowcase?.collapseBtn === 1 && <button
                        className="text-sm md:text-base font-medium text-white/70 hover:text-white transition-colors underline underline-offset-4"
                        onClick={() => handleSeeAll('sections')}
                        type="button"
                      >
                        See All
                      </button>}
                    </div>
                    <TemplateGalleryCards
                      marketingLayout
                      taxons={sectionState.taxons}
                      templates={showAllEnabled ? sectionTemplates : sectionTemplates.slice(0, 8)}
                    />
                  </div>
                )}
                </div>
              ) : (
                <div>
                  <div className="flex items-baseline justify-between mb-4 md:mb-5">
                    <h2 className="type-h5 sm:type-h4 md:type-h2 text-white">
                      {activeFilter === 'sections'
                        ? 'Section Templates'
                        : 'Page Templates'}
                    </h2>
                    {galleryComponentsShowcase?.collapseBtn === 1 && <button
                      className="text-sm md:text-base font-medium text-white/70 hover:text-white transition-colors underline underline-offset-4"
                      onClick={() => setViewMode('summary')}
                      type="button"
                    >
                      Hide
                    </button>}
                  </div>
                  <TemplateGalleryCards
                    infiniteRef={activeFilter === 'sections' ? sectionInfiniteRef : pageInfiniteRef}
                    marketingLayout
                    taxons={activeFilter === 'sections' ? sectionState.taxons : pageState.taxons}
                    templates={filteredAllTemplates}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        <TemplateGalleryLegacyBanner />
      </div>
    )
  }

  // Legacy layout for other template kinds
  const [state, actions] = [pageState, pageActions]
  const templates = pageTemplates
  const infiniteRef = pageInfiniteRef

  return (
    <Section
      className={clsx(
        '!box-mt box-[pb*1.5] !box-[mb*-2] !rounded-b-none',
        '[--sidebar-width:13rem] lg:[--sidebar-width:theme(width.cols3)]',
        '[--template-width:theme(width.cols9)]',
        '[--grid-gap:1rem]',
        '[--card-size:100%] 500:[--card-size:calc((100%_-_1rem)/2)] md:[--card-size:calc((100%_-_2rem)/3)]'
      )}
      key={kind}
    >
      <section
        className={clsx('box-py px-2 relative z-content')}
        id="template-gallery"
      >
        <div className={clsx('max-w-base w-full mx-auto')}>
          <div className="flex flex-col 740:flex-row gap-[--grid-gap] items-center justify-center 740:items-start 740:justify-between relative mb-3 lg:mb-5 w-full">
            <TemplateGalleryToggle
              className="w-[--sidebar-width] flex-[0_0_auto]"
              kind={kind}
            />
            <TemplateGallerySearch
              actions={actions}
              className="max-w-[20rem] 740:max-w-[--template-width] flex-[1_1_auto] w-full mx-auto 740:mr-0"
              state={state}
            />
          </div>
          <div className="flex flex-row gap-x-[--grid-gap] items-stretch justify-between relative">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                {...fadeInProps}
                className="hidden 740:block w-[--sidebar-width] flex-[0_0_auto] h-auto relative"
                key={pageHasLoaded ? 'sidebar' : 'loading-sidebar'}
              >
                {!pageHasLoaded ? (
                  <TemplateGallerySidebarLoading />
                ) : (
                  <TemplateGallerySidebar
                    actions={actions}
                    kind={kind}
                    state={state}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <AnimateChangeInHeight className="w-full max-w-[--template-width] flex-[1_1_auto]">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={
                    !pageHasLoaded
                      ? 'loading'
                      : hasPageTemplates
                        ? 'results'
                        : 'no-results'
                  }
                  {...fadeInProps}
                >
                  {!pageHasLoaded ? (
                    <TemplateGalleryCardsLoading kind={kind} />
                  ) : hasPageTemplates ? (
                    <TemplateGalleryCards
                      infiniteRef={infiniteRef}
                      templates={templates}
                    />
                  ) : (
                    <TemplateGalleryNoResults actions={actions} />
                  )}
                </motion.div>
              </AnimatePresence>
            </AnimateChangeInHeight>
          </div>
        </div>
      </section>
    </Section>
  )
}

export default TemplateGalleryStudio
