import { css } from 'emotion';
import { get as getCheckboard } from 'react-color/lib/helpers/checkboard';

export const colors = css`
  margin: 0 -10px 16px;
  padding: 10px 0 0 10px;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &.no-presets: {
    margin: 0 -10px 8px;
  }
`;

export const swatchWrap = css`
  width: 36px;
  height: 36px;
  margin: 0 8px 8px 0;
  background: url(${getCheckboard('white', 'rgba(0,0,0,.08)', 8)}) center left;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

export const swatchBorder = css`
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
`;
