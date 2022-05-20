import React from 'react';
import PropTypes from 'prop-types';

import { types, TypographyComponent } from './';

const PROPS = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const DEFAULT_PROPS = {
  className: '',
};

const SupportContent = ({ children, className }) => (
  <TypographyComponent
    className={className}
    type={types.supportContent}
  >
    {children}
  </TypographyComponent>
);

SupportContent.propTypes = PROPS;
SupportContent.defaultProps = DEFAULT_PROPS;

export default SupportContent;
