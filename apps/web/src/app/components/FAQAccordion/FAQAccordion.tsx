'use client'

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import * as Primitives from '@radix-ui/react-accordion'
import Media from '@/components/Media'
import { PortableTextBlock } from '@/types'
import { PortableText } from '@portabletext/react'
import Link from '@/components/Link'
import { LinkIcon } from '@/components/Link'

export interface FAQQuestion {
  _key: string
  title: string
  content: PortableTextBlock[]
}

export interface FAQCategory {
  _key: string
  title: string
  icon: {
    altText?: string
    asset: {
      _ref: string
      _type: string
    }
  }
  questions: FAQQuestion[]
}

export interface FAQAccordionProps {
  heading: string
  categories?: FAQCategory[]
  description?: string
  ctaUrl?: string
  ctaText?: string
  questions?: FAQQuestion[]
  variant?: 'default' | 'dark' | 'light'
}

const FAQAccordionItem = ({
  question,
  isActive,
}: {
  question: FAQQuestion
  isActive: boolean
}) => (
  <Primitives.Item
    className="last:border-b-0"
    style={{
      borderBottom: '1px solid',
      borderImage:
        'linear-gradient(to right, transparent 0%, black 50%, transparent 100%) 1',
    }}
    value={question._key}
  >
    <Primitives.Header className="group">
      <Primitives.Trigger className="flex w-full items-center justify-between py-2 text-left transition-colors hover:text-gray-700">
        <span
          className="type-body-sm font-bold pr-4"
          style={{ color: '#302E3C' }}
        >
          {question.title}
        </span>
        <span
          className={clsx(
            'h-4 w-4 text-black transition-transform duration-200 flex items-center justify-center',
            isActive && 'rotate-180'
          )}
        >
          ▼
        </span>
      </Primitives.Trigger>
    </Primitives.Header>
    <Primitives.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
      <div className="pb-2 px-4 md:px-6">
        <div
          style={{
            color: '#000000 !important',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
          className="[&_p]:!mb-4 [&_p:last-child]:!mb-0"
          onClick={(e) => {
            // Prevent accordion from closing when clicking on links
            const target = e.target as HTMLElement
            if (target.tagName === 'A' || target.closest('a')) {
              e.stopPropagation()
            }
          }}
        >
          <PortableText
            value={question.content}
            components={{
              marks: {
                link: ({ children, value }) => {
                  // Determine link type and URL
                  const url = value?.url || value?.href || '#'
                  const isExternal = url.startsWith('http')
                  const isInternal = !isExternal && !url.startsWith('#')

                  // Set condition based on URL type
                  let condition: 'internal' | 'external' = 'external'
                  if (isInternal) condition = 'internal'

                  return (
                    <Link
                      condition={condition}
                      url={url}
                      hasIcon={false}
                      className="text-blue-600 underline cursor-pointer hover:text-blue-800"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Let the Link component handle navigation
                      }}
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
                    style={{ marginBottom: '16px !important' }}
                  >
                    {children}
                  </p>
                ),
              },
            }}
          />
        </div>
      </div>
    </Primitives.Content>
  </Primitives.Item>
)

const FAQAccordion = ({ 
  heading, 
  categories, 
  description,
  ctaUrl,
  ctaText = 'Visit the FAQ Page →',
  questions,
  variant = 'default'
}: FAQAccordionProps) => {
  const [activeQuestions, setActiveQuestions] = useState<Set<string>>(new Set())

  const handleQuestionToggle = (questionKey: string) => {
    setActiveQuestions((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(questionKey)) {
        newSet.delete(questionKey)
      } else {
        newSet.add(questionKey)
      }
      return newSet
    })
  }

  const scrollToCategory = (categoryKey: string) => {
    const element = document.getElementById(`category-${categoryKey}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Si es variante dark o light, usar el nuevo diseño
  if ((variant === 'dark' || variant === 'light') && questions?.length) {
    const isDark = variant === 'dark'
    const faqQuestions = questions
    const [activeValue, setActiveValue] = useState<string | undefined>(undefined)

    return (
      <div 
        className={clsx(
          'py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative',
          isDark ? 'bg-[#1A1A1A]' : 'bg-white'
        )} 
        style={isDark ? { 
          backgroundColor: '#1A1A1A !important',
          backgroundImage: 'none !important',
          background: '#1A1A1A !important',
        } : undefined}
      >
        {/* Overlay para eliminar cualquier gradiente */}
        {isDark && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: '#1A1A1A',
              backgroundImage: 'none',
              background: '#1A1A1A',
              zIndex: 0,
            }}
          />
        )}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
            {/* Columna izquierda: Título, descripción y botón */}
            <div className="flex-1 lg:max-w-md">
              <h2 className={clsx(
                'font-display type-title-t5 sm:type-title-t4 md:type-title-t3 mb-4 sm:mb-6',
                isDark ? 'text-white' : 'text-dark'
              )}>
                {heading}
              </h2>
              {description && (
                <p className={clsx(
                  'type-body-sm sm:type-body-md md:type-body-lg mb-6 sm:mb-8',
                  isDark ? 'text-white/80' : 'text-dark/80'
                )}>
                  {description}
                </p>
              )}
              {ctaUrl && (
                <Link
                  url={ctaUrl}
                  condition="internal"
                  hasIcon={false}
                  className={clsx(
                    'inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors font-medium',
                    isDark 
                      ? 'bg-white border-yellow-200/50 text-black hover:bg-white/90'
                      : 'bg-black border-black text-white hover:bg-black/90'
                  )}
                  style={isDark ? {
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderColor: '#FEF3C7',
                  } : {
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    borderColor: '#000000',
                  }}
                >
                  {ctaText.replace(/→/g, '').trim()}
                  <span className={clsx('inline-flex items-center gap-1', isDark ? 'text-black' : 'text-white')}>
                    <LinkIcon className="w-4 h-4" />
                  </span>
                </Link>
              )}
            </div>

            {/* Columna derecha: Lista de preguntas */}
            <div className="flex-1">
              <Primitives.Root 
                type="single" 
                collapsible 
                className="w-full"
                value={activeValue}
                onValueChange={setActiveValue}
              >
                {faqQuestions.map((question) => {
                  const isActive = activeValue === question._key
                  return (
                    <Primitives.Item key={question._key} value={question._key}>
                      <Primitives.Header>
                        <Primitives.Trigger className={clsx(
                          'flex w-full items-center justify-between py-4 text-left transition-colors',
                          'border-b',
                          isDark 
                            ? 'border-white/20 hover:text-white/80' 
                            : 'border-dark/20 hover:text-dark/80'
                        )}>
                          <span className={clsx(
                            'type-body-sm sm:type-body-md font-medium pr-4 flex-1',
                            isDark ? 'text-white' : 'text-dark'
                          )}>
                            {question.title}
                          </span>
                          <span className={clsx(
                            'h-5 w-5 flex items-center justify-center transition-transform duration-200 flex-shrink-0',
                            isActive && 'rotate-180',
                            isDark ? 'text-white' : 'text-dark'
                          )}>
                            ▼
                          </span>
                        </Primitives.Trigger>
                      </Primitives.Header>
                      <Primitives.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className={clsx(
                          'pb-4 pt-2',
                          isDark ? 'text-white/80' : 'text-dark/80'
                        )}>
                          <PortableText
                            value={question.content}
                            components={{
                              marks: {
                                link: ({ children, value }) => {
                                  const url = value?.url || value?.href || '#'
                                  const isExternal = url.startsWith('http')
                                  const isInternal = !isExternal && !url.startsWith('#')
                                  let condition: 'internal' | 'external' = 'external'
                                  if (isInternal) condition = 'internal'

                                  return (
                                    <Link
                                      condition={condition}
                                      url={url}
                                      hasIcon={false}
                                      className={clsx(
                                        'underline cursor-pointer',
                                        isDark 
                                          ? 'text-white hover:text-white/80' 
                                          : 'text-blue-600 hover:text-blue-800'
                                      )}
                                    >
                                      {children}
                                    </Link>
                                  )
                                },
                              },
                              block: {
                                normal: ({ children }) => (
                                  <p className="type-body-sm mb-4 last:mb-0">
                                    {children}
                                  </p>
                                ),
                              },
                            }}
                          />
                        </div>
                      </Primitives.Content>
                    </Primitives.Item>
                  )
                })}
              </Primitives.Root>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Variante default (comportamiento original)
  if (!categories?.length) return null

  return (
    <div
      className="min-h-screen rounded-lg mx-4 md:mx-8 my-6 md:my-12"
      style={{ backgroundColor: '#F9F7FD' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
            <h2 className="type-h2 text-black mb-6">{heading}</h2>
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
                    {category.title}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex-1">
            {categories.map((category) => (
              <div
                key={category._key}
                id={`category-${category._key}`}
                className="rounded-lg shadow-sm mb-8"
                style={{ backgroundColor: '#F9F7FD' }}
              >
                <div className="px-4 md:px-6 py-4 md:py-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex-shrink-0">
                      <Media
                        media={{
                          condition: 'image',
                          image: category.icon,
                        }}
                        sizes="24px"
                      />
                    </div>
                    <h3 className="type-h3 text-purple-700">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <Primitives.Root
                  type="multiple"
                  value={Array.from(activeQuestions)}
                  onValueChange={(values) => {
                    // Handle multiple accordion state
                    const categoryQuestions = category.questions.map(
                      (q) => q._key
                    )
                    const newActiveQuestions = new Set(activeQuestions)

                    // Remove questions from this category
                    categoryQuestions.forEach((qKey) =>
                      newActiveQuestions.delete(qKey)
                    )

                    // Add newly selected questions from this category
                    values.forEach((value) => {
                      if (categoryQuestions.includes(value)) {
                        newActiveQuestions.add(value)
                      }
                    })

                    setActiveQuestions(newActiveQuestions)
                  }}
                  className="w-full"
                >
                  {category.questions.map((question) => (
                    <FAQAccordionItem
                      key={question._key}
                      question={question}
                      isActive={activeQuestions.has(question._key)}
                    />
                  ))}
                </Primitives.Root>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQAccordion
