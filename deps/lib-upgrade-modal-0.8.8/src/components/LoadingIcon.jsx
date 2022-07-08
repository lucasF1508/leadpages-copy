import React from 'react';
import { css } from 'emotion';
import { COLORS } from '../constants';

const loaderAnimationClass = css`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: loader 1.8s infinite ease-in-out;
  }

  & {
    color: ${COLORS.main.primary};
    font-size: 9px;
    margin: 40px auto;
    position: relative;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }

  @keyframes loader {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;

export default () => (
  <div className={loaderAnimationClass} />
);
