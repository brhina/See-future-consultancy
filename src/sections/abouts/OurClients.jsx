import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import { aboutPageData } from '../../data/aboutData'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../../utils/motionPresets'

function OurClients() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 py-12 lg:py-16">
      <Motion.div
        className="mx-auto max-w-full px-4 sm:px-6 lg:px-8"
        variants={reduceMotion ? undefined : sectionVariants}
        initial={reduceMotion ? false : 'initial'}
        whileInView={reduceMotion ? undefined : 'animate'}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading
          eyebrow="Partnership Landscape"
          title={aboutPageData.clientsIntro.title}
          description={aboutPageData.clientsIntro.description}
          centered
        />

        <Motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.25 }}
        >
          {aboutPageData.partners.map((partner) => (
            <Motion.article
              key={partner.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              variants={reduceMotion ? undefined : cardVariants}
              {...(reduceMotion ? {} : hoverLift)}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500">
                <partner.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{partner.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{partner.description}</p>
            </Motion.article>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  )
}

export default OurClients
