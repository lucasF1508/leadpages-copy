'use client'

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import * as Primitives from '@radix-ui/react-accordion'
import Media from '@/components/Media'
import { PortableTextBlock } from '@/types'
import { PortableText } from '@portabletext/react'
import Link from '@/components/Link'

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
  categories: FAQCategory[]
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

const FAQAccordion = ({ heading, categories }: FAQAccordionProps) => {
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
            <h2 className="type-h2 font-bold text-black mb-6">{heading}</h2>
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
