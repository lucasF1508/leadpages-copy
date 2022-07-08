import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Banner from '../Banner';

import { getThemeDecorator } from '../../utils/storybook';
import FullScreenDialog from './FullScreenDialog';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import FullScreenDialogHeader from './FullScreenDialogHeader';
import FullScreenDialogTitle from './FullScreenDialogTitle';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    width: '100%',
    margin: '48px auto 132px',
    display: 'grid',
    gridGap: 24,
    gridTemplateColumns: 'repeat(auto-fill, minmax(269px, 1fr))',
    gridAutoRows: 96,
  },
  gridItem: {
    border: '1px solid black',
    padding: 8,
  },
  mainContent: ({ maxContentWidth }) => ({
    margin: '0 auto',
    maxWidth: maxContentWidth,
    padding: theme.spacing(0, 3),
    width: '100%',
  }),
  planCard: {
    height: 500,
    marginTop: 108,
    padding: theme.spacing(1),
  },
  integrationsBreadcrumbs: {
    margin: '18px 0 0',
  },
  integrationsCloseButton: {
    right: 18,
    top: 24,
  },
  integrationsLogo: {
    paddingBottom: 0,
  },
  integrationsHeader: ({ maxContentWidth }) => ({
    maxWidth: maxContentWidth,
  }),
  integrationsModalHeader: ({ maxContentWidth }) => ({
    maxWidth: maxContentWidth,
    padding: '18px 24px 0',
  }),
  integrationsSearch: {
    [theme.breakpoints.down(1320)]: {
      marginRight: 48,
    },
  },
  integrationsSubHeader: {
    marginTop: theme.spacing(2),
  },
  switch: {
    height: 40,
    marginTop: theme.spacing(3),
  },
}));

const stories = storiesOf('Components/Full Screen Modal', module);

stories.addDecorator(getThemeDecorator('product'));

stories.add('Basic full screen modal', () => {
  const classes = useStyles({ maxContentWidth: 1280 });
  const breadcrumbs = [<span className="selected">FIRST VIEW</span>, <span>NEXT VIEW</span>];

  return (
    <FullScreenDialog isOpen>
      <FullScreenDialogHeader breadcrumbs={breadcrumbs} />
      <FullScreenDialogTitle
        headline="Let's take it to the next level!"
        subheadline="Upgrade your account to unlock more conversions & sales"
      />
      <Grid className={classes.mainContent} item xs={12}>
        THIS IS SOME CONTENT
      </Grid>
    </FullScreenDialog>
  );
});

stories.add('Upgrade modal', () => {
  const breadcrumbs = [
    <span key="first-view" className="selected">
      CHOOSE A PLAN
    </span>,
    <span key="upgrade">UPGRADE</span>,
  ];
  const classes = useStyles({ maxContentWidth: 1280 });

  return (
    <FullScreenDialog isOpen>
      <Grid item xs={12}>
        <Banner bannerText="You got 10% off" />
      </Grid>
      <FullScreenDialogHeader breadcrumbs={breadcrumbs} onClose={() => {}} />
      <FullScreenDialogTitle
        headline="Take it to the next level with 10% off"
        subheadline="Upgrade your account and 10% off"
      >
        <Grid item>
          <Switch className={classes.switch} />
        </Grid>
      </FullScreenDialogTitle>
      <Grid className={classes.mainContent} container item xs={12} spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.planCard}>Advanced</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.planCard}>Pro</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.planCard}>Standard</Paper>
        </Grid>
      </Grid>
    </FullScreenDialog>
  );
});
stories.add('Integrations manager', () => {
  const classes = useStyles({ maxContentWidth: 1196 });
  const breadcrumbs = [
    <span key="first-view" className="selected">
      ALL INTEGRATIONS
    </span>,
  ];

  return (
    <FullScreenDialog isOpen>
      <FullScreenDialogHeader
        breadcrumbs={breadcrumbs}
        className={classes.integrationsModalHeader}
        classesProp={{
          breadcrumbs: classes.integrationsBreadcrumbs,
          closeButton: classes.integrationsCloseButton,
        }}
      >
        <TextField className={classes.integrationsSearch} placeholder="Search Integrations" />
      </FullScreenDialogHeader>
      <FullScreenDialogTitle
        className={classes.integrationsHeader}
        classesProp={{
          logo: classes.integrationsLogo,
          subheader: classes.integrationsSubHeader,
        }}
        headline="Native Integrations"
        subheadline={
          <>
            Select an integration to set up below. Having issues with anything? Don’t worry, that’s
            what we’re here for.{' '}
            <Link
              href="https://support.leadpages.com/hc/en-us/categories/200225194"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more here
            </Link>{' '}
            or contact us at <Link href="mailto:support@leadpages.com">support@leadpages.com</Link>.
          </>
        }
      />
      <div className={classes.mainContent}>
        <div className={classes.gridContainer}>
          <div className={classes.gridItem}>INTEGRATION</div>
          <div className={classes.gridItem}>INTEGRATION</div>
          <div className={classes.gridItem}>INTEGRATION</div>
          <div className={classes.gridItem}>INTEGRATION</div>
        </div>
      </div>
    </FullScreenDialog>
  );
});
