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
  //
  lp_1: 360,
  lp_2: 577,
  lp_3: 769,
  lp_4: 993,
  lp_5: 1025,
  lp_6: 1200,
  lp_7: 1600,
  lp_8: 2000,
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
