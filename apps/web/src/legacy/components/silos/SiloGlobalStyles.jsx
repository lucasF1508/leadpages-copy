import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
`;

export const InnerContainer = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  background: #fff;
`;

export const BodyContainer = styled.div`
  display: flex;
  padding-top: 3rem;
`;

export const MainContainer = styled.div`
  max-width: 816px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  overflow-x: auto;
  @media (max-width: 576px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 577px) and (max-width: 991px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: 992px) {
    margin-left: 30%;
    width: 70%;
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

export const SectionContainer = styled.div`
  margin-top: 96px;
  &.first {
    margin-top: 0 !important;
  }
`;

export const PageTitle = styled.h1`
  font-family: 'Value Serif';
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.1px;
  color: #0f0c09;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
    margin-bottom: 2rem;
    width: 100%;
  }
  @media (min-width: 769px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
    margin-bottom: 41px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Value Serif';
  font-size: 40px;
  line-height: 48px;
  color: #0f0c09;
  margin-bottom: 1.5rem;
`;

export const PageSupertitle = styled.div`
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  opacity: 0.5;
  color: #000000;
  font-family: 'Space Mono';
  text-transform: uppercase;
  margin-bottom: 1rem;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  color: #0f0c09;
  font-family: 'Value Serif';
  font-size: 24px;
  letter-spacing: -0.08px;
  line-height: 1.75em;
  margin-bottom: 18px;
  margin-top: 42px;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const H3 = styled.h3`
  color: #0f0c09;
  font-family: Apercu Pro;
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
  margin-top: 36px;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const H4 = styled.h4`
  color: #0f0c09;
  font-family: Apercu Pro;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 16px;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ParagraphLarge = styled.p`
  color: #575452;
  font-family: Apercu Pro;
  font-size: 22px;
  line-height: 36px;
  margin-bottom: 60px;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    line-height: 28px;
  }
`;

export const ParagraphAccent = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.17px;
  line-height: 40px;
  color: #0b236d;
  margin-bottom: 60px;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.07px;
    line-height: 24px;
    width: 100%;
  }
`;

export const ParagraphSmall = styled.p`
  color: #575452;
  font-family: Apercu Pro;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 45px;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    line-height: 28px;
  }
`;

export const TextTitle = styled.h1`
  font-family: 'Value Serif';
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.1px;
  color: #0f0c09;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
    margin-bottom: 2rem;
    width: 100%;
  }
  @media (min-width: 769px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
    margin-bottom: 41px;
  }
`;

export const TextSupertitle = styled.div`
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  opacity: 0.5;
  color: #000000;
  font-family: 'Space Mono';
  text-transform: uppercase;
  margin-bottom: 1rem;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const UL = styled.ul`
  margin-top: 24px;
  margin-bottom: 45px;
  margin-left: 32px;
  width: calc(80% - 32px);
  @media (max-width: 768px) {
    width: calc(100% - 32px);
  }
`;

export const OL = styled.ol`
  margin-top: 24px;
  margin-bottom: 45px;
  margin-left: 32px;
  width: calc(80% - 32px);
  @media (max-width: 768px) {
    width: calc(100% - 32px);
  }
`;

export const ListItem = styled.li`
  color: #575452;
  font-family: Apercu Pro;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 18px;
`;

export const ArticleLink = styled(Link)`
  text-decoration: none;
  color: #575452;
  font-family: Apercu Pro;
  font-size: inherit;
  line-height: inherit;
  padding-bottom: 2px;
  border-bottom: 3px solid #d1c6f9;
  transition: all 0.3s ease;
  &:hover {
    border-bottom: 3px solid #603eff;
    color: #603eff;
  }
`;

export const HeaderLink = styled(ArticleLink)`
  color: #0f0c09;
  font-family: inherit;
`;

export const SiloScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: #575452;
  font-family: Apercu Pro;
  font-size: inherit;
  line-height: inherit;
  padding-bottom: 2px;
  border-bottom: 3px solid #d1c6f9;
  transition: all 0.3s ease;
  &:hover {
    border-bottom: 3px solid #603eff;
    color: #603eff;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(15, 12, 9, 0.5);
  cursor: pointer;
  &:hover {
    color: #603eff;
  }
`;

export const OutboundLink = styled.a`
  text-decoration: none;
  color: #575452;
  font-family: Apercu Pro;
  font-size: inherit;
  line-height: inherit;
  padding-bottom: 2px;
  border-bottom: 3px solid #d1c6f9;
  transition: all 0.3s ease;
  &:hover {
    border-bottom: 3px solid #603eff;
    color: #603eff;
  }
`;

export const TemplateLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const Image = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 72px;
`;

export const TemplateImage = styled(Image)`
  max-width: 652px;
`;

export const Image1 = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 72px;
  max-width: 652px;
`;

export const Image2 = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 30px;
  max-width: 652px;
`;

export const Image3 = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 30px;
`;

export const DesktopVideoHolder = styled.div`
  position: relative;
  width: 100%;
  margin-top: 48px;
  margin-bottom: 72px;
  max-width: 652px;
`;

export const DesktopOnlyVideo = styled.video`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 652px;
  z-index: 1;
  @media (max-width: 568px) {
    display: none;
  }
`;

export const DesktopFallbackImage = styled(GatsbyImage)`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  max-width: 652px;
  display: block;
  @media (max-width: 568px) {
    display: none;
  }
`;

export const MobileOnlyImage = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 72px;
  max-width: 652px;
  @media (min-width: 569px) {
    display: none !important;
  }
`;

export const ImageWithBorder = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 72px;
  border: 1px solid #c3c2c1;
`;

export const ImageWithBorder2 = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 72px;
  border: 1px solid #c3c2c1;
`;

export const SmallImage = styled(GatsbyImage)`
  width: 95%;
  max-width: 542px;
  margin-bottom: 36px;
  &:hover {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

export const SmallImage2 = styled(GatsbyImage)`
  width: 100%;
  max-width: 542px;
  margin-bottom: 72px;
  &:hover {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

export const BGImageWrapper = styled.div`
  @media (max-width: 568px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70%;
    flex: 0 0 70%;
    max-width: 70%;
    position: relative;
    margin-left: auto;
  }
  @media (min-width: 569px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    max-width: 40%;
    width: 40%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const BGImage = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: -7px;
`;

export const TextContainer = styled.div`
  align-self: center;
  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 2rem;
  }
  @media (min-width: 769px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    width: 50%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  min-height: 562px;
  @media (max-width: 568px) {
    display: block;
  }
  background-color: #0b236d;
  position: relative;
  margin-top: 54px;
  margin-bottom: 72px;
`;

export const Title = styled.div`
  font-family: 'Apercu Pro';
  font-size: 12px;
  letter-spacing: 0px;
  line-height: 18px;
  color: #ffffff;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Headline = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #ffffff;
  margin-bottom: 2rem;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding-left: 10%;
  padding-right: 10%;
  border: 3px solid #603eff;
  border-radius: 27px;
  background-color: #603eff;
  color: #ffffff;
  cursor: pointer;
  font-family: Apercu Pro;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.875rem;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }
`;

export const DefinitionHolder = styled.div`
  background-color: #f9f9f9;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
  h3 {
    margin-bottom: 0px;
    padding: 24px;
    padding-bottom: 18px;
    width: 100%;
    box-sizing: border-box;
  }
  p:nth-child(2) {
    font-size: 14px;
    padding: 24px;
    padding-top: 0px;
    margin-bottom: 18px;
    width: 100%;
    box-sizing: border-box;
  }
  p:nth-child(3) {
    font-style: italic;
    font-size: 18px;
    padding: 24px;
    padding-top: 0px;
    box-sizing: border-box;
    width: 100%;
  }
`;

export const TemplatePreviewHolder = styled.div`
  min-width: 200px;
  min-height: 200px;
  height: 815px;
  position: relative;
  margin-top: 2rem;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25);
  cursor: default !important;
  overflow: scroll;
  @media (max-width: 770px) {
    display: none;
  }
  &.solotemplate {
    margin-bottom: 4rem;
  }
`;

export const StaticPreviewImage = styled.img`
  width: 100%;
  margin-top: 2rem;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25);
`;

export const StaticTemplateLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  @media (min-width: 771px) {
    display: none;
  }
`;

export const IframeWrapper = styled.div`
  transition: 0.8s all ease;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  cursor: pointer;
`;

export const SmallHeadline = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #0f0c09;
  margin-bottom: 1rem;
`;

export const PurpleText = styled.span`
  color: #603eff;
`;
