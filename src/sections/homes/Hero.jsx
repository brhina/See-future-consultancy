import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react'
import heroVideo from '../../assets/hero.mp4'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-5xl text-center">
          <div
            className={`mb-4 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Headquartered in Dembel City Center, Addis Ababa
          </div>

          <h1
            className={`mb-4 text-4xl font-bold leading-tight text-white transition-all duration-1000 sm:text-5xl lg:text-7xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            SEE Future Consult PLC
            <span className="block bg-gradient-to-r from-blue-300 via-emerald-300 to-purple-300 bg-clip-text text-transparent">
              Social, Environmental, Economic Sustainability
            </span>
          </h1>

          <p
            className={`mx-auto mb-6 max-w-4xl text-lg leading-relaxed text-gray-100 transition-all delay-200 duration-1000 sm:text-xl lg:text-2xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            SEEF advances sustainable development in Ethiopia through integrated consulting solutions in natural resource management, inclusive development, public health, and geospatial intelligence.
          </p>

          <div
            className={`flex flex-col items-center justify-center gap-2 transition-all delay-300 duration-1000 sm:flex-row ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Link
              to="/about"
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
            >
              Explore Our Mission
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              View Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-700"
            >
              Partner With SEEF
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mt-5 text-sm text-gray-200">
            Operational highlights shown across the site are indicative estimates.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center text-white transition-colors duration-300 hover:text-blue-300"
          aria-label="Scroll to next section"
        >
          <span className="mb-2 text-sm opacity-80">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:animate-none" />
        </button>
      </div>
    </section>
  )
}

export default Hero