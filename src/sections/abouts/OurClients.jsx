import { CheckCircle2 } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import { aboutPageData } from '../../data/aboutData'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../../utils/motionPresets'

function OurClients() {
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
              {/* <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500">
                <partner.icon className="h-5 w-5 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-slate-900">{partner.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{partner.description}</p>
            </Motion.article>
          ))}
        </Motion.div>

        <Motion.div
          className="mt-8 rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl lg:mt-10"
          variants={reduceMotion ? undefined : cardVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Partnership Approach</p>
              <h3 className="mt-3 text-2xl font-bold">{aboutPageData.partnershipApproach.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">{aboutPageData.partnershipApproach.description}</p>
            </div>

            <div className="grid gap-3">
              {aboutPageData.partnershipApproach.points.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-100">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  )
}

export default OurClients
