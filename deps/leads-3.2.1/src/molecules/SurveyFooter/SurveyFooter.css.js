import { css } from 'emotion';
import { colors } from '../../theme/Theme';

const { greyLighter } = colors;

export const defaultClassName = css`
  border-top: 2px solid ${greyLighter};
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
`;

export const secondaryButtonStyles = css`
  display: flex;
  align-items: center;

  i {
    margin: -3px 18px 0 0;
  }
`;

export const notVisible = css`
  visibility: hidden;
`;
