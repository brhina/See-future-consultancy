import { useEffect, useState } from 'react'
import { ArrowRight, MapPin, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import seefLogo from '../assets/seef-logo.svg'
import { navigationItems, officeContact } from '../data/siteData'
import MapLocation from '../utils/MapLocation'

function Header() {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 transition-all duration-300 ${
          isScrolled ? 'bg-white/96 shadow-lg shadow-slate-200/60 backdrop-blur-xl' : 'bg-white/92 backdrop-blur-md'
        }`}
      >
        <div className="hidden border-b border-slate-200/70 lg:block">
          <div className="mx-auto flex max-w-full items-center justify-between px-4 py-2 text-sm text-slate-600 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setIsMapOpen(true)}
              className="inline-flex items-center gap-2 transition-colors hover:text-sky-700"
            >
              <MapPin className="h-4 w-4 text-sky-600" />
              <span>{officeContact.locationLabel}</span>
            </button>

            <div className="flex items-center gap-6">
              <a href={`tel:${officeContact.phone}`} className="inline-flex items-center gap-2 transition-colors hover:text-sky-700">
                <Phone className="h-4 w-4 text-sky-600" />
                <span>{officeContact.phone}</span>
              </a>
              <a href={`mailto:${officeContact.email}`} className="transition-colors hover:text-sky-700">
                {officeContact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <img src={seefLogo} alt="SEEF Consulting Logo" className="h-11 w-auto" />
              <div className="hidden min-w-0 sm:block">
                <div className="truncate text-sm font-semibold uppercase tracking-[0.26em] text-sky-700">SEE Future Consult</div>
                <div className="truncate text-sm text-slate-600">Integrated sustainability consulting</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      isActive ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              {/* <div className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 xl:block">
                {officeContact.hours}
              </div> */}
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/70 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-2xl border border-slate-200 p-2.5 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
            isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="mx-auto max-w-full px-4 py-4 sm:px-6">
            <div className="grid gap-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                      isActive ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 grid gap-3 rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
              <button
                type="button"
                onClick={() => setIsMapOpen(true)}
                className="inline-flex items-center gap-2 text-left font-medium text-slate-700"
              >
                <MapPin className="h-4 w-4 text-sky-600" />
                {officeContact.locationLabel}
              </button>
              <a href={`tel:${officeContact.phone}`} className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-600" />
                {officeContact.phone}
              </a>
              <a href={`mailto:${officeContact.email}`} className="text-slate-700">
                {officeContact.email}
              </a>
              <Link
                to="/contact"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 px-5 py-3 font-semibold text-white"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>

        <MapLocation isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      </header>

      <div className="h-[88px] lg:h-[129px]" />
    </>
  )
}

export default Header
