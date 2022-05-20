import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ToolTip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { PLAN_PERIODS } from '../constants/index';

const useStyles = makeStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[3],
    color: theme.palette.text.primary,
    margin: 0,
    maxWidth: 248,
    padding: `${theme.spacing(3) - 5}px ${theme.spacing(3)}px`,
    ...theme.typography.caption,
  },
  listItem: ({ enabled }) => ({
    cursor: enabled ? 'help' : 'default',
  }),
  icon: ({ isHighlighted, enabled }) => ({
    position: !enabled ? 'absolute' : null,
    opacity: enabled ? 1 : 0,
    color: isHighlighted ? theme.palette.primary.main : theme.palette.grey[100],
    marginTop: 2,
    minWidth: 34,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
  }),
  bonus: ({ enabled }) => ({
    color: enabled ? theme.palette.primary.main : theme.palette.text.disabled,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  }),
  feature: ({ enabled }) => ({
    color: enabled ? theme.palette.grey[70] : theme.palette.text.disabled,
    marginLeft: !enabled && 34,
    textDecoration: !enabled && 'line-through',
    width: '100%',
    transition: theme.transitions.create('color', {
      duration: theme.transitions.duration.shorter,
    }),
  }),
}));

const FeatureListItem = ({
  feature,
  planLevel,
  isHighlighted,
  isBonus,
  billingFrequency,
}) => {
  // get feature list item data
  // if split by billing frequency, get from each plan level frequency
  // if not, get from plan level as usual
  const { included, label, detail, annualOnly } =
    feature.plans[planLevel][billingFrequency] || feature.plans[planLevel];

  const enabled =
    annualOnly && billingFrequency === PLAN_PERIODS.MONTHLY ? false : included;
  const classes = useStyles({ isHighlighted, enabled });

  return (
    <ToolTip
      classes={{ tooltip: classes.tooltip }}
      title={(enabled && feature?.tooltip) || ''}
    >
      <ListItem
        className={classes.listItem}
        disableGutters
        alignItems="flex-start"
      >
        <ListItemIcon className={classes.icon}>
          <CheckCircleOutlineIcon fontSize="small" />
        </ListItemIcon>
        <Typography className={classes.feature}>
          {isBonus && <span className={classes.bonus}>Bonus: </span>}
          {enabled && label ? label : feature.label}
          {enabled && detail && (
            <>
              <br />
              {detail}
            </>
          )}
        </Typography>
      </ListItem>
    </ToolTip>
  );
};

FeatureListItem.propTypes = {
  feature: PropTypes.shape({}),
  planLevel: PropTypes.string,
  isHighlighted: PropTypes.bool,
  isBonus: PropTypes.bool,
  billingFrequency: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL])
    .isRequired,
};

export default FeatureListItem;
