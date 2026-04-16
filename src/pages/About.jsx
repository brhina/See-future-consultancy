import React from 'react'
import { Link } from 'react-router-dom'
import OurClients from '../sections/abouts/OurClients'
import OurTeam from '../sections/abouts/OurTeam'
import OurStory from '../sections/abouts/OurStory'
import { aboutPageData } from '../data/aboutData'

function About() {
  return (
    <div className="bg-white">
      <OurStory />
      <OurTeam />
      <OurClients />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 p-8 text-white shadow-xl lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100">Work With SEEF</p>
                <h2 className="mt-3 text-3xl font-bold lg:text-4xl">{aboutPageData.aboutCta.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-sky-50">{aboutPageData.aboutCta.description}</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to={aboutPageData.aboutCta.primary.to}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition-all duration-300 hover:scale-105"
                >
                  {aboutPageData.aboutCta.primary.label}
                </Link>
                <Link
                  to={aboutPageData.aboutCta.secondary.to}
                  className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  {aboutPageData.aboutCta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
