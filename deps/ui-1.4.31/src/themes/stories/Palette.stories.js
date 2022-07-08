import React from 'react';
import { storiesOf } from '@storybook/react';

import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getThemeDecorator } from '../../utils/storybook';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    width: 'auto',
  },
  card: {
    borderBottomRightRadius: '2px',
    borderBottomLeftRadius: '2px',
  },
  swatch: {
    borderBottomColor: theme.palette.text.primary,
  },
  label: {
    fontSize: '12px',
  },
}));

const Palette = ({ name, colors }) => {
  const classes = useStyles();

  return (
    <Box marginBottom="20px">
      <Typography variant="h4" component="h2" gutterBottom>
        {name}
      </Typography>
      <Grid container wrap spacing={2}>
        {Object.keys(colors).map(color => (
          <Grid
            direction="column"
            container
            item
            key={`${name}.${color}`}
            className={classes.cardContainer}
          >
            <Box border="2px solid" borderColor="text.primary" className={classes.card}>
              <Box
                borderBottom="2px solid"
                width={150}
                height={150}
                bgcolor={`${name}.${color}`}
                className={classes.swatch}
              ></Box>
              <Box padding="6px" bgcolor="common.white" color="text.primary">
                <Typography display="block" variant="caption" className={classes.label}>
                  {color}
                </Typography>
                <Typography display="block" variant="caption" className={classes.label}>
                  {colors[color]}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const PaletteStory = () => {
  const theme = useTheme();

  return (
    <Box m={4} maxWidth="1100px">
      <Typography variant="h1" gutterBottom>
        Palette
      </Typography>
      <Palette name="primary" colors={theme.palette.primary} />
      <Palette name="info" colors={theme.palette.info} />
      <Palette name="success" colors={theme.palette.success} />
      <Palette name="warning" colors={theme.palette.warning} />
      <Palette name="danger" colors={theme.palette.danger} />
      <Palette name="error" colors={theme.palette.error} />
      <Palette name="text" colors={theme.palette.text} />
      <Palette name="secondary" colors={theme.palette.secondary} />
      <Palette name="action" colors={theme.palette.action} />
      <Palette name="legacy" colors={theme.palette.legacy} />
      <Palette name="whiteTransparent" colors={theme.palette.whiteTransparent} />
      <Palette name="grey" colors={theme.palette.grey} />
      <Palette name="greyTransparent" colors={theme.palette.greyTransparent} />
    </Box>
  );
};

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Palette', () => <PaletteStory />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Palette', () => <PaletteStory />);

storiesOf('Themes/Leads', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Palette', () => <PaletteStory />);
