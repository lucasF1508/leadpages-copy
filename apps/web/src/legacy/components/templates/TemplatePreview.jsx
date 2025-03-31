import React, { useState, useEffect } from 'react'
import { PreviewTemplate } from '@lp/template-gallery'
import PropTypes from 'prop-types'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { TemplateShape, DeviceKind } from '@legacy/constants/templates'
import PreviewHeader from './PreviewHeader'

const useStyles = makeStyles(
  ({ breakpoints, spacing }) => ({
    header: {
      flexGrow: 0,
      flexShrink: 0,
    },
    useTemplateButton: {
      display: 'none',
      [breakpoints.up('sm')]: {
        display: 'block',
        position: 'relative',
        alignSelf: 'center',
        marginTop: spacing(9),
        marginBottom: spacing(9),
      },
    },
    imageContainer: {
      display: 'flex',
      position: 'relative',
      maxWidth: 1298,
      width: '90%',
      flexGrow: 1,
      flexShrink: 1,
      margin: '0 auto',
    },
    fullPageImage: {
      display: 'none',
      [breakpoints.up('sm')]: {
        display: 'flex',
        width: '100%',
        boxShadow: '0 14px 28px 0 rgba(0, 0, 0, 0.15)',
        marginBottom: spacing(9),
      },
    },
  }),
  { classNamePrefix: 'Preview' }
)

function getAltText(template) {
  let altText = ''
  let formattedCategories = ''
  const { categories } = template.template

  if (categories.length > 1) {
    const categoriesToFormat = [...categories]
    const lastItem = categoriesToFormat.pop()
    // When there are multiple categories, add an "and" before the last one
    formattedCategories = `${categoriesToFormat.join(', ')} and ${lastItem}`
  } else if (categories.length === 1) {
    // eslint-disable-next-line prefer-destructuring
    formattedCategories = categories[0]
  }

  if (template.kind === 'LeadpageTemplate') {
    altText = `${template.template.name}: High-converting landing page template for ${formattedCategories}`
  } else {
    altText = `${template.template.name}: Conversion-focused website template for ${formattedCategories}`
  }

  return altText
}

const Preview = ({ template, galleryRoot, planData }) => {
  const altText = getAltText(template)

  const matchesSmallBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.up('sm')
  )
  const matchesMediumBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.up('md')
  )
  const [device, setDevice] = useState(
    window.innerWidth > 1024 ? DeviceKind.Desktop : DeviceKind.Mobile
  )

  const prevShowMobileSetting = React.useRef(device === DeviceKind.mobile)
  useEffect(() => {
    if (
      matchesSmallBreakpoint &&
      !matchesMediumBreakpoint &&
      device === DeviceKind.Desktop
    ) {
      setDevice(DeviceKind.Mobile)
    } else if (!matchesSmallBreakpoint && device === DeviceKind.Mobile) {
      setDevice(DeviceKind.Desktop)
    } else if (
      matchesMediumBreakpoint &&
      device === DeviceKind.Mobile &&
      !prevShowMobileSetting.current
    ) {
      setDevice(DeviceKind.Desktop)
    }
  }, [matchesSmallBreakpoint, matchesMediumBreakpoint])

  const classes = useStyles()
  const handleDeviceChange = (_, value) => {
    prevShowMobileSetting.current = value === DeviceKind.Mobile
    setDevice(value)
  }

  return (
    <>
      <PreviewHeader
        className={classes.header}
        onTabChange={handleDeviceChange}
        device={device}
        title={template.template.name}
        templateId={template._meta.id}
        templateKind={template.kind}
        galleryRoot={galleryRoot}
        planData={planData}
      />
      <PreviewTemplate
        device={device}
        previewUrl={template.template.previewUrl}
      />
      <Link href={galleryRoot} passHref legacyBehavior>
        <Button
          variant="outlined"
          id="use-template-btn-footer"
          className={classes.useTemplateButton}
        >
          Back to All Templates
        </Button>
      </Link>
      {template.template.fullPageScreenshotUrlWebp && device === 'desktop' && (
        <div className={classes.imageContainer}>
          <img
            className={classes.fullPageImage}
            src={template.template.fullPageScreenshotUrlWebp}
            alt={altText}
          />
        </div>
      )}
    </>
  )
}

Preview.propTypes = {
  template: TemplateShape.isRequired,
  galleryRoot: PropTypes.string.isRequired,
}

export default Preview
