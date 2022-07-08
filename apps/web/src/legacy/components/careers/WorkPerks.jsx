import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const TransformContainer = styled.div``;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ConversionOuterContainer = styled(FlexRow)`
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const ConversionContainer = styled(FlexRow)`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const SkillOuterContainer = styled(FlexRow)`
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 6rem;
  @media (max-width: 576px) {
    margin-bottom: 4rem;
  }
`;

const SkillContainer = styled(FlexRow)`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  flex-direction: row;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
    flex-direction: row-reverse;
  }
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const FlexRowItem6 = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
  justify-content: space-between;
  text-align: left;
  margin-right: 1%;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const ConversionTextContainer = styled(FlexRowItem6)`
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const ConversionCopyContainer = styled(FlexRowItem6)`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const ConversionImageContainer = styled(FlexRowItem6)`
  align-self: flex-end;
  margin-bottom: 0rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 577px) and (max-width: 993px) {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const SkillTextContainer = styled(FlexRowItem6)`
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const SkillHeadingContainer = styled(FlexRowItem6)`
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const SkillCopyContainer = styled(FlexRowItem6)`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const SkillImageContainer = styled(FlexRowItem6)`
  align-self: flex-end;
  position: relative;
  margin-bottom: 0rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const FlexRowItem6Heading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1rem;
`;

const FlexRowItem6Copy = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1rem;
`;

const PFTitle = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  margin-bottom: 2rem;
`;

const TransformCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 4rem;
`;

const WorkPerks = () => {
  const images = useStaticQuery(graphql`
    query WorkPerksQuery {
      rightImage: file(
        relativePath: { eq: "assets/images/totems/work-perks-leadpages_right_782px@2x.png" }
      ) {
        ...constrained
      }
      leftImage: file(
        relativePath: { eq: "assets/images/totems/work-perks-leadpages_left_610px@2x.png" }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <TransformContainer>
      <SkillOuterContainer>
        <SkillContainer>
          <SkillTextContainer>
            <SkillHeadingContainer>
              <PFTitle>Why you’ll love working here</PFTitle>
              <TransformCopy>
                We love keeping our employees happy and healthy. In addition to meaningful projects,
                career development opportunities, and a supportive team, you’ll find amazing
                benefits and perks that make working at Leadpages even better.
              </TransformCopy>
            </SkillHeadingContainer>
            <SkillCopyContainer>
              <FlexRowItem6>
                <FlexRowItem6Heading>Health benefits</FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  In addition to medical, dental and vision, we offer a $50/month wellness allowance
                  and are proud to support growing families with a full year of paid parental leave.
                </FlexRowItem6Copy>
              </FlexRowItem6>
              <FlexRowItem6>
                <FlexRowItem6Heading>Compensation & rewards</FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  Competitive salaries, flexible vacation and paid time off, AND career-defining
                  work? Check, check, check.
                </FlexRowItem6Copy>
              </FlexRowItem6>
            </SkillCopyContainer>
          </SkillTextContainer>
          <SkillImageContainer>
            <GatsbyImage
              image={getImage(images.leftImage)}
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
                <FlexRowItem6Heading>Hybrid work environment</FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  Do you do your best work from home or away from it? We offer flexibile hours,
                  remote work, and a beautiful dog-friendly office that’s loaded with snacks,
                  coffee, and great people.
                </FlexRowItem6Copy>
              </FlexRowItem6>
              <FlexRowItem6>
                <FlexRowItem6Heading>Professional development</FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  We want Leadpages to be a place where you grow, so we offer up to $1,000 (USD) a
                  year towards continuing education, conferences, and courses.
                </FlexRowItem6Copy>
              </FlexRowItem6>
              <FlexRowItem6>
                <FlexRowItem6Heading>People first</FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  Leadpages believes in diversity, equity, and inclusion. We’re looking for people
                  from diverse backgrounds to bring their unique perspectives, skills, and
                  experiences to the team.
                </FlexRowItem6Copy>
              </FlexRowItem6>
            </ConversionCopyContainer>
          </ConversionTextContainer>
          <ConversionImageContainer>
            <GatsbyImage
              image={getImage(images.rightImage)}
              alt="Leadpages work perks careers right image"
            />
          </ConversionImageContainer>
        </ConversionContainer>
      </ConversionOuterContainer>
    </TransformContainer>
  );
};

export default WorkPerks;
