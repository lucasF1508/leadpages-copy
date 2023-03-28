import { getMediaQueries, getRootBreakpoints } from '@design/utils/mediaQueries'

export const breakpoints = {
  xs: 340,
  s: 600,
  m: 960,
  l: 1280,
  xl: 1600,
  xxl: 1920,
  xxxl: 2400,
}

export const customBreakpoints = {
  teamMobile: 450,
  archiveMobile: 450,
  navigationMobile: 500,
  headlineSection: 767,
  navigationDesktop: 1000,
  sidebarTablet: 1180,
  //
  360: 360,
  510: 510,
  577: 577,
  600: 600,
  769: 769,
  900: 900,
  993: 993,
  1025: 1025,
  1200: 1200,
  1600: 1600,
  2000: 2000,
}

export const mediaQueries = {
  ...getMediaQueries({ ...breakpoints, ...customBreakpoints }),
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
}

export const rootBreakpoints = {
  ':root': getRootBreakpoints(breakpoints),
}

export default mediaQueries
