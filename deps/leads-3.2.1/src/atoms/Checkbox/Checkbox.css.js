import { css } from 'emotion';
import { colors, typographyDefs } from '../../theme/Theme';

const bodyDefault = css(typographyDefs.bodyDefault);
const supportContent = css(typographyDefs.supportContent);

export const checkboxClass = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const checkboxAlignTop = css`
  align-items: flex-start;
`;

export const checkboxLabelText = css`
  ${bodyDefault};

  display: flex;

  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  &:hover i {
    color: ${colors.blue};
  }

  & i {
    margin-right: 6px;
    color: ${colors.greyDark};
  }
`;

export const checkboxLabelTextAlignTop = css`
  padding-top: 3px;
`;

export const checkboxLabelSubtext = css`
  ${supportContent};
`;

export const checkboxStyles = css`
  display: none;
`;

export const checkboxActive = css`
  i {
    color: ${colors.blue};
  }
`;

export const checkboxChecked = css`
  & label {
    color: ${colors.blueDarker};

    & i {
      color: ${colors.blue};
    }
  }
`;

export const checkboxDisabled = css`
  cursor: not-allowed;

  & label:hover i,
  & label:hover,
  & label i,
  & label {
    cursor: not-allowed;

    color: ${colors.grey};
  }
`;
