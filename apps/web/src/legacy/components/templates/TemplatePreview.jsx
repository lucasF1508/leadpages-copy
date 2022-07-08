import React, { useState, useEffect } from 'react';
import { PreviewTemplate } from '@lp/template-gallery';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { TemplateShape, DeviceKind } from '../../constants/templates';
import PreviewHeader from './PreviewHeader';

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
  }),
  { classNamePrefix: 'Preview' },
);

const Preview = ({ template, goBack }) => {
  const matchesSmallBreakpoint = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const matchesMediumBreakpoint = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [device, setDevice] = useState(
    window.innerWidth > 1024 ? DeviceKind.Desktop : DeviceKind.Mobile,
  );

  const prevShowMobileSetting = React.useRef(device === DeviceKind.mobile);
  useEffect(() => {
    if (matchesSmallBreakpoint && !matchesMediumBreakpoint && device === DeviceKind.Desktop) {
      setDevice(DeviceKind.Mobile);
    } else if (!matchesSmallBreakpoint && device === DeviceKind.Mobile) {
      setDevice(DeviceKind.Desktop);
    } else if (
      matchesMediumBreakpoint &&
      device === DeviceKind.Mobile &&
      !prevShowMobileSetting.current
    ) {
      setDevice(DeviceKind.Desktop);
    }
  }, [matchesSmallBreakpoint, matchesMediumBreakpoint]);

  const classes = useStyles();
  const handleDeviceChange = (_, value) => {
    prevShowMobileSetting.current = value === DeviceKind.Mobile;
    setDevice(value);
  };

  return (
    <>
      <PreviewHeader
        className={classes.header}
        onTabChange={handleDeviceChange}
        device={device}
        title={template.template.name}
        templateId={template._meta.id}
        templateKind={template.kind}
        goBack={goBack}
      />
      <PreviewTemplate device={device} previewUrl={template.template.previewUrl} />
      <Button
        variant="outlined"
        id="use-template-btn-footer"
        className={classes.useTemplateButton}
        onClick={goBack}
      >
        Back to All Templates
      </Button>
    </>
  );
};

Preview.propTypes = {
  template: TemplateShape.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Preview;
