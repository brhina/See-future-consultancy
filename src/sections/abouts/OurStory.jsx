import React from 'react'
import { Compass, Leaf, ShieldCheck, Target } from 'lucide-react'

function OurStory() {
  const values = [
    'Professionalism and integrity',
    'Trust, confidentiality, and respect',
    'Agility and client responsiveness',
    'Innovation and continuous improvement',
    'Collaborative partnerships',
    'Holistic sustainability thinking'
  ]

  return (
    <section className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">Our Story</h1>
          <p className="max-w-5xl text-lg leading-relaxed text-gray-600 lg:text-xl">
            SEE Future Consult PLC (SEEF) was established in early 2023 with a clear purpose: contribute to the well-being of present and future generations through responsible natural resource management, inclusive development, and evidence-based decision-making.
          </p>
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Mission</h2>
            <p className="leading-relaxed text-gray-600">
              To be a respected and reliable research and development entity that delivers innovative, practical solutions to pressing social, environmental, and economic challenges in Ethiopia.
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-blue-600">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Vision</h2>
            <p className="leading-relaxed text-gray-600">
              To become a leading consultancy and trusted thought leader across Africa, supporting poverty reduction, food security, and resilient development systems.
            </p>
          </article>
        </div>

        <div className="mb-10 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-600">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">The Meaning of SEE</h2>
          <p className="leading-relaxed text-gray-600">
            The name reflects SEEF's core philosophy: balance sustainability across Social, Environmental, and Economic dimensions. This integrated lens shapes service design, implementation, and long-term impact evaluation.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-600">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">Core Values</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {values.map((value) => (
              <p key={value} className="text-gray-700">- {value}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
