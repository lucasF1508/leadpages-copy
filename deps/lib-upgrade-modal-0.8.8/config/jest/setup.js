import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as TestingLibrary from '@testing-library/react';
import { ProductThemeProvider } from '@lp/ui';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });
TestingLibrary.configure({ testIdAttribute: 'data-qa-selector' });

const WrappedComponent = ({ children }) => {
  return <ProductThemeProvider>{children}</ProductThemeProvider>;
};

const renderWithTheme = (ui, options) =>
  TestingLibrary.render(ui, { wrapper: WrappedComponent, ...options });

TestingLibrary.renderWithTheme = renderWithTheme;

// https://stackoverflow.com/a/55516023
const getByTextWithMarkup = (query, text) =>
  query((_, node) => {
    const hasText = node => node.textContent === text;
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      child => !hasText(child),
    );

    return nodeHasText && childrenDontHaveText;
  });

TestingLibrary.getByTextWithMarkup = getByTextWithMarkup;
