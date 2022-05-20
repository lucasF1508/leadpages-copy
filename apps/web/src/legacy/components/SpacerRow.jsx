import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpacerContainer = styled.div`
  width: 100%;
  height: ${props => (props.array ? props.array[0] + 'rem' : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'rgb(0,0,0,0)')};
  @media (max-width: 992px) {
    height: ${props => (props.array ? props.array[1] + 'rem' : '')};
  }
  @media (max-width: 576px) {
    height: ${props => (props.array ? props.array[2] + 'rem' : '')};
  }
  @media (max-width: 340px) {
    height: ${props => (props.array ? props.array[3] + 'rem' : '')};
  }
  &.small {
    height: 3rem;
    @media (max-width: 992px) {
      height: 3rem;
    }
    @media (max-width: 576px) {
      height: 2rem;
    }
    @media (max-width: 340px) {
      height: 2rem;
    }
  }
  &.medium {
    height: 8rem;
    @media (max-width: 992px) {
      height: 6rem;
    }
    @media (max-width: 576px) {
      height: 3rem;
    }
    @media (max-width: 340px) {
      height: 2rem;
    }
  }
  &.large {
    height: 12rem;
    @media (max-width: 992px) {
      height: 9rem;
    }
    @media (max-width: 576px) {
      height: 6rem;
    }
    @media (max-width: 340px) {
      height: 4rem;
    }
  }
`;

const SpacerRow = ({ id, backgroundColor, size, sizeArray, border }) => {
  if (
    (typeof size !== 'string' || typeof size === 'undefined') &&
    (typeof sizeArray !== 'object' || typeof sizeArray === 'undefined')
  ) {
    console.warn(
      'LP Warn: You are attempting to use the <SpacerRow> component without passing in either 1) a valid size in the form of a string (e.g. size="small", medium", or "large", or 2) a valid sizeArray in the form of an array with one rem value per standard repo breakpoint (>992, >576, >340, <340) (e.g. sizeArray={6, 4, 2, 1}. Note that if both are passed in, the size string option will override the sizeArray.',
    );
  }
  return (
    <SpacerContainer
      id={id}
      backgroundColor={backgroundColor}
      array={sizeArray}
      className={size ? size : ''}
      style={{ border: border ? '3px solid #603eff' : '' }}
    />
  );
};

// To use, pass in either a sizeArray with 4 values, corresponding to the four standard repo breakpoints (>992, >576, >340, <=340) or a valid size in the form of a string ("small", "medium", or "large").
SpacerRow.propTypes = {
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  sizeArray: PropTypes.arrayOf(PropTypes.number),
  border: PropTypes.bool,
};

export default SpacerRow;
