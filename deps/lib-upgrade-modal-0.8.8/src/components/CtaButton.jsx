import React from 'react';
import PropTypes from 'prop-types';

import { css, cx } from 'emotion';
import { COLORS } from '../constants';

const ctaButtonClass = css`
  height: 36px;
  width: 176px;
  border: 3px solid ${COLORS.alt.secondary};
  border-radius: 32px;
  background: transparent;
  color: ${COLORS.main.primary};
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 12px;
  text-align: center;
  padding: 0;
  font-family: Apercu Pro;

  &:hover {
    background: ${COLORS.alt.primaryHover};
    border-color: ${COLORS.alt.primaryHover};
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ctaPrimaryButtonClass = css`
  ${ctaButtonClass};
  background-color: ${COLORS.main.primary};
  border-color: ${COLORS.main.primary};
  color: #ffffff;
`;

const CtaButton = ({ labelText, isPrimary, ctaClassName, onClick, buttonProps }) => (
  <button
    onClick={onClick}
    className={cx([
      ctaClassName,
      isPrimary ? ctaPrimaryButtonClass : ctaButtonClass
    ])}
    {...buttonProps}
    data-analytics='start-trial-button'
  >
    {labelText}
  </button>
);

CtaButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  ctaClassName: PropTypes.string,
  buttonProps: PropTypes.shape({}),
};

CtaButton.defaultProps = {
  isPrimary: false,
  ctaClassName: '',
  buttonProps: {},
};

export default CtaButton;
