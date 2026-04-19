import { BadgeCheck } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import { aboutPageData } from '../../data/aboutData'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../../utils/motionPresets'

function OurStory() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="page-section page-section-soft">
      <Motion.div
        className="page-frame max-w-full"
        variants={reduceMotion ? undefined : sectionVariants}
        initial={reduceMotion ? false : 'initial'}
        animate={reduceMotion ? undefined : 'animate'}
      >
        <SectionHeading title={aboutPageData.story.title} description={aboutPageData.story.description} />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Motion.article
            className="lg:rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            variants={reduceMotion ? undefined : cardVariants}
            initial={reduceMotion ? false : 'initial'}
            animate={reduceMotion ? undefined : 'animate'}
            {...(reduceMotion ? {} : hoverLift)}
          >
            <h3 className="text-xl font-bold text-slate-900">Why SEEF was founded</h3>
            <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
              {aboutPageData.story.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Motion.article>

          <Motion.article
            className="lg:rounded-3xl bg-slate-900 p-6 text-white shadow-xl"
            variants={reduceMotion ? undefined : cardVariants}
            initial={reduceMotion ? false : 'initial'}
            animate={reduceMotion ? undefined : 'animate'}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Core Facts</p>
            <div className="mt-5 grid gap-3">
              {aboutPageData.story.facts.map((fact) => (
                <div key={fact} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                  {fact}
                </div>
              ))}
            </div>
          </Motion.article>
        </div>

        <Motion.div
          className="mt-5 grid gap-5 lg:grid-cols-2"
          variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
          initial={reduceMotion ? false : 'initial'}
          animate={reduceMotion ? undefined : 'animate'}
        >
          {aboutPageData.missionVision.map((item) => (
            <Motion.article
              key={item.title}
              className="lg:rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              variants={reduceMotion ? undefined : cardVariants}
              {...(reduceMotion ? {} : hoverLift)}
            >
              {/* <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${toneClasses[item.tone]}`}>
                <item.icon className="h-5 w-5 text-white" />
              </div> */}
              <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </Motion.article>
          ))}
        </Motion.div>

        <Motion.div
          className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]"
          variants={reduceMotion ? undefined : staggerContainer(0.06, 0.04)}
          initial={reduceMotion ? false : 'initial'}
          animate={reduceMotion ? undefined : 'animate'}
        >
          <Motion.article
            className="lg:rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            variants={reduceMotion ? undefined : cardVariants}
            {...(reduceMotion ? {} : hoverLift)}
          >
            {/* <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500">
              <PhilosophyIcon className="h-5 w-5 text-white" />
            </div> */}
            <h2 className="text-2xl font-bold text-slate-900">{aboutPageData.philosophy.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{aboutPageData.philosophy.description}</p>
          </Motion.article>

          <Motion.article
            className="lg:rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            variants={reduceMotion ? undefined : cardVariants}
            {...(reduceMotion ? {} : hoverLift)}
          >
            {/* <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div> */}
            <h2 className="text-2xl font-bold text-slate-900">Core Values</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {aboutPageData.values.map((value) => (
                <Motion.div
                  key={value.title}
                  className="rounded-2xl bg-slate-50 px-4 py-4"
                  {...(reduceMotion ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.99 } })}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-800">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{value.description}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.article>
        </Motion.div>

        <Motion.div
          className="mt-8 grid gap-5 lg:mt-12 lg:grid-cols-[1.1fr_0.9fr]"
          variants={reduceMotion ? undefined : staggerContainer(0.06, 0.04)}
          initial={reduceMotion ? false : 'initial'}
          animate={reduceMotion ? undefined : 'animate'}
        >
          <Motion.article className="lg:rounded-3xl bg-slate-900 p-6 text-white shadow-xl" variants={reduceMotion ? undefined : cardVariants}>
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-blue-300" />
              <h2 className="text-2xl font-bold">Growth Timeline</h2>
            </div>
            <div className="mt-6 space-y-4">
              {aboutPageData.milestones.map((item) => (
                <Motion.div
                  key={item.year}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  {...(reduceMotion ? {} : { whileHover: { y: -2 } })}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{item.year}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{item.description}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.article>

          <Motion.article
            className="lg:rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            variants={reduceMotion ? undefined : cardVariants}
            {...(reduceMotion ? {} : hoverLift)}
          >
            <h2 className="text-2xl font-bold text-slate-900">Why partners choose SEEF</h2>
            <div className="mt-6 space-y-4">
              {aboutPageData.differentiators.map((item) => (
                <Motion.div key={item.title} className="lg:rounded-3xl bg-slate-50 p-4" {...(reduceMotion ? {} : hoverLift)}>
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.article>
        </Motion.div>
      </Motion.div>
    </section>
  )
}

export default OurStory
