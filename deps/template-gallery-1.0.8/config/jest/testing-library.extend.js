import React from 'react';
import { ProductThemeProvider } from '@lp/ui';
import * as TestingLibrary from '@testing-library/react';

TestingLibrary.configure({ testIdAttribute: 'data-qa-selector' });

const WrappedComponent = ({ children }) => {
  return <ProductThemeProvider>{children}</ProductThemeProvider>;
};

const renderWithTheme = (ui, options) =>
  TestingLibrary.render(ui, { wrapper: WrappedComponent, ...options });

TestingLibrary.renderWithTheme = renderWithTheme;
