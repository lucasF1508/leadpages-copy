import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '85%',
  },
  icon: {
    fontSize: 18,
    marginRight: theme.spacing(1),
    color: theme.palette.grey[20],
  },
  iconPassed: {
    color: theme.palette.primary.main,
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 4,
    '@media (max-width: 767px)': {
      flex: '0 0 100%',
    },
    '@media (min-width: 768px)': {
      flex: '0 0 50%',
    },
  },
  label: {
    fontSize: 13,
  },
}));

export default function UserCheckList({ checklist }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {checklist.map(({ label, passed }, index) => {
        const Icon = passed ? CheckCircleIcon : CancelIcon;
        const iconClass = `${classes.icon} ${passed ? classes.iconPassed : ''}`;
        return (
          <div key={index} className={classes.checkItem}>
            <Icon className={iconClass} />
            <Typography variant="body2" className={classes.label}>
              {label}
            </Typography>
          </div>
        );
      })}
    </React.Fragment>
  );
}

UserCheckList.propTypes = {
  checklist: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      passed: PropTypes.bool,
    }),
  ),
};
