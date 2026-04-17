import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, MapPin } from 'lucide-react'
import heroVideo from '../../assets/hero.mp4'
import { homePageData } from '../../data/homeData'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { hero } = homePageData

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
    <section className="relative min-h-[calc(72vh-4rem)] w-full overflow-hidden lg:min-h-[calc(78vh-4rem)]">
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.28),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_30%)]" />

      <div className="relative z-10 flex min-h-[calc(72vh-4rem)] items-start justify-center pt-10 pb-12 lg:min-h-[calc(78vh-4rem)] lg:pt-14 lg:pb-16">
        <div className="mx-auto max-w-6xl px-4 pt-2 text-center sm:px-4 lg:px-6">
          <div
            className={`mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur transition-all duration-1000 sm:text-sm ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <MapPin className="mr-2 h-4 w-4" />
            {hero.badge}
          </div>

          <h2
            className={`mb-4 text-3xl font-bold leading-tight text-white transition-all duration-1000 sm:text-4xl lg:text-5xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {hero.title}
            <span className="block bg-gradient-to-r from-sky-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
              {hero.highlightedTitle}
            </span>
          </h2>

          <p
            className={`mx-auto mb-6 max-w-3xl text-base leading-7 text-slate-100 transition-all delay-200 duration-1000 sm:text-lg sm:leading-8 lg:text-xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {hero.description}
          </p>

          <div
            className={`mb-6 flex flex-col items-center justify-center gap-2.5 transition-all delay-300 duration-1000 sm:flex-row sm:flex-wrap ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {hero.ctas.map((cta) => {
              const baseClass =
                cta.variant === 'primary'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg hover:from-sky-600 hover:to-cyan-600'
                  : cta.variant === 'accent'
                    ? 'bg-emerald-500 text-white shadow-lg hover:bg-emerald-600'
                    : 'border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20'

              return (
                <Link
                  key={cta.label}
                  to={cta.to}
                  className={`group inline-flex items-center rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 lg:px-7 ${baseClass}`}
                >
                  {cta.label}
                  <cta.icon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )
            })}
          </div>

          <div
            className={`mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 transition-all delay-500 duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {hero.highlights.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100 backdrop-blur sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 sm:block lg:bottom-6">
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center text-white transition-colors duration-300 hover:text-sky-300"
          aria-label="Scroll to next section"
        >
          <span className="mb-2 text-sm opacity-80">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:animate-none" />
        </button>
      </div> */}
    </section>
  )
}

export default Hero
