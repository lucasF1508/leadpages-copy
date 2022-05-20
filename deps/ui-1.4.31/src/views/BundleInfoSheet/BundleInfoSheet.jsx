import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import VSTypography from '../../components/VSTypography';
import InfoSheet from '../../components/InfoSheet';
import { primaryColors } from '../../themes/colors';

const useStyles = makeStyles(
  theme => ({
    root: ({ position }) => ({
      width: 350,
      position: 'fixed',
      bottom: 0,
      boxShadow: `0 6px 20px ${theme.palette.greyTransparent[10]}, 0 12px 40px ${theme.palette.greyTransparent[14]}`,
      zIndex: theme.zIndex.modal + 1,
      transition: theme.transitions.create('bottom', {
        duration: theme.transitions.duration.standard,
      }),
      ...(position === 'right' ? { right: theme.spacing(3) } : { left: theme.spacing(3) }),

      '&.Mui-expanded, &[class*="MuiAccordion-expanded"]': {
        bottom: theme.spacing(3),
      },

      '@media (max-width: 425px)': {
        width: '100%',
        margin: 'auto',
        left: 0,
        right: 0,
        '&.Mui-expanded, &[class*="MuiAccordion-expanded"]': {
          bottom: '0 !important', // Required to win specificity on marketing site and in-app.
        },
      },
    }),
    title: {
      fontWeight: theme.typography.fontWeightBold,
      opacity: 0.7,
    },
    contentHeader: {
      marginBottom: 12,
      lineHeight: theme.typography.pxToRem(30),
    },
    content: {
      marginBottom: 18,
    },
    linkRoot: ({ textColor }) => ({
      margin: '12px 9px 12px 0',
      color: textColor,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14),

      '&:visited': {
        color: textColor,
      },
    }),
    linkHover: ({ textColor }) => ({
      '&:hover, &.Mui-focusVisible': {
        paddingBottom: 4,
        textDecoration: 'none',
        color: textColor,
        borderBottom: `2px solid ${textColor}`,
      },
    }),
    linkArrow: {
      position: 'relative',
      width: 10,
      height: 10,
      top: 1,
    },
  }),
  { classNamePrefix: 'BundleInfoSheet' },
);

const BundleInfoSheet = ({
  className,
  backgroundColor,
  textColor,
  title,
  contentHeader,
  contentBody,
  imageSrc,
  isDefaultOpen,
  position,
  linkLabel,
  linkURL,
  onCollapseChange,
}) => {
  const classes = useStyles({ position, textColor });
  return (
    <InfoSheet
      title={
        <Typography className={classes.title} variant="overline">
          {title}
        </Typography>
      }
      AccordionProps={{
        defaultExpanded: isDefaultOpen,
        classes: {
          root: clsx(classes.root, className),
        },
        onChange: onCollapseChange,
        elevation: 0,
      }}
      footerImage={
        imageSrc && (
          <div
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${imageSrc})`,
              height: 112,
              width: '100%',
            }}
          />
        )
      }
      backgroundColor={backgroundColor}
      textColor={textColor}
      data-qa-selector="bundle-info-sheet"
    >
      <div>
        <VSTypography className={classes.contentHeader} variant="h5">
          {contentHeader}
        </VSTypography>
        <Typography className={classes.content} component="div" variant="body2">
          {contentBody}
        </Typography>
        {linkURL && linkLabel && (
          <Typography component="div" variant="body2">
            <Link
              underline="hover"
              classes={{ root: classes.linkRoot, underlineHover: classes.linkHover }}
              href={linkURL}
              target="_blank"
            >
              {linkLabel}
            </Link>
            <ArrowForwardIosIcon className={classes.linkArrow} />
          </Typography>
        )}
      </div>
    </InfoSheet>
  );
};

BundleInfoSheet.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  contentHeader: PropTypes.string.isRequired,
  contentBody: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  isDefaultOpen: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
  linkURL: PropTypes.string,
  linkLabel: PropTypes.string,
  onCollapseChange: PropTypes.func,
};

BundleInfoSheet.defaultProps = {
  className: '',
  backgroundColor: primaryColors.indigo,
  textColor: primaryColors.white,
  imageSrc: null,
  isDefaultOpen: false,
  position: 'right',
  linkURL: null,
  linkLabel: null,
  onCollapseChange: () => {},
};

export default BundleInfoSheet;
