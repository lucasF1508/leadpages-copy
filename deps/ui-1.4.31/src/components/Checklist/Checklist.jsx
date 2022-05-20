import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import ChecklistItem, { LIST_ITEM_STATUS } from './ChecklistItem';
import DialogTitleWithCloseButton from '../DialogTitleWithCloseButton';
import FixedBottomItem from './FixedBottomItem';

import { legacyColors } from '../../themes/colors';
import { Grid } from '@material-ui/core';

const CompletionProgressBar = withStyles(theme => ({
  root: {
    height: 7,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[10],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: legacyColors.green,
  },
}))(LinearProgress);

const useStyles = makeStyles(
  theme => ({
    paperAnchorRight: ({ topOffset }) => ({
      width: 360,
      top: topOffset ? topOffset : 0,
      height: topOffset ? `calc(100% - ${topOffset}px)` : '100%',
      border: 0,
      boxShadow: `0 10px 20px -5px ${theme.palette.greyTransparent[10]}`,
    }),
    dialogTitle: {
      padding: '16px 18px 16px 27px',
    },
    progressWrapper: {
      margin: '12px 28px 18px',
    },
    pageProgressTitle: {
      marginBottom: 12,
    },
    pageProgressCaptionContainer: {
      marginTop: 11,
      color: theme.palette.grey[70],
    },
    pageProgressMessage: {
      fontWeight: theme.typography.fontWeightBold,
    },
    listWrapper: ({ bottomItem }) => ({
      height: bottomItem ? 'calc(100% - 239px)' : '100%',
      overflowY: 'auto',
    }),
  }),
  { classNamePrefix: 'Checklist' },
);

function Checklist({
  open,
  list,
  topOffset,
  bottomItemLabel,
  bottomItemComponent,
  onClose,
  onStatusChange,
  onItemExpand,
  onBottomItemExpand,
  onLinkClick,
  onActionClick,
}) {
  const [activeListItem, setActiveListItem] = useState();
  const [itemClosing, setItemClosing] = useState(false);
  const [displayContent, setDisplayContent] = useState(true);
  const classes = useStyles({
    topOffset,
    bottomItem: !!bottomItemComponent,
  });
  const theme = useTheme();

  const listTotal = list.length;
  let complete = 0;

  list.forEach(({ status }) => {
    if (status === LIST_ITEM_STATUS.COMPLETE) {
      complete += 1;
    }
  });

  const progressPercentage = Math.round((complete / listTotal) * 100);

  const handleOpenNextItem = (currentOpenItem, itemStatus) => {
    const currentIndex = list.findIndex(listItem => listItem.name === currentOpenItem);
    const nextIndex = currentIndex + 1;

    if (list.length > nextIndex) {
      setActiveListItem(list[nextIndex].name);
    } else {
      setActiveListItem(null);
    }
  };

  const displayTimeoutRef = useRef();
  useEffect(() => {
    // Render content only when the sidebar is open
    if (open) {
      if (displayTimeoutRef.current) {
        clearTimeout(displayTimeoutRef.current);
        displayTimeoutRef.current = null;
      }
      setDisplayContent(true);
    } else {
      displayTimeoutRef.current = setTimeout(() => {
        setDisplayContent(false);
      }, theme.transitions.duration.enteringScreen);
    }
  }, [open, theme]);

  return (
    <Drawer
      open={open}
      anchor="right"
      variant="persistent"
      classes={{ paperAnchorRight: classes.paperAnchorRight }}
    >
      {displayContent && (
        <>
          <DialogTitleWithCloseButton className={classes.dialogTitle} onClose={onClose}>
            {'Help & Getting Started'}
          </DialogTitleWithCloseButton>
          <Divider />
          <div className={classes.progressWrapper}>
            <Typography className={classes.pageProgressTitle} variant="h5">
              Page Completion
            </Typography>
            <CompletionProgressBar
              value={progressPercentage}
              variant="determinate"
              aria-label="page progress"
            />
            <Grid
              className={classes.pageProgressCaptionContainer}
              container
              justify="space-between"
            >
              <Typography variant="caption">{`${complete}/${listTotal} Complete`}</Typography>
              {progressPercentage === 100 && (
                <Typography className={classes.pageProgressMessage} variant="caption">
                  Great—ready for visitors!
                </Typography>
              )}
            </Grid>
          </div>
          <div className={classes.listWrapper}>
            {list &&
              list.length >= 1 &&
              list.map(({ name, label, status, DetailsComponent }, index) => (
                <ChecklistItem
                  open={activeListItem === name && !itemClosing}
                  name={name}
                  key={name}
                  order={index + 1}
                  label={label}
                  status={status}
                  DetailsComponent={DetailsComponent}
                  onOpen={onItemExpand}
                  onAccordionChange={setActiveListItem}
                  onStatusChange={onStatusChange}
                  onOpenNextItem={handleOpenNextItem}
                  onLinkClick={onLinkClick}
                  onActionClick={onActionClick}
                  onItemClosing={setItemClosing}
                />
              ))}
          </div>
          {bottomItemComponent && (
            <FixedBottomItem
              open={activeListItem === bottomItemLabel}
              name={bottomItemLabel}
              label={bottomItemLabel}
              DetailsComponent={bottomItemComponent}
              onOpen={onBottomItemExpand}
              onAccordionChange={setActiveListItem}
            />
          )}
        </>
      )}
    </Drawer>
  );
}

Checklist.defaultProps = {
  bottomItemLabel: '',
  bottomItemComponent: null,
  topOffset: 0,
  onItemExpand: () => {},
  onBottomItemExpand: () => {},
  onLinkClick: () => {},
  onActionClick: () => {},
};

Checklist.propTypes = {
  open: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      status: PropTypes.oneOf([LIST_ITEM_STATUS.COMPLETE, LIST_ITEM_STATUS.INCOMPLETE]).isRequired,
      DetailsComponent: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
  topOffset: PropTypes.number,
  bottomItemLabel: PropTypes.string,
  bottomItemDetailsComponent: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onItemExpand: PropTypes.func,
  onBottomItemExpand: PropTypes.func,
  onLinkClick: PropTypes.func,
  onActionClick: PropTypes.func,
};

export default Checklist;
