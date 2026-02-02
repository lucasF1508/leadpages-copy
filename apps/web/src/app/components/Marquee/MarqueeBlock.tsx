import type {LogoWithLink, MarqueeProps} from './Marquee';
import React from 'react'
import Marquee from './Marquee'

const MarqueeBlock = ({ type = 'logo', ...props }: {  logos?: LogoWithLink[] } & MarqueeProps) => {
  const images = type === 'logo' ? props?.logos : props?.images;
  // Use 64px for logos (same as home page) or use provided maxHeight for images
  const maxHeight = type === 'logo' ? (props?.maxHeight || 64) : (props?.maxHeight || 577);

  if(!images?.length) return null;

  return <Marquee {...props} images={images} maxHeight={maxHeight} type={type}/>
}

export default MarqueeBlock