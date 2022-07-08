import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DotHolder = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: default;
  pointer-events: none;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  margin: 0 5px;
  background-color: #0f0c09;
  border-radius: 100%;
  opacity: 0.25;
  &.slick-active {
    height: 10px;
    width: 10px;
    background-color: black;
    opacity: 1;
  }
`;

const PaginationDots = props => {
  const { dots, margin } = props;
  return (
    <DotHolder style={{ margin: margin }}>
      {dots.map((item, index) => (
        <Dot key={index} className={item.props.className} />
      ))}
    </DotHolder>
  );
};

PaginationDots.defaultProps = {
  margin: 'inherit',
};

PaginationDots.propTypes = {
  margin: PropTypes.string,
};

export default PaginationDots;
