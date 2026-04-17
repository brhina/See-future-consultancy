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
      'SEEF welcomes collaboration with government institutions, NGOs, private sector organizations, and communities seeking sustainable, evidence-based, and practical solutions.',
    tags: ['Project inquiries', 'Training requests', 'Partnership discussions']
  },
  contactCards: [
    {
      icon: MapPin,
      title: 'Office location',
      value: officeContact.address,
      helper: 'Visits and in-person meetings can be coordinated at Dembel City Center in Addis Ababa.',
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
      helper: 'Best for project briefs, concept notes, TORs, and written follow-up.',
      href: `mailto:${officeContact.email}`,
      action: 'Send email'
    }
  ],
  inquiryTypes: [
    {
      icon: Briefcase,
      title: 'Consulting and technical advisory',
      description: 'Share the sector, the problem you are working on, and the outputs or decisions you need to support.'
    },
    {
      icon: Users,
      title: 'Research and partnership opportunities',
      description: 'Tell SEEF about the collaboration model, lead stakeholders, and the intended timeline.'
    },
    {
      icon: CalendarClock,
      title: 'Training and capacity-building support',
      description: 'Outline the target audience, topic priorities, and whether the training should be practical, technical, or blended.'
    }
  ],
  responseCommitments: [
    'Acknowledge project inquiries with a clear next-step response path.',
    'Clarify scope, urgency, geography, and decision needs before proposing support.',
    'Recommend the most suitable engagement format for the request.'
  ],
  readinessChecklist: [
    'The problem or opportunity you want to address',
    'The geographic area or institution involved',
    'The support you expect from SEEF',
    'The approximate timeline or deadline',
    'Any existing documents or background context'
  ],
  officeDetails: [
    `Office hours: ${officeContact.hours}`,
    'Meetings can be arranged in person or through remote coordination depending on the assignment.',
    'Early sharing of concept notes, TORs, or background documents helps SEEF respond faster.'
  ],
  cta: {
    title: 'Ready to open a conversation?',
    description:
      'If you already have a concept note, TOR, or short brief, sending it with your inquiry will help SEEF respond more efficiently and recommend the right next step.',
    action: { label: 'Email SEEF', href: `mailto:${officeContact.email}`, icon: ArrowRight }
  },
  trustSignals: [
    { icon: CheckCircle2, label: 'Evidence-based approach' },
    { icon: CheckCircle2, label: 'Cross-sector collaboration' },
    { icon: CheckCircle2, label: 'Implementation-minded support' }
  ]
}
