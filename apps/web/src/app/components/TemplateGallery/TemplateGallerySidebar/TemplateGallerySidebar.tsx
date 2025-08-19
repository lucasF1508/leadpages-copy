'use client'
import type {
  SortBy,
  Taxon,
  TemplateActionCreators,
  TemplateState,
} from '@/types'
import React from 'react'
import clsx from 'clsx'
import * as Accordion from '@radix-ui/react-accordion'
import { FaChevronDown as DownIcon } from '@react-icons/all-files/fa/FaChevronDown'
import { motion } from 'motion/react'
import Label from '@/components/Label'
import { scrollToHash } from '@/hooks/useScrollToHash'
import useStickyHeader from '@/hooks/useStickyHeader'
import { TaxonSection, TemplateKind } from '@/types/template-constants'
import {
  FEATURED_OPTION,
  createGroupedTaxons,
  excludedSections,
  orderByList,
  promotionTaxonSections,
  standardTaxonSections,
  taxonColorHexValue,
} from './utils'

interface TemplateGallerySidebarProps {
  actions: TemplateActionCreators
  className?: string
  kind: TemplateKind
  state: TemplateState
}

const TemplateGallerySidebarItemBorder = ({
  className,
}: {
  className?: string
}) => (
  <div className={clsx('px-3 lg:px-4', className)}>
    <hr className="border-button-border-secondary" />
  </div>
)

const TemplateGallerySidebarMarker = ({
  className,
  id,
}: {
  id: string
  className?: string
}) => (
  <motion.span
    animate={{ scaleX: 1 }}
    aria-hidden="true"
    className={clsx(
      'absolute z-above-content pointer-events-none left-0 h-2.5 lg:h-3 w-0.5 from-purple-600 to-purple-300 bg-gradient-to-t',
      className
    )}
    exit={{ scaleX: 0 }}
    id={id}
    initial={{ originX: 0, scaleX: 0 }}
    key={id}
    layout
    layoutId={id}
  />
)

const TemplateGallerySidebarItem = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}) => (
  <button
    className={clsx(
      'w-full px-1 type-body-xxs lg:type-body-xs min-h-4 lg:min-h-5 flex items-center justify-start hover:bg-obsidian-300 rounded-sm transition-colors cursor-pointer',
      className
    )}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
)

const TemplateGallerySidebar = ({
  actions,
  className,
  kind,
  state,
}: TemplateGallerySidebarProps) => {
  const { isSticky, showHeader } = useStickyHeader()

  const standardTags = createGroupedTaxons(
    state.taxons,
    standardTaxonSections,
    kind === TemplateKind.Site ? excludedSections : []
  )
  const promotionTags = createGroupedTaxons(
    state.taxons,
    promotionTaxonSections,
    excludedSections
  )
  const categories = [standardTags, promotionTags]
    .flat()
    .filter((item) => item?.taxons?.length > 0)
  const defaultTaxon =
    kind === TemplateKind.Site
      ? TaxonSection['Industries']
      : TaxonSection['Page Types']

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
    taxon: ({ type: 'sort_by' } & SortBy) | Taxon
  ) => {
    e.preventDefault()
    scrollToHash({ hash: 'template-gallery', offset: 48 })

    switch (taxon.type) {
      case 'sort_by':
        actions.onUpdateOrderBy(taxon)
        break
      case 'categories':
        actions.onUpdateCategory(taxon)
        break
      case 'tags':
        actions.onUpdateTag(taxon)
        break
      default:
        break
    }
  }

  return (
    <div
      className={clsx(
        'sticky flex flex-col items-start justify-start relative z-content bg-surface-muted rounded-md sm:rounded-lg border-border-primary border py-4 transition-[top] duration-200 ease-linear',
        className,
        'overflow-y-auto scrollbar-hide',
        isSticky && showHeader
          ? 'top-[calc(var(--header-height)+3rem)] max-h-[calc(100dvh-var(--header-height)-4rem)]'
          : 'top-6 max-h-[calc(100dvh-4rem)]'
      )}
    >
      {!!orderByList?.length && (
        <div className="mb-3 w-full">
          <h3 className="type-style-h5 type-size-body-xxs lg:type-size-h5 min-h-4 lg:min-h-5 px-3 lg:px-4 flex items-center justify-start">
            Sort By
          </h3>
          <div className="relative px-2 lg:px-3 w-full">
            {orderByList.map((item) => (
              <TemplateGallerySidebarItem
                key={item.label}
                onClick={(e) => handleClick(e, { ...item, type: 'sort_by' })}
              >
                {item.label}
                {item?.value && state?.filters?.order_by === item?.value && (
                  <TemplateGallerySidebarMarker id="sort-mark" />
                )}
              </TemplateGallerySidebarItem>
            ))}
          </div>
        </div>
      )}
      <div className="px-4">
        <hr className="border-button-border-secondary" />
      </div>
      {!!categories?.length && (
        <Accordion.Root
          className="w-full"
          collapsible
          defaultValue={defaultTaxon}
          type="single"
        >
          {categories.map((item, index) => (
            <React.Fragment key={item.label}>
              {index === 0 && <TemplateGallerySidebarItemBorder />}
              <Accordion.Item
                className={clsx('w-full group py-0.5 lg:py-1.5')}
                key={item.kind}
                value={item.kind}
              >
                <Accordion.Trigger asChild>
                  <button className="w-full px-2 lg:px-3 relative">
                    <div className="w-full flex items-center justify-between px-1 min-h-4 lg:min-h-5 hover:bg-obsidian-300 rounded-sm transition-colors">
                      <div className="type-style-h5 type-size-body-xxs lg:type-size-h5">
                        {item.label}
                      </div>
                      <div className="text-button-border-secondary transition-transform duration-200 group-data-[state=open]:-rotate-180">
                        <DownIcon className="w-1.5" />
                      </div>
                    </div>
                  </button>
                </Accordion.Trigger>
                <Accordion.Content className="px-2 lg:px-3 data-[state=closed]:animate-[close_200ms_ease] data-[state=open]:animate-[open_200ms_ease] overflow-hidden relative">
                  {item.taxons.map((taxon) => {
                    const isActive =
                      taxon?.value &&
                      state?.ui?.selectedTaxon?.value === taxon.value

                    return (
                      <TemplateGallerySidebarItem
                        key={taxon.value}
                        onClick={(e) => handleClick(e, taxon)}
                      >
                        {taxonColorHexValue[taxon.value] && (
                          <span
                            className="rounded-full w-2.5 h-2.5 mr-1 border border-border-primary"
                            style={{
                              backgroundColor: taxonColorHexValue[taxon.value],
                            }}
                          />
                        )}
                        {taxon.label}
                        {FEATURED_OPTION === taxon.value && (
                          <>
                            <div className="inline-flex py-[0.25rem] rounded-lg bg-gradient-purple px-1 ml-1">
                              <Label
                                className={clsx(
                                  '!text-[0.625rem] type-overline-xxs text-light pt-[0.125rem]'
                                )}
                                content="featured"
                              />
                            </div>
                          </>
                        )}
                        {isActive && (
                          <TemplateGallerySidebarMarker id="active-mark" />
                        )}
                      </TemplateGallerySidebarItem>
                    )
                  })}
                </Accordion.Content>
              </Accordion.Item>
              <TemplateGallerySidebarItemBorder />
            </React.Fragment>
          ))}
        </Accordion.Root>
      )}
    </div>
  )
}

export default TemplateGallerySidebar
