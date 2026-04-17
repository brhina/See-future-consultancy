export const pageVariants = {
  initial: { opacity: 0, y: 10, filter: 'blur(8px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: 'blur(10px)',
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] }
  }
}

export const sectionVariants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export const staggerContainer = (stagger = 0.06, delayChildren = 0.05) => ({
  initial: {},
  animate: {
    transition: { staggerChildren: stagger, delayChildren }
  }
})

export const cardVariants = {
  initial: { opacity: 0, y: 12, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
  }
}

export const hoverLift = {
  whileHover: { y: -3, transition: { duration: 0.18, ease: 'easeOut' } },
  whileTap: { scale: 0.98 }
}

