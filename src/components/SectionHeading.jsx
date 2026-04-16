import React from 'react'

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg">{description}</p>}
    </div>
  )
}

export default SectionHeading
