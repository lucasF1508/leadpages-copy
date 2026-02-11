'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
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

export interface FeatureIndexOption2Props {
  heading?: string
  categories: FeatureCategory[]
}

/**
 * OPCIÓN 2: Tabs Horizontales con Contenido Siempre Visible
 * 
 * Características:
 * - Navegación por pestañas horizontales en la parte superior
 * - Todo el contenido de la pestaña activa está completamente visible
 * - Sin elementos colapsables, solo cambio de pestaña
 * - Scroll vertical dentro de cada tab si el contenido es muy largo
 * - Ideal para organizar categorías de forma clara sin saturar la vista
 */
const FeatureIndexOption2 = ({
  heading = 'Feature Index',
  categories,
}: FeatureIndexOption2Props) => {
  const [activeTab, setActiveTab] = useState<string>(
    categories?.[0]?._key || ''
  )

  if (!categories?.length) return null

  const activeCategory = categories.find((cat) => cat._key === activeTab)

  return (
    <div className="w-full py-6 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Título Principal */}
        {heading && (
          <h1 className="type-h1 font-bold text-center mb-8 md:mb-12 text-black" style={{ color: '#000000' }}>
            {heading}
          </h1>
        )}

        {/* Tabs de Navegación */}
        <div className="border-b border-gray-200 mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category._key}
                onClick={() => setActiveTab(category._key)}
                className={clsx(
                  'px-4 md:px-6 py-3 type-body-base font-semibold whitespace-nowrap transition-colors border-b-2',
                  activeTab === category._key
                    ? 'text-purple-700 border-purple-700 bg-purple-50'
                    : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                )}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido de la Pestaña Activa - Todo Visible */}
        {activeCategory && (
          <div className="bg-[#F9F7FD] rounded-lg p-6 md:p-8">
            {/* Header de la Categoría */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-300">
              {activeCategory.icon && (
                <div className="w-10 h-10 flex-shrink-0">
                  <Media
                    media={{
                      condition: 'image',
                      image: activeCategory.icon,
                    }}
                    sizes="40px"
                  />
                </div>
              )}
              <div className="flex-1">
                <h2 className="type-h2 font-bold text-purple-700 mb-3" style={{ color: '#7C3AED' }}>
                  {activeCategory.title}
                </h2>
                {activeCategory.description && (
                  <p className="type-body-lg text-gray-700" style={{ color: '#374151' }}>
                    {activeCategory.description}
                  </p>
                )}
              </div>
            </div>

            {/* Subsecciones - Todo Visible */}
            <div className="space-y-8">
              {activeCategory.subsections.map((subsection, index) => (
                <div key={subsection._key}>
                  <h3 className="type-h3 font-semibold text-black mb-4" style={{ color: '#000000' }}>
                    {subsection.title}
                  </h3>
                  <div
                    className="type-body-base text-gray-800 [&_p]:mb-4 [&_p:last-child]:mb-0"
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
                  {index < activeCategory.subsections.length - 1 && (
                    <div className="mt-6 pt-6 border-t border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FeatureIndexOption2

