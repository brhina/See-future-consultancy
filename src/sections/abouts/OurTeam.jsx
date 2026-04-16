import React from 'react'
import { Brain, Cross, Leaf, Map } from 'lucide-react'

function OurTeam() {
  const teamProfiles = [
    {
      icon: Leaf,
      title: 'Natural and Environmental Sciences',
      description: 'Supports environmental planning, ecosystem stewardship, climate resilience, and sustainable resource management.'
    },
    {
      icon: Brain,
      title: 'Social Sciences and Development Practice',
      description: 'Leads social assessment, inclusion design, stakeholder engagement, and participatory planning processes.'
    },
    {
      icon: Cross,
      title: 'Public and Community Health',
      description: 'Contributes to health impact assessments, surveillance support, behavior change strategy, and equity-oriented program design.'
    },
    {
      icon: Map,
      title: 'Geospatial and Data Technologies',
      description: 'Delivers GIS, remote sensing, and GPS-based analysis for monitoring, planning, and risk-informed decision support.'
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-5 text-4xl font-bold text-gray-900">Our Team</h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
            SEEF brings together a multidisciplinary team with complementary technical expertise, enabling the firm to solve complex challenges from multiple perspectives.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {teamProfiles.map((profile) => (
            <article key={profile.title} className="rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                <profile.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{profile.title}</h3>
              <p className="leading-relaxed text-gray-600">{profile.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
