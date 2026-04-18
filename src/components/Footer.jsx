import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import seefLogo from '../assets/seef-logo.svg'
import { footerPrinciples, footerQuickLinks, footerServiceLinks, officeContact, siteMeta } from '../data/siteData'
import MapLocation from '../utils/MapLocation'

function Footer() {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_24%)]" />
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="page-frame relative max-w-full py-3 lg:px-3 lg:py-4">
        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={seefLogo} alt="SEEF logo" className="h-12 w-auto" />
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">SEE Future Consult</div>
                <div className="text-sm text-slate-300">{siteMeta.tagline}</div>
              </div>
            </Link>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300">{siteMeta.summary}</p>

            <div className="mt-6 grid gap-3">
              {footerPrinciples.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  <item.icon className="mr-2 h-4 w-4 text-blue-300" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 xl:contents">
            {/* Explore */}
            <div>
              <h3 className="text-lg font-semibold text-white">Explore</h3>
              <div className="mt-5 grid gap-3">
                {footerQuickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="inline-flex items-center text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <link.icon className="mr-3 h-4 w-4 text-blue-300" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Themes */}
            <div>
              <h3 className="text-lg font-semibold text-white">Service Themes</h3>
              <div className="mt-5 grid gap-3">
                {footerServiceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="inline-flex items-center text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <service.icon className="mr-3 h-4 w-4 text-blue-300" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              <button
                type="button"
                onClick={() => setIsMapOpen(true)}
                className="inline-flex items-start gap-3 text-left transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-300" />
                <span>{officeContact.address}</span>
              </button>
              <a href={`tel:${officeContact.phone}`} className="inline-flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="h-4 w-4 flex-shrink-0 text-blue-300" />
                <span>{officeContact.phone}</span>
              </a>
              <a href={`mailto:${officeContact.email}`} className="inline-flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="h-4 w-4 flex-shrink-0 text-blue-300" />
                <span>{officeContact.email}</span>
              </a>
              <div className="rounded-xl px-2">
                {/* <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">Office Hours</p> */}
                <p className="text-sm text-slate-200">{officeContact.hours}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center font-semibold text-white">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 border-t border-white/10 pt-2 text-sm text-slate-400">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p>© {currentYear} SEE Future Consult PLC. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
              <Link to="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/help" className="transition-colors hover:text-white">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MapLocation isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </footer>
  )
}

export default Footer
