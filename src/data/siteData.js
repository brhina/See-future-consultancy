import {
  Briefcase,
  Building2,
  CalendarClock,
  FileText,
  Handshake,
  Heart,
  Leaf,
  Mail,
  Map,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  Target,
  Users
} from 'lucide-react'

export const officeContact = {
  name: 'SEE Future Consult PLC',
  shortName: 'SEEF',
  address: 'Addis Ababa Dembel City Center Street, 12th Floor office no 1237',
  locationLabel: 'Dembel City Center, Addis Ababa, Ethiopia',
  phone: '+251-115621777',
  email: 'info@seefcounsult.com',
  hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
  googleMapsUrl: 'https://maps.google.com/?q=Addis+Ababa+Dembel+City+Center',
  coordinates: [9.032, 38.7636]
}

export const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Thematic Areas', path: '/thematic-areas' },
  { label: 'Contact', path: '/contact' }
]

export const siteMeta = {
  tagline: 'Integrated sustainability consulting for Ethiopia',
  summary:
    'SEEF advances sustainable development through social, environmental, and economic solutions grounded in evidence, collaboration, and practical implementation.'
}

export const footerQuickLinks = [
  { name: 'About SEEF', href: '/about', icon: Users },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Thematic Areas', href: '/thematic-areas', icon: Target },
  { name: 'Latest Updates', href: '/latest-news', icon: CalendarClock },
  { name: 'Contact', href: '/contact', icon: Mail }
]

export const footerServiceLinks = [
  { name: 'Research and Development', href: '/services', icon: FileText },
  { name: 'Technical Advisory', href: '/services', icon: Handshake },
  { name: 'Training and Capacity Building', href: '/services', icon: CalendarClock },
  { name: 'Agriculture and Environment', href: '/services', icon: Leaf },
  { name: 'Health and Social Affairs', href: '/services', icon: Heart },
  { name: 'Geoinformation Services', href: '/services', icon: Map }
]

export const contactHighlights = [
  { label: officeContact.locationLabel, icon: MapPin },
  { label: officeContact.phone, icon: Phone },
  { label: officeContact.email, icon: Mail }
]

export const footerPrinciples = [
  // { label: 'Evidence-based delivery', icon: ShieldCheck },
  // { label: 'Cross-sector partnership', icon: Network },
  { label: 'Institutional and community engagement', icon: Building2 }
]
