import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  position: relative;
  @media (min-width: 1200px) {
    max-width: 1140px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  @media (max-width: 1199px) {
    margin-left: 3rem;
    margin-top: 3rem;
  }
  @media (min-width: 1025px) {
    margin-top: 6rem;
  }
`;

const HeadlineContainer = styled.div`
  position: absolute;
  @media (min-width: 1025px) {
    width: 600px;
  }
  @media (max-width: 1024px) {
    width: 460px;
  }
  @media (max-width: 767px) {
    position: relative;
    width: inherit;
    margin-right: 3rem;
  }
`;

const Supertitle = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 2px;
  color: #0f0c09;
  opacity: 0.5;
  text-transform: uppercase;
  @media (min-width: 1025px) {
    margin-bottom: 26px !important;
  }
  @media (max-width: 1024px) {
    margin-bottom: 14px;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`;

const Title = styled.div`
  font-family: 'Value Serif';
  color: #0f0c09;
  @media (min-width: 1025px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
    margin-bottom: 42px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
    letter-spacing: -0.1px;
    line-height: 36px;
    margin-bottom: 18px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
    letter-spacing: -0.07px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
`;

const Caption = styled.div`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0;
  color: #575452;
  margin-bottom: 42px;
  @media (max-width: 1024px) {
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 32px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 48px;
  background-color: transparent;
  border: 3px solid #d1c6f9;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  color: #603eff;
  text-align: center;
  cursor: pointer;
  text-decoration: none !important;
  transition: all 0.3s ease;
  &:hover {
    background-color: #603eff;
    border: 3px solid #603eff;
    color: white;
  }
`;

const TemplatesHolder = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media (min-width: 1700px) {
    margin: 0;
  }
  @media (max-width: 767px) {
    margin-right: 3rem;
    justify-content: center;
    margin-bottom: -16px;
    margin-top: 32px;
  }
`;

const TemplatesColumn = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: flex-end;
  justify-content: flex-start;
  @media (min-width: 1025px) {
    margin-right: 26px;
    margin-bottom: ${props => props.offset?.desktop};
  }
  @media (max-width: 1024px) {
    margin-right: 20px;
    margin-bottom: ${props => props.offset?.tablet};
  }
  @media (max-width: 767px) {
    justify-content: flex-end;
    margin-right: 12px;
    margin-top: ${props => props.offset?.mobile};
    &.hiddenmobile {
      display: none;
    }
  }
`;

const TemplateImage = styled(GatsbyImage)`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08);
`;

const ImageHolder = styled.div`
  @media (min-width: 1025px) {
    margin-top: 26px;
    &.large {
      width: 344px;
    }
    &.medium {
      width: 299px;
    }
    &.small {
      width: 113px;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 20px;
    &.large {
      width: 275px;
    }
    &.medium {
      width: 239px;
    }
    &.small {
      width: 91px;
    }
  }
  @media (max-width: 767px) {
    margin-top: 0;
    margin-bottom: 12px;
    &.large {
      width: 165px;
    }
    &.medium {
      width: 144px;
    }
    &.small {
      width: 54px;
    }
  }
`;

const FeaturedTemplates = () => {
  const images = useStaticQuery(graphql`
    query FeaturedTemplatesQuery {
      template1: file(relativePath: { eq: "assets/images/templates/1_webinar_600px@2x.jpg" }) {
        ...constrained
      }
      template2: file(relativePath: { eq: "assets/images/templates/2_elevate_228px@2x.jpg" }) {
        ...constrained
      }
      template3: file(
        relativePath: { eq: "assets/images/templates/3_uncommon-ramen_688px@2x.jpg" }
      ) {
        ...constrained
      }
      template4: file(relativePath: { eq: "assets/images/templates/4_rhythm_688px@2x.jpg" }) {
        ...constrained
      }
      template5: file(relativePath: { eq: "assets/images/templates/5_hello-health_228px@2x.jpg" }) {
        ...constrained
      }
      template6: file(
        relativePath: { eq: "assets/images/templates/6_shop-grand-opening_230px@2x.jpg" }
      ) {
        ...constrained
      }
      template7: file(relativePath: { eq: "assets/images/templates/7_ult-fit_230px@2x.jpg" }) {
        ...constrained
      }
      template8: file(
        relativePath: { eq: "assets/images/templates/8_app-coming-soon_230px@2x.jpg" }
      ) {
        ...constrained
      }
      template9: file(relativePath: { eq: "assets/images/templates/9_hope-webinar_688px@2x.jpg" }) {
        ...constrained
      }
      template10: file(
        relativePath: { eq: "assets/images/templates/10_change-agent_688px@2x.jpg" }
      ) {
        ...constrained
      }
      template11: file(
        relativePath: { eq: "assets/images/templates/11_free-consultation_688px@2x.jpg" }
      ) {
        ...constrained
      }
      template12: file(
        relativePath: { eq: "assets/images/templates/12_new-by-four_688px@2x.jpg" }
      ) {
        ...constrained
      }
      template13: file(
        relativePath: { eq: "assets/images/templates/13_zz-sleep-app_688px@2x.jpg" }
      ) {
        ...constrained
      }
      template14: file(
        relativePath: { eq: "assets/images/templates/14_mn-checkout-page_228px@2x.jpg" }
      ) {
        ...constrained
      }
    }
  `);
  const templatesArray = [
    {
      offset: {
        desktop: '-268px',
        tablet: '-217px',
        mobile: '500px',
      },
      templates: [
        {
          image: getImage(images.template1),
          type: 'medium',
        },
      ],
    },
    {
      offset: {
        desktop: '-16px',
        tablet: '-10px',
        mobile: '500px',
      },
      templates: [
        {
          image: getImage(images.template2),
          type: 'small',
        },
      ],
    },
    {
      offset: {
        desktop: '-171px',
        tablet: '-139px',
        mobile: '32px',
      },
      templates: [
        {
          image: getImage(images.template3),
          type: 'large',
        },
        {
          image: getImage(images.template4),
          type: 'large',
        },
        {
          image: getImage(images.template5),
          type: 'small',
        },
      ],
    },
    {
      offset: {
        desktop: '-116px',
        tablet: '-95px',
        mobile: '0px',
      },
      templates: [
        {
          image: getImage(images.template6),
          type: 'small',
        },
        {
          image: getImage(images.template7),
          type: 'small',
        },
        {
          image: getImage(images.template8),
          type: 'small',
        },
      ],
    },
    {
      offset: {
        desktop: '-179px',
        tablet: '-169px',
        mobile: '0px',
      },
      templates: [
        {
          image: getImage(images.template9),
          type: 'large',
        },
        {
          image: getImage(images.template10),
          type: 'large',
        },
        {
          image: getImage(images.template11),
          type: 'large',
        },
      ],
    },
    {
      offset: {
        desktop: '-66px',
        tablet: '0px',
        mobile: '32px',
      },
      templates: [
        {
          image: getImage(images.template12),
          type: 'large',
        },
        {
          image: getImage(images.template13),
          type: 'large',
        },
        {
          image: getImage(images.template14),
          type: 'small',
          alignmentOverride: 'flex-start',
        },
      ],
    },
  ];
  return (
    <OuterContainer>
      <InnerContainer>
        <HeadlineContainer>
          <Supertitle>Unlimited Publishing & Lead Generation</Supertitle>
          <Title>Enjoy unlimited publishing & conversion-optimized templates</Title>
          <Caption>
            Because you don’t believe in limits, neither do we. That’s why, unlike other platforms,
            we don’t charge more for the number of leads you collect or pages you publish.
          </Caption>
          <ButtonContainer>
            <Link to="/templates" alt="see all templates">
              <Button>See All Templates</Button>
            </Link>
          </ButtonContainer>
        </HeadlineContainer>
        <TemplatesHolder>
          {templatesArray.map((column, index) => (
            <TemplatesColumn
              key={index}
              offset={column.offset}
              className={index <= 1 ? 'hiddenmobile' : ''}
            >
              {column.templates.map((item, index) => (
                <ImageHolder
                  key={index}
                  className={item.type}
                  style={{ alignSelf: item.alignmentOverride }}
                >
                  <TemplateImage image={item.image} alt="template preview" />
                </ImageHolder>
              ))}
            </TemplatesColumn>
          ))}
        </TemplatesHolder>
      </InnerContainer>
    </OuterContainer>
  );
};

export default FeaturedTemplates;
