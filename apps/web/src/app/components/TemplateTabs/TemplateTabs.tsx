'use client'
import type { ContentType, ImageType, LinkType, Taxon } from '@/types'
import React, { useState } from 'react'
import clsx from 'clsx'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'motion/react'
import AnimateChangeInHeight from '@/components/Framer/AnimateChangeInHeight'
import Image from '@/components/Image'
import Label from '@/components/Label'
import { Links, hasLinks } from '@/components/Link'
import Star from '@/components/Svgs/Star'
import Text, { hasContent } from '@/components/Text'

interface TemplateTabsProps {
  category?: Taxon
  className?: string
  heading?: string
  label?: string
  tabs: {
    details: {
      column1?: ContentType
      column2?: ContentType
      heading?: string
    }
    features: {
      heading?: string
      items?: {
        _key: string
        content?: ContentType
        image?: ImageType
      }[]
      pages?: string[]
      text?: string
      title?: string
    }
    legend: {
      label: string
      value: 'details' | 'features' | 'reviews'
    }[]
    reviews: {
      items?: {
        _id: string
        authorName: string
        authorTitle: string
        rating: number
        testimonial: string
      }[]
      link?: LinkType[]
      text?: string
      title?: string
    }
  }
  tags?: Taxon[]
}

const TemplateTabDetails = ({
  column1,
  column2,
  heading,
}: TemplateTabsProps['tabs']['details']) => (
  <div className="py-[--padding] flex-col flex">
    {heading && <h3 className="type-h2 mb-[--padding]">{heading}</h3>}
    {(hasContent(column1) || hasContent(column2)) && (
      <div className="flex flex-col sm:flex-row items-start justify-start sm:justify-between gap-y-4 gap-x-[--gap]">
        {[column1, column2].filter(Boolean).map((content, index) => (
          <div className="w-[--column-width] flex-[0_1_auto]" key={index}>
            <Text content={content} />
          </div>
        ))}
      </div>
    )}
  </div>
)

const TemplateTabFeaturesPages = ({
  className,
  pages,
}: {
  className?: string
  pages: string[]
}) => {
  const half = Math.ceil(pages.length / 2)
  const firstHalf = pages.slice(0, half)
  const secondHalf = pages.slice(half)

  return (
    <div className={clsx(className, 'w-full')}>
      <Label
        className="type-overline-xs text-body"
        content="Page Templates Included"
      />
      <div className="gradient-white-opacity w-full my-2" />
      <div className="flex flex-col sm:flex-row items-start justify-start gap-y-1 gap-x-2 lg:gap-6">
        {[firstHalf, secondHalf].map((half, i) => (
          <ol
            className="w-full sm:w-1/2 flex-[0_1_auto] flex-col flex gap-x-2 gap-y-1"
            key={i}
          >
            {half.map((page, index) => (
              <li
                className="type-h4 md:type-h4 lg:type-h4 text-body flex-row flex gap-1"
                key={page}
              >
                <span className="marker flex flex-row gap-0.5">
                  <span>{index + 1 + i * firstHalf?.length}</span>
                  <span>|</span>
                </span>
                <span>{page}</span>
              </li>
            ))}
          </ol>
        ))}
      </div>
    </div>
  )
}

const TemplateTabFeatures = ({
  heading,
  items,
  pages,
  text,
  title,
}: TemplateTabsProps['tabs']['features']) => (
  <div className="py-[--padding] flex flex-col md:flex-row items-start justify-between gap-x-[--gap] gap-y-4">
    <div className="w-full max-w-[34rem] md:max-w-[--column-width] flex-[0_1_auto] flex flex-col gap-4">
      <h4 className="type-title-t6">{title}</h4>
      <Text as="p" className="type-body-sm md:type-body" content={text} />
      {pages?.length && (
        <TemplateTabFeaturesPages className="hidden md:block" pages={pages} />
      )}
    </div>

    <div className="w-full max-w-[34rem] md:max-w-[--column-width] flex-[0_1_auto] flex flex-col gap-4">
      <h4 className="type-h3 md:type-h2">{heading}</h4>
      <div className="flex flex-col gap-2">
        {!!items?.length &&
          items.map((item) => (
            <div
              className="flex flex-row items-center justify-start gap-1"
              key={item._key}
            >
              <Image
                className="w-3 h-3"
                hasPlaceholder={false}
                image={item.image}
              />
              <Text
                blockStyles={{
                  normal: { className: 'type-h6 md:type-h5', tag: 'h5' },
                }}
                content={item.content}
              />
            </div>
          ))}
      </div>
    </div>
    {pages?.length && (
      <TemplateTabFeaturesPages
        className="max-w-[34rem] md:hidden"
        pages={pages}
      />
    )}
  </div>
)

const TemplateTabReviews = ({
  items,
  link,
  text,
  title,
}: TemplateTabsProps['tabs']['reviews']) => (
  <div className="py-[--padding] flex flex-col justify-start sm:flex-row items-start sm:justify-between gap-x-[--gap] gap-y-4">
    <div className="w-full max-w-[--column-width] flex-[0_1_auto] flex flex-col gap-y-3 md:gap-y-4">
      {title && <h4 className="type-title-t6">{title}</h4>}
      {text && <Text className="type-body" content={text} />}
      {hasLinks(link) && <Links links={link} />}
    </div>
    {!!items?.length && (
      <div className="w-full max-w-[--column-width] flex-[0_1_auto] flex flex-col gap-y-3 md:gap-y-4 md:gap-y-6">
        <h4 className="type-h4 md:type-h2">Reviews</h4>
        {items.map((item) => (
          <div
            className="flex flex-col items-start justify-start gap-3"
            key={item?._id}
          >
            <div className="flex flex-row items-center justify-start gap-0.5 md:gap-1">
              {Array.from({ length: item.rating }, (_, i) => (
                <Star className="z-content w-2 h-2 md:w-2.5 md:h-2.5" key={i} />
              ))}
            </div>
            {item?.testimonial && (
              <p className="type-body-xs md:type-body-sm">{item.testimonial}</p>
            )}
            <div>
              {item?.authorName && (
                <p className="type-h6 sm:type-h5">{item.authorName}</p>
              )}
              {item?.authorTitle && (
                <p className="type-body-xxs">{item.authorTitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)

const TemplateTabs = ({
  category,
  className,
  heading,
  label,
  tabs,
  tags,
}: TemplateTabsProps) => {
  const [activeTab, setActiveTab] = useState('details')

  const onValueChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <div
      className={clsx(
        '[--column-width:100%] sm:[--column-width:theme(width.cols6)]',
        '[--gap:2rem] sm:[--gap:3rem]',
        '[--padding:3rem] sm:[--padding:4rem]',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-start justify-betweensm:justify-between mb-5 gap-y-4 gap-x-[--gap]">
        <div className="flex flex-col gap-x-6 w-full flex-[0_1_auto] max-w-[--column-width]">
          {label && (
            <span className="type-h4 md:type-h2 text-body-disabled mb-2 md:mb-3">
              {label}
            </span>
          )}
          {heading && (
            <h2 className="type-title-t7 sm:type-title-t6 max-w-cols5">
              {heading}
            </h2>
          )}
          {category?.label && (
            <span className="type-h7 sm:type-h5 mt-1">
              {category?.label} Template
            </span>
          )}
        </div>
        {!!tags?.length && (
          <div className="flex-[0_1_auto] w-full max-w-[--column-width]">
            <Label
              className="type-overline-xs text-body-disabled"
              content="tags"
            />
            <div className="gradient-white-opacity w-full my-2" />
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {tags?.map((tag) => (
                <span className="type-h4 text-body-disabled" key={tag.value}>
                  {`#${tag.label.toLowerCase()}`}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <Tabs.Root
        onValueChange={onValueChange}
        orientation="horizontal"
        value={activeTab}
      >
        <Tabs.List asChild>
          <div className="gap-2 flex flex-row -mb-px relative z-content">
            {tabs.legend.map((item) => (
              <Tabs.Trigger asChild key={item.value} value={item.value}>
                <button
                  className="type-h5 sm:px-2.5 pb-2 hover:text-brand-primary transition-colors relative"
                  type="button"
                >
                  {item.label}
                  {item.value === activeTab && (
                    <motion.span
                      aria-hidden="true"
                      className={clsx(
                        'absolute z-above-content pointer-events-none bottom-0 left-0 w-full bg-brand-primary h-0.5',
                        className
                      )}
                      id="tab-marker"
                      key="tab-marker"
                      layout
                      layoutId="tab-marker"
                    />
                  )}
                </button>
              </Tabs.Trigger>
            ))}
          </div>
        </Tabs.List>
        <div className="w-full gradient-white-opacity" />
        <AnimateChangeInHeight
          className="relative"
          transition={{ duration: 0.3 }}
        >
          {tabs.legend.map((tab) => {
            const isActive = tab.value === activeTab

            return (
              <motion.div
                animate={{ opacity: isActive ? 1 : 0 }}
                className={clsx(
                  'top-0 left-0 w-full',
                  isActive ? 'relative' : 'absolute pointer-events-none'
                )}
                initial={{ opacity: 0 }}
                key={tab.value}
              >
                <Tabs.Content forceMount value={tab.value}>
                  {
                    {
                      details: <TemplateTabDetails {...tabs.details} />,
                      features: <TemplateTabFeatures {...tabs.features} />,
                      reviews: <TemplateTabReviews {...tabs.reviews} />,
                    }[tab.value]
                  }
                </Tabs.Content>
              </motion.div>
            )
          })}
        </AnimateChangeInHeight>
      </Tabs.Root>
    </div>
  )
}

export default TemplateTabs
