import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(
  () => ({
    root: {},
  }),
  { classNamePrefix: 'Gallery' },
);

interface GalleryProps {
  infiniteRef: React.MutableRefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

const Gallery: React.FC<GalleryProps> = ({ infiniteRef, children }) => {
  const classes = useStyles();

  return (
    <div ref={infiniteRef} className={classes.root}>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </div>
  );
};

export default Gallery;
