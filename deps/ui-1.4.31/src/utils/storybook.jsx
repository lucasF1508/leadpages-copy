import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { ProductThemeProvider, MarketingThemeProvider, LeadsThemeProvider } from '../themes';

const getThemeDecorator = (themeName = 'product') => {
  if (themeName === 'marketing') {
    return storyFn => (
      <>
        <MarketingThemeProvider>
          <CssBaseline />
          {storyFn()}
        </MarketingThemeProvider>
      </>
    );
  }

  if (themeName === 'leads') {
    return storyFn => (
      <Box style={{ backgroundColor: '#01044c', color: 'white' }} pt={2} pb={2}>
        <LeadsThemeProvider>
          <CssBaseline />
          {storyFn()}
        </LeadsThemeProvider>
      </Box>
    );
  }

  return storyFn => (
    <>
      <ProductThemeProvider>
        <CssBaseline />
        {storyFn()}
      </ProductThemeProvider>
    </>
  );
};

export { getThemeDecorator };
