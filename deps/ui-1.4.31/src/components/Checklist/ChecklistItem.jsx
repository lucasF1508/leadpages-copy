import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ExpandMore from '@material-ui/icons/ExpandMore';
import withStyles from '@material-ui/core/styles/withStyles';

import { legacyColors } from '../../themes/colors';

export const LIST_ITEM_STATUS = {
  COMPLETE: 'complete',
  INCOMPLETE: 'incomplete',
};

const ItemSummary = withStyles(({ palette, transitions }) => ({
  root: {
    border: `1px solid transparent`,
    transition: transitions.create(['box-shadow', 'border-color'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
    // Expanded and closed summary states
    '&.Mui-expanded': {
      minHeight: 'auto',
    },
    '&:not(.Mui-expanded)': {
      borderColor: palette.greyTransparent[8],
    },
    // Hover and focus states
    '&:hover': {
      borderColor: 'transparent',
    },
    '&:not(.Mui-expanded):hover': {
      boxShadow: `0 10px 20px -5px ${palette.greyTransparent[20]}`,
    },
    '&.Mui-expanded.Mui-focused': {
      backgroundColor: 'transparent',
    },
    '&:not(.Mui-expanded).Mui-focused': {
      boxShadow: `0 10px 20px -5px ${palette.greyTransparent[20]}`,
      borderColor: 'transparent',
      backgroundColor: 'transparent',
    },
  },
  content: {
    alignItems: 'center',
    margin: '18px 0',
    '&.Mui-expanded': {
      margin: '18px 0',
    },
  },
  expandIcon: {
    transform: 'rotate(-90deg)', // Start icon pointing right
    '&.Mui-expanded': {
      transform: 'rotate(0deg)',
    },
  },
}))(AccordionSummary);

const useStyles = makeStyles(
  ({ palette, typography, transitions, spacing }) => ({
    itemRoot: {
      margin: spacing(1.5, 1.5, 0),
      boxShadow: 'none', // Remove default box shadow
      '&.Mui-expanded, &.Mui-expanded:first-child': {
        margin: spacing(1.5, 1.5, 0),
        backgroundColor: palette.greyTransparent[4],
      },
      '&:not(.Mui-expanded):hover $orderCircle': {
        backgroundColor: palette.grey[60],
        color: palette.common.white,
      },
      '&:before': {
        content: 'none', // Remove default top border
      },
      '&:last-child, &:last-child.Mui-expanded': {
        marginBottom: spacing(1.5),
      },
    },
    itemDetails: {
      padding: spacing(0, 1.5, 1.5),
    },
    summaryLabel: ({ expanded }) => ({
      fontWeight: expanded ? typography.fontWeightBold : typography.fontWeightRegular,
    }),
    checkCircle: {
      fill: legacyColors.green,
      fontSize: 27,
      marginRight: 9,
    },
    orderCircle: ({ expanded }) => ({
      width: 24,
      height: 24,
      borderRadius: '50%',
      color: expanded ? palette.common.white : palette.grey[70],
      backgroundColor: expanded ? palette.grey[60] : palette.grey[10],
      marginRight: 9,
      fontSize: 13,
      fontWeight: typography.fontWeightBold,
      transition: transitions.create(['background-color', 'color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.short,
      }),
    }),
  }),
  { classNamePrefix: 'CheckListItem' },
);

const ChecklistItem = ({
  open,
  name,
  label,
  order,
  status,
  DetailsComponent,
  onOpen,
  onAccordionChange,
  onStatusChange,
  onOpenNextItem,
  onLinkClick,
  onActionClick,
  onItemClosing,
}) => {
  const classes = useStyles({ expanded: open });

  const handleOpen = name => {
    onAccordionChange(name);
    if (name) onOpen(name);
  };

  return (
    <Accordion
      id={`checklist-item-${name}`}
      classes={{ root: classes.itemRoot }}
      expanded={open}
      onChange={(event, expanded) => handleOpen(expanded ? name : null)}
      TransitionProps={{
        onExiting: () => {
          onItemClosing(true);
        },
        onExited: () => {
          onItemClosing(false);
        },
      }}
    >
      <ItemSummary aria-label={label} expandIcon={<ExpandMore />}>
        {status === LIST_ITEM_STATUS.COMPLETE ? (
          <CheckCircleIcon
            className={classes.checkCircle}
            data-qa-selector={`item-${order}-checked`}
          />
        ) : (
          <Typography
            className={classes.orderCircle}
            align="center"
            component="span"
            data-qa-selector={`item-${order}`}
          >
            {order}
          </Typography>
        )}
        <Typography className={classes.summaryLabel} variant="subtitle2">
          {label}
        </Typography>
      </ItemSummary>
      <AccordionDetails classes={{ root: classes.itemDetails }}>
        {DetailsComponent && (
          <DetailsComponent
            itemName={name}
            itemStatus={status}
            onStatusChange={onStatusChange}
            onOpenNextItem={onOpenNextItem}
            onLinkClick={onLinkClick}
            onActionClick={onActionClick}
          />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

ChecklistItem.defaultProps = {
  onOpen: () => {},
  onLinkClick: () => {},
  onActionClick: () => {},
};

ChecklistItem.propTypes = {
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  status: PropTypes.oneOf([LIST_ITEM_STATUS.COMPLETE, LIST_ITEM_STATUS.INCOMPLETE]),
  DetailsComponent: PropTypes.elementType.isRequired,
  onOpen: PropTypes.func,
  onAccordionChange: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onOpenNextItem: PropTypes.func.isRequired,
  onLinkClick: PropTypes.func,
  onActionClick: PropTypes.func,
  onItemClosing: PropTypes.func,
};

export default ChecklistItem;
