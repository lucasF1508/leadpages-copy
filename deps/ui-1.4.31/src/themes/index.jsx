import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import productTheme from './product/theme';
import marketingTheme from './marketing/theme';
import leadsTheme from './leads/theme';

const ProductThemeProvider = ({ children, variant }) => (
  <ThemeProvider theme={productTheme({ variant })}>{children}</ThemeProvider>
);

const MarketingThemeProvider = ({ children }) => (
  <ThemeProvider theme={marketingTheme}>{children}</ThemeProvider>
);

const LeadsThemeProvider = ({ children }) => (
  <ThemeProvider theme={leadsTheme}>{children}</ThemeProvider>
);

export {
  ProductThemeProvider,
  productTheme,
  MarketingThemeProvider,
  marketingTheme,
  LeadsThemeProvider,
  leadsTheme,
};
