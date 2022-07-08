import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  responsivePadding: { padding: '56.25% 0 0 0', position: 'relative' },
  responsiveWrapper: { height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' },
  embed: { height: '100%', position: 'relative', width: '100%' },
  swatch: swatchOpacity => ({
    height: '100%',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',
    opacity: swatchOpacity,
    transition: 'opacity 200ms',
  }),
  still: {
    filter: 'blur(5px)',
    height: '100%',
    objectFit: 'contain;width:100%',
  },
});

const WistiaEmbed = ({ videoId, embedOptions, onVideoPlay, onVideoPause, onVideoEnd }) => {
  const [swatchOpacity, setSwatchOpacity] = useState(0);
  const classes = useStyles(swatchOpacity);

  const showSwatch = () => setSwatchOpacity(1);

  useEffect(() => {
    const id = `wistia-${videoId}`;

    if (!document.getElementById(id)) {
      const script1 = document.createElement('script');
      script1.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
      script1.async = true;
      script1.id = id;
      document.body.appendChild(script1);
    }

    if (!document.getElementById('wistiaJS')) {
      const script2 = document.createElement('script');
      script2.id = 'wistiaJS';
      script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      script2.async = true;
      document.body.appendChild(script2);
    }

    const defaultEmbedOptions = {
      videoFoam: true,
    };

    const embedConfig = {
      id: videoId,
      options: { ...defaultEmbedOptions, ...embedOptions },
      onReady: video => {
        if (onVideoPlay) {
          video.bind('play', () => onVideoPlay(videoId));
        }
        if (onVideoPause) {
          video.bind('pause', () => {
            const percentWatched = video.percentWatched();
            onVideoPause(videoId, percentWatched);
          });
        }
        if (onVideoEnd) {
          video.bind('end', () => {
            const percentWatched = video.percentWatched();
            onVideoEnd(videoId, percentWatched);
          });
        }
      },
    };

    // Many more player events we could subscribe to.
    // https://wistia.com/support/developers/player-api#events
    window._wq = window._wq || [];
    window._wq.push(embedConfig);

    return () => {
      // "revoke" key is an undocumented API feature provided by Wistia support.
      // This prevents an issue where onReady callback above would be triggered
      // a compounding number of times if this embed was used in a scenario where it could
      // be removed and re-added to the DOM (e.g. a modal).
      window._wq.push({ revoke: embedConfig });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={clsx('wistia_responsive_padding', classes.responsivePadding)}
      data-qa-selector="wistia-embed"
    >
      <div className={clsx('wistia_responsive_wrapper', classes.responsiveWrapper)}>
        <div className={clsx('wistia_embed', `wistia_async_${videoId}`, classes.embed)}>
          <div className={clsx('wistia_swatch', classes.swatch)}>
            <img
              src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
              className={classes.still}
              alt=""
              aria-hidden="true"
              onLoad={showSwatch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

WistiaEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
  embedOptions: PropTypes.shape({}), // https://wistia.com/support/developers/embed-options#options
  onVideoPlay: PropTypes.func,
  onVideoPause: PropTypes.func,
  onVideoEnd: PropTypes.func,
};

WistiaEmbed.defaultProps = {
  embedOptions: {},
  onVideoPlay: null,
  onVideoPause: null,
  onVideoEnd: null,
};

export default WistiaEmbed;
