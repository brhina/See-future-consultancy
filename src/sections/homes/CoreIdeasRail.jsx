import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { homePageData } from '../../data/homeData'
import { cardVariants, hoverLift, staggerContainer } from '../../utils/motionPresets'

function CoreIdeasRail() {
  const reduceMotion = useReducedMotion()
  const duplicatedIdeas = [...homePageData.coreIdeas, ...homePageData.coreIdeas]
  const ideasToRender = reduceMotion ? homePageData.coreIdeas : duplicatedIdeas

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-slate-950 via-sky-950 to-emerald-950 py-2 text-white lg:py-3">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_35%)]" /> */}

      <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">Core Ideas</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-white lg:text-3xl">
              What defines the SEEF approach
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-200 lg:text-right">
            A fast-moving view of the principles that shape how SEEF designs advisory work, partnerships, and evidence-led delivery.
          </p>
        </div> */}

        <Motion.div
          className="core-ideas-rail relative overflow-hidden"
          variants={reduceMotion ? undefined : staggerContainer(0.05, 0.04)}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent lg:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-emerald-950 via-emerald-950/80 to-transparent lg:w-20" />

          <div className={`flex w-max gap-3 ${reduceMotion ? '' : 'animate-core-ideas-marquee'}`}>
            {ideasToRender.map((idea, index) => (
              <Motion.article
                key={`${idea.title}-${index}`}
                className="core-idea-card group relative flex-none overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 p-3 shadow-lg shadow-slate-950/20 backdrop-blur-sm"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-70" />
                <div className="relative flex h-full flex-col">
                  {/* <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 text-slate-950 shadow-lg shadow-sky-500/20 transition-transform duration-300 group-hover:scale-105">
                      <idea.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                      {idea.label}
                    </span>
                  </div> */}

                  <h3 className="text-base font-bold leading-snug text-white lg:text-lg">{idea.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-200 lg:text-sm lg:leading-6">{idea.description}</p>

                  {/* <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 transition-all duration-300 group-hover:w-28" /> */}
                </div>
              </Motion.article>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default CoreIdeasRail
