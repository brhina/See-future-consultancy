import { CheckCircle2 } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import { aboutPageData } from '../../data/aboutData'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../../utils/motionPresets'

function OurTeam() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-white py-12 lg:py-16">
      <Motion.div
        className="mx-auto max-w-full px-4 sm:px-6 lg:px-8"
        variants={reduceMotion ? undefined : sectionVariants}
        initial={reduceMotion ? false : 'initial'}
        whileInView={reduceMotion ? undefined : 'animate'}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading
          eyebrow="Multidisciplinary Expertise"
          title={aboutPageData.teamIntro.title}
          description={aboutPageData.teamIntro.description}
          centered
        />

        <Motion.div
          className="grid gap-5 md:grid-cols-2"
          variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.25 }}
        >
          {aboutPageData.teamProfiles.map((profile) => (
            <Motion.article
              key={profile.title}
              className="rounded-3xl border border-slate-200 p-6 shadow-sm"
              variants={reduceMotion ? undefined : cardVariants}
              {...(reduceMotion ? {} : hoverLift)}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500">
                <profile.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{profile.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{profile.description}</p>
            </Motion.article>
          ))}
        </Motion.div>

        <Motion.div
          className="mt-10 rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl"
          variants={reduceMotion ? undefined : cardVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h3 className="text-2xl font-bold">How the team collaborates</h3>
          <Motion.div
            className="mt-6 grid gap-4 md:grid-cols-3"
            variants={reduceMotion ? undefined : staggerContainer(0.06, 0.04)}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.25 }}
          >
            {aboutPageData.collaborationPrinciples.map((item) => (
              <Motion.div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.99 } })}
              >
                <CheckCircle2 className="h-5 w-5 text-sky-300" />
                <p className="mt-4 text-sm leading-7 text-slate-200">{item}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </section>
  )
}

export default OurTeam
