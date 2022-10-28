export const borderWidths = {
  base: '1px',
  thin: '$borderWidths$base',
  thick: '3px',
}

export const borders = {
  base: '$borderWidths$base solid $colors$border',
  thin: '$borders$base',
  thick: '$borderWidths$thick solid $colors$border',
  thickButton: '$borderWidths$thick solid $colors$primary',
  thickGhost: '$borderWidths$thick solid $colors$secondary',
}

export default borders
