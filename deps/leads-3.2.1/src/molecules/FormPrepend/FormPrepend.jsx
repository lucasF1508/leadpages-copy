import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

const FormPrepend = ({ children, prepend, width, className }) => {
  const prependFixedWidthClassname = css`
    display: block;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: ${width};
    white-space: nowrap;
  `;

  return (
    <div className={cx(prependWrapperClassName, className)}>
      <div
        title={prepend}
        aria-label={prepend}
        className={cx(prependClassName, {
          [`${prependFixedWidthClassname}`]: !!width
        })}
      >
        {prepend}
      </div>
      {children}
    </div>
  );
};

FormPrepend.propTypes = {
  children: PropTypes.node.isRequired,
  prepend: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string
};

FormPrepend.defaultProps = {
  className: '',
  width: ''
};

const prependWrapperClassName = css`
  box-sizing: border-box;
  display: flex;

  input,
  button {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
`;

const prependClassName = css`
  border-radius: 3px 0 0 3px;
  border-right: none;
  background-color: #e4e7ed;
  color: #4c515d;
  border: 1px solid #b1bacc;
  display: flex;
  align-items: center;
  padding: 0 12px;
  margin-right: -1px;
`;

export default FormPrepend;
