'use client'

import type { PortableTextBlock } from '@/types'
import React, { useState } from 'react'
import clsx from 'clsx'
import { PortableText } from '@portabletext/react'
import Link from '@/components/Link'
import Media from '@/components/Media'

type BrandImage = {
  _key?: string
  alt?: string
  asset: { _ref: string; _type: string }
}

type Subsection = {
  _key: string
  content?: PortableTextBlock[]
  cta?: { label: string; target?: '_blank' | '_self'; url: string }
  title: string
}

export type BrandCategory = {
  _key: string
  description?: string
  icon?: BrandImage
  sidebarTitle?: string
  subsections?: Subsection[]
  title: string
}

export type BrandProps = {
  categories: BrandCategory[]
  heading?: string
  logoPackUrl?: string
  topTiles?: {
    glyph?: BrandImage
    lockup?: BrandImage
    logoDark?: BrandImage
    logoLight?: BrandImage
  }
}

const PURPLE = '#9061EE'

export default function Brand({
  categories = [],
  heading,
  logoPackUrl,
  topTiles,
}: BrandProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [selectedKey, setSelectedKey] = useState<null | string>(null)

  const selectedLabel = selectedKey
    ? categories.find((c) => c._key === selectedKey)?.sidebarTitle ||
      categories.find((c) => c._key === selectedKey)?.title ||
      ''
    : ''

  const scrollToCategory = (key: string) => {
    const el = document.getElementById(`category-${key}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!categories?.length) return null

  const tiles: BrandImage[] = [
    topTiles?.logoLight,
    topTiles?.logoDark,
    topTiles?.glyph,
    topTiles?.lockup,
  ].filter(Boolean) as BrandImage[]

  return (
    <section className="mx-4 md:mx-8 my-6 md:my-12">
      {tiles.length === 4 && (
        <div className="mb-8">
          <div className="rounded-3xl overflow-hidden p-4 md:p-6 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {tiles.map((img, i) => (
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden border border-black/10 bg-white"
                  key={img._key || i}
                >
                  <Media
                    className="h-full w-full object-cover"
                    media={{ condition: 'image', image: img }}
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>

            {logoPackUrl && (
              <div className="mt-4">
                <Link
                  className="group relative inline-flex items-center gap-2 text-black"
                  condition={
                    logoPackUrl.startsWith('http') ? 'external' : 'internal'
                  }
                  hasIcon={false}
                  url={logoPackUrl}
                >
                  <span className="font-semibold">Download Logo</span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 text-xl md:text-2xl"
                    style={{ color: PURPLE }}
                  >
                    →
                  </span>
                  <span
                    className="absolute left-0 -bottom-1 h-[2px] w-full"
                    style={{ backgroundColor: PURPLE }}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="min-h-screen rounded-3xl overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-12">
          <div className="lg:hidden mb-4">
            <div className="bg-[#F3EEF9] px-4 rounded-xl">
              <div className="relative">
                <button
                  className="w-full flex items-center justify-center py-3 rounded-md text-black"
                  onClick={() => setMobileNavOpen((o) => !o)}
                  type="button"
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
                          className="w-full text-left px-4 py-2 type-body-sm font-bold text-black hover:bg-gray-100"
                          key={cat._key}
                          onClick={() => {
                            setSelectedKey(cat._key)
                            setMobileNavOpen(false)
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
            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
              <div className="rounded-2xl p-4 bg-[#F3EEF9]">
                {heading && (
                  <h2 className="type-h2 font-bold text-black mb-4">
                    {heading}
                  </h2>
                )}
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <a
                      className="block w-full text-left px-3 py-2 rounded-md type-body-sm font-bold text-black hover:text-gray-700 hover:bg-white/60 transition-colors"
                      href={`#category-${category._key}`}
                      key={category._key}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToCategory(category._key)
                      }}
                    >
                      {category.sidebarTitle || category.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="flex-1">
              {categories.map((category) => (
                <article
                  className="rounded-lg mb-8 overflow-hidden"
                  id={`category-${category._key}`}
                  key={category._key}
                >
                  <header className="px-4 md:px-6">
                    <h1
                      className="type-h1 font-medium"
                      style={{ color: PURPLE }}
                    >
                      {category.title}
                    </h1>

                    <div
                      className="h-[3px] rounded-full mt-2 mb-4"
                      style={{ backgroundColor: 'lightgray' }}
                    />
                    {category.description && (
                      <p className="type-h3 font-medium text-black">
                        {category.description}
                      </p>
                    )}
                  </header>

                  <div className="px-4 md:px-6 pt-2">
                    {(category.subsections ?? []).map((sub) => (
                      <section className="mb-6 last:mb-0" key={sub._key}>
                        <h4 className="type-h3 font-semibold text-black mb-2">
                          {sub.title}
                        </h4>

                        <PortableText
                          components={{
                            block: {
                              normal: ({ children }) => (
                                <p className="type-body-sm text-black mb-4 last:mb-0">
                                  {children}
                                </p>
                              ),
                            },
                            list: {
                              bullet: ({ children }) => (
                                <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                  {children}
                                </ul>
                              ),
                              number: ({ children }) => (
                                <ol className="list-decimal pl-6 space-y-2 text-black mb-4">
                                  {children}
                                </ol>
                              ),
                            },
                            listItem: {
                              bullet: ({ children }) => (
                                <li className="type-body-sm">{children}</li>
                              ),
                              number: ({ children }) => (
                                <li className="type-body-sm">{children}</li>
                              ),
                            },
                            marks: {
                              link: ({ children, value }) => {
                                const url = value?.url || value?.href || '#'
                                const isExternal = url.startsWith('http')
                                const isInternal =
                                  !isExternal && !url.startsWith('#')
                                let condition: 'external' | 'internal' =
                                  'external'
                                if (isInternal) condition = 'internal'
                                return (
                                  <Link
                                    className="underline cursor-pointer"
                                    condition={condition}
                                    hasIcon={false}
                                    style={{ color: PURPLE }}
                                    url={url}
                                  >
                                    {children}
                                  </Link>
                                )
                              },
                            },
                            types: {
                              image: ({ value }) => (
                                <figure className="my-6">
                                  <div className="relative overflow-hidden bg-white">
                                    <Media
                                      className="block w-full h-auto object-cover"
                                      media={{
                                        condition: 'image',
                                        image: value,
                                      }}
                                      sizes="(max-width:768px) 100vw, 800px"
                                    />
                                  </div>

                                  {value?.caption && (
                                    <figcaption className="mt-2 text-xs text-black/60">
                                      {value.caption}
                                    </figcaption>
                                  )}
                                </figure>
                              ),
                            },
                          }}
                          value={sub.content ?? []}
                        />

                        {sub.cta?.label && sub.cta?.url && (
                          <div className="mt-4">
                            <Link
                              className="group relative inline-flex items-center gap-2 text-black"
                              condition={
                                sub.cta.url.startsWith('http')
                                  ? 'external'
                                  : 'internal'
                              }
                              hasIcon={false}
                              target={sub.cta.target === '_blank'}
                              url={sub.cta.url}
                            >
                              <span className="font-semibold">
                                {sub.cta.label}
                              </span>
                              <span
                                aria-hidden
                                className="transition-transform group-hover:translate-x-0.5 text-xl md:text-2xl"
                                style={{ color: '#9061EE' }}
                              >
                                →
                              </span>
                              <span
                                className="absolute left-0 -bottom-1 h-[2px] w-full"
                                style={{ backgroundColor: '#9061EE' }}
                              />
                            </Link>
                          </div>
                        )}
                      </section>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

