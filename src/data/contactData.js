import {
  ArrowRight,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Users
} from 'lucide-react'
import { officeContact } from './siteData'

export const contactPageData = {
  hero: {
    title: 'Contact SEEF',
    description:
      'We welcome collaboration with government institutions, NGOs, private sector organizations, and communities seeking sustainable and evidence-based solutions.'
  },
  contactCards: [
    {
      icon: MapPin,
      title: 'Office location',
      value: officeContact.address,
      helper: 'Visits and in-person meetings can be coordinated in Addis Ababa.',
      href: officeContact.googleMapsUrl,
      action: 'Open map'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: officeContact.phone,
      helper: 'For direct coordination during business hours.',
      href: `tel:${officeContact.phone}`,
      action: 'Call now'
    },
    {
      icon: Mail,
      title: 'Email',
      value: officeContact.email,
      helper: 'Best for project briefs, requests for information, and written follow-up.',
      href: `mailto:${officeContact.email}`,
      action: 'Send email'
    }
  ],
  inquiryTypes: [
    {
      icon: Briefcase,
      title: 'Consulting and technical advisory',
      description: 'Share your sector focus, immediate challenge, and expected outputs.'
    },
    {
      icon: Users,
      title: 'Research and partnership opportunities',
      description: 'Tell us about the collaboration model, stakeholders, and timeline.'
    },
    {
      icon: CalendarClock,
      title: 'Training and capacity-building support',
      description: 'Outline your target audience, topic priorities, and preferred delivery format.'
    }
  ],
  responseCommitments: [
    'Acknowledge project inquiries with a clear next-step response path.',
    'Clarify scope, urgency, and decision needs before proposing support.',
    'Recommend the most suitable engagement format for the request.'
  ],
  readinessChecklist: [
    'The problem or opportunity you want to address',
    'The geographic area or institution involved',
    'The support you expect from SEEF',
    'The approximate timeline or deadline',
    'Any existing documents or background context'
  ],
  cta: {
    title: 'Ready to open a conversation?',
    description:
      'If you already have a concept note, TOR, or short brief, sending it with your inquiry will help SEEF respond more efficiently.',
    action: { label: 'Email SEEF', href: `mailto:${officeContact.email}`, icon: ArrowRight }
  },
  trustSignals: [
    { icon: CheckCircle2, label: 'Evidence-based approach' },
    { icon: CheckCircle2, label: 'Cross-sector collaboration' },
    { icon: CheckCircle2, label: 'Implementation-minded support' }
  ]
}
