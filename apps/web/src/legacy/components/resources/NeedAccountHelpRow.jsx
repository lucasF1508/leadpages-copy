import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import headerImage from '@legacy/assets/images/totems/staci-laura_wavy-stairsO2A6183@2x.png'

const CAContainer = styled('div', {
  maxWidth: '1140px',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  background: '$grayAlt',

  '@<s': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },
})

const FlexRow = styled('div', {
  maxWidth: '1140px',
  background: '$grayAlt',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexWrap: 'wrap',

  '@<s': {
    flexDirection: 'column-reverse',
  },
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
})

const FlexRowLeft = styled(FlexRowItem, {
  alignSelf: 'flex-end',
  textAlign: 'left',
  paddingRight: '1%',

  '@<s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>s': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 23%',
    flex: '0 0 23%',
    maxWidth: '23%',
  },

  '@>m': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 23%',
    flex: '0 0 23%',
    maxWidth: '23%',
  },
})
const HeaderImgLeft = styled('div', {
  width: '100%',
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'center',
  alignSelf: 'center',
  paddingLeft: '1%',
  paddingRight: '1%',

  '@<s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>s': {
    flex: '0 0 64.6%',
    maxWidth: '64.6%',
  },

  '@>m': {
    marginBottom: '0rem',
    flex: '0 0 64.6%',
    maxWidth: '64.6%',
    textAlign: 'left',
  },
})

const LeftHeading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  color: '$text',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const LeftSubHeading = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1rem',
  },
})

const StyledLink = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
})

const Button = styled('button', {
  width: '192px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$primary',
  backgroundColor: '$primary',
  color: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '@media (max-width: 340px)': {
    width: '240px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
  },
})

const SubFlexRow = styled('div', {
  '@media (min-width: 769px)': {
    display: 'flex',
  },

  '@<s': {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
})

const SubFlexRowLeft = styled('div', {
  marginTop: '66px',
  alignSelf: 'center',
  marginRight: '24px',
  textAlign: 'left',

  '@<s': {
    textAlign: 'center',
  },
})

const SubFlexRowRight = styled('div', {
  alignSelf: 'center',
  textAlign: 'left',

  '@<s': {
    textAlign: 'center',
  },

  '@media (max-width: 768px)': {
    marginBottom: '2rem',
  },
})

const NeedAccountHelpRow = () => {
  return (
    <CAContainer>
      <FlexRow>
        <FlexRowLeft>
          <HeaderImgLeft>
            <Image image={headerImage} alt="leadpages integrations" />
          </HeaderImgLeft>
        </FlexRowLeft>
        <FlexRowRight>
          <SubFlexRow>
            <SubFlexRowLeft>
              <LeftHeading>
                Need some help with your Leadpages account?
              </LeftHeading>
              <LeftSubHeading>
                Find answers and step-by-step guidance to get the most from your
                account.
              </LeftSubHeading>
            </SubFlexRowLeft>
            <SubFlexRowRight>
              <StyledLink
                href="https://support.leadpages.com/hc/en-us"
                alt="Leadpages Support"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Button>Visit our Help Center</Button>
              </StyledLink>
            </SubFlexRowRight>
          </SubFlexRow>
        </FlexRowRight>
      </FlexRow>
    </CAContainer>
  )
}

export default NeedAccountHelpRow
