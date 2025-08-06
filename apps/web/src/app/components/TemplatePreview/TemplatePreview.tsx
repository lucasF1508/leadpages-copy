'use client'

import React, { useEffect, useState } from 'react'
import Link from '@/components/Link'
import { motion as m } from 'motion/react'
import clsx from 'clsx'
import TemplatePreviewNav from './TemplatePreviewNav'
import { TemplateType as Template } from '@/types/template'
import { buildCheckoutUrl } from '@/lib/utils/buildCheckoutUrl'
import { Mobile, Laptop, LaptopFilled, MobileFilled } from './TemplatePreviewIcons'

interface TemplatePreviewProps {
  data: Template
}

const toggleNav = [
  { label: 'Desktop', Icon: Laptop, IconFilled: LaptopFilled, value: false },
  { label: 'Mobile', Icon: Mobile, IconFilled: MobileFilled, value: true },
]

const TemplatePreview = ({ data }: TemplatePreviewProps) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(buildCheckoutUrl({planType: 'proMonthly', data}))
  const {categories, kind, title, slug} = data
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const url = buildCheckoutUrl({planType: 'proMonthly', data})

    if(checkoutUrl !== url) {
      setCheckoutUrl(url)
    }
  }, [data?._id])

  return (
    <div className="fixed inset-0 z-cover bg-dark">
      <div className="w-full h-full flex flex-col">
        <div className='h-header-height.md flex items-center justify-between py-[0.625rem] px-3 border-b border-border-muted'>
          <div className='flex-[1_1_100%]'>
            <TemplatePreviewNav
              categories={categories}
              kind={kind}
              title={title}
              slug={slug}
            />
          </div>
          <div className="relative items-center justify-center gap-1 rounded-full flex-[1_1_100%] hidden md:flex">
            {toggleNav.map(
              ({ label, Icon, IconFilled, value }) => {
                const isActive = isMobile === value
                return (
                  <div
                    key={label}
                    onClick={() => setIsMobile(value)}
                    className="relative z-10 flex items-center gap-1 text-sm rounded-full text-white p-1 cursor-pointer"
                  >
                    {isActive && (
                      <m.div
                        layoutId="activeBackground"
                        className="absolute inset-0 z-0 rounded-md bg-surface-neutral-opacity"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className={clsx(!isActive && 'text-body-disabled hover:text-white', "relative z-10 flex items-center gap-1 transition-all duration-300")}>
                      {isActive ? <IconFilled /> : <Icon />}
                    </span>
                  </div>
                )
              }
            )}
          </div>
          {checkoutUrl &&
            <div className='flex-[1_1_100%] flex justify-end'>
              <Link
                href={checkoutUrl}
                linkStyle='button-solid'
                condition='external'
              >
                Use Template
              </Link>
            </div>
          }
        </div>
        <div className='grow flex items-center justify-center w-full'>
          <div
            className={
            clsx(
              'transition-all duration-300 ease-in-out h-full w-full overflow-hidden',
              isMobile ? 'max-w-cols4 max-h-cols9 rounded-lg' : 'max-w-full max-h-full'
            )}
          >
            <iframe className='w-full h-full'
              src={`https://api.leadpages.io/template/v2/templates/${data._id}/preview.html`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplatePreview