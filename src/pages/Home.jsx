import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, CheckCircle, ChevronRight, Droplets, HeartPulse, Leaf, Map, Users } from 'lucide-react'
import Hero from '../sections/homes/Hero'
import LatestNews from '../sections/homes/LatestNews'

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    experts: 0,
    sectors: 0,
    trainings: 0
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    const timer = setTimeout(() => setIsVisible(true), 100)

    const animateStats = () => {
      const aboutSection = document.getElementById('about-section')
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimatedStats({
            projects: 40,
            experts: 18,
            sectors: 6,
            trainings: 12
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', animateStats)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', animateStats)
      clearTimeout(timer)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const strengths = [
    {
      icon: Users,
      title: 'Multidisciplinary Team',
      description: 'Experts in natural sciences, social sciences, environmental management, public health, and geospatial technologies.'
    },
    {
      icon: Leaf,
      title: 'Integrated Sustainability',
      description: 'SEEF aligns social inclusion, environmental stewardship, and economic viability in every engagement.'
    },
    {
      icon: Map,
      title: 'Evidence-Based Consulting',
      description: 'GIS, remote sensing, and field-based analytics support stronger and more accountable decisions.'
    }
  ]

  const serviceDomains = [
    {
      icon: Leaf,
      title: 'Agriculture and Environmental Management',
      description: 'Sustainable land use, ecosystem conservation, and climate-smart agriculture for resilient production systems.'
    },
    {
      icon: Droplets,
      title: 'Water Resource Management',
      description: 'Water planning, watershed management, conservation strategies, and water quality improvement.'
    },
    {
      icon: HeartPulse,
      title: 'Health and Social Development',
      description: 'Health impact assessments, program support, social impact analysis, and inclusive community development.'
    },
    {
      icon: Map,
      title: 'Geoinformation Services',
      description: 'GIS, GPS, and remote sensing for monitoring, spatial analysis, disaster risk management, and planning.'
    }
  ]

  const stats = [
    { label: 'Projects and advisory assignments (indicative)', value: animatedStats.projects },
    { label: 'Multidisciplinary professionals engaged (indicative)', value: animatedStats.experts },
    { label: 'Priority sectors covered', value: animatedStats.sectors },
    { label: 'Capacity-building sessions delivered/planned (indicative)', value: animatedStats.trainings }
  ]

  return (
    <div className="relative">
      <Hero />

      <section id="about-section" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-5 lg:py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative lg:mx-2 md:mx-4 mx-auto w-full max-w-full">
          <div className={`grid items-start gap-2 lg:grid-cols-2 lg:gap-3 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="space-y-2">
              <div className="space-y-2">
                <div className="mb-2 inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 text-xs font-medium text-blue-700">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Established in early 2023
                </div>
                <h2 className="text-2xl font-bold leading-tight text-gray-900 lg:text-3xl">
                  A forward-thinking consultancy for Ethiopia and beyond
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                  SEE Future Consult PLC supports sustainable development by combining technical rigor, local context, and collaborative delivery for government, NGOs, private sector actors, and communities.
                </p>
              </div>

              <div className="space-y-2">
                {strengths.map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md">
                    <div className="flex items-start space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-bold text-gray-900">{item.title}</h3>
                        <p className="text-xs leading-relaxed text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
            <div className="space-y-2">
              <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                <h3 className="mb-2 text-sm font-bold text-gray-900">SEEF at a Glance</h3>
                <div className="grid grid-cols-2 gap-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-gray-50 p-2 text-center">
                      <div className="text-xl font-bold text-gray-900 lg:text-2xl">{stat.value}+</div>
                      <p className="mt-1 text-xs font-medium leading-tight text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-amber-50 p-2 text-[11px] text-amber-800">
                Operational figures are presented as indicative estimates and may be updated as project records are consolidated.
              </div>

              <div className="flex flex-wrap gap-1">
                <Link
                  to="/about"
                  className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
                >
                  Learn More About SEEF
                  <ChevronRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
                >
                  Get in Touch
                  <ChevronRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-5 lg:py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative lg:mx-2 md:mx-4 mx-auto max-w-full">
          <div className="mb-4 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 lg:text-3xl">Core Service Domains</h2>
            <p className="mx-auto max-w-3xl text-sm text-gray-600 lg:text-base">
              SEEF delivers tailored technical and advisory services that strengthen resilience, improve outcomes, and support long-term development goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {serviceDomains.map((service) => (
              <div key={service.title} className="rounded-xl bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                  <service.icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="mb-1 text-base font-bold text-gray-900">{service.title}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <Link
              to="/services"
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
            >
              View All Services
              <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/thematic-areas"
              className="group inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:text-blue-600"
            >
              Explore Thematic Areas
              <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-5 lg:py-6">
        <div className="lg:mx-2 md:mx-4 mx-auto max-w-full">
          <div className="mb-4 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 lg:text-3xl">Our Delivery Approach</h2>
            <p className="mx-auto max-w-3xl text-sm text-gray-600 lg:text-base">
              Projects are built around collaboration, accountability, and practical implementation.
            </p>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            {[
              'Ground each project in local context through stakeholder engagement and field-based assessments.',
              'Apply multidisciplinary methods and geospatial tools to generate clear and reliable evidence.',
              'Strengthen institutional and community capacity to sustain impact beyond project completion.'
            ].map((step) => (
              <div key={step} className="rounded-xl border border-gray-200 p-3 shadow-sm">
                <CheckCircle className="mb-2 h-4 w-4 text-blue-600" />
                <p className="text-xs leading-relaxed text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LatestNews />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

export default Home