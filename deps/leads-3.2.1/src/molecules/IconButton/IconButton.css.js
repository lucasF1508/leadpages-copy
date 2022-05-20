import { css } from 'emotion';
import { colors } from '../../theme/Theme';

const { blue, redDark, redLight, greyDarker, greyLight, grey } = colors;

export const noBackgroundClassName = css`
  background-color: rgba(0, 0, 0, 0);

  &:visited {
    background-color: rgba(0, 0, 0, 0);
  }

  &[disabled],
  &[disabled]:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const noHoverBackgroundClassName = css`
  background-color: rgba(0, 0, 0, 0);

  &:visited {
    background-color: rgba(0, 0, 0, 0);
  }

  &[disabled],
  &[disabled]:hover {
    background-color: rgba(0, 0, 0, 0);
  }

  &:hover,
  &:focus,
  &.active {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const isDangerClassName = css`
  color: ${greyDarker};
  background-color: rgba(0, 0, 0, 0);

  &:visited {
    color: ${greyDarker};
    background-color: rgba(0, 0, 0, 0);
  }

  &:hover,
  &:focus,
  &.active {
    color: ${redDark};
    background-color: rgba(0, 0, 0, 0);
  }

  &[disabled],
  &[disabled]:hover {
    color: ${redLight};
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const isHighlightedClassName = css`
  &::after {
    position: absolute;
    top: 6px;
    right: -2px;

    width: 8px;
    height: 8px;

    content: '';

    border-radius: 50%;

    background-color: ${blue};
  }
`;

export const defaultClassName = css`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.25s ease;
  text-align: center;

  white-space: nowrap;
  text-decoration: none;

  border: 0;
  border-radius: 18px;
  outline: 0;

  width: 36px;
  height: 36px;
  padding: 0;

  color: ${greyDarker};
  border-radius: 18px;
  background-color: ${greyLight};

  &:visited {
    width: 36px;
    height: 36px;
    padding: 0;

    color: ${greyDarker};
    border-radius: 18px;
    background-color: ${greyLight};
  }

  & i,
  &:visited i {
    font-size: 18px;
    line-height: 36px;
  }

  &:focus {
    background-color: inherit;
    color: ${greyDarker};
  }

  &:focus {
    background-color: inherit;
  }

  &:hover,
  &:hover:focus,
  &.active {
    color: ${greyDarker};
    background-color: ${grey};
  }

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.4;
    background-color: ${greyLight};
  }
`;
