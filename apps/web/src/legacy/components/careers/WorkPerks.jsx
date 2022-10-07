import React from 'react'
import Image from '@components/Image'
import { styled } from '@design'
//image
import rightImage from '@legacy/assets/images/totems/work-perks-leadpages_right_782px@2x.png'
import leftImage from '@legacy/assets/images/totems/work-perks-leadpages_left_610px@2x.png'

const TransformContainer = styled('div', {})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
})

const ConversionOuterContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  marginTop: '3rem',
})

const ConversionContainer = styled(FlexRow, {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexWrap: 'wrap',
  paddingRight: '3rem',
  paddingLeft: '3rem',

  '@media (min-width: 576px)': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },

  '@media (min-width: 992px)': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
})

const SkillOuterContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  marginTop: '3rem',
  marginBottom: '6rem',

  '@media (max-width: 576px)': {
    marginBottom: '4rem',
  },
})

const SkillContainer = styled(FlexRow, {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexWrap: 'wrap',
  flexDirection: 'row',
  paddingRight: '3rem',
  paddingLeft: '3rem',

  '@media (min-width: 576px)': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
    flexDirection: 'row-reverse',
  },

  '@media (min-width: 992px)': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
})

const FlexRowItem6 = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  paddingLeft: '1%',
  paddingRight: '1%',
  justifyContent: 'space-between',
  textAlign: 'left',
  marginRight: '1%',
  marginBottom: '2rem',

  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 46%',
    flex: '0 0 46%',
    maxWidth: '46%',
  },

  '@media (min-width: 992px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 46%',
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const ConversionTextContainer = styled(FlexRowItem6, {
  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 46%',
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const ConversionCopyContainer = styled(FlexRowItem6, {
  display: 'flex',
  flexWrap: 'wrap',

  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const ConversionImageContainer = styled(FlexRowItem6, {
  alignSelf: 'flex-end',
  marginBottom: '0rem',

  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 577px) and (max-width: 993px)': {
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  '@media (min-width: 992px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 46%',
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const SkillTextContainer = styled(FlexRowItem6, {
  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 46%',
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const SkillHeadingContainer = styled(FlexRowItem6, {
  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const SkillCopyContainer = styled(FlexRowItem6, {
  display: 'flex',
  flexWrap: 'wrap',

  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 992px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const SkillImageContainer = styled(FlexRowItem6, {
  alignSelf: 'flex-end',
  position: 'relative',
  marginBottom: '0rem',

  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 992px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 46%',
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const FlexRowItem6Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1rem',
})

const FlexRowItem6Copy = styled('div', {
  color: '#575452',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1rem',
})

const PFTitle = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '#0f0c09',
  marginBottom: '2rem',
})

const TransformCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#575452',
  marginBottom: '4rem',
})

const WorkPerks = () => {
  return (
    <TransformContainer>
      <SkillOuterContainer>
        <SkillContainer>
          <SkillTextContainer>
            <SkillHeadingContainer>
              <PFTitle>Why you’ll love working here</PFTitle>
              <TransformCopy>
                We love keeping our employees happy and healthy. In addition to
                meaningful projects, career development opportunities, and a
                supportive team, you’ll find amazing benefits and perks that
                make working at Leadpages even better.
              </TransformCopy>
            </SkillHeadingContainer>
            <SkillCopyContainer>
              <FlexRowItem6>
                <FlexRowItem6Heading>Health benefits</FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  In addition to medical, dental and vision, we offer a
                  $50/month wellness allowance and are proud to support growing
                  families with a full year of paid parental leave.
                </FlexRowItem6Copy>
              </FlexRowItem6>
              <FlexRowItem6>
                <FlexRowItem6Heading>
                  Compensation & rewards
                </FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  Competitive salaries, flexible vacation and paid time off, AND
                  career-defining work? Check, check, check.
                </FlexRowItem6Copy>
              </FlexRowItem6>
            </SkillCopyContainer>
          </SkillTextContainer>
          <SkillImageContainer>
            <Image
              image={leftImage}
              alt="Leadpages work perks careers left image"
            />
          </SkillImageContainer>
        </SkillContainer>
      </SkillOuterContainer>
      <ConversionOuterContainer>
        <ConversionContainer>
          <ConversionTextContainer>
            <ConversionCopyContainer>
              <FlexRowItem6>
                <FlexRowItem6Heading>
                  Hybrid work environment
                </FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  Do you do your best work from home or away from it? We offer
                  flexibile hours, remote work, and a beautiful dog-friendly
                  office that’s loaded with snacks, coffee, and great people.
                </FlexRowItem6Copy>
              </FlexRowItem6>
              <FlexRowItem6>
                <FlexRowItem6Heading>
                  Professional development
                </FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  We want Leadpages to be a place where you grow, so we offer up
                  to $1,000 (USD) a year towards continuing education,
                  conferences, and courses.
                </FlexRowItem6Copy>
              </FlexRowItem6>
              <FlexRowItem6>
                <FlexRowItem6Heading>People first</FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  Leadpages believes in diversity, equity, and inclusion. We’re
                  looking for people from diverse backgrounds to bring their
                  unique perspectives, skills, and experiences to the team.
                </FlexRowItem6Copy>
              </FlexRowItem6>
            </ConversionCopyContainer>
          </ConversionTextContainer>
          <ConversionImageContainer>
            <Image
              image={rightImage}
              alt="Leadpages work perks careers right image"
            />
          </ConversionImageContainer>
        </ConversionContainer>
      </ConversionOuterContainer>
    </TransformContainer>
  )
}

export default WorkPerks
