import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Megaphone } from 'lucide-react'

function LatestNews() {
  const updates = [
    {
      title: 'SEEF strengthens integrated sustainability advisory services',
      date: 'April 2026',
      excerpt: 'SEEF continues to support institutions with integrated social, environmental, and economic planning approaches tailored to Ethiopia.'
    },
    {
      title: 'Capacity-building tracks expanded in geospatial and agriculture topics',
      date: 'March 2026',
      excerpt: 'Current training support includes ArcGIS and fruit production, with upcoming offerings in R, statistics, GIS, and IRM.'
    },
    {
      title: 'Cross-sector collaboration focus deepened',
      date: 'February 2026',
      excerpt: 'SEEF is scaling collaborative work with public institutions, NGOs, private sector actors, and communities.'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mb-5 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Megaphone className="mr-2 h-4 w-4" />
            Latest Updates
          </div>
          <h2 className="mb-5 text-4xl font-bold text-gray-900 lg:text-5xl">News and Organizational Highlights</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Stay informed about SEEF priorities, technical areas, and institutional developments.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {updates.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center text-sm text-gray-500">
                <Calendar className="mr-2 h-4 w-4" />
                {item.date}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="leading-relaxed text-gray-600">{item.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
          >
            Request Project Briefing
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
