import { css } from 'emotion';

import { colors, typographyDefs } from '../../theme/Theme';

export const INPUT_HEIGHT = '48px';
export const selectInputClassName = 'url-input-select';

export const singleOptionClass = css`
  flex-grow: 1;

  display: flex;
  align-items: center;

  background-color: ${colors.greyLighter};
  padding: 0 15px;
  ${typographyDefs.bodyDefault};

  cursor: default;
  border-radius: inherit;
`;

export const inputSelectors = [
  `.${singleOptionClass}`,
  `.${selectInputClassName}`,
  'input',
  'button'
];

export const inputSelectorString = inputSelectors.join(', ');

export const containerClass = css`
  position: relative;
  margin: 24px 0;
`;

export const getInputGroupClass = hasLabels => css`
  display: flex;
  position: relative;

  margin-bottom: 22px;
  margin-top: ${hasLabels ? '22px' : '0'};

  input {
    &:hover,
    &:active {
      border-color: ${colors.greyDarker} !important;
    }

    &:focus {
      border-color: ${colors.blue} !important;
    }

    :not(:active) {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  button {
    background-color: white;
    color: ${colors.greyDark};
    overflow: visible;
    padding: 0 15px;
    border: 1px solid ${colors.grey};

    &:hover,
    &:active,
    &:focus {
      background-color: white !important;
      color: ${colors.greyDarker};
    }
  }

  button,
  .${selectInputClassName} {
    position: relative;

    &:hover,
    &:active,
    &:focus {
      outline: none;

      &:before {
        content: '';
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        background-color: transparent;
        border-radius: inherit;
        border-color: ${colors.greyDarker};

        z-index: 3;
      }
    }

    &:hover,
    &:active {
      &:before {
        border: 1px solid ${colors.greyDarker};
      }
    }

    &:focus:before {
      border: 1px solid ${colors.blue};
    }
  }

  .${selectInputClassName} {
    background-color: ${colors.greyLighter};
  }

  > * {
    height: ${INPUT_HEIGHT};

    ${inputSelectorString} {
      height: ${INPUT_HEIGHT};
      border: 1px solid ${colors.grey} !important;
    }
  }

  > *:first-child {
    ${inputSelectorString} {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }

  > *:not(:first-child) {
    ${inputSelectorString} {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }

  > *:last-child {
    ${inputSelectorString} {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }

  > *:not(:last-child) {
    margin-right: -1px;

    ${inputSelectorString} {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }

  > *:first-child:last-child {
    .${singleOptionClass} {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.32);
      border: none;
    }
  }

  > *:not(:first-child):not(:last-child) {
    position: relative;
    flex-grow: 1;
    z-index: 2;
  }
`;

export const getSelectContainerClass = (
  hasInput,
  hasCopyLink,
  selectMinWidth
) => css`
  display: flex;
  flex-direction: column;

  min-width: ${hasInput || hasCopyLink ? selectMinWidth : '100%'};

  flex-grow: ${!hasInput && hasCopyLink ? 1 : 'unset'};
`;

export const selectClass = css`
  max-width: unset !important;
  text-align: left;
  height: ${INPUT_HEIGHT};
`;

export const inputContainerClass = css`
  position: relative;
  flex-grow: 1;
`;

export const labelClass = css`
  position: absolute;
  left: 0;
  top: 0;

  height: 20px;
  transform: translateY(-100%);

  ${typographyDefs.supportContent}
`;

export const errorClass = css`
  position: absolute;
  left: 0;
  bottom: 0;

  transform: translateY(calc(100% + 2px));

  ${typographyDefs.supportContent}
  color: ${colors.redDark};
`;
