import { css } from 'emotion';
import { colors, typographyDefs } from '../../theme/Theme';

const { bodyHeading, supportContent } = typographyDefs;
const { green, grey } = colors;

export const defaultClassName = css`
  position: relative;
`;
const defaultLabelStyles = css`
  margin: 0 0 14px;
  display: block;
`;

export const labelStyles = css(bodyHeading, defaultLabelStyles);

const defaultSubLabelStyles = css`
  margin: 26px 0;
  display: block;
`;

export const subLabelStyles = css(supportContent, defaultSubLabelStyles);

export const subLabelListStyles = css`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
`;

export const subLabelListItemStyles = css`
  display: flex;
  align-items: center;
  padding-bottom: 4px;

  @media (max-width: 767px) {
    flex: 0 0 100%;
  }
  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  i {
    font-size: 15px;
    margin: 0 6px 0 0;
  }
`;

export const subLabelListItemComplete = css`
  color: ${green};
`;

export const helperTextStyles = css`
  margin-bottom: 16px;
`;

export const viewIcon = css`
  top: 51px;
  right: 24px;
  position: absolute;
  cursor: pointer;

  & i {
    font-size: 15px;
    color: ${grey};
  }
`;
