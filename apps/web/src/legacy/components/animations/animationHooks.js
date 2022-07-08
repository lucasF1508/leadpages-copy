import { useEffect } from 'react';

function handleScroll(cb, elem, options = { bottomOnly: false }) {
  return () => {
    requestAnimationFrame(() => {
      if (!elem.current) return;
      const bounding = elem.current.getBoundingClientRect();
      if (options.bottomOnly) {
        cb(bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight));
      }
      return cb(
        bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth),
      );
    });
  };
}
export function useInViewport(cb, elem) {
  useEffect(() => {
    if (elem) {
      const handleScrollCurry = handleScroll(cb, elem, { bottomOnly: true });
      window.addEventListener('scroll', handleScrollCurry);
      return () => window.removeEventListener('scroll', handleScrollCurry);
    }
  }, [cb, elem.current]);
}

export function useAnimationPlayPause({ active, animation }) {
  return useEffect(() => {
    if (active && animation) {
      animation.play();
    } else if (!active && animation) {
      animation.restart();
      animation.pause();
    }
  }, [active, animation]);
}

export function useAnimationCanceled({ active, canceled, animation, transitionTime }) {
  useEffect(() => {
    if (active && canceled) {
      animation.pause();
      animation.seek(animation.duration - transitionTime);
      animation.play();
    }
  }, [active, canceled]);
}
