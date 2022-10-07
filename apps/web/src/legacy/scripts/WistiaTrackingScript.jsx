import React from 'react'
import Script from 'next/script'

const WistiaTrackingScript = () => (
  <Script
    id="wistia-tracking-script"
    strategy="beforeInteractive"
    className="_iub_cs_activate"
    data-iub-purposes="4,5"
  >
    {`
          function fbTrackingEvent (videoId, percent) {
            fbq('trackCustom', 'WistiaWatched', {
              percent: percent + '%',
              url: typeof window !== 'undefined' ? window.location.href : null,
              id: videoId
            });
          }
          function videoPercentageThresholdReachedEvent (videoId, videoName, percent) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'videoPercentageThresholdReached',
              'videoId': videoId,
              'videoName': videoName,
              'thresholdPercentage': percent + '%',
            });
          }
          function videoPlayedEvent (videoId, videoName) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'videoId': videoId,
              'videoName': videoName,
              'event': 'videoPlayed',
            });
          }
          window._wq = window._wq || [];
          _wq.push({
            id: '_all',
            onReady(video) {
              const secondsWatchedDisplay = document.getElementById('seconds_watched_display');
              const videoId = video.hashedId();
              const videoName = video.name();
              video.bind('percentwatchedchanged', (percent, lastPercent) => {
                if (percent >= .01 && lastPercent < .01) {
                  fbTrackingEvent(videoId,1);
                  videoPercentageThresholdReachedEvent(videoId,videoName,1);
                  videoPlayedEvent(videoId,videoName);
                } else if (percent >= .25 && lastPercent < .25) {
                    fbTrackingEvent(videoId,25);
                    videoPercentageThresholdReachedEvent(videoId,videoName,25);
                } else if (percent >= .50 && lastPercent < .50) {
                    fbTrackingEvent(videoId,50);
                    videoPercentageThresholdReachedEvent(videoId,videoName,50);
                } else if (percent >= .75 && lastPercent < .75) {
                    fbTrackingEvent(videoId,75);
                    videoPercentageThresholdReachedEvent(videoId,videoName,75);
                } else if (percent >= .99 && lastPercent < .99) {
                    fbTrackingEvent(videoId,100);
                    videoPercentageThresholdReachedEvent(videoId,videoName,100);
                }
              });
            }
          });
        `}
  </Script>
)

export default WistiaTrackingScript
