'use client'

import React, { useState, useEffect } from 'react'
import Media from '@/components/Media'
import { PortableTextBlock } from '@/types'
import { PortableText } from '@portabletext/react'
import Link from '@/components/Link'

export interface FeatureSubsection {
  _key: string
  title: string
  content: PortableTextBlock[]
}

export interface FeatureCategory {
  _key: string
  title: string
  description: string
  icon?: {
    altText?: string
    asset: { _ref: string; _type: string }
  }
  subsections: FeatureSubsection[]
}

export interface FeatureIndexOption3Props {
  heading?: string
  categories: FeatureCategory[]
}

/**
 * OPCIÓN 3: Layout Vertical Expandido con Sidebar Fijo
 * 
 * Características:
 * - Sidebar de navegación fijo a la izquierda (desktop)
 * - Todo el contenido expandido verticalmente en una sola columna
 * - Scroll suave automático al hacer clic en el sidebar
 * - Nada está oculto, todo visible al hacer scroll
 * - En mobile: sidebar se convierte en menú superior sticky
 * - Ideal para contenido extenso que se puede leer de forma continua
 */
const FeatureIndexOption3 = ({
  heading = 'Feature Index',
  categories,
}: FeatureIndexOption3Props) => {
  const [activeCategory, setActiveCategory] = useState<string>('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Observar qué sección está visible al hacer scroll
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    categories.forEach((category) => {
      const element = document.getElementById(`category-${category._key}`)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [categories])

  const scrollToCategory = (categoryKey: string) => {
    const element = document.getElementById(`category-${categoryKey}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  if (!categories?.length) return null

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de Navegación */}
          <aside className="lg:w-64 flex-shrink-0">
            {/* Mobile: Menú Sticky Superior */}
            <div className="lg:hidden sticky top-0 z-20 bg-white pb-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between py-3 px-4 bg-[#F9F7FD] rounded-lg type-body-base font-semibold text-purple-700"
              >
                <span>
                  {categories.find((c) => c._key === activeCategory)?.title ||
                    heading}
                </span>
                <span
                  className={`transition-transform ${
                    mobileMenuOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {mobileMenuOpen && (
                <nav className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
                  {categories.map((category) => (
                    <button
                      key={category._key}
                      onClick={() => scrollToCategory(category._key)}
                      className={`w-full text-left px-4 py-3 type-body-sm font-semibold border-b border-gray-100 last:border-b-0 transition-colors ${
                        activeCategory === category._key
                          ? 'bg-purple-50 text-purple-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>
              )}
            </div>

            {/* Desktop: Sidebar Fijo */}
            <div className="hidden lg:block sticky top-6">
              {heading && (
                <h2 className="type-h2 font-bold text-black mb-6" style={{ color: '#000000' }}>
                  {heading}
                </h2>
              )}
              <nav className="space-y-1">
                {categories.map((category) => (
                  <a
                    key={category._key}
                    href={`#category-${category._key}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToCategory(category._key)
                    }}
                    className={`block px-4 py-2 rounded-md type-body-sm font-semibold transition-colors ${
                      activeCategory === category._key
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {category.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Contenido Principal - Todo Expandido */}
          <main className="flex-1 space-y-12">
            {categories.map((category) => (
              <section
                key={category._key}
                id={`category-${category._key}`}
                className="scroll-mt-24"
              >
                <div className="bg-[#F9F7FD] rounded-lg p-6 md:p-8">
                  {/* Header de la Categoría */}
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-300">
                    {category.icon && (
                      <div className="w-10 h-10 flex-shrink-0">
                        <Media
                          media={{ condition: 'image', image: category.icon }}
                          sizes="40px"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="type-h2 font-bold text-purple-700 mb-3" style={{ color: '#7C3AED' }}>
                        {category.title}
                      </h2>
                      {category.description && (
                        <p className="type-body-lg text-gray-700" style={{ color: '#374151' }}>
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subsecciones - Todo Visible */}
                  <div className="space-y-8">
                    {category.subsections.map((subsection, index) => (
                      <div key={subsection._key}>
                        <h3 className="type-h3 font-semibold text-black mb-4" style={{ color: '#000000' }}>
                          {subsection.title}
                        </h3>
                        <div
                          className="type-body-base text-gray-800 [&_p]:mb-4 [&_p:last-child]:mb-0"
                          style={{ color: '#1F2937' }}
                          onClick={(e) => {
                            const target = e.target as HTMLElement
                            if (
                              target.tagName === 'A' ||
                              target.closest('a')
                            ) {
                              e.stopPropagation()
                            }
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
                                  const condition: 'internal' | 'external' =
                                    isInternal ? 'internal' : 'external'
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
                                  <p className="type-body-base text-gray-800 mb-4 last:mb-0" style={{ color: '#1F2937' }}>
                                    {children}
                                  </p>
                                ),
                              },
                            }}
                          />
                        </div>
                        {index < category.subsections.length - 1 && (
                          <div className="mt-6 pt-6 border-t border-gray-200" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}

export default FeatureIndexOption3

