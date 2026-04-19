import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, ChevronRight } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { homePageData } from '../data/homeData'
import CoreIdeasRail from '../sections/homes/CoreIdeasRail'
import Hero from '../sections/homes/Hero'
import LatestNews from '../sections/homes/LatestNews'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../utils/motionPresets'

const statsTargetValues = homePageData.stats.map((stat) => stat.value)

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isOverviewVisible, setIsOverviewVisible] = useState(false)
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false)
  const [animatedStats, setAnimatedStats] = useState(() => homePageData.stats.map(() => 0))
  const overviewRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    const visibilityTimer = setTimeout(() => setIsOverviewVisible(true), 120)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(visibilityTimer)
    }
  }, [])

  useEffect(() => {
    if (!overviewRef.current) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimateStats(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(overviewRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldAnimateStats) return undefined

    let frameId
    const duration = 1100
    let startTime = null

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setAnimatedStats(statsTargetValues.map((value) => Math.round(value * progress)))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [shouldAnimateStats])

  return (
    <div className="page-shell relative">
      <CoreIdeasRail />
      <Hero />

      <section
        id="about-section"
        ref={overviewRef}
        className="page-section page-section-soft overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_35%)]" />
        <Motion.div
          className="page-frame relative max-w-full"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div
            className={`grid items-start gap-8 lg:grid-cols-[1.2fr_0.9fr] transition-all duration-1000 ${
              isOverviewVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div>
              <SectionHeading
                eyebrow={homePageData.overview.eyebrow}
                title={homePageData.overview.title}
                description={homePageData.overview.description}
              />

              <div className="space-y-4 text-base leading-8 text-slate-600">
                {homePageData.overview.details.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <Motion.div
                className="mt-6 grid gap-4 md:grid-cols-2"
                variants={reduceMotion ? undefined : staggerContainer(0.07, 0.06)}
                initial={reduceMotion ? false : 'initial'}
                whileInView={reduceMotion ? undefined : 'animate'}
                viewport={{ once: true, amount: 0.25 }}
              >
                {homePageData.strengths.map((item) => (
                  <Motion.div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                    variants={reduceMotion ? undefined : cardVariants}
                    {...(reduceMotion ? {} : hoverLift)}
                  >
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </Motion.div>
                ))}
              </Motion.div>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <Link
                  to="/about"
                  className="group inline-flex h-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-semibold leading-tight text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                >
                  More About SEEF
                  {/* <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex h-full items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold leading-tight text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-400 hover:text-blue-700"
                >
                  Get in Touch
                  {/* <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <Motion.div
                className="rounded-3xl bg-white p-6 shadow-lg shadow-blue-100/60"
                variants={reduceMotion ? undefined : cardVariants}
                initial={reduceMotion ? false : 'initial'}
                whileInView={reduceMotion ? undefined : 'animate'}
                viewport={{ once: true, amount: 0.25 }}
              >
                <h3 className="text-xl font-bold text-slate-900">SEEF at a glance</h3>
                <Motion.div
                  className="mt-5 grid grid-cols-2 gap-4"
                  variants={reduceMotion ? undefined : staggerContainer(0.06, 0.04)}
                  initial={reduceMotion ? false : 'initial'}
                  whileInView={reduceMotion ? undefined : 'animate'}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  {homePageData.stats.map((stat, index) => (
                    <Motion.div
                      key={stat.label}
                      className="rounded-2xl bg-slate-50 p-4 text-center"
                      variants={reduceMotion ? undefined : cardVariants}
                      {...(reduceMotion ? {} : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.99 } })}
                    >
                      <div className="text-2xl font-bold text-slate-900">
                        {animatedStats[index]}
                        {stat.suffix}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                    </Motion.div>
                  ))}
                </Motion.div>
              </Motion.div>

              <Motion.div
                className="lg:rounded-3xl bg-slate-900 p-6 text-white shadow-lg"
                variants={reduceMotion ? undefined : cardVariants}
                initial={reduceMotion ? false : 'initial'}
                whileInView={reduceMotion ? undefined : 'animate'}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-xl font-bold">Why organizations engage SEEF</h3>
                <div className="mt-5 space-y-5">
                  {homePageData.projectSignals.map((group) => (
                    <Motion.div
                      key={group.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      {...(reduceMotion ? {} : { whileHover: { y: -2 }, transition: { duration: 0.18 } })}
                    >
                      <div className="flex items-center gap-3">
                        <group.icon className="h-5 w-5 text-blue-300" />
                        <h4 className="font-semibold">{group.title}</h4>
                      </div>
                      <div className="mt-3 space-y-2 text-sm text-slate-200">
                        {group.items.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </Motion.div>
                  ))}
                </div>
              </Motion.div>
            </div>
          </div>
        </Motion.div>
      </section>

      <section className="page-section page-section-white">
        <Motion.div
          className="page-frame max-w-full"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Core Service Domains"
            title="Technical support that connects strategy, evidence, and delivery"
            description="SEEF delivers tailored consulting support across the sectors where sustainability and implementation need to work together."
            centered
          />

          <Motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
            variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.2 }}
          >
            {homePageData.serviceDomains.map((service) => (
              <Motion.div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-lg"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                {/* <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500">
                  <service.icon className="h-5 w-5 text-white" />
                </div> */}
                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </Motion.div>
            ))}
          </Motion.div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <Link
              to="/services"
              className="group inline-flex h-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-semibold leading-tight text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              View All Services
              {/* <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
            </Link>
            <Link
              to="/thematic-areas"
              className="group inline-flex h-full items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold leading-tight text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:text-blue-700"
            >
              Explore Thematics
              {/* <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
            </Link>
          </div>
        </Motion.div>
      </section>

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
            title="SEEF works where collaboration has to cross institutions and sectors"
            description="Projects are shaped with the people and organizations closest to the challenge so the work stays relevant and actionable."
            centered
          />

          <Motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.25 }}
          >
            {homePageData.partnerGroups.map((group) => (
              <Motion.article
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                {/* <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500">
                  <group.icon className="h-5 w-5 text-white" />
                </div> */}
                <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{group.description}</p>
              </Motion.article>
            ))}
          </Motion.div>
        </Motion.div>
      </section>

      <section className="page-section bg-slate-950 text-white">
        <div className="page-frame max-w-full">
          <SectionHeading
            eyebrow="Featured Focus Areas"
            title="Where SEEF adds momentum fastest"
            description="These are the problem spaces where integrated advisory, local understanding, and practical planning tend to matter most."
            theme="dark"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {homePageData.focusAreas.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <item.icon className="h-5 w-5 text-sky-300" />
                </div> */}
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{item.description}</p>
                <div className="mt-5 space-y-2 text-sm text-slate-200">
                  {item.bullets.map((bullet) => (
                    <p key={bullet}>{bullet}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-white">
        <Motion.div
          className="page-frame max-w-full"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionHeading
                eyebrow="Delivery Approach"
                title="A simple engagement journey from diagnosis to capability"
                description="Projects are structured to stay collaborative, accountable, and useful to the teams making decisions."
              />

              <div className="grid gap-5 md:grid-cols-2">
                {homePageData.deliveryApproach.map((step, index) => (
                  <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    {/* <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-base font-bold text-sky-700">
                      {index + 1}
                    </div> */}
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Motion.div
              className="lg:rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl"
              variants={reduceMotion ? undefined : cardVariants}
              initial={reduceMotion ? false : 'initial'}
              whileInView={reduceMotion ? undefined : 'animate'}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Knowledge Transfer</p>
              <h3 className="mt-3 text-2xl font-bold">{homePageData.knowledgeTransfer.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">{homePageData.knowledgeTransfer.description}</p>
              <div className="mt-6 grid gap-3">
                {homePageData.knowledgeTransfer.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </Motion.div>
          </div>
        </Motion.div>
      </section>

      <section className="page-section page-section-white">
        <div className="page-frame max-w-full">
          <div className="relative overflow-hidden lg:rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl lg:p-10">
            
            {/* subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_40%)]" />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                  Work With SEEF
                </p>

                <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
                  {homePageData.cta.title}
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50/90">
                  {homePageData.cta.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:justify-end">
                
                <Link
                  to={homePageData.cta.primary.to}
                  className="inline-flex h-full items-center justify-center rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  {homePageData.cta.primary.label}
                </Link>

                <Link
                  to={homePageData.cta.secondary.to}
                  className="inline-flex h-full items-center justify-center rounded-full border border-white/50 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  {homePageData.cta.secondary.label}
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      <LatestNews />

      {/* {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-blue-600 p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )} */}
    </div>
  )
}

export default Home
