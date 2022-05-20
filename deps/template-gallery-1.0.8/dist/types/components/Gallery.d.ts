import React from 'react';
interface GalleryProps {
    infiniteRef: React.MutableRefObject<HTMLDivElement | null>;
    children: React.ReactNode;
}
declare const Gallery: React.FC<GalleryProps>;
export default Gallery;
