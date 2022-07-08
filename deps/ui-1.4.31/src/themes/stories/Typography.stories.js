import React from 'react';
import { storiesOf } from '@storybook/react';
import clsx from 'clsx';

import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import VSTypography from '../../components/VSTypography';
import { getThemeDecorator } from '../../utils/storybook';

const useStyles = makeStyles(theme => ({
  type: {
    marginBottom: 25,
  },
  label: {
    ...theme.typography.label,
  },
}));

const TypographyStory = ({ theme }) => {
  const classes = useStyles();

  return (
    <>
      <Box m={4} maxWidth="600px">
        {theme === 'product' && (
          <Box mb={3}>
            <Typography variant="h3" className={classes.type}>
              Open Sans
            </Typography>
            <Divider />
          </Box>
        )}
        {theme === 'marketing' && (
          <Box mb={3}>
            <Typography variant="h2" className={classes.type}>
              Apercu Pro
            </Typography>
            <Divider />
          </Box>
        )}
        <Typography variant="h1" className={classes.type}>
          h1. Heading
        </Typography>
        <Typography variant="h2" className={classes.type}>
          h2. Heading
        </Typography>
        <Typography variant="h3" className={classes.type}>
          h3. Heading
        </Typography>
        <Typography variant="h4" className={classes.type}>
          h4. Heading
        </Typography>
        <Typography variant="h5" className={classes.type}>
          h5. Heading
        </Typography>
        <Typography variant="h6" className={classes.type}>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" className={classes.type}>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
          tenetur
        </Typography>
        <Typography variant="subtitle2" className={classes.type}>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
          tenetur
        </Typography>
        <Typography variant="body1" className={classes.type}>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" className={classes.type}>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" className={classes.type}>
          Button Text
        </Typography>
        <Typography display="block" className={clsx(classes.type, classes.label)}>
          Label
        </Typography>
        <Typography variant="caption" display="block" className={classes.type}>
          caption text
        </Typography>
        <Typography variant="overline" display="block" className={classes.type}>
          overline text
        </Typography>
      </Box>
      {theme === 'marketing' && (
        <Box m={4} mt={6} maxWidth="600px">
          <Box mb={3}>
            <Typography variant="h2" className={classes.type} style={{ fontWeight: 700 }}>
              Value Serif
            </Typography>
            <Divider />
          </Box>
          <VSTypography variant="h1" className={classes.type}>
            h1. Heading
          </VSTypography>
          <VSTypography variant="h2" className={classes.type}>
            h2. Heading
          </VSTypography>
          <VSTypography variant="h3" className={classes.type}>
            h3. Heading
          </VSTypography>
          <VSTypography variant="h4" className={classes.type}>
            h4. Heading
          </VSTypography>
          <VSTypography variant="h5" className={classes.type}>
            h5. Heading
          </VSTypography>
        </Box>
      )}
    </>
  );
};

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Typography', () => <TypographyStory theme="product" />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Typography', () => <TypographyStory theme="marketing" />);

storiesOf('Themes/Leads', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Typography', () => <TypographyStory theme="leads" />);
