'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import * as Primitives from '@radix-ui/react-accordion'
import { PortableTextBlock } from '@/types'
import { PortableText } from '@portabletext/react'
import Link from '@/components/Link'

export interface FAQQuestion {
  _key: string
  title: string
  content: PortableTextBlock[]
}

export interface FAQPlatformProps {
  label?: string
  heading: string
  subheading?: string
  questions: FAQQuestion[]
  variant?: 'dark' | 'light'
}

const FAQPlatform = ({
  label,
  heading,
  subheading,
  questions = [],
  variant = 'dark',
}: FAQPlatformProps) => {
  const [activeValue, setActiveValue] = useState<string | undefined>(undefined)
  const isLight = variant === 'light'

  if (!questions?.length) return null

  return (
    <section
      className="w-full py-10 sm:py-12 md:pt-12 md:pb-48 lg:pt-13 lg:pb-64 px-4 sm:px-6"
      style={{ backgroundColor: isLight ? '#F8F8F8' : '#111019' }}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Label, Heading, Subheading */}
          <div className="flex-shrink-0 lg:w-[30%]">
            {/* Label */}
            {label && (
              <p
                className={clsx(
                  'text-xs font-semibold tracking-[0.2em] uppercase mb-3',
                  isLight ? 'text-[#6F42C1]' : 'text-white/60'
                )}
                style={{
                  fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                  fontWeight: 600,
                }}
              >
                {label}
              </p>
            )}

            {/* Heading */}
            <h2
              className={clsx(
                'text-6xl font-normal leading-[0.95] mb-4',
                isLight ? 'text-[#333333]' : 'text-white'
              )}
              style={{
                fontFamily: 'var(--font-uxumvf, sans-serif)',
                fontWeight: 400,
                letterSpacing: '0px',
              }}
            >
              {heading}
            </h2>

            {/* Subheading */}
            {subheading && (
              <p
                className={clsx(
                  'text-lg font-normal leading-[1.4]',
                  isLight ? 'text-[#333333]' : 'text-white/70'
                )}
                style={{
                  fontFamily: 'var(--font-inter, sans-serif)',
                  fontWeight: 400,
                }}
              >
                {subheading}
              </p>
            )}
          </div>

          {/* Right Column: Questions Accordion */}
          <div className="flex-1 lg:w-[70%]">
            <Primitives.Root
              type="single"
              collapsible
              className="w-full"
              value={activeValue}
              onValueChange={setActiveValue}
            >
              {questions.map((question) => {
                const isActive = activeValue === question._key
                return (
                  <Primitives.Item
                    key={question._key}
                    value={question._key}
                    className={clsx('border-b', isLight ? 'border-[#E0E0E0]' : 'border-white/10')}
                  >
                    <Primitives.Header>
                      <Primitives.Trigger
                        className={clsx(
                          'flex w-full items-center justify-between py-4 text-left transition-colors',
                          isLight ? 'hover:text-[#333333]/80' : 'hover:text-white/80'
                        )}
                      >
                        <span
                          className={clsx(
                            'text-lg font-normal pr-6 flex-1',
                            isLight ? 'text-[#333333]' : 'text-white'
                          )}
                          style={{
                            fontFamily: 'var(--font-inter, sans-serif)',
                            fontWeight: 400,
                            lineHeight: '1.4',
                          }}
                        >
                          {question.title}
                        </span>
                        <span
                          className={clsx(
                            'flex items-center justify-center w-7 h-7 text-white text-2xl transition-all duration-200 flex-shrink-0',
                            isActive ? 'rotate-45' : 'rotate-0'
                          )}
                          style={{
                            fontFamily: 'var(--font-inter, sans-serif)',
                            fontWeight: 300,
                          }}
                        >
                          +
                        </span>
                      </Primitives.Trigger>
                    </Primitives.Header>
                    <Primitives.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className={clsx('pb-4', isLight ? 'text-[#333333]' : 'text-white/70')}>
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
                                      isLight ? 'text-[#333333] hover:text-[#6F42C1]' : 'text-white hover:text-white/80'
                                    )}
                                  >
                                    {children}
                                  </Link>
                                )
                              },
                            },
                            block: {
                              normal: ({ children }) => (
                                <p
                                  className="text-sm mb-3 last:mb-0"
                                  style={{
                                    fontFamily: 'var(--font-inter, sans-serif)',
                                    fontWeight: 400,
                                    lineHeight: '1.6',
                                  }}
                                >
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
    </section>
  )
}

export default FAQPlatform
