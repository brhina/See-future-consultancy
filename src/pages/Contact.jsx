import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { contactPageData } from '../data/contactData'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../utils/motionPresets'

function Contact() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Partnership and Project Inquiries"
        title={contactPageData.hero.title}
        description={contactPageData.hero.description}
        gradient="from-sky-50 via-white to-cyan-50"
      />

      <section className="py-12 lg:py-16">
        <Motion.div
          className="mx-auto grid max-w-full items-stretch gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="flex h-full flex-col">
            <SectionHeading
              eyebrow="Contact Options"
              title="Reach SEEF through the channel that fits your need"
              description="Use the option that best matches your timeline, preferred communication style, and project stage."
            />

            <Motion.div
              className="grid flex-1 gap-4"
              variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
              initial={reduceMotion ? false : 'initial'}
              whileInView={reduceMotion ? undefined : 'animate'}
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactPageData.contactCards.map((card) => (
                <Motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  variants={reduceMotion ? undefined : cardVariants}
                  {...(reduceMotion ? {} : hoverLift)}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500">
                    <card.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-slate-900">{card.title}</h2>
                  <p className="mt-3 text-base font-medium text-slate-800">{card.value}</p>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{card.helper}</p>
                  <div className="mt-5 inline-flex items-center text-sm font-semibold text-sky-700">
                    {card.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Motion.a>
              ))}
            </Motion.div>
          </div>

          <div className="flex h-full flex-col gap-6">
            <Motion.div
              className="flex-1 rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl"
              variants={reduceMotion ? undefined : cardVariants}
              initial={reduceMotion ? false : 'initial'}
              whileInView={reduceMotion ? undefined : 'animate'}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold">What to include in your inquiry</h2>
              <div className="mt-6 space-y-4">
                {contactPageData.readinessChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-sky-300" />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              className="flex-1 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
              variants={reduceMotion ? undefined : cardVariants}
              initial={reduceMotion ? false : 'initial'}
              whileInView={reduceMotion ? undefined : 'animate'}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900">Why partners reach out</h2>
              <Motion.div
                className="mt-6 space-y-4"
                variants={reduceMotion ? undefined : staggerContainer(0.05, 0.04)}
                initial={reduceMotion ? false : 'initial'}
                whileInView={reduceMotion ? undefined : 'animate'}
                viewport={{ once: true, amount: 0.25 }}
              >
                {contactPageData.inquiryTypes.map((item) => (
                  <Motion.div
                    key={item.title}
                    className="rounded-2xl bg-white p-5 shadow-sm"
                    variants={reduceMotion ? undefined : cardVariants}
                    {...(reduceMotion ? {} : hoverLift)}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-sky-600" />
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </Motion.div>
                ))}
              </Motion.div>
            </Motion.div>
          </div>
        </Motion.div>
      </section>

      <section className="bg-slate-50 py-12 lg:py-16">
        <Motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Response Approach"
                title="What SEEF aims to do after you reach out"
                description="The goal is to make the next step clear as early as possible."
              />
              <div className="flex flex-wrap gap-3">
                {contactPageData.trustSignals.map((item) => (
                  <Motion.div
                    key={item.label}
                    className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                    {...(reduceMotion ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.99 } })}
                  >
                    <item.icon className="mr-2 h-4 w-4 text-emerald-600" />
                    {item.label}
                  </Motion.div>
                ))}
              </div>
            </div>

            <Motion.div
              className="grid gap-4"
              variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
              initial={reduceMotion ? false : 'initial'}
              whileInView={reduceMotion ? undefined : 'animate'}
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactPageData.responseCommitments.map((item) => (
                <Motion.div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  variants={reduceMotion ? undefined : cardVariants}
                  {...(reduceMotion ? {} : hoverLift)}
                >
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />
                  <p className="mt-4 leading-7 text-slate-600">{item}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </div>

          <Motion.div
            className="mt-8 rounded-[2rem] bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 p-8 text-white shadow-xl lg:p-10"
            variants={reduceMotion ? undefined : cardVariants}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100">Ready When You Are</p>
                <h2 className="mt-3 text-3xl font-bold lg:text-4xl">{contactPageData.cta.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-sky-50">{contactPageData.cta.description}</p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <a
                  href={contactPageData.cta.action.href}
                  className="group inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition-all duration-300 hover:scale-105"
                >
                  {contactPageData.cta.action.label}
                  <contactPageData.cta.action.icon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </section>
    </div>
  )
}

export default Contact
