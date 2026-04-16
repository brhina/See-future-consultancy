import React from 'react'

function ThematicAreas() {
  const thematicGroups = [
    {
      title: 'Infrastructure and Environmental Management',
      areas: ['Watershed protection', 'Climate resilience', 'Environmental impact assessment', 'Urban and regional planning']
    },
    {
      title: 'Agriculture and Production Systems',
      areas: ['Sustainable farming systems', 'Value chain development', 'Precision agriculture', 'Food security support']
    },
    {
      title: 'Social Development and Governance',
      areas: ['Community livelihoods', 'Conflict resolution support', 'Income generation pathways', 'Equity and inclusion integration']
    },
    {
      title: 'Data, Geospatial, and Technology',
      areas: ['GIS monitoring systems', 'Remote sensing analysis', 'Spatial data infrastructure', 'Disaster risk management systems']
    },
    {
      title: 'Health and Well-Being',
      areas: ['Public health program evaluation', 'Surveillance system support', 'Behavioral change strategies', 'Nutrition program support']
    }
  ]

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 lg:py-10">
        <div className="lg:mx-2 md:mx-4 mx-auto max-w-full">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">Thematic Areas</h1>
          <p className="max-w-4xl text-lg leading-relaxed text-gray-600 lg:text-xl">
            SEEF addresses complex development challenges through interconnected thematic areas that reflect the social, environmental, and economic dimensions of sustainability.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-10">
        <div className="lg:mx-2 md:mx-4 mx-auto max-w-full">
          <div className="grid gap-3 md:grid-cols-2">
            {thematicGroups.map((group) => (
              <article key={group.title} className="rounded-xl border border-gray-200 p-4 shadow-sm">
                <h2 className="mb-3 text-xl font-bold text-gray-900">{group.title}</h2>
                <ul className="space-y-3 text-gray-600">
                  {group.areas.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThematicAreas
