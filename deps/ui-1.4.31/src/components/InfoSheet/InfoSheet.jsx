import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { primaryColors } from '../../themes/colors';

const useStyles = makeStyles(
  theme => ({
    summaryRoot: {
      minHeight: 54,
      padding: `0 15px 0 ${theme.spacing(3)}px `,

      '&.Mui-expanded, &[class*="MuiAccordionSummary-expanded"]': {
        minHeight: 54,
      },

      '&:hover, &.Mui-focusVisible': {
        backgroundColor: 'inherit',

        '& [class*="MuiAccordionSummary-expandIcon"]': {
          backgroundColor: theme.palette.whiteTransparent[20],
          opacity: 1,
        },
      },
    },
    summaryContent: {
      margin: '17px 0',
      '&.Mui-expanded, &[class*="MuiAccordionSummary-expanded"]': {
        margin: 'inherit',
      },
    },
    summaryExpandIcon: ({ textColor }) => ({
      color: textColor,
      transform: 'rotate(180deg)',
      opacity: 0.7,

      '&.Mui-expanded, &[class*="MuiAccordionSummary-expanded"]': {
        transform: 'rotate(0deg)',
      },
    }),
    accordion: ({ backgroundColor, textColor }) => ({
      overflow: 'hidden',
      textAlign: 'center',
      backgroundColor,
      color: textColor,
    }),
    heading: {
      textAlign: 'center',
      padding: '0 0 0 22px',
      width: '100%',
    },
    content: {
      padding: '0 24px 24px',
    },
    footerImage: {
      display: 'flex',
    },
  }),
  { classNamePrefix: 'InfoSheet' },
);

function mergeClasses(cls1, cls2) {
  const newClasses = { ...cls1 };
  Object.keys(cls2).forEach(key => {
    newClasses[key] = newClasses[key] ? `${newClasses[key]} ${cls2[key]}` : cls2[key];
  });
  return newClasses;
}

export default function InfoSheet({
  title,
  children,
  backgroundColor,
  textColor,
  footerImage,
  AccordionProps,
  ...other
}) {
  const classes = useStyles({ backgroundColor, textColor });

  const { classes: accordionClasses, ...restAccordionProps } = AccordionProps;
  const accordionProps = {
    square: true,
    classes: mergeClasses(accordionClasses, { root: classes.accordion }),
    ...restAccordionProps,
  };

  return (
    <div {...other}>
      <Accordion {...accordionProps}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="info-sheet-content"
          id="info-sheet-content"
          classes={{
            root: classes.summaryRoot,
            expandIcon: classes.summaryExpandIcon,
            content: classes.summaryContent,
          }}
          IconButtonProps={{
            size: 'small',
          }}
        >
          <div className={classes.heading}>
            {typeof title === 'string' && <Typography variant="h5">{title}</Typography>}
            {typeof title !== 'string' && title}
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.content}>{children}</AccordionDetails>
        {footerImage && (
          <div className={classes.footerImage}>
            {typeof footerImage === 'string' && <img src={footerImage} alt="" />}
            {typeof footerImage !== 'string' && footerImage}
          </div>
        )}
      </Accordion>
    </div>
  );
}

InfoSheet.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  footerImage: PropTypes.node,
  classes: PropTypes.shape({
    root: PropTypes.shape({}),
    footer: PropTypes.shape({}),
  }),
  AccordionProps: PropTypes.shape({}),
};

InfoSheet.defaultProps = {
  backgroundColor: primaryColors.indigo,
  textColor: primaryColors.white,
  footerImage: null,
  classes: {},
  AccordionProps: {},
};
