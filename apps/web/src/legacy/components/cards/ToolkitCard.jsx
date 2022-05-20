import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
// images
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';

const ToolkitCardStyle_3Across = styled(Link)`
  font-family: 'Apercu Pro';
  position: relative;
  text-align: left;
  text-decoration: none;
  margin-bottom: 1rem;
  background-color: white;
  height: 72px;
  margin: 1rem;
  box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08);
  flex: 0 0 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: none;
  cursor: pointer;
  &:hover {
    z-index: 1;
    box-shadow: 0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08);
  }
  @media (min-width: 576px) and (max-width: 768px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    flex: 0 0 42%;
    max-width: 42%;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    flex: 0 0 25%;
    max-width: 25%;
    text-align: left;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Apercu Pro';
  font-size: 18px;
  line-height: 72px;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #575452;
  ${ToolkitCardStyle_3Across}:hover & {
    color: #603eff;
  }
`;

const ImageContainer = styled.img`
  margin: 18px 1rem;
`;

const ArrowRightPurple = styled.img`
  width: 22px;
  height: 15px;
  position: absolute;
  right: 20px;
  top: 28px;
  display: none;
  pointer-events: none;
  ${ToolkitCardStyle_3Across}:hover & {
    display: block;
  }
`;

const ToolkitCard = props => {
  const { title, iconSVG, alt, productId, linkRoute, hide } = props;
  return (
    <ToolkitCardStyle_3Across
      to={linkRoute}
      style={{ display: hide.indexOf(productId) != -1 ? 'none' : 'flex' }}
    >
      <ImageContainer src={iconSVG} alt={alt} />
      <CardTitle>{title}</CardTitle>
      <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
    </ToolkitCardStyle_3Across>
  );
};

ToolkitCard.defaultProps = {
  alt: '',
  hide: '',
};

ToolkitCard.propTypes = {
  productId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkRoute: PropTypes.string.isRequired,
  iconSVG: PropTypes.string.isRequired,
  alt: PropTypes.string,
  hide: PropTypes.string,
};

export default ToolkitCard;
