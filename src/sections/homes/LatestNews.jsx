import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Megaphone } from 'lucide-react'
import { homePageData } from '../../data/homeData'

function LatestNews() {
  const { news } = homePageData

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Megaphone className="mr-2 h-4 w-4" />
            {news.eyebrow}
          </div>
          <h2 className="mb-5 text-4xl font-bold text-slate-900 lg:text-5xl">{news.title}</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 lg:text-xl">{news.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1.8fr]">
          <article className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl lg:p-8">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-sky-200">
              {news.lead.tag}
            </span>
            <h3 className="mt-4 text-2xl font-bold">{news.lead.title}</h3>
            <p className="mt-4 leading-7 text-slate-200">{news.lead.excerpt}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              SEEF uses this space to share evolving priorities, partnership momentum, and new technical focus areas.
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            {news.updates.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                  {item.tag}
                </span>
                <div className="mt-4 flex items-center text-sm text-slate-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  {item.date}
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to={news.cta.to}
            className="group inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-sky-600 hover:to-cyan-600"
          >
            {news.cta.label}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
