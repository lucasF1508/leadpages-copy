import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SvgIcon from '@material-ui/core/SvgIcon'
import NextLink from 'next/link'
import { FLOWS } from '@lp/lib-upgrade-modal'

import { DeviceKind, TemplateKind } from '@legacy/constants/templates'
import { planRouter } from '@legacy/utils/plan-router'
import { getTrialId } from '@legacy/utils/trials'
import { Events } from './tracker'

const useStyles = makeStyles(
  ({ breakpoints, spacing, palette }) => ({
    container: {
      backgroundColor: 'white',
      marginBottom: 0,
      minHeight: 72,
      borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
      [breakpoints.up('sm')]: {
        marginBottom: 36,
      },
    },
    root: {
      minHeight: 72,
      paddingLeft: spacing(3),
      paddingRight: spacing(3),
      maxWidth: 1448,
      alignItems: 'center',
      alignSelf: 'center',
    },
    left: {
      height: '100%',
      minWidth: 0,
      width: 'auto',
      flex: 1,
    },
    leftSm: {
      [breakpoints.up(1025)]: {
        display: 'none',
      },
    },
    leftLg: {
      [breakpoints.down(1025)]: {
        display: 'none',
      },
    },
    link: {
      display: 'flex',
      alignItems: 'center',
    },
    linkText: {
      fontWeight: 700,
      letterSpacing: '1px',
      lineHeight: '24px',
      marginLeft: '16px',
      marginTop: '3px',
      textAlign: 'left',
      [breakpoints.down(375)]: {
        display: 'none',
      },
    },
    center: {
      marginTop: 16,
      height: '100%',
      display: 'none',
      justifyContent: 'center',
      flex: 1,
      [breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    right: {
      height: '100%',
      width: 'auto',
      whiteSpace: 'noWrap',
      marginLeft: spacing(2),
      [breakpoints.up('md')]: {
        justifyContent: 'flex-end',
        flex: 1,
      },
    },
    titleDivider: {
      margin: `6px ${spacing(2)}px`,
      height: 24,
    },
    title: {
      lineHeight: '36px',
      color: palette.grey[100],
    },
  }),
  { classNamePrefix: 'PreviewTemplateHeader' }
)

const PreviewHeader = ({
  className,
  title,
  onTabChange,
  device,
  templateId,
  templateKind,
  galleryRoot,
  planData,
}) => {
  const classes = useStyles()

  const doSelectTemplate = () => {
    try {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: Events.useTemplateButtonClicked,
        selectedTemplateName: title,
      })
      const kind = templateKind === TemplateKind.LandingPage ? 'page' : 'site'
      localStorage.setItem('lp_template_data', `${kind}-${templateId}`)
    } catch (e) {
      /* swallow */
    }
    planRouter(
      planData.trialPlans.month.pro.id,
      getTrialId(),
      {},
      {},
      FLOWS.SIGNUP,
      window
    )
  }
  return (
    <Grid container justify="center" className={classes.container}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        wrap="nowrap"
        className={clsx(classes.root, className)}
      >
        <Grid container className={classes.left} wrap="nowrap">
          <Grid container className={classes.leftLg} wrap="nowrap">
            <NextLink href={galleryRoot} passHref>
              <IconButton id="gallery-return" aria-label="Back">
                <ArrowBackIcon color="primary" />
              </IconButton>
            </NextLink>
            <Divider className={classes.titleDivider} orientation="vertical" />
            <Typography
              className={classes.title}
              variant="h4"
              component="h1"
              title={title}
              noWrap
            >
              {title}
            </Typography>
          </Grid>
          <Grid container className={classes.leftSm} wrap="nowrap">
            <NextLink href={galleryRoot} passHref>
              <Link
                component="button"
                underline="hover"
                className={classes.link}
                variant="body2"
              >
                <SvgIcon>
                  <ArrowBackIcon color="primary" />
                </SvgIcon>
                <Typography className={classes.linkText} variant="body2">
                  ALL TEMPLATES
                </Typography>
              </Link>
            </NextLink>
          </Grid>
        </Grid>

        <div className={classes.center}>
          <Tabs className={classes.tabs} value={device} onChange={onTabChange}>
            <Tab label="Desktop" value={DeviceKind.Desktop} />
            <Tab label="Mobile" value={DeviceKind.Mobile} />
          </Tabs>
        </div>
        <Grid container className={classes.right}>
          <Button
            onClick={doSelectTemplate}
            data-qa-selector="use-template-button"
          >
            Use this Template
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

PreviewHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  device: PropTypes.oneOf([DeviceKind.Mobile, DeviceKind.Desktop]).isRequired,
  templateId: PropTypes.string.isRequired,
  templateKind: PropTypes.string.isRequired,
  galleryRoot: PropTypes.string.isRequired,
}

PreviewHeader.defaultProps = {
  className: '',
}

export default PreviewHeader
