'use client'

import type { IntegrationDirectoryNoResultsProps } from './IntegrationDirectoryNoResults'
import type { CategoryType, ImageType, LinkType } from '@/types'
import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import CardClickable from '@/components/CardClickable'
import Section from '@/components/Section'
import Waypoint from '@/components/Waypoint'
import IntegrationDirectoryNoResults from './IntegrationDirectoryNoResults'
import IntegrationSidebar from './IntegrationSidebar'
import IntegrationSidebarSearch from './IntegrationSidebarSearch'

type IntegrationType = {
  _id: string
  description: string
  excerpt: {
    content: string
    icon: ImageType
  }
  link?: LinkType
  status: CategoryType
  title: string
}

export interface IntegrationDirectoryProps {
  categories: ({ integrations: IntegrationType[] } & CategoryType)[]
  className?: string
  noResults: IntegrationDirectoryNoResultsProps
}

const IntegrationDirectory = ({
  categories: _categories,
  className,
  noResults,
}: IntegrationDirectoryProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleWaypointTrigger = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index < 0 ? 0 : index)
    }, 300)
  }

  const categories = !searchTerm
    ? _categories
    : _categories.reduce((acc, category) => {
        const integrations = category.integrations.filter((integration) =>
          integration.title.toLowerCase().includes(searchTerm.toLowerCase())
        )

        if (!integrations?.length) return acc

        return [
          ...acc,
          {
            ...category,
            integrations,
          },
        ]
      }, [])

  return (
    <Section
      className={clsx(
        '!box-mt box-[pb*1.5] !box-[mb*-2] !rounded-b-none box-px',
        className
      )}
    >
      <div className="relative z-content flex flex-col sm:flex-row items-stretch justify-between box-py max-w-base mx-auto gap-3 lg:gap-6">
        <div className="w-auto sm:w-[12rem] lg:w-[16rem] flex-[0_0_auto] h-auto">
          <IntegrationSidebarSearch
            className="mb-1 sm:mb-5 lg:mb-4"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <IntegrationSidebar
            activeIndex={activeIndex}
            categories={categories}
            className="hidden sm:flex"
          />
        </div>
        <div className="flex-[1_1_auto]">
          <div className="flex flex-col gap-5 lg:gap-6 max-w-[45.875rem] mx-auto">
            {!!categories?.length ? (
              categories.map((category, index) => {
                if (!category?.integrations?.length) return null
                return (
                  <div
                    className="relative flex-col flex gap-5 lg:gap-6"
                    key={category._id}
                  >
                    <Waypoint
                      className="!absolute top-[-15rem] left-0"
                      onEnter={({ vertical }) => {
                        if (vertical === 'top') {
                          handleWaypointTrigger(index - 1)
                        }
                      }}
                      onLeave={({ vertical }) => {
                        if (vertical === 'top') {
                          handleWaypointTrigger(index)
                        }
                      }}
                    />
                    <h2
                      className="type-h1 text-body-muted"
                      id={category?.slug?.current}
                    >
                      {category.title}
                    </h2>
                    {category.integrations.map((integration) => (
                      <CardClickable
                        classNames={{
                          arrow: 'max-md:has-[.is-hidden]:!hidden',
                          content: 'max-sm:!max-w-none !mr-auto',
                          icon: '',
                          label: '!type-overline-xxs',
                          root: '!px-3 !gap-3 md:!px-5 lg:!px-8 md:!gap-5 !justify-between',
                        }}
                        content={integration.excerpt.content}
                        heading={integration.title}
                        icon={integration.excerpt.icon}
                        key={integration._id}
                        label={integration.status.title}
                        link={integration?.link}
                      />
                    ))}
                  </div>
                )
              })
            ) : (
              <IntegrationDirectoryNoResults {...noResults} />
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default IntegrationDirectory
