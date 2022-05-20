import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Squiggle from '../../shapes/Squiggle';
import Logo from './components/Logo';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  container: {
    display: 'block',
    background: palette.grey[4],
    minHeight: '100%',
    padding: '0 24px',
    position: 'relative',
  },
  gridContainer: {
    minHeight: '100vh',
    position: 'relative',
  },
  gridContent: {
    margin: '72px auto',
    [breakpoints.up('md')]: {
      margin: '120px auto',
    },
  },
  gridFooter: {
    alignSelf: 'flex-end',
    margin: '0 auto 24px',
    color: palette.grey[70],
    width: '100%',
  },
  gridFooterContainer: {
    flexDirection: 'column',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: palette.grey[70],
      textDecoration: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  logo: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  paper: {
    minHeight: 436,
    position: 'relative',
    margin: '0 auto',
    [breakpoints.up('md')]: {
      maxWidth: 696,
    },
  },
  squiggle: {
    display: 'none',
    position: 'fixed',
    left: 'calc(50% + 247px)',

    width: 168,
    height: '100%',

    [breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

export default function Onboarding({ children, paperProps }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Logo className={classes.logo} />
      <svg className={classes.squiggle}>
        <Squiggle
          component="g"
          shellProps={{
            style: {
              transform: 'translate(404px, -420px) rotate(90deg) scale(4, 4)',
            },
          }}
          pathProps={{
            strokeWidth: 1,
            stroke: theme.palette.grey[10],
          }}
          repeatCount={100}
        />
      </svg>

      <Grid className={classes.gridContainer} container justify="center">
        <Grid item xs={12} className={classes.gridContent}>
          <Paper className={classes.paper} {...paperProps}>
            {children}
          </Paper>
        </Grid>
        <Grid item className={classes.gridFooter}>
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={1}
            className={classes.gridFooterContainer}
          >
            <Grid item className={classes.gridLp}>
              <Typography variant="body2" align="center">
                © 2021 Leadpages (US) Inc.
              </Typography>
            </Grid>
            <Grid item className={classes.gridLinks}>
              <Typography variant="body2" align="center">
                <a className={classes.link} href="https://www.leadpages.net/contact">
                  Contact
                </a>{' '}
                |{' '}
                <a className={classes.link} href="https://www.leadpages.net/legal">
                  Legal
                </a>{' '}
                |{' '}
                <a className={classes.link} href="https://www.leadpages.net/privacy">
                  Privacy
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Onboarding.propTypes = {
  children: PropTypes.node.isRequired,
  paperProps: PropTypes.shape({}),
};

Onboarding.defaultProps = {
  paperProps: {},
};
