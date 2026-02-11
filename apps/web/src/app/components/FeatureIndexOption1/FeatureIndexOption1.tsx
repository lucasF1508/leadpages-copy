'use client'

import React from 'react'
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

export interface FeatureIndexOption1Props {
  heading?: string
  categories: FeatureCategory[]
  navigationLinks?: Array<{ title: string; href: string }>
}

/**
 * OPCIÓN 1: Grid de Tarjetas Expandidas
 * 
 * Características:
 * - Todo el contenido está visible desde el inicio
 * - Layout en grid responsivo (1 columna móvil, 2-3 columnas desktop)
 * - Cada categoría es una tarjeta grande con todas sus subsecciones visibles
 * - Navegación horizontal arriba para scroll suave a cada sección
 * - Ideal para contenido extenso que necesita estar siempre accesible
 */
const FeatureIndexOption1 = ({
  heading = 'Feature Index',
  categories,
  navigationLinks,
}: FeatureIndexOption1Props) => {
  if (!categories?.length) return null

  const scrollToCategory = (categoryKey: string) => {
    const element = document.getElementById(`category-${categoryKey}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full py-6 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Navegación Horizontal */}
        {navigationLinks && navigationLinks.length > 0 && (
          <div className="mb-8 sticky top-0 bg-white z-10 py-4 border-b border-gray-200">
            <nav className="flex flex-wrap gap-4 justify-center">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const id = link.href.replace('#', '')
                    scrollToCategory(id)
                  }}
                  className="type-body-sm font-bold text-purple-700 hover:text-purple-900 transition-colors px-3 py-1 rounded-md hover:bg-purple-50"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Título Principal */}
        {heading && (
          <h1 className="type-h1 font-bold text-center mb-12 text-black" style={{ color: '#000000' }}>
            {heading}
          </h1>
        )}

        {/* Grid de Tarjetas Expandidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => (
            <div
              key={category._key}
              id={`category-${category._key}`}
              className="bg-[#F9F7FD] rounded-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              {/* Header de la Categoría */}
              <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-300">
                {category.icon && (
                  <div className="w-8 h-8 flex-shrink-0">
                    <Media
                      media={{ condition: 'image', image: category.icon }}
                      sizes="32px"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="type-h2 font-bold text-purple-700 mb-2" style={{ color: '#7C3AED' }}>
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="type-body-base text-gray-700" style={{ color: '#374151' }}>
                      {category.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Subsecciones - Todo Visible */}
              <div className="space-y-6">
                {category.subsections.map((subsection, index) => (
                  <div key={subsection._key}>
                    <h3 className="type-h3 font-semibold text-black mb-3" style={{ color: '#000000' }}>
                      {subsection.title}
                    </h3>
                    <div
                      className="type-body-sm text-gray-800 [&_p]:mb-3 [&_p:last-child]:mb-0"
                      style={{ color: '#1F2937' }}
                      onClick={(e) => {
                        const target = e.target as HTMLElement
                        if (target.tagName === 'A' || target.closest('a')) {
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
                              const isInternal = !isExternal && !url.startsWith('#')
                              const condition: 'internal' | 'external' = isInternal
                                ? 'internal'
                                : 'external'
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
                              <p className="type-body-sm text-gray-800 mb-3 last:mb-0" style={{ color: '#1F2937' }}>
                                {children}
                              </p>
                            ),
                          },
                        }}
                      />
                    </div>
                    {index < category.subsections.length - 1 && (
                      <div className="mt-4 pt-4 border-t border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureIndexOption1

