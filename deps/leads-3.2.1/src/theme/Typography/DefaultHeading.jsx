import React from 'react';
import PropTypes from 'prop-types';

import { types, TypographyComponent } from './';

const PROPS = {
  children: PropTypes.node.isRequired,
};

const DefaultHeading = ({ children }) => (
  <TypographyComponent type={types.headingDefault}>
    {children}
  </TypographyComponent>
);

DefaultHeading.propTypes = PROPS;
export default DefaultHeading;
