import React from 'react';
import PropTypes from 'prop-types';
import { GATSBY_IMAGE } from '../../constants/types';
import styled from 'styled-components';
// components
import IconCard from '../cards/IconCard';

const GridContainer = styled.div`
  margin: auto;
  @media (min-width: 1400px) {
    max-width: 1200px;
  }
`;

const CardContainer = styled.div`
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  overflow: hidden;
`;

const IconCardsGrid = props => {
  const { items, itemsPerRow } = props;
  return (
    <GridContainer>
      <CardContainer>
        {items.map((item, index) => (
          <IconCard key={index} {...item} itemsPerRow={itemsPerRow} />
        ))}
      </CardContainer>
    </GridContainer>
  );
};

IconCardsGrid.defaultProps = {
  itemsPerRow: 4,
};

IconCardsGrid.propTypes = {
  items: PropTypes.arrayOf(GATSBY_IMAGE).isRequired,
  itemsPerRow: PropTypes.number,
};

export default IconCardsGrid;
