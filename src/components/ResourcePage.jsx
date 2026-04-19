import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import PageHero from './PageHero'
import SectionHeading from './SectionHeading'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../utils/motionPresets'

function ResourcePage({ pageData }) {
  const reduceMotion = useReducedMotion()

  const renderAction = (action, className) => {
    if (!action) {
      return null
    }

    if (action.href) {
      return (
        <a
          href={action.href}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noreferrer' : undefined}
          className={className}
        >
          {action.label}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      )
    }

    return (
      <Link to={action.to} className={className}>
        {action.label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    )
  }

  const renderSectionItem = (item) => {
    if (typeof item === 'string') {
      return (
        <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <p className="text-sm leading-7 text-slate-700">{item}</p>
          </div>
        </div>
      )
    }

    return (
      <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <PageHero
        eyebrow={pageData.hero.eyebrow}
        title={pageData.hero.title}
        description={pageData.hero.description}
        tags={pageData.hero.tags}
        gradient={pageData.hero.gradient}
      />

      <section className="page-section page-section-white">
        <Motion.div
          className="page-frame max-w-full"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionHeading
            eyebrow={pageData.intro.eyebrow}
            title={pageData.intro.title}
            description={pageData.intro.description}
          />
        </Motion.div>

        <Motion.div
          className="page-frame mt-8 grid max-w-full gap-4 md:grid-cols-2 xl:grid-cols-3"
          variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {pageData.summaryCards.map((card) => (
            <Motion.div
              key={card.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
              variants={reduceMotion ? undefined : cardVariants}
              {...(reduceMotion ? {} : hoverLift)}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <card.icon className="h-5 w-5 text-blue-700" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </section>

      <section className="page-section page-section-mist">
        <Motion.div
          className="page-frame max-w-full"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="grid gap-5">
            {pageData.sections.map((section, index) => (
              <Motion.section
                id={section.id}
                key={section.id}
                className="scroll-mt-32 lg:rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
                variants={reduceMotion ? undefined : cardVariants}
              >
                <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    {section.eyebrow ? (
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{section.eyebrow}</p>
                    ) : null}
                    <h2 className="mt-3 text-2xl font-bold text-slate-900 lg:text-3xl">{section.title}</h2>
                    {section.description ? <p className="mt-4 text-base leading-7 text-slate-600">{section.description}</p> : null}
                  </div>

                  <div>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-slate-600 [&:not(:first-child)]:mt-4">
                        {paragraph}
                      </p>
                    ))}

                    {section.items?.length ? (
                      <div
                        className={`mt-6 grid gap-3 ${
                          section.columns === 2 ? 'md:grid-cols-2' : section.columns === 3 ? 'md:grid-cols-2 xl:grid-cols-3' : ''
                        }`}
                      >
                        {section.items.map((item) => renderSectionItem(item))}
                      </div>
                    ) : null}

                    {section.callout ? (
                      <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-sm leading-7 text-slate-100 shadow-lg">
                        {section.callout}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Motion.section>
            ))}
          </div>
        </Motion.div>
      </section>

      <section className="page-section page-section-white">
        <Motion.div
          className="page-frame max-w-full"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <Motion.div
            className="lg:rounded-[2rem] bg-gradient-to-r from-slate-900 to-blue-700 p-8 text-white shadow-xl lg:p-10"
            variants={reduceMotion ? undefined : cardVariants}
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">{pageData.cta.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-bold lg:text-4xl">{pageData.cta.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50">{pageData.cta.description}</p>
              </div>

              <div className="grid gap-3 lg:justify-end">
                {pageData.cta.primary
                  ? renderAction(
                      pageData.cta.primary,
                      'inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:scale-105'
                    )
                  : null}
                {pageData.cta.secondary
                  ? renderAction(
                      pageData.cta.secondary,
                      'inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10'
                    )
                  : null}
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </section>
    </div>
  )
}

export default ResourcePage
