import React from 'react';
import WistiaTrackingScript from '../../scripts/WistiaTrackingScript';

const Wistia_DemoVideo = props => {
  const fbTrackingEvent = () => {
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'WatchDemo_Click');
    }
  };
  return (
    <>
      <WistiaTrackingScript />
      <a
        href=""
        alt="wistia video"
        data-leadbox-popup="HcNB9CQW4nQm6Fi6mrfr69"
        data-leadbox-domain="lps.leadpages.net"
        style={{ textDecoration: 'none' }}
        onClick={fbTrackingEvent}
      >
        {props.children}
      </a>
    </>
  );
};

export default Wistia_DemoVideo;
