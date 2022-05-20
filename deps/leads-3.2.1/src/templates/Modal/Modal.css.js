import { css } from 'emotion';
import { colors, typographyDefs } from '../../theme/Theme';

const { grey, greyLighter } = colors;
const { bodyDefault, inPageHeading } = typographyDefs;

export const defaultClassName = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 810px;
  margin: auto;
  padding: 25px 0;
  outline: none;
`;

export const defaultOverlayClassName = css`
  position: fixed;
  z-index: 9000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;

  overflow-x: hidden;
  overflow-y: auto;

  width: 100%;
  height: 100%;

  transition: transform 0.5s ease, opacity 0.3s linear;
  transform: translate3d(0, 0, 0);

  background-color: rgba(2, 0, 32, 0.75);
  backface-visibility: hidden;
`;

export const fullscreenOverlayClassName = css`
  z-index: 9001;
`;

export const contentWrapperClassName = css`
  position: static;

  flex: 0 1 810px;

  width: 100%;

  border-radius: 6px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  .is-fullscreen & {
    flex: none;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const contentClassName = css`
  border-radius: 3px;

  & h1 {
    margin: 0;
  }

  .is-fullscreen & {
    background-color: white;
  }
`;

export const headerClassName = css`
  position: relative;

  display: flex;
  align-content: stretch;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;

  min-height: 72px;

  :not(.no-background) {
    padding: 0 12px;
    border-bottom: 1px solid ${grey};
    background-color: ${greyLighter};
  }

  &.no-background {
    padding: 24px 12px;
  }

  border-radius: 3px 3px 0 0;

  &.is-hero {
    height: 263px;
  }
`;

export const headerContainerClassName = css`
  ${inPageHeading}

  width: 100%;

  h1 {
    ${inPageHeading}

    width: 100%;
    text-align: center;
  }
`;

export const headerTitleClassName = css`
  ${inPageHeading}

  width: 100%;
`;

export const headerCloseButtonClassName = css`
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;

  .is-hero & {
    color: #fff;

    &:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const headerTabsClassName = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 24px 0 0;

  ul {
    flex: 0 0 51px;
  }
`;

export const iconHeaderClassName = css`
  position: relative;

  display: flex;
  align-content: stretch;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;

  text-align: center;
`;

export const iconHeaderTitleClassName = css`
  ${inPageHeading}

  padding: 20px 0;
  width: 100%;
`;

export const iconHeaderContainerClassName = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px 0 16px;
`;

export const iconHeaderIconClassName = css`
  font-size: 38px;
`;

export const bodyClassName = css`
  ${bodyDefault}

  min-height: 204px;
  padding: 24px 36px;
  flex-grow: 1;

  & .is-hero {
    height: 'inherit';
  }
`;

export const footerClassName = css`
  display: flex;
  align-content: stretch;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-end;

  height: 72px;
  padding: 0 7px;

  border-top: 1px solid ${grey};
  border-radius: 0 0 3px 3px;
  background-color: ${greyLighter};

  & button {
    margin: 7px;
  }
`;

export const isOpenPageBodyClassName = css`
  overflow: hidden;
`;

export const isFullscreenClassName = css`
  position: fixed;
  top: 0;
  right: 0;

  bottom: 0;
  left: 0;

  overflow-x: hidden;
  overflow-y: auto;
  align-items: stretch;
  justify-content: flex-start;

  max-width: 100%;
  height: 100%;
  min-height: 0;
  padding: 0;

  transform: none;

  background-color: white;
`;
