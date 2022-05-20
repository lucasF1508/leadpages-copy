import { css } from 'emotion';
import { colors } from '../../theme/Theme';
import { typographyDefs } from '../../theme/Theme';

export const flyout = css`
  padding: 9px 0 !important;
  margin-top: 0 !important;
`;

export const input = css`
  padding-right: 30px !important;
  text-overflow: ellipsis;
`;

export const iconCloseContainer = css`
  position: absolute;
  right: 10px;
  top: 9px;
  cursor: pointer;
  outline: none;
`;

export const iconClose = css`
  font-size: 15px;
  color: ${colors.greyDark};
`;

const menuStyles = css`
  padding: 9px;
`;

export const menuItem = css(typographyDefs.supportContent, menuStyles);
