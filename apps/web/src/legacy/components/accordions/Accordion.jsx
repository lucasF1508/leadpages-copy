import React from 'react';
import PropTypes from 'prop-types';
// material ui
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { VSTypography } from '@lp/ui';
// images
import ArrowDownSVG from '../../assets/images/global/arrow_down_large.svg';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    width: '100%',
    maxWidth: 540,
    margin: 'auto',
  },
  accordionRoot: {
    margin: 0,
    borderTop: `1px solid ${palette.grey[10]}`,
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    '&:before': {
      display: 'none',
    },
    '&:last-of-type': {
      borderBottom: `1px solid ${palette.grey[10]}`,
    },
    '&:hover': {
      color: palette.primary.main,
      '& $expandIcon': {
        filter:
          'invert(22%) sepia(85%) saturate(2922%) hue-rotate(245deg) brightness(98%) contrast(106%)',
      },
    },
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {
    margin: 0,
  },
  summaryRoot: {
    padding: 0,
  },
  summaryContent: {
    margin: '20px 0',
    paddingRight: 44,
  },
  expandIcon: {
    position: 'absolute',
    right: 18,
    transition: 'all 0.3s ease',
  },
  expandIconSvg: {
    width: 18,
  },
  detailRoot: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    paddingRight: 36,
    marginLeft: 0,
    marginBottom: 36,
    color: 'black',
    '& *': {
      marginBottom: 18,
      '&:last-child': {
        marginBottom: 0,
      },
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      borderBottom: `2px solid ${palette.primary.light}`,
      paddingBottom: 2,
      transition: 'all 0.3s ease',
      '&:hover': {
        color: palette.primary.main,
        borderBottom: `2px solid ${palette.primary.main}`,
      },
    },
    '& ul': {
      marginLeft: 18,
      listStylePosition: 'inside',
      '& li': {
        marginBottom: 0,
      },
    },
  },
  sectionHeadline: {
    marginTop: 66,
    marginBottom: 78,
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: '3rem',
    letterSpacing: '-0.03125rem',
    [breakpoints.down('sm')]: {
      marginTop: '4rem',
      marginBottom: '3.333rem',
      fontSize: '1.6667rem',
      lineHeight: '2rem',
      letterSpacing: '-0.01rem',
      whiteSpace: 'nowrap',
      color: 'red',
    },
  },
}));

const LPAccordion = ({ sectionHeadline, data }) => {
  const classes = useStyles();
  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      {sectionHeadline && (
        <VSTypography
          variant="h3"
          className={classes.sectionHeadline}
          dangerouslySetInnerHTML={{ __html: sectionHeadline }}
        />
      )}
      <div className={classes.root}>
        {data.map((accordionItem, index) => {
          const { itemHeadline, itemDetail } = accordionItem;
          return (
            <Accordion
              key={itemHeadline}
              elevation={0}
              classes={{ root: classes.accordionRoot, expanded: classes.expanded }}
              data-gtm="faq-accordion-item-title"
              data-gtm-value={itemHeadline}
            >
              <AccordionSummary
                id={`panel${index}-header`}
                aria-controls={`panel${index}-content`}
                classes={{
                  root: classes.summaryRoot,
                  content: classes.summaryContent,
                  expandIcon: classes.expandIcon,
                }}
                expandIcon={
                  <img className={classes.expandIconSvg} src={ArrowDownSVG} alt="arrow icon" />
                }
              >
                <Typography variant="h4" className={classes.itemHeadline}>
                  {itemHeadline}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.detailRoot}>
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: itemDetail }} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

LPAccordion.defaultProps = {
  sectionHeadline: '',
};

LPAccordion.propTypes = {
  sectionHeadline: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      itemHeadline: PropTypes.string.isRequired,
      itemDetail: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default LPAccordion;
