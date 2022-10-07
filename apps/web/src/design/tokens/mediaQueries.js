import { getMediaQueries, getRootBreakpoints } from '@design/utils/mediaQueries'

export const breakpoints = {
  xs: 340,
  // s: 576,
  s: 600,
  // m: 992,
  m: 960,
  // l: 1200,
  l: 1280,
  xl: 1600,
  // xxl: 2000,
  xxl: 1920,
  xxxl: 2400,
}

export const customBreakpoints = {
  teamMobile: 450,
  archiveMobile: 450,
  navigationMobile: 500,
  headlineSection: 767,
  navigationDesktop: 1000,
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
