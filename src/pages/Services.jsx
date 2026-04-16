import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, HeartPulse, Leaf, Map, Users } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: Leaf,
      title: 'Agriculture and Environmental Management',
      points: [
        'Sustainable land use planning and ecosystem conservation',
        'Climate-smart agriculture and production system advisory',
        'Environmental impact assessment and mitigation planning'
      ]
    },
    {
      icon: Droplets,
      title: 'Water Resource Management',
      points: [
        'Watershed and catchment assessment',
        'Water allocation, conservation, and quality improvement',
        'Integrated planning for community and institutional water systems'
      ]
    },
    {
      icon: HeartPulse,
      title: 'Human and Animal Health Support',
      points: [
        'Health impact assessments and program evaluation',
        'Policy and strategy support for equitable health outcomes',
        'Surveillance, nutrition, and behavior change program inputs'
      ]
    },
    {
      icon: Users,
      title: 'Social Affairs and Inclusive Development',
      points: [
        'Stakeholder engagement and participatory facilitation',
        'Social impact assessment and livelihood analysis',
        'Gender-responsive and equity-centered development planning'
      ]
    },
    {
      icon: Map,
      title: 'Geoinformation and Spatial Services',
      points: [
        'GIS mapping and spatial data analysis',
        'Remote sensing for environmental and risk monitoring',
        'GPS-enabled data collection and planning support'
      ]
    }
  ]

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 lg:py-10">
        <div className="lg:mx-2 md:mx-4 mx-auto max-w-full">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">SEEF Consulting Services</h1>
          <p className="max-w-4xl text-lg leading-relaxed text-gray-600 lg:text-xl">
            SEEF delivers integrated consulting services to advance sustainable development in Ethiopia. Each engagement is designed around practical implementation, measurable outcomes, and long-term resilience.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-10">
        <div className="lg:mx-2 md:mx-4 mx-auto max-w-full">
          <div className="grid gap-3 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h2>
                <ul className="space-y-3 text-gray-600">
                  {service.points.map((point) => (
                    <li key={point} className="leading-relaxed">- {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 lg:py-10">
        <div className="lg:mx-2 md:mx-4 mx-auto max-w-full text-center">
          <h3 className="mb-3 text-2xl font-bold text-gray-900">Capacity Building and Knowledge Transfer</h3>
          <p className="mx-auto mb-6 max-w-4xl text-base leading-relaxed text-gray-600 lg:text-lg">
            In addition to consulting, SEEF provides practical training in ArcGIS and fruit production, and is expanding offerings in R programming, statistics, GIS, and Integrated Resource Management (IRM).
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
          >
            Discuss Your Service Needs
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
