import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

export const Loading = ({ msg, variant }) => (
  <Grid container justify="center" direction="column" alignItems="center" style={{ height: '100%' }}>
    {msg && (
      <Typography variant={variant} style={{ paddingBottom: 10 }}>
        {msg}
      </Typography>
    )}
    <CircularProgress />
  </Grid>
);

export default Loading;
