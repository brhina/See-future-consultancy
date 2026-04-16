import React from 'react'
import { BadgeCheck, ShieldCheck } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import { aboutPageData } from '../../data/aboutData'

const toneClasses = {
  blue: 'from-sky-500 to-cyan-500',
  emerald: 'from-emerald-500 to-teal-500'
}

function OurStory() {
  const PhilosophyIcon = aboutPageData.philosophy.icon

  return (
    <section className="bg-gradient-to-br from-white via-sky-50/40 to-emerald-50/40 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={aboutPageData.story.title} description={aboutPageData.story.description} />

        <div className="grid gap-5 lg:grid-cols-2">
          {aboutPageData.missionVision.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${toneClasses[item.tone]}`}
              >
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500">
              <PhilosophyIcon className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{aboutPageData.philosophy.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{aboutPageData.philosophy.description}</p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Core Values</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {aboutPageData.values.map((value) => (
                <p key={value} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {value}
                </p>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-sky-300" />
              <h2 className="text-2xl font-bold">Growth Timeline</h2>
            </div>
            <div className="mt-6 space-y-4">
              {aboutPageData.milestones.map((item) => (
                <div key={item.year} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{item.year}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{item.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Why partners choose SEEF</h2>
            <div className="mt-6 space-y-4">
              {aboutPageData.differentiators.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-sky-600" />
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default OurStory
