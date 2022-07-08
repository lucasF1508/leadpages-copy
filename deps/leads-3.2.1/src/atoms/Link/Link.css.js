import { css } from 'emotion';
import { colors } from '../../theme/Theme';
import { typographyDefs } from '../../theme/Theme';

const { blue, blueDark, purple, red, redDark, redLight, greyDarker } = colors;
const { bodyDefault } = typographyDefs;
const buttonClassName = css`
  color: ${blue};
  position: relative;

  cursor: pointer;
  transition: all 0.25s ease;

  white-space: nowrap;
  text-decoration: none;

  border: 0;
  outline: 0;
  background-color: rgba(0, 0, 0, 0);

  &:hover,
  &:focus,
  &.active {
    color: ${blueDark};
    background-color: rgba(0, 0, 0, 0);
  }

  &:visited {
    color: ${purple};
  }

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;

    opacity: 0.4;
  }

  & i {
    align-items: flex-start;

    box-sizing: border-box;
    padding-top: 3px !important;
  }
`;
export const defaultClassName = css(bodyDefault, buttonClassName);

export const dangerClassName = css`
  color: ${red};

  &:visited {
    color: ${red};
  }

  &:hover,
  &:focus,
  &.active {
    color: ${redDark};
  }

  &[disabled],
  &[disabled]:hover {
    color: ${redLight};
  }
`;

export const secondaryClassName = css`
  color: ${greyDarker};

  &:visited {
    color: ${greyDarker};
  }

  &:hover,
  &:focus,
  &.active {
    color: ${blueDark};
  }

  &[disabled],
  &[disabled]:hover {
    color: ${blue};
  }
`;

export const secondaryDangerClassName = css`
  color: ${greyDarker};

  &:visited {
    color: ${red};
  }

  &:hover,
  &:focus,
  &.active {
    color: ${redDark};
  }

  &[disabled],
  &[disabled]:hover {
    color: ${redLight};
  }
`;
