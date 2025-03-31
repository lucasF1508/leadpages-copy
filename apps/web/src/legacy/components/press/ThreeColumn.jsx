import React from 'react'
import { styled } from '@design'
import Link from 'next/link'
// images
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const LPUContainer = styled('div', {
  mw: '1140px',
  mx: 'auto',
  pt: '4rem',
  pb: '6rem',
  px: '3rem',

  '@>s': {
    pt: '4rem',
    pb: '6rem',
    px: '3rem',
  },

  '@>m': {
    py: '10rem',
    px: '6rem',
  },
})

const FlexRow = styled('div', {
  d: 'flex',
  jc: 'space-between',
  ai: 'flex-start',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  ta: 'center',
  textDecoration: 'none',
  w: '100%',
  px: '1%',
  mx: 'auto',
})

const FlexRow3 = styled(FlexRowItem, {
  d: 'flex',
  jc: 'space-between',
  mb: '2rem',

  '@media (max-width: 768px)': {
    f: '0 0 100%',
    mw: '100%',
    mb: '4rem',
  },

  '@media (min-width: 769px)': {
    mb: 0,
    f: '0 0 27.3333%',
    mw: '27.3333%',
  },
})

const FlexRow3Container = styled('div', {
  ta: 'left',
})

const ArrowRightPurple = styled('img', {
  w: '20px',
  h: '10px',
})

const CTA = styled('div', {
  c: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '30px',
  ta: 'left',
  fontWeight: 500,
  cursor: 'pointer',
})

const Title = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: 500,
  mb: '1.25rem',
  c: '$text',
})

const Copy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  mb: '2rem',
  c: '$textAlt',

  '@<m': {
    mb: '1rem',
  },
})

const ThreeColumn = () => (
  <OuterContainer>
    <LPUContainer>
      <FlexRow>
        <FlexRow3>
          <FlexRow3Container>
            <Title>Leadpages plans</Title>
            <Copy>Helping small businesses grow big.</Copy>
            <Link href="/pricing">
              <CTA>
                Leadpages pricing&nbsp;
                <ArrowRightPurple
                  src={rightArrowPurple.src}
                  alt="purple right arrow"
                />
              </CTA>
            </Link>
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            <Title>Tech Support</Title>
            <Copy>Get in touch with our customer success team.</Copy>
            <Link href="/contact" data-gtm="contact-us-link">
              <CTA>
                Leadpages Support &nbsp;
                <ArrowRightPurple
                  src={rightArrowPurple.src}
                  alt="purple right arrow"
                />
              </CTA>
            </Link>
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            <Title>Blog</Title>
            <Copy>Tips, advice, and announcements.</Copy>
            <a
              href="https://www.leadpages.com/blog/"
              aria-label="Leadpages blog"
              rel="noopener"
            >
              <CTA>
                Visit Our Blog&nbsp;
                <ArrowRightPurple
                  src={rightArrowPurple.src}
                  alt="purple right arrow"
                />
              </CTA>
            </a>
          </FlexRow3Container>
        </FlexRow3>
      </FlexRow>
    </LPUContainer>
  </OuterContainer>
)

export default ThreeColumn
