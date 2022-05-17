export const easing = {
  base: 'ease-in-out',
  in: 'ease-in',
  out: 'ease-out',
  bubble: 'cubic-bezier(0.3, 0, 0, 1)',
  outBack: 'cubic-bezier(0.04, 0.29, 0.3, 1.35)',
  outCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  outRipple: 'cubic-bezier(0.33, 0.81, 0.585, 0.99)',
  outSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  outQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  inOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
}

export const duration = {
  base: '0.4s',
  fast: '0.2s',
  slow: '0.6s',
  snail: '1.2s',
}

export const transitions = {
  base: '$easing$base $duration$base',
  snappy: '$easing$out $duration$fast',
  fancy: '$easing$outCubic $duration$slow',
  link: `
    color $duration$fast $easing$base,
    background-color $duration$fast $easing$base,
    border-color $duration$fast $easing$base,
    opacity $duration$fast $easing$base
  `,
}

export default transitions
