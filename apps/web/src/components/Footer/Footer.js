import React from 'react'
import * as NextLink from 'next/link'
import { styled } from '@design'
import Link from '@components/Link'
import logoIconSVG from '@legacy/assets/images/global/leadpages-wordmark_large.svg'
import FooterRowBottom from './FooterRowBottom'
import LegacyFooter from './LegacyFooter'
import RedbrickFooter from './RedbrickFooter'

const $Footer = styled('footer', {
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
  paddingTop: '4.5rem',
  paddingBottom: '3.75rem',
  paddingRight: '3.625rem',
  paddingLeft: '3.625rem',

  variants: {
    slimFooter: {
      true: {
        pt: '0rem',
      },
    },
  },
})

const $FooterInner = styled('div', {
  maxWidth: '$extended',
  marginRight: 'auto',
  marginLeft: 'auto',
})

const $FooterContent = styled('div', {
  maxWidth: '18rem',
  mx: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '4.5rem',
  paddingBottom: '4.5rem',
  alignItems: 'center',

  '@>769': {
    maxWidth: '$contentFooter',
  },

  '@>1200': {
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'flex-start',
  },
})

const $Logo = styled('div', {
  flex: 1,
})

const $Menus = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '2.25rem',
  width: '100%',
  flexShrink: 1,

  '@>390': {
    gcg: '3rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    maxWidth: '$contentFooter',
  },

  '@>769': {
    gcg: '2.25rem',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
})

const $SmallCaps = styled('div', {
  marginBottom: '0.8rem',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: '$socialGray',
  letterSpacing: '0.125rem',
  lineHeight: '1.125rem',
  textTransform: 'uppercase',
})

const $Menu = styled('div', {
  color: '$textAlt',
})

const $MenuItem = styled('div', {
  padding: '0.625rem 0 0',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  textDecoration: 'none',
  fontFamily: `'Apercu Pro'`,
})

const $StyledLink = styled('a', {
  textDecoration: 'none',
  color: 'inherit',

  '&:hover': {
    cursor: 'pointer',
    color: '$primary',
    textDecoration: 'none',
  },
})

const $LogoIconContainer = styled('img', {
  width: '9rem',
  height: '1.5rem',
  position: 'relative',
})

const Footer = ({ slimFooter, isPreviewPage, data = {} }) => {
  if (isPreviewPage) return null

  const { menu: menus = [] } = data || {}

  if (menus?.length > 0) {
    return (
      <$Footer slimFooter={slimFooter}>
        <$FooterInner>
          {!slimFooter && (
            <$FooterContent>
              <$Logo>
                <NextLink href="/" passHref>
                  <$StyledLink>
                    <$LogoIconContainer
                      src={logoIconSVG.src}
                      alt="Leadpages SVG logo"
                    />
                  </$StyledLink>
                </NextLink>
              </$Logo>
              <$Menus>
                {menus.map(({ _key, heading, links }) => (
                  <$Menu key={_key}>
                    <$SmallCaps>{heading}</$SmallCaps>
                    {links?.map(({ _key: _linkKey, ...link }) => (
                      <$MenuItem key={_linkKey}>
                        <Link {...link} footer={true} />
                      </$MenuItem>
                    ))}
                  </$Menu>
                ))}
              </$Menus>
            </$FooterContent>
          )}
          <FooterRowBottom />
          <RedbrickFooter />
        </$FooterInner>
      </$Footer>
    )
  }

  return <LegacyFooter slimFooter={slimFooter} />
}

export default Footer
