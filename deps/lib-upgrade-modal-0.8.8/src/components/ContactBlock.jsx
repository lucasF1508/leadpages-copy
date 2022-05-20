import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { ShadowBox } from '@lp/ui';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(3, 'auto', 6),
      maxWidth: theme.breakpoints.values.lg,
      padding: theme.spacing(0, 3),
    },
    contactBlock: {
      boxSizing: 'border-box',
      padding: theme.spacing(0, 7),
    },
    header: {
      paddingTop: 45,
      paddingBottom: 60,
    },
    subheadline: {
      marginTop: theme.spacing(3),
    },
    link: {
      // TODO: Remove this override for LEGO
      '&:visited': {
        color: theme.palette.primary.main,
      },
    },
  }),
  { classNamePrefix: 'ContactBlock' },
);

const ContactBlock = ({ contactLink, headline, subheadline }) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up(767));

  return (
    matches && (
      <Grid className={classes.root} item xs={12}>
        <ShadowBox
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          className={classes.contactBlock}
        >
          <div className={classes.header}>
            <Typography variant="h3">{headline}</Typography>
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
            size="large"
          >
            Contact Us
          </Button>
        </ShadowBox>
      </Grid>
    )
  );
};

ContactBlock.propTypes = {
  contactLink: PropTypes.string,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
};

ContactBlock.defaultProps = {
  headline: `Not seeing what you're looking for?`,
  subheadline: `Contact our team to talk about custom options.`,
  contactLink: 'https://support.leadpages.net/hc/en-us/requests/new/',
};

export default ContactBlock;
