import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { servicesPageData } from '../data/servicesData'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../utils/motionPresets'

function Services() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Integrated Service Offerings"
        title={servicesPageData.hero.title}
        description={servicesPageData.hero.description}
        tags={servicesPageData.hero.tags}
        gradient="from-blue-50 via-white to-slate-50"
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
            eyebrow="Service Portfolio"
            title="Flexible support across sectors and project stages"
            description="Each service line is designed to move teams from analysis to action with outputs that are practical, accountable, and tailored to context."
            centered
          />

          <Motion.div
            className="grid gap-5 lg:grid-cols-2"
            variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicesPageData.services.map((service) => (
              <Motion.article
                key={service.title}
                className="lg:rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                {/* <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500">
                  <service.icon className="h-5 w-5 text-white" />
                </div> */}
                <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>

                <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What we support</h3>
                    <div className="mt-3 space-y-3">
                      {service.points.map((point) => (
                        <p key={point} className="text-sm leading-7 text-slate-600">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="lg:rounded-2xl bg-slate-50 p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Typical outputs</h3>
                    <div className="mt-3 space-y-3">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.article>
            ))}
          </Motion.div>
        </Motion.div>
      </section>

      <section className="page-section page-section-mist">
        <Motion.div
          className="page-frame max-w-full"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionHeading
            eyebrow="Sector Applications"
            title="Services built for the sectors where sustainability is lived"
            description="SEEF’s service lines are designed to adapt across sectors while keeping evidence, implementation, and resilience in view."
            centered
          />

          <Motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicesPageData.sectors.map((sector) => (
              <Motion.article
                key={sector.title}
                className="lg:rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                {/* <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
                  <sector.icon className="h-5 w-5 text-sky-700" />
                </div> */}
                <h3 className="text-xl font-bold text-slate-900">{sector.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{sector.description}</p>
              </Motion.article>
            ))}
          </Motion.div>
        </Motion.div>
      </section>

      <section className="page-section page-section-white">
        <Motion.div
          className="page-frame max-w-7xl"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionHeading
            eyebrow="How We Work"
            title="A delivery model built for clarity"
            description="Even when assignments differ, SEEF keeps the engagement path easy to follow so partners know what happens next."
            centered
          />

          <Motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicesPageData.process.map((step, index) => (
              <Motion.div
                key={step.title}
                className="lg:rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                {/* <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-base font-bold text-sky-700">
                    {index + 1}
                  </div>
                  <step.icon className="h-5 w-5 text-sky-600" />
                </div> */}
                <h3 className="mt-5 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </Motion.div>
            ))}
          </Motion.div>

          <Motion.div
            className="mt-8 lg:rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl"
            variants={reduceMotion ? undefined : cardVariants}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="text-2xl font-bold">What partners usually gain</h3>
            <Motion.div
              className="mt-6 grid gap-4 md:grid-cols-3"
              variants={reduceMotion ? undefined : staggerContainer(0.06, 0.04)}
              initial={reduceMotion ? false : 'initial'}
              whileInView={reduceMotion ? undefined : 'animate'}
              viewport={{ once: true, amount: 0.25 }}
            >
              {servicesPageData.serviceBenefits.map((item) => (
                <Motion.div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  variants={reduceMotion ? undefined : cardVariants}
                  {...(reduceMotion ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.99 } })}
              >
                  <CheckCircle2 className="h-5 w-5 text-blue-300" />
                  <p className="mt-4 text-sm leading-7 text-slate-200">{item}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </section>

      <section className="page-section page-section-mist">
        <Motion.div
          className="page-frame max-w-7xl"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Training and Capacity"
                title={servicesPageData.training.title}
                description={servicesPageData.training.description}
              />
            </div>

            <Motion.div
              className="grid gap-4"
              variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
              initial={reduceMotion ? false : 'initial'}
              whileInView={reduceMotion ? undefined : 'animate'}
              viewport={{ once: true, amount: 0.2 }}
            >
              {servicesPageData.training.tracks.map((track) => (
                <Motion.div
                  key={track.title}
                  className="lg:rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  variants={reduceMotion ? undefined : cardVariants}
                  {...(reduceMotion ? {} : hoverLift)}
                >
                  <div className="flex items-center gap-3">
                    <track.icon className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-slate-900">{track.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {track.items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </Motion.div>
      </section>

      <section className="page-section page-section-white">
        <Motion.div
          className="page-frame max-w-7xl"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.25 }}
        >
          <Motion.div
            className="lg:rounded-[2rem] bg-gradient-to-r from-slate-900 to-blue-700 p-8 text-white shadow-xl lg:p-10"
            variants={reduceMotion ? undefined : cardVariants}
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">Start an Engagement</p>
                <h2 className="mt-3 text-3xl font-bold lg:text-4xl">{servicesPageData.cta.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50">{servicesPageData.cta.description}</p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Link
                  to={servicesPageData.cta.action.to}
                  className="group inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {servicesPageData.cta.action.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </section>
    </div>
  )
}

export default Services
