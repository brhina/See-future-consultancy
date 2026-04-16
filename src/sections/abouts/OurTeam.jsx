import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import { aboutPageData } from '../../data/aboutData'

function OurTeam() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Multidisciplinary Expertise"
          title={aboutPageData.teamIntro.title}
          description={aboutPageData.teamIntro.description}
          centered
        />

        <div className="grid gap-5 md:grid-cols-2">
          {aboutPageData.teamProfiles.map((profile) => (
            <article key={profile.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500">
                <profile.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{profile.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{profile.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold">How the team collaborates</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {aboutPageData.collaborationPrinciples.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <CheckCircle2 className="h-5 w-5 text-sky-300" />
                <p className="mt-4 text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
