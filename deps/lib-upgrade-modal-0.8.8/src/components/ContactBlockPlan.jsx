import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ShadowBox, VSTypography } from '@lp/ui';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { BREAKPOINTS, TWO_COL_MAX_WIDTH } from '../constants';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(3, 'auto', 6),
      maxWidth: TWO_COL_MAX_WIDTH,
      padding: theme.spacing(0, 3),
    },
    contactBlock: {
      boxSizing: 'border-box',
      padding: theme.spacing(0, 7),

      [theme.breakpoints.down(BREAKPOINTS.SMALL)]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: theme.spacing(0, 3),
        '& $header': {
          padding: theme.spacing(3, 0),
        },
        '& $headline': {
          fontSize: 22,
        },
        '& $link': {
          marginBottom: theme.spacing(4),
        },
      },
    },
    header: {
      paddingTop: 45,
      paddingBottom: 60,
      flexBasis: '68%',
    },
    headline: {},
    subheadline: {
      marginTop: theme.spacing(3),
      color: theme.palette.secondary.contrastText,
    },
    link: {},
    buttonText: {
      marginRight: theme.spacing(1),
    },
  }),
  { classNamePrefix: 'ContactBlock' },
);

const ContactBlockPlan = ({ contactLink, headline, subheadline }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={12}>
      <ShadowBox
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        className={classes.contactBlock}
      >
        <div className={classes.header}>
          <VSTypography
            className={classes.headline}
            component="h3"
            variant="h4"
          >
            {headline}
          </VSTypography>
          {subheadline && (
            <Typography className={classes.subheadline}>
              {subheadline}
            </Typography>
          )}
        </div>
        <Button
          className={classes.link}
          href={contactLink}
          variant="outlined"
          size="medium"
        >
          <span className={classes.buttonText}>Contact Us</span>
          <ChevronRightIcon />
        </Button>
      </ShadowBox>
    </Grid>
  );
};

ContactBlockPlan.propTypes = {
  contactLink: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
};

export default ContactBlockPlan;
