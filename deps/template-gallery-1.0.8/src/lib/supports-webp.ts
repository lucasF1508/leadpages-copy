let supported: null | boolean = null;

// Adapted from https://stackoverflow.com/questions/5573096/detecting-webp-support#answer-27232658
export default function supportsWebP(): boolean {
  if (supported === null) {
    const elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
      // was able or not to get WebP representation
      supported = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } else {
      // very old browser like IE 8, canvas not supported
      supported = false;
    }
  }
  return supported as boolean;
}
