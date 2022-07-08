// This will contain MUI collapse or acordian, accepting children containing the core content
import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ExpandMore from '@material-ui/icons/ExpandMore';
import withStyles from '@material-ui/core/styles/withStyles';

const ItemSummary = withStyles(({ palette, transitions }) => ({
  root: {
    padding: '6px 24px 6px 27px',
    transition: transitions.create(['background-color', 'border', 'borderColor'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
    '&:hover, &.Mui-focused': {
      backgroundColor: 'transparent',
    },
    '&:not(.Mui-expanded):hover, &:not(.Mui-expanded).Mui-focused': {
      backgroundColor: palette.greyTransparent[4],
    },
  },
  content: {
    alignItems: 'center',
    margin: '14px 0',
  },
  expandIcon: {
    transform: 'rotate(-180deg)', // Start icon pointing up
    '&.Mui-expanded': {
      transform: 'rotate(0deg)',
    },
    '&:hover, &:focus': {
      backgroundColor: palette.greyTransparent[4],
    },
  },
}))(AccordionSummary);

const useStyles = makeStyles(
  ({ palette, typography }) => ({
    root: {
      borderTop: `1px solid ${palette.greyTransparent[10]}`,
      boxShadow: 'none',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    summaryLabel: {
      fontWeight: typography.fontWeightBold,
    },
    detailsWrapper: {
      padding: 0,
    },
  }),
  { classNamePrefix: 'FixedBottomItem' },
);

const FixedBottomItem = ({ open, name, label, DetailsComponent, onOpen, onAccordionChange }) => {
  const classes = useStyles({ expanded: open });

  const handleOpen = name => {
    onAccordionChange(name);
    if (name) onOpen(name);
  };

  return (
    <Accordion
      classes={{
        root: classes.root,
      }}
      expanded={open}
      onChange={(event, expanded) => handleOpen(expanded ? name : null)}
    >
      <ItemSummary aria-label={label} expandIcon={<ExpandMore />}>
        <Typography className={classes.summaryLabel} variant="h5">
          {label}
        </Typography>
      </ItemSummary>
      <AccordionDetails className={classes.detailsWrapper}>{DetailsComponent}</AccordionDetails>
    </Accordion>
  );
};

FixedBottomItem.defaultProps = {
  onOpen: () => {},
};

FixedBottomItem.propTypes = {
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onOpen: PropTypes.func,
  onAccordionChange: PropTypes.func.isRequired,
  DetailsComponent: PropTypes.node,
};

export default FixedBottomItem;
