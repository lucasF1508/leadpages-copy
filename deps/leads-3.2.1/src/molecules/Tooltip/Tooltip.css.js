import { css } from 'emotion';
import { shadows, typographyDefs } from '../../theme/Theme';

const { supportContent } = typographyDefs;

export const tooltipClassName = css`
  position: relative;
  cursor: default;
`;

const tipStyles = css`
  position: absolute;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 11px 20px;

  white-space: nowrap;

  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: ${shadows.l3};

  transition: opacity 0.3s ease;

  opacity: 0;
  visibility: hidden;

  &.is-hoverable {
    pointer-events: none;
  }

  &.is-visible {
    opacity: 1;
    visibility: visible;
  }
`;

export const tipClassName = css(supportContent, tipStyles);

export const arrowClassName = css`
  position: absolute;

  overflow: hidden;

  &::after {
    position: absolute;

    width: 12px;
    height: 12px;

    content: '';

    transform-origin: 50% 50%;

    background: #ffffff;
  }
`;

const topBottomTipStyle = `
  left: 50%;

  transform: translateX(-50%);
`;

const topBottomArrowStyle = `
  left: 50%;

  width: 40px;
  height: 20px;

  transform: translateX(-50%);

  &::after {
    left: 50%;

    transform: translateX(-50%) rotate(45deg);

    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25),
      5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const topTipClassName = css`
  ${topBottomTipStyle} bottom: calc(125% + 20px);

  &.is-visible {
    ${topBottomTipStyle} bottom: calc(100% + 15px);
  }
`;

export const topArrowClassName = css`
  ${topBottomArrowStyle} top: 100%;

  &::after {
    top: -6px;
  }
`;

export const bottomTipClassName = css`
  ${topBottomTipStyle} top: calc(125% + 20px);

  &.is-visible {
    ${topBottomTipStyle} top: calc(100% + 15px);
  }
`;

export const bottomArrowClassName = css`
  ${topBottomArrowStyle} bottom: 100%;

  &::after {
    top: 14px;
  }
`;

const leftRightTipStyle = `
  top: 50%;

  transform: translateY(-50%);
`;

const leftRightArrowStyle = `
  top: 50%;

  width: 20px;
  height: 40px;

  transform: translateY(-50%);

  &::after {
    top: 50%;

    transform: translateY(-50%) rotate(45deg);

    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const leftTipClassName = css`
  ${leftRightTipStyle} top: 50%;
  right: calc(125% + 15px);

  &.is-visible {
    right: calc(100% + 15px);
  }
`;

export const leftArrowClassName = css`
  ${leftRightArrowStyle} left: 100%;

  &::after {
    left: -6px;
  }
`;

export const rightTipClassName = css`
  ${leftRightTipStyle} left: calc(125% + 15px);
  transform: translateY(-50%);

  &.is-visible {
    ${leftRightTipStyle} left: calc(100% + 15px);
  }
`;

export const rightArrowClassName = css`
  ${leftRightArrowStyle} right: 100%;

  &::after {
    left: 14px;
  }
`;
