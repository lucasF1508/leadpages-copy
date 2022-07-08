import React from 'react';
import { css } from '@emotion/core';
import Illustration, { illustrationTypes } from './Illustration';

export function AllIllustrations() {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {Object.keys(illustrationTypes).map(illustrationType => {
        return (
          illustrationType !== '__filemeta' && (
            <div
              key={illustrationType}
              css={css`
                display: flex;
                flex-direction: column;
                flex: 0 0 25%;
                align-items: center;
              `}
            >
              <Illustration
                css={css`
                  margin: 20px;
                `}
                illustrationType={illustrationTypes[illustrationType]}
              />
              <p>{illustrationType}</p>
            </div>
          )
        );
      })}
    </div>
  );
}

export function StylingExample() {
  return (
    <Illustration
      width={100}
      height={100}
      illustrationType={illustrationTypes.AlertBar}
      css={css`
        width: 200px !important;
        height: 200px !important;
        background: rebeccapurple;
      `}
    />
  );
}
