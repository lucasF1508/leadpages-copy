export const dynamic = 'force-static'

import type { SocialShareItemType } from '@/components/Social'
import type { LinkType } from '@types'
import React from 'react'
import Logo from '@public/images/logo.svg'
import { draftMode } from 'next/headers'
import Image from '@/components/Image'
import Link from '@/components/Link'
import Social from '@/components/Social'
import RedbrickFooter from './RedbrickFooter'
import { getFooter } from './getFooter'

export interface FooterProps {
  address: string
  copyright?: string
  legal?: LinkType[]
  menu: {
    heading?: string
    links: LinkType[]
  }[]
  social: SocialShareItemType[]
}

const Footer = async () => {
  const footer = await getFooter(draftMode().isEnabled)

  const { address, copyright, legal, menu, social }: FooterProps = footer || {}
  const year = new Date().getFullYear()

  return (
    <footer className="theme-light bg-surface text-body box-px box-py mb-0 w-full rounded-t-2xl relative z-above-content">
      <div className="max-w-base box-mb mx-auto flex flex-col md:flex-row flex-wrap items-start justify-between gap-6 lg:gap-1.5">
        <div className="mx-auto lg:mx-0 text-center lg:text-left">
          <Image className="mb-3 w-[9.375rem]" image={Logo} />
          <p className="type-caption-xxs text-body-neutral-body whitespace-pre-wrap">
            {address}
          </p>
        </div>
        {!!menu?.length && (
          <nav className="mx-auto lg:mx-0 md:w-cols8 grid grid-cols-2 md:grid-cols-4 items-start justify-end gap-x-6 sm:gap-x-12 gap-y-4">
            {menu.map(({ heading, links }: any) => (
              <div className="flex w-auto flex-col gap-1" key={heading}>
                <h3 className="type-overline-xxs mb-1 text-black/80">
                  {heading}
                </h3>
                {links.map((link: any) => (
                  <Link
                    className="type-body-xs text-body-neutral-body block"
                    hasIcon={false}
                    key={link.label}
                    {...link}
                  />
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>

      <div className="border-body-neutral-body/10 flex w-full flex-col md:flex-row flex-nowrap items-center justify-between gap-5 md:gap-1 border-b border-t border-neutral-200 py-5">
        <div className="type-caption-xxs text-body-neutral-body flex flex-row flex-wrap items-start justify-center md:justify-start gap-1 [&_a]:transition-colors">
          <span className="">
            &copy; {year} {copyright}{' '}
          </span>
          {!!legal?.length &&
            legal.map((link, index) => (
              <React.Fragment key={link._key}>
                {index !== 0 && (
                  <span className="text-body-neutral-body">|</span>
                )}
                <Link
                  className="block type-caption-xxs"
                  key={link.label}
                  {...link}
                  linkStyle="text"
                />
              </React.Fragment>
            ))}
        </div>
        {social && <Social social={social} />}
      </div>
      <RedbrickFooter />
    </footer>
  )
}

export default Footer
