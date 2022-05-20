import { css } from 'emotion';
import { colors, typographyDefs } from '../../theme/Theme';

const bodyDefault = css(typographyDefs.bodyDefault);

export const radioButtonClass = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const radioButtonLabelText = css`
  ${bodyDefault} display: flex;

  justify-content: flex-start;

  text-transform: capitalize;
  overflow-y: hidden;
  cursor: pointer;

  & i {
    margin-right: 6px;
    margin-top: -3px;
  }

  &:hover i {
    color: ${colors.blue};
  }
`;

export const radioButtonActive = css`
  & i {
    color: ${colors.blue};
  }
`;

export const radioButtonStyles = css`
  display: none;

  &:checked + label {
    color: ${colors.blueDarker};
  }

  &:checked + label i {
    color: ${colors.blue};
  }
`;

export const radioButtonDisabled = css`
  cursor: not-allowed;

  & label:hover i,
  & label:hover,
  & label i,
  & label {
    cursor: not-allowed;

    color: ${colors.greyDark};
  }
`;
