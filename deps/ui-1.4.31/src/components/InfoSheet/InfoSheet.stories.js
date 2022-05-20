import React from 'react';

import { storiesOf } from '@storybook/react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { getThemeDecorator } from '../../utils/storybook';
import InfoSheet from './InfoSheet';
import VSTypography from '../VSTypography';
import exampleImg from './examplephoto.png';

const useStyles = makeStyles(theme => ({
  spaceMono: {
    fontFamily: 'Space Mono',
    fontSize: 12,
  },
  accordion: {
    width: 350,
    position: 'fixed',
    bottom: 0,
    right: theme.spacing(3),
    '&.Mui-expanded': {
      bottom: theme.spacing(3),
    },

    '@media (max-width: 425px)': {
      width: '100%',
      margin: 'auto',
      left: '0',
      right: '0',

      '&.Mui-expanded': {
        bottom: 0,
      },
    },
  },
}));

storiesOf('Components/InfoSheet', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Default', () => (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Default Values
      </Typography>
      <Typography variant="body1" style={{ marginBottom: 20 }}>
        In a nutshell, an InfoSheet is a single accordian that flips the open/close arrow, disables
        the title from growing when expanded, makes styling color easier, and adds a footer image
        section.
      </Typography>
      <InfoSheet title="Get your Exclusive stuff!" footerImage={exampleImg}>
        <Box style={{ width: '100%' }}>
          <VSTypography variant="h5">Unlock this Exclusive Template Bundles!</VSTypography>
          <Typography variant="body1">
            When you start a trial of the PRO plan, you'll get exclusive access to 10 templates.{' '}
          </Typography>
        </Box>
      </InfoSheet>
    </Box>
  ))
  .add('Fixed, custom', () => {
    const classes = useStyles();
    return (
      <Box m={4}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          A custom sheet that is simular to the Bundle Info Sheet in the marketing site.
        </Typography>
        <Typography variant="body1">On the bottom right of this window.</Typography>
        <InfoSheet
          title={<Typography className={classes.spaceMono}>Exclusive Templates</Typography>}
          backgroundColor="white"
          textColor="black"
          AccordionProps={{
            classes: {
              root: classes.accordion,
            },
          }}
          footerImage={
            <Box
              style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${exampleImg})`,
                height: 112,
                width: '100%',
              }}
            />
          }
        >
          <Box>
            <VSTypography className={classes.contentHeader} variant="h5">
              Unlock this Exclusive Template Bundles!
            </VSTypography>
            <Typography variant="body1">
              When you start a trial of the PRO plan, you'll get exclusive access to 10 templates.{' '}
            </Typography>
          </Box>
        </InfoSheet>
      </Box>
    );
  });
