import { motion as Motion, useReducedMotion } from 'framer-motion'
import { sectionVariants } from '../utils/motionPresets'

function SectionHeading({ eyebrow, title, description, centered = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.div
      className={centered ? 'mx-auto mb-8 max-w-3xl text-center lg:mb-10' : 'mb-8 max-w-3xl lg:mb-10'}
      variants={reduceMotion ? undefined : sectionVariants}
      initial={reduceMotion ? false : 'initial'}
      whileInView={reduceMotion ? undefined : 'animate'}
      viewport={{ once: true, amount: 0.6 }}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.26em] text-sky-700">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg">{description}</p>}
    </Motion.div>
  )
}

export default SectionHeading
