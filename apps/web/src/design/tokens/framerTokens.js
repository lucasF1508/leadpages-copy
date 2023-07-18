export const group = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren' },
  },
}

export const item = {
  hidden: {
    y: 45,
    opacity: 0,
  },
  visible: { y: 0, opacity: 1 },
}

export const transition = {
  ease: [0.645, 0.045, 0.355, 1],
  opacity: { duration: 0.3 },
  y: { duration: 0.6 },
}

export const viewport = {
  once: true,
}
