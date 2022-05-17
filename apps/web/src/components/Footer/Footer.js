import React from 'react'
import { styled } from '@design'
import NextLink from 'next/link'
import Newsletter from '@components/Newsletter'
import Heading from '@components/Heading'
import Link from '@components/Link'
import {
  FooterInner,
  FooterContent,
  FooterMenus,
  FooterMenu,
  FooterCopyright,
} from '../Footer'

export const $Footer = styled('footer', {
  mt: 'auto',
  mb: 0,
  w: '100%',
  b: '$footerBackground',
  box: {
    property: 'px',
  },
})

const Footer = ({ footer }) => {
  const { content, navigations = false, contact = {} } = footer || {}
  const year = new Date().getFullYear()

  return (
    <$Footer>
      <FooterInner>
        {content && <FooterContent>{content}</FooterContent>}
        <Newsletter />
        {navigations && (
          <FooterMenus>
            {[...navigations, contact].map(({ title, menu = [] }) => (
              <FooterMenu key={title}>
                <Heading
                  tag="h3"
                  css={{
                    type: 'baseType',
                    mb: 0,

                    '@>s': {
                      mb: '0.25rem',
                    },
                  }}
                >
                  {title}
                </Heading>
                {menu.map(({ _key, ...link }) => (
                  <Link
                    key={_key}
                    linkStyle="none"
                    css={{
                      type: 'baseTypeAlt',
                      d: 'block',
                      mt: '0.75rem',

                      '@>s': {
                        mt: '$2',
                      },
                    }}
                    {...link}
                  />
                ))}
              </FooterMenu>
            ))}
          </FooterMenus>
        )}
        <FooterCopyright>
          <NextLink href="/privacy-policy">
            <a>Privacy Policy</a>
          </NextLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          {year} {contact?.companyTitle}
        </FooterCopyright>
      </FooterInner>
    </$Footer>
  )
}

export default Footer
