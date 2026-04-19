import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Megaphone } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { homePageData } from '../../data/homeData'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../../utils/motionPresets'

function LatestNews() {
  const { news } = homePageData
  const reduceMotion = useReducedMotion()

  return (
    <section className="page-section page-section-mist">
      <Motion.div
        className="page-frame max-w-full"
        variants={reduceMotion ? undefined : sectionVariants}
        initial={reduceMotion ? false : 'initial'}
        whileInView={reduceMotion ? undefined : 'animate'}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-10 text-center">
          <Motion.div
            className="mb-5 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
            variants={reduceMotion ? undefined : cardVariants}
          >
            <Megaphone className="mr-2 h-4 w-4" />
            {news.eyebrow}
          </Motion.div>
          <Motion.h2 className="mb-5 text-4xl font-bold text-slate-900 lg:text-5xl" variants={reduceMotion ? undefined : cardVariants}>
            {news.title}
          </Motion.h2>
          <Motion.p className="mx-auto max-w-3xl text-lg text-slate-600 lg:text-xl" variants={reduceMotion ? undefined : cardVariants}>
            {news.description}
          </Motion.p>
        </div>

        <Motion.div
          className="grid gap-6 lg:grid-cols-[1.2fr_1.8fr]"
          variants={reduceMotion ? undefined : staggerContainer(0.06, 0.04)}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.25 }}
        >
          <Motion.article
            className="lg:rounded-3xl bg-slate-900 p-6 text-white shadow-xl lg:p-8"
            variants={reduceMotion ? undefined : cardVariants}
          >
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-blue-200">
              {news.lead.tag}
            </span>
            <h3 className="mt-4 text-2xl font-bold">{news.lead.title}</h3>
            <p className="mt-4 leading-7 text-slate-200">{news.lead.excerpt}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              SEEF uses this space to share evolving priorities, partnership momentum, and new technical focus areas.
            </div>
          </Motion.article>

          <Motion.div className="grid gap-4 md:grid-cols-3">
            {news.updates.map((item) => (
              <Motion.article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.tag}
                </span>
                <div className="mt-4 flex items-center text-sm text-slate-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  {item.date}
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.excerpt}</p>
              </Motion.article>
            ))}
          </Motion.div>
        </Motion.div>

        <div className="mt-8 text-center">
          <Motion.div {...(reduceMotion ? {} : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } })}>
            <Link
              to={news.cta.to}
              className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700"
            >
              {news.cta.label}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  )
}

export default LatestNews
