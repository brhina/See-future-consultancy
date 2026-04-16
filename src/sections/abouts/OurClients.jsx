import React from 'react'
import { Building2, Handshake, Landmark, Users } from 'lucide-react'

function OurClients() {
  const partners = [
    {
      icon: Landmark,
      title: 'Government Institutions',
      description: 'SEEF supports policy implementation, planning, and technical assessments aligned with national and regional development priorities.'
    },
    {
      icon: Handshake,
      title: 'Non-Governmental Organizations',
      description: 'We partner with NGOs to design and evaluate programs that improve sustainability, inclusion, and community outcomes.'
    },
    {
      icon: Building2,
      title: 'Private Sector Organizations',
      description: 'SEEF helps businesses integrate responsible resource use, impact-conscious operations, and resilient growth strategies.'
    },
    {
      icon: Users,
      title: 'Local Communities and Networks',
      description: 'Community engagement is central to our approach, ensuring interventions are grounded in lived realities and practical needs.'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-5 text-4xl font-bold text-gray-900">Who We Work With</h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
            SEEF collaborates with diverse partners to ensure every project delivers meaningful, measurable, and context-responsive impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {partners.map((partner) => (
            <article key={partner.title} className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                <partner.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{partner.title}</h3>
              <p className="leading-relaxed text-gray-600">{partner.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurClients
