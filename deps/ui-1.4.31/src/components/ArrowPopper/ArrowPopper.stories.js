import React from 'react';
import { storiesOf } from '@storybook/react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { getThemeDecorator } from '../../utils/storybook';

import ArrowPopper from './ArrowPopper';
import { Select, MenuItem } from '@material-ui/core';

const POS_OPTIONS = [
  'bottom-end',
  'bottom-start',
  'bottom',
  'left-end',
  'left-start',
  'left',
  'right-end',
  'right-start',
  'right',
  'top-end',
  'top-start',
  'top',
];

const useStyles = makeStyles(theme => ({
  custompaper: {
    padding: theme.spacing(5),
  },
}));

storiesOf('Components/ArrowPopper', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => {
    const [pos, setPos] = React.useState('right');

    const Tip = (
      <>
        <Typography variant="h4" component="h4" gutterBottom>
          Create your first sub-account
        </Typography>
        <Typography component="ol" gutterBottom>
          I R Con-tent
        </Typography>
      </>
    );

    return (
      <Box m={4}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Default
        </Typography>
        <Box style={{ marginTop: '150px' }} display="flex" justifyContent="center">
          <ArrowPopper title={Tip} placement={pos}>
            <Button>Hover For arrow popper</Button>
          </ArrowPopper>
          <Select value={pos} onChange={e => setPos(e.target.value)}>
            {POS_OPTIONS.map(op => (
              <MenuItem key={op} value={op}>
                {op}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
    );
  })
  .add('Custom Paper', () => {
    const classes = useStyles();

    const Tip = (
      <>
        <Typography variant="h4" component="h4" gutterBottom>
          Create your first sub-account
        </Typography>
        <Typography component="ol" gutterBottom>
          I R Con-tent
        </Typography>
      </>
    );

    return (
      <Grid container>
        <Grid item sm={6}>
          <Typography variant="h3" style={{ marginBottom: 20 }}>
            Normal paper
          </Typography>
          <Box style={{ marginTop: '150px' }} display="flex" justifyContent="center">
            <ArrowPopper placement="top" title={Tip} open>
              <div>Hi</div>
            </ArrowPopper>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h3" style={{ marginBottom: 20 }}>
            Outlined paper
          </Typography>
          <Box style={{ marginTop: '150px' }} display="flex" justifyContent="center">
            <ArrowPopper placement="bottom" title={Tip} PaperProps={{ variant: 'outlined' }} open>
              <div>Hi</div>
            </ArrowPopper>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h3" style={{ marginBottom: 20 }}>
            Custom Class
          </Typography>
          <Box style={{ marginTop: '150px' }} display="flex" justifyContent="center">
            <ArrowPopper
              placement="right"
              title={Tip}
              containerClassName={classes.custompaper}
              open
            >
              <div>Hi</div>
            </ArrowPopper>
          </Box>
        </Grid>
      </Grid>
    );
  });
