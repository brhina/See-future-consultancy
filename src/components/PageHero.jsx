import { motion as Motion, useReducedMotion } from 'framer-motion'
import { cardVariants, staggerContainer } from '../utils/motionPresets'

function PageHero({
  eyebrow,
  title,
  description,
  tags = [],
  gradient = 'from-blue-50 via-white to-slate-50',
}) {
  const reduceMotion = useReducedMotion()

  return (
    <section className={`page-section-hero overflow-hidden bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.1),transparent_28%)]" />

      <Motion.div
        className="page-frame relative mx-auto max-w-full text-center"
        variants={reduceMotion ? undefined : staggerContainer(0.08, 0.05)}
        initial={reduceMotion ? false : 'initial'}
        animate={reduceMotion ? undefined : 'animate'}
      >
        {eyebrow && (
          <div className="flex justify-center">
            <Motion.div
              className="mb-4 inline-flex rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm"
              variants={reduceMotion ? undefined : cardVariants}
            >
              {eyebrow}
            </Motion.div>
          </div>
        )}

        <Motion.h1
          className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl xl:text-6xl"
          variants={reduceMotion ? undefined : cardVariants}
        >
          {title}
        </Motion.h1>

        <Motion.p
          className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-600 lg:text-lg"
          variants={reduceMotion ? undefined : cardVariants}
        >
          {description}
        </Motion.p>

        {tags.length > 0 && (
          <Motion.div
            className="mt-4 flex flex-wrap justify-center gap-3"
            variants={reduceMotion ? undefined : staggerContainer(0.05, 0.03)}
          >
            {tags.map((tag) => (
              <Motion.span
                key={tag}
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm sm:w-auto"
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