import React from 'react'

function PageHero({ eyebrow, title, description, tags = [], gradient = 'from-blue-50 via-white to-emerald-50' }) {
  return (
    <section className={`bg-gradient-to-br ${gradient} py-10 lg:py-14`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">{title}</h1>
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 lg:text-lg">{description}</p>
        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PageHero
