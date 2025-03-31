export const keyframes = {
  close: {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' },
  },
  'enter-from-left': {
    from: { opacity: '0', transform: 'translateX(-200px)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  'enter-from-right': {
    from: { opacity: '0', transform: 'translateX(200px)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  'enter-to-left': {
    from: { opacity: '1', transform: 'translateX(0)' },
    to: { opacity: '0', transform: 'translateX(-200px)' },
  },
  'enter-to-right': {
    from: { opacity: '1', transform: 'translateX(0)' },
    to: { opacity: '0', transform: 'translateX(200px)' },
  },
  'fade-in': {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  'fade-in-down': {
    from: { opacity: '0', transform: 'translateY(-0.25rem)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-in-left': {
    from: { opacity: '0', transform: 'translateX(0.25rem)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  'fade-in-right': {
    from: { opacity: '0', transform: 'translateX(-0.25rem)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  'fade-in-up': {
    from: { opacity: '0', transform: 'translateY(1.25rem)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-out': {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  'fade-out-down': {
    from: { opacity: '1', transform: 'translateY(0)' },
    to: { opacity: '0', transform: 'translateY(1.25rem)' },
  },
  'fade-out-left': {
    from: { opacity: '1', transform: 'translateX(0)' },
    to: { opacity: '0', transform: 'translateX(0.25rem)' },
  },
  'fade-out-right': {
    from: { opacity: '1', transform: 'translateX(0)' },
    to: { opacity: '0', transform: 'translateX(-0.25rem)' },
  },
  'fade-out-up': {
    from: { opacity: '1', transform: 'translateY(0)' },
    to: { opacity: '0', transform: 'translateY(-0.25rem)' },
  },
  open: {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  'scale-in': {
    from: { opacity: '0', transform: 'rotateX(-30deg) scale(1)' },
    to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
  },
  'scale-out': {
    from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
    to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
  },
  'scroll-left': {
    from: { transform: 'translateX(0%)' },
    to: { transform: 'translateX(-100%)' },
  },
  'scroll-right': {
    from: { transform: 'translateX(0%)' },
    to: { transform: 'translateX(100%)' },
  },
}
