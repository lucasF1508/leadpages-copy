import { css } from 'emotion';
import { colors } from '../../theme/Theme';
import { typographyDefs } from '../../theme/Theme';

const { blue, blueDark, purple, red, redDark, redLight, greyLighter } = colors;
const { bodyDefault, largeDisplayHeading, inPageHeading } = typographyDefs;

export const defaultClassName = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 48px 0 0;
  max-width: 982px;
  margin: 0 auto;
`;

const surveyHeaderStyles = css`
  margin: 0;
  font-weight: 400;
`;
export const surveyHeader = css(largeDisplayHeading, surveyHeaderStyles);

const surveySubHeaderStyles = css`
  margin: 0 0 48px;
`;
export const surveySubHeader = css(inPageHeading, surveySubHeaderStyles);

export const surveyHeaderSvg = css`
  width: 60px;
  height: 60px;
  margin: 0 0 48px;
`;

export const contentStyles = css`
  display: flex;
  min-height: 284px;
  margin: 0 auto;
  width: 100%;
`;
