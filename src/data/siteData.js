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
  Phone,
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
  {
    label: 'Home',
    path: '/',
    children: [
      { label: 'Overview', path: '/' },
      { label: 'Latest News', path: '/latest-news' }
    ]
  },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'Our Story', path: '/about' },
      { label: 'Our Team', path: '/about' },
      { label: 'Who We Work With', path: '/about' }
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Technical Advisory', path: '/services' },
      { label: 'Research and Assessment', path: '/services' },
      { label: 'Training and Capacity Building', path: '/services' }
    ]
  },
  {
    label: 'Thematic Areas',
    path: '/thematic-areas',
    children: [
      { label: 'Environment and Climate', path: '/thematic-areas' },
      { label: 'Livelihoods and Agriculture', path: '/thematic-areas' },
      { label: 'Data and Geospatial Systems', path: '/thematic-areas' }
    ]
  },
  {
    label: 'Contact Us',
    path: '/contact'
  }
]

export const footerQuickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Thematic Areas', href: '/thematic-areas', icon: Target },
  { name: 'Contact', href: '/contact', icon: Mail }
]

export const footerServiceLinks = [
  { name: 'Research and Development', href: '/services', icon: FileText },
  { name: 'Consulting Advisory', href: '/services', icon: Handshake },
  { name: 'Training Programs', href: '/services', icon: CalendarClock },
  { name: 'Agriculture and Environment', href: '/services', icon: Leaf },
  { name: 'Health and Social Affairs', href: '/services', icon: Heart },
  { name: 'Geoinformation Services', href: '/services', icon: Map },
  { name: 'Institutional Support', href: '/services', icon: Building2 }
]

export const contactHighlights = [
  { label: officeContact.locationLabel, icon: MapPin },
  { label: officeContact.phone, icon: Phone },
  { label: officeContact.email, icon: Mail }
]

export const socialLinks = [
  { name: 'Facebook', href: '#', color: 'hover:text-blue-500' },
  { name: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
  { name: 'Instagram', href: '#', color: 'hover:text-pink-500' },
  { name: 'Twitter', href: '#', color: 'hover:text-sky-400' }
]
