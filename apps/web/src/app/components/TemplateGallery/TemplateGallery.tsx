'use client'

import React, { useEffect } from 'react'
import clsx from 'clsx'
import { useInfiniteScrollRef, useTemplateState } from '@lp/template-gallery'
import { AnimatePresence, motion } from 'motion/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useShallow } from 'zustand/react/shallow'
import AnimateChangeInHeight from '@/components/Framer/AnimateChangeInHeight'
import Section from '@/components/Section'
import templateGalleryStore from '@/stores/templateGalleryStore'
import { TemplateKind } from '@/types/template-constants'
import TemplateGalleryCards, {
  TemplateGalleryCardsLoading,
} from './TemplateGalleryCards'
import TemplateGalleryNoResults from './TemplateGalleryNoResults'
import TemplateGallerySearch from './TemplateGallerySearch'
import TemplateGallerySidebar, {
  TemplateGallerySidebarLoading,
} from './TemplateGallerySidebar'
import TemplateGalleryToggle from './TemplateGalleryToggle'

const baseUrl = process.env.STARGATE_API_TEMPLATES_URL!

const TemplateGallery = ({
  kind = TemplateKind.Leadpage,
}: {
  kind?: TemplateKind
}) => {
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

  const [state, actions] = useTemplateState({
    baseFilters,
    baseUrl,
    hideSidebar: false,
    kind,
    onUpdateQueryString,
    queryString,
    tracker,
  })

  // Filter out legacy templates
  const rawTemplates = legacyTemplateFilter(state.templates)
  
  // Filter to only show templates WITH valid Mandrel IDs (opposite of TemplateGalleryStudio)
  const templates = rawTemplates.filter((template) => {
    const templateId = template?._meta?.id || template?.template?.id || ''
    if (!templateId || templateId.trim() === '') {
      return false // Exclude if no ID
    }
    if (
      templateId.includes('example') ||
      templateId.includes('test') ||
      templateId.includes('ejemplo') ||
      templateId.includes('prueba')
    ) {
      return false // Exclude if temporary/test ID
    }
    if (templateId.length < 10) {
      return false // Exclude if short/invalid ID
    }
    return true // Include if valid Mandrel ID
  })

  const hasLoaded = state?.ui?.hasLoaded
  const hasTemplates = !!templates?.length

  const infiniteRef = useInfiniteScrollRef(state, actions, 1000)

  const fadeInProps = {
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    initial: { opacity: 0 },
  }

  useEffect(() => {
    if (!hasLoaded) {
      actions.init()
    }
  }, [])

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
                key={hasLoaded ? 'sidebar' : 'loading-sidebar'}
              >
                {!hasLoaded ? (
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
                    !hasLoaded
                      ? 'loading'
                      : hasTemplates
                        ? 'results'
                        : 'no-results'
                  }
                  {...fadeInProps}
                >
                  {!hasLoaded ? (
                    <TemplateGalleryCardsLoading kind={kind} />
                  ) : hasTemplates ? (
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

export default TemplateGallery
