'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import Media from '@/components/Media'
import { PortableTextBlock } from '@/types'
import { PortableText } from '@portabletext/react'
import Link from '@/components/Link'

export interface AccordionSubsection {
  _key: string
  title: string
  content: PortableTextBlock[]
}

export interface AccordionCategory {
  _key: string
  title: string
  sidebarTitle?: string
  description: string
  icon?: {
    altText?: string
    asset: { _ref: string; _type: string }
  }
  subsections: AccordionSubsection[]
}

export interface AccordionWithSidebarProps {
  heading?: string
  categories: AccordionCategory[]
}

const AccordionWithSidebar = ({
  heading,
  categories,
}: AccordionWithSidebarProps) => {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set()
  )

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  const selectedLabel = selectedKey
    ? categories.find((c) => c._key === selectedKey)?.sidebarTitle ||
      categories.find((c) => c._key === selectedKey)?.title ||
      ''
    : ''

  const handleCategoryToggle = (categoryKey: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev)
      next.has(categoryKey) ? next.delete(categoryKey) : next.add(categoryKey)
      return next
    })
  }

  const scrollToCategory = (categoryKey: string) => {
    const el = document.getElementById(`category-${categoryKey}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!categories?.length) return null

  return (
    <div
      className="min-h-screen rounded-lg mx-4 md:mx-8 my-6 md:my-12"
      style={{ backgroundColor: '#F9F7FD' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-12">
        <div className="lg:hidden mb-4 -mx-4 md:mx-0 -mt-6">
          <div className="bg-[#F3EEF9] px-4">
            <div className="relative">
              <button
                type="button"
                className="w-full flex items-center justify-center py-3 rounded-md text-black"
                onClick={() => setMobileNavOpen((o) => !o)}
              >
                <div className="flex flex-col items-center leading-none">
                  {selectedKey && (
                    <span className="type-body-sm font-bold mb-1">
                      {selectedLabel}
                    </span>
                  )}
                  <span
                    className={clsx(
                      'shrink-0 transition-transform',
                      mobileNavOpen && 'rotate-180'
                    )}
                  >
                    ▼
                  </span>
                </div>
              </button>

              {mobileNavOpen && (
                <div className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white shadow">
                  <nav className="max-h-72 overflow-auto py-2">
                    {categories.map((cat) => (
                      <button
                        key={cat._key}
                        className="w-full text-left px-4 py-2 type-body-sm font-bold text-black hover:bg-gray-100"
                        onClick={() => {
                          setSelectedKey(cat._key) // seguimos guardando selección por si lo necesitás luego
                          setMobileNavOpen(false)
                          setActiveCategories((prev) =>
                            new Set(prev).add(cat._key)
                          )
                          scrollToCategory(cat._key)
                        }}
                      >
                        {cat.sidebarTitle || cat.title}
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
            {heading && (
              <h2 className="type-h2 font-bold text-black mb-6">{heading}</h2>
            )}
            <nav className="space-y-2">
              {categories.map((category) => (
                <a
                  key={category._key}
                  href={`#category-${category._key}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToCategory(category._key)
                  }}
                  className="w-full text-left px-3 py-2 rounded-md type-body-sm font-bold transition-colors text-black hover:text-gray-700 hover:bg-gray-100 block"
                >
                  <span className="flex items-center gap-2">
                    {category.sidebarTitle || category.title}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex-1">
            {categories.map((category) => {
              const isOpen = activeCategories.has(category._key)
              return (
                <div
                  key={category._key}
                  id={`category-${category._key}`}
                  className="rounded-lg shadow-sm mb-4"
                  style={{ backgroundColor: '#F9F7FD' }}
                >
                  <div className="px-4 md:px-6 py-2 md:py-3 border-b border-gray-200">
                    <div className="flex items-center gap-3 mb-1">
                      {category.icon && (
                        <div className="w-6 h-6 flex-shrink-0">
                          <Media
                            media={{ condition: 'image', image: category.icon }}
                            sizes="24px"
                          />
                        </div>
                      )}
                      <h1 className="type-h1 font-medium text-purple-700 flex-1">
                        {category.title}
                      </h1>
                      <button
                        onClick={() => handleCategoryToggle(category._key)}
                        className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <span
                          className={clsx(
                            'h-4 w-4 text-black transition-transform duration-200 flex items-center justify-center',
                            isOpen && 'rotate-180'
                          )}
                        >
                          ▼
                        </span>
                      </button>
                    </div>
                    {isOpen && (
                      <p className="type-h3 font-medium text-black">
                        {category.description}
                      </p>
                    )}
                  </div>

                  {isOpen && (
                    <div className="px-4 md:px-6 py-2">
                      {category.subsections.map((subsection, index) => (
                        <div key={subsection._key} className="mb-3 last:mb-0">
                          <h4 className="type-h3 font-medium text-black mb-2">
                            {subsection.title}
                          </h4>
                          <div
                            style={{
                              color: '#000000 !important',
                              fontSize: '14px',
                              lineHeight: '1.5',
                            }}
                            className="[&_p]:!mb-4 [&_p:last-child]:!mb-0 [&_*]:!text-black"
                            onClick={(e) => {
                              const t = e.target as HTMLElement
                              if (t.tagName === 'A' || t.closest('a'))
                                e.stopPropagation()
                            }}
                          >
                            <PortableText
                              value={subsection.content}
                              components={{
                                marks: {
                                  link: ({ children, value }) => {
                                    const url = value?.url || value?.href || '#'
                                    const isExternal = url.startsWith('http')
                                    const isInternal =
                                      !isExternal && !url.startsWith('#')
                                    let condition: 'internal' | 'external' =
                                      'external'
                                    if (isInternal) condition = 'internal'
                                    return (
                                      <Link
                                        condition={condition}
                                        url={url}
                                        hasIcon={false}
                                        className="text-blue-600 underline cursor-pointer hover:text-blue-800"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        {children}
                                      </Link>
                                    )
                                  },
                                },
                                block: {
                                  normal: ({ children }) => (
                                    <p
                                      className="type-body-sm text-black mb-4 last:mb-0"
                                      style={{
                                        marginBottom: '16px !important',
                                        color: '#000000 !important',
                                      }}
                                    >
                                      {children}
                                    </p>
                                  ),
                                },
                              }}
                            />
                          </div>
                          {index < category.subsections.length - 1 && (
                            <div
                              className="my-2"
                              style={{
                                borderBottom: '1px solid',
                                borderImage:
                                  'linear-gradient(to right, transparent 0%, black 50%, transparent 100%) 1',
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionWithSidebar
