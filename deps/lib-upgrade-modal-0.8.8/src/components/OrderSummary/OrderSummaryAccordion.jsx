import React, { useState } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import OrderSummaryBody from './OrderSummaryBody';
import { PLAN_PERIOD_LABELS, SHORT_CYCLE_LABEL } from '../../constants';
import { usePlanContext } from './PlanContext';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => ({
  root: {
    border: `1px solid ${palette.grey[10]}`,
    marginBottom: 30,
    width: '100%',
    '&.Mui-expanded': {
      marginTop: 0,
      marginBottom: 30,
    },
    '&:before': {
      display: 'none',
    },
  },
  accordionSummary: {
    [breakpoints.up('sm')]: {
      paddingRight: spacing(3),
    },
  },
  planName: {
    textTransform: 'capitalize',
  },
  divider: { marginBottom: 6, width: '100%' },
}));

const OrderSummaryAccordion = props => {
  const { product, isTrial, totalDueNow } = usePlanContext();
  const classes = useStyles();
  const [isPlanExpanded, setIsPlanExpanded] = useState(false);
  const { period, level } = product;

  const onClickPlan = (_e, expanded) => {
    setIsPlanExpanded(expanded);
  };

  return (
    <Accordion
      expanded={isPlanExpanded}
      onChange={onClickPlan}
      className={classes.root}
      elevation={0}
      {...props}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid
          className={classes.accordionSummary}
          container
          item
          xs={12}
          direction="column"
        >
          <Typography component="p" color="textSecondary" variant="caption">
            Plan
          </Typography>
          <Grid container>
            <Grid
              className={classes.planName}
              component={Typography}
              variant="h5"
              item
              xs={12}
              sm
            >
              {level} {PLAN_PERIOD_LABELS[period]}
            </Grid>
            {!isPlanExpanded && (
              <Grid component={Typography} variant="h5" item xs={12} sm="auto">
                ${totalDueNow} due today
              </Grid>
            )}
          </Grid>
          {!isPlanExpanded && isTrial && (
            <Typography color="textSecondary" variant="body2">
              ${product.price} billed {SHORT_CYCLE_LABEL[period]} after trial
            </Typography>
          )}
        </Grid>
      </AccordionSummary>
      <Grid container flexDirection="column" component={AccordionDetails}>
        <Divider className={classes.divider} />
        <OrderSummaryBody />
      </Grid>
    </Accordion>
  );
};

export default OrderSummaryAccordion;
