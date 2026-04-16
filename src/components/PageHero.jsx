import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, cardVariants } from '../utils/motionPresets'

function PageHero({ eyebrow, title, description, tags = [], gradient = 'from-blue-50 via-white to-emerald-50' }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className={`bg-gradient-to-br ${gradient} py-10 lg:py-14`}>
      <Motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={reduceMotion ? undefined : staggerContainer(0.08, 0.05)}
        initial={reduceMotion ? false : 'initial'}
        animate={reduceMotion ? undefined : 'animate'}
      >
        {eyebrow && (
          <Motion.div
            className="mb-4 inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm"
            variants={reduceMotion ? undefined : cardVariants}
          >
            {eyebrow}
          </Motion.div>
        )}
        <Motion.h1
          className="max-w-5xl text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl"
          variants={reduceMotion ? undefined : cardVariants}
        >
          {title}
        </Motion.h1>
        <Motion.p
          className="mt-5 max-w-4xl text-base leading-8 text-slate-600 lg:text-lg"
          variants={reduceMotion ? undefined : cardVariants}
        >
          {description}
        </Motion.p>
        {tags.length > 0 && (
          <Motion.div className="mt-6 flex flex-wrap gap-3" variants={reduceMotion ? undefined : staggerContainer(0.06, 0.02)}>
            {tags.map((tag) => (
              <Motion.span
                key={tag}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
                variants={reduceMotion ? undefined : cardVariants}
              >
                {tag}
              </Motion.span>
            ))}
          </Motion.div>
        )}
      </Motion.div>
    </section>
  )
}

export default PageHero
