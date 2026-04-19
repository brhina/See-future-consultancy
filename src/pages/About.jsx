import { Link } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { aboutPageData } from '../data/aboutData'
import OurClients from '../sections/abouts/OurClients'
import OurStory from '../sections/abouts/OurStory'
import OurTeam from '../sections/abouts/OurTeam'
import { cardVariants, sectionVariants } from '../utils/motionPresets'

function About() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Who We Are"
        title={aboutPageData.hero.title}
        description={aboutPageData.hero.description}
        tags={aboutPageData.hero.tags}
        gradient="from-blue-50 via-white to-slate-50"
      />

      <OurStory />
      <OurTeam />
      <OurClients />

      <section className="page-section page-section-white">
        <Motion.div
          className="page-frame max-w-full"
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
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">Work With SEEF</p>
                <h2 className="mt-3 text-3xl font-bold lg:text-4xl">{aboutPageData.aboutCta.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50">{aboutPageData.aboutCta.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:justify-end">
                <Link
                  to={aboutPageData.aboutCta.primary.to}
                  className="inline-flex h-full items-center justify-center rounded-full bg-white px-4 py-3 text-center text-sm font-semibold leading-tight text-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {aboutPageData.aboutCta.primary.label}
                </Link>
                <Link
                  to={aboutPageData.aboutCta.secondary.to}
                  className="inline-flex h-full items-center justify-center rounded-full border border-white/60 px-4 py-3 text-center text-sm font-semibold leading-tight text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  {aboutPageData.aboutCta.secondary.label}
                </Link>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </section>
    </div>
  )
}

export default About
