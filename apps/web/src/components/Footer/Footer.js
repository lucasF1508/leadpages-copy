import React from 'react'
import * as NextLink from 'next/link'
import { styled } from '@design'
import Link from '@components/Link'
import logoIconSVG from '@legacy/assets/images/global/leadpages-symbol_large.svg'
import FooterRowBottom from './FooterRowBottom'
import LegacyFooter, { FlexRow, FooterLast } from './LegacyFooter'

const FooterContainer = styled('footer', {
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
  paddingTop: '3rem',
  paddingBottom: '1rem',
  paddingRight: '6rem',
  paddingLeft: '6rem',
  marginRight: 'auto',
  marginLeft: 'auto',
  variants: {
    slimFooter: {
      true: {
        pt: '0rem',
      },
    },
  },
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  paddingLeft: '1%',
  paddingRight: '1%',
  marginBottom: '1.5rem',
})

const Col2 = styled(FlexRowItem, {
  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 47%',
    flex: '0 0 47%',
    maxWidth: '47%',
  },

  '@media (min-width: 768px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 31.3333%',
    flex: '0 0 31.3333%',
    maxWidth: '31.3333%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 14.6666%',
    flex: '0 0 14.6666%',
    maxWidth: '14.6666%',
    textAlign: 'left',
  },
})

const Col4 = styled(FlexRowItem, {
  '@media (min-width: 768px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 31.3333%',
    flex: '0 0 31.3333%',
    maxWidth: '31.3333%',
    textAlign: 'left',
  },
})

const SmallCaps = styled('div', {
  marginBottom: '0.8rem',
  fontFamily: `'Space Mono'`,
  fontSize: '12px',
  fontStyle: 'normal',
  color: 'rgba(0, 0, 0, 0.5)',
  letterSpacing: '2px',
  lineHeight: '18px',
  opacity: 0.5,
  textTransform: 'uppercase',
})

const FlexColumn = styled('div', {
  WebkitBoxOrient: 'vertical',
  WebkitBoxDirection: 'normal',
  MsFlexDirection: 'column',
  flexDirection: 'column',
  display: 'flex',
  MsFlexWrap: 'wrap',
  flexWrap: 'wrap',
  paddingLeft: 0,
  marginBottom: 0,
  listStyle: 'none',
})

const FlexColumnItem = styled('div', {
  display: 'block',
  padding: '0.5rem 0',
  fontSize: '14px',
  lineHeight: '20px',
  textDecoration: 'none',
  fontFamily: `'Apercu Pro'`,
})

const StyledLink = styled('a', {
  textDecoration: 'none',
  color: 'inherit',

  '&:hover': {
    cursor: 'pointer',
    color: '$primary',
    textDecoration: 'none',
  },
})

const LogoIconContainer = styled('img', {
  width: '33px',
  height: '24px',
  position: 'relative',
  top: '7px',
})

const Footer = ({ slimFooter, isPreviewPage, data = {} }) => {
  if (isPreviewPage) return null

  const { menu: menus = [] } = data || {}

  if (menus?.length > 0) {
    return (
      <FooterContainer slimFooter={slimFooter}>
        {!slimFooter && (
          <InnerContainer>
            <FlexRow
              css={{
                justifyContent: 'space-between',
              }}
            >
              <Col4>
                <FlexColumn>
                  <FlexColumnItem>
                    <NextLink href="/" passHref>
                      <StyledLink>
                        <LogoIconContainer
                          src={logoIconSVG.src}
                          alt="Leadpages SVG logo"
                        />
                      </StyledLink>
                    </NextLink>
                  </FlexColumnItem>
                </FlexColumn>
              </Col4>
              {menus.map(({ _key, heading, links }) => (
                <Col2 key={_key}>
                  <SmallCaps>{heading}</SmallCaps>
                  <FlexColumn>
                    {links.map(({ _key: _linkKey, ...link }) => (
                      <FlexColumnItem key={_linkKey}>
                        <Link {...link} footer={true} />
                      </FlexColumnItem>
                    ))}
                  </FlexColumn>
                </Col2>
              ))}
            </FlexRow>
          </InnerContainer>
        )}
        <FooterRowBottom />
        <FooterLast />
      </FooterContainer>
    )
  }

  return <LegacyFooter slimFooter={slimFooter} />
}

export default Footer
