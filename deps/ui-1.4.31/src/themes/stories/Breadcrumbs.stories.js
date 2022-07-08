import React from 'react';
import { storiesOf } from '@storybook/react';
import { getThemeDecorator } from '../../utils/storybook';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const BreadcrumbsStory = () => (
  <Box m={4}>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Breadcrumbs With Anchor Links
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="#home">Home</Link>
        <Link href="#shop">Shop</Link>
        <Link href="#products">Products</Link>
        <span className="selected">Category</span>
      </Breadcrumbs>
    </Box>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Breadcrumbs With Buttons
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component="button">Home</Link>
        <Link component="button">Shop</Link>
        <Link component="button">Products</Link>
        <span className="selected">Category</span>
      </Breadcrumbs>
    </Box>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Breadcrumbs With Inactive Steps
      </Typography>
      <Breadcrumbs component="div" aria-label="breadcrumb">
        <span>Step 1</span>
        <span>Step 2</span>
        <span className="selected">Step 3</span>
      </Breadcrumbs>
    </Box>
  </Box>
);

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Breadcrumbs', () => <BreadcrumbsStory />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Breadcrumbs', () => <BreadcrumbsStory />);
