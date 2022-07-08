import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

type MakeStylesProps = {
  showMobile: boolean;
};

export enum Device {
  'Mobile' = 'mobile',
  'Desktop' = 'desktop',
}

export const TEMPLATE_PREVIEW_HASH = '#template-preview';

const useStyles = makeStyles(
  ({ breakpoints, palette }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const borderColor = (palette as any).greyTransparent[10];
    const transition = '0.8s all ease';

    return {
      loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -22,
        marginLeft: -22,
      },
      deviceWrapper: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '100%',
        flexGrow: 1,
        flexShrink: 1,
        transition,
        [breakpoints.up('sm')]: {
          height: 768,
          maxWidth: 1298,
          margin: '0 auto',
          flexGrow: 0,
          flexShrink: 0,
        },
      },
      desktopDeviceWrapper: {
        [breakpoints.up('sm')]: {
          borderRadius: 2,
          width: '90%',
        },
      },
      mobileDeviceWrapper: {
        [breakpoints.up('sm')]: {
          borderRadius: 0,
          width: 400,
        },
      },
      device: {
        backgroundColor: palette.common.white,
        width: '100%',
        height: '100%',
        transition,
      },
      desktopDevice: {
        [breakpoints.up('sm')]: {
          borderRadius: 2,
          paddingLeft: 0,
          paddingRight: 0,
          boxShadow: '0 14px 28px 0 rgba(0, 0, 0, 0.15)',
        },
      },
      mobileDevice: {
        [breakpoints.up('sm')]: {
          borderRadius: 40,
          paddingLeft: 10,
          paddingRight: 10,
          boxShadow: '0 14px 28px 0 rgba(0, 0, 0, 0.15)',
        },
      },
      deviceControls: {
        display: 'none',
        position: 'relative',
        height: 30,
        transition,
        [breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      deviceControl: ({ showMobile }: MakeStylesProps) => ({
        width: 10,
        height: 10,
        border: `1px solid ${borderColor}`,
        borderRadius: 5,
        position: 'absolute',
        left: 10,
        top: 10,
        transition,
        '&:nth-child(1)': {
          opacity: showMobile ? 0 : 1,
        },
        '&:nth-child(2)': {
          left: showMobile ? 'calc(50% - 30px)' : 30,
          width: showMobile ? 60 : 10,
          top: showMobile ? 20 : 10,
        },
        '&:nth-child(3)': {
          left: showMobile ? 'calc(50% + 40px)' : 50,
          top: showMobile ? 20 : 10,
        },
      }),
      iframe: {
        width: '100%',
        height: '100%',
        transition,
      },
      mobileIframe: {
        [breakpoints.up('sm')]: {
          height: 684,
          borderColor,
          borderWidth: 1,
          borderRadius: 2,
          marginTop: 18,
          borderStyle: 'inset',
        },
      },
      desktopIframe: {
        [breakpoints.up('sm')]: {
          height: 738,
          borderColor,
          borderWidth: '1px 0 0 0',
          borderRadius: '0 0 2px 2px',
          marginTop: 0,
          borderStyle: 'inset',
        },
      },
      iframeInner: {
        width: '100%',
        height: '100%',
        transition,
      },
    };
  },
  { classNamePrefix: 'PreviewTemplate' },
);

export interface PreviewTemplateProps {
  previewUrl: string;
  device: Device;
}

const PreviewTemplate: React.FC<PreviewTemplateProps> = ({ previewUrl, device }) => {
  const showMobile = device === Device.Mobile;
  const classes = useStyles({ showMobile });

  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <div
      className={clsx(
        classes.deviceWrapper,
        showMobile ? classes.mobileDeviceWrapper : classes.desktopDeviceWrapper,
      )}
    >
      <div
        className={clsx(classes.device, showMobile ? classes.mobileDevice : classes.desktopDevice)}
      >
        <div className={classes.deviceControls}>
          <div className={classes.deviceControl} />
          <div className={classes.deviceControl} />
          <div className={classes.deviceControl} />
        </div>
        {!hasLoaded && <CircularProgress className={classes.loader} />}
        <div
          className={clsx(
            classes.iframe,
            showMobile ? classes.mobileIframe : classes.desktopIframe,
          )}
        >
          <iframe
            className={classes.iframeInner}
            style={{
              opacity: hasLoaded ? 1 : 0,
            }}
            title="Preview"
            src={previewUrl + TEMPLATE_PREVIEW_HASH}
            width="100%"
            scrolling="auto"
            height="100%"
            marginHeight={0}
            frameBorder="0"
            onLoad={() => setHasLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewTemplate;
