// utility to determine if videos should be displayed
// or if fallback images should be displayed instead
const shouldDisplayVideo = () => {
  if (typeof window !== 'undefined') {
    const displayVideo =
      !!document.createElement('video').canPlayType &&
      (!!document.createElement('video').canPlayType('video/mp4') ||
        !!document.createElement('video').canPlayType('video/webm')) &&
      !window.matchMedia('(prefers-reduced-motion)').matches &&
      window.innerWidth > 576;
    return displayVideo;
  }
  return false;
};

export default shouldDisplayVideo;
