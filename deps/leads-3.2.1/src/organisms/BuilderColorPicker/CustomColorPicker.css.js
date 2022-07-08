import { css } from 'emotion';

export const customColorPicker = css`
  position: absolute;
  top: 8px;
  left: 20px;
  right: 20px;
  bottom: 0px;
  background-color: #00044c;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  transition: 100ms opacity 0s ease-in, 0s visibility 100ms ease-in;

  &.show {
    opacity: 1;
    visibility: visible;
    transition: 100ms opacity 0s ease-in, 0s visibility 0s ease-in;
  }
`;

export const picker = css`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transform: translate(-7px, 1px);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
`;

export const saturation = css`
  width: 100%;
  padding-bottom: 56%;
  position: relative;
  overflow: hidden;
`;

export const Saturation = css`
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
`;

export const controls = css`
  display: flex;
`;

export const sliders = css`
  padding: 4px 0;
  flex: 1;
`;

export const color = css`
  width: 36px;
  height: 36px;
  position: relative;
  margin-top: 4px;
  margin-left: 4px;
  border-radius: 3px;
  overflow: hidden;
`;

export const activeColor = rgb => css`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-radius: 2px;
  background: ${`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`};
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
`;

export const hue = css`
  position: relative;
  height: 16px;
  overflow: hidden;
`;

export const Hue = css`
  border-radius: 2px;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.15),
    inset 0 0 4px rgba(0, 0, 0, 0.25);
`;

export const alpha = css`
  position: relative;
  height: 16px;
  margin-top: 4px;
  overflow: hidden;
`;

export const Alpha = css`
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
`;

export const backButton = css`
  color: #a4c8fd;
  display: flex;
  align-items: center;
  padding-left: 0;
  margin: 0 0 8px;

  i {
    padding-top: 0 !important;
  }
`;
