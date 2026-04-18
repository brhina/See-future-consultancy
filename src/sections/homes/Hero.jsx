import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import heroVideo from '../../assets/hero.mp4'
import { homePageData } from '../../data/homeData'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { hero } = homePageData

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[calc(78vh-4rem)] w-full overflow-hidden">
      <video src={heroVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.28),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.24),transparent_32%)]" />

      <div className="relative z-10 flex min-h-[calc(78vh-4rem)] items-center py-10 lg:py-12">
        <div className="page-frame max-w-full">
          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="max-w-4xl">
              <div
                className={`mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur transition-all duration-1000 sm:text-sm ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <MapPin className="mr-2 h-4 w-4" />
                {hero.badge}
              </div>

              <h1
                className={`text-4xl font-bold leading-tight text-white transition-all duration-1000 sm:text-5xl xl:text-6xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                {hero.title}
                <span className="mt-2 block bg-gradient-to-r from-sky-300 via-emerald-300 to-cyan-100 bg-clip-text text-transparent">
                  {hero.highlightedTitle}
                </span>
              </h1>

              <p
                className={`mt-6 max-w-3xl text-base leading-8 text-slate-100 transition-all delay-200 duration-1000 sm:text-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                {hero.description}
              </p>

              <div
                className={`mt-8 flex flex-col gap-3 transition-all delay-300 duration-1000 sm:flex-row sm:flex-wrap ${
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
                      className={`group inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-[1.02] ${baseClass}`}
                    >
                      {cta.label}
                      <cta.icon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )
                })}
              </div>
            </div>

            <div
              className={`rounded-[2rem] border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md transition-all delay-500 duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-200">What defines SEEF</p>
              <div className="mt-4 grid gap-3">
                {hero.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
