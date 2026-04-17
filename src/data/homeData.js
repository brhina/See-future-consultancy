import {
  ArrowRight,
  CheckCircle,
  Droplets,
  HeartPulse,
  Leaf,
  LineChart,
  Map,
  Radar,
  ShieldCheck,
  Sprout,
  Users
} from 'lucide-react'
import { officeContact } from './siteData'

export const homePageData = {
  hero: {
    badge: `Headquartered in ${officeContact.locationLabel}`,
    title: 'SEE Future Consult PLC',
    highlightedTitle: 'Social, Environmental, Economic Sustainability',
    description:
      'SEEF advances sustainable development in Ethiopia through integrated consulting solutions in natural resource management, inclusive development, public health, and geospatial intelligence.',
    ctas: [
      { label: 'Explore Our Mission', to: '/about', icon: ArrowRight, variant: 'primary' },
      { label: 'View Services', to: '/services', icon: ArrowRight, variant: 'secondary' },
      { label: 'Partner With SEEF', to: '/contact', icon: ArrowRight, variant: 'accent' }
    ],
    highlights: [
      'Locally grounded advisory',
      'Cross-sector delivery teams',
      'Evidence-first project design'
    ]
  },
  coreIdeas: [
    {
      icon: Leaf,
      title: 'Sustainability in every decision',
      description:
        'SEEF connects social inclusion, environmental stewardship, and economic viability instead of treating them as separate tracks.',
      label: 'Integrated lens'
    },
    {
      icon: Users,
      title: 'Locally grounded collaboration',
      description:
        'Our work is shaped by Ethiopian realities, with delivery models built around institutions, communities, and shared ownership.',
      label: 'Context first'
    },
    {
      icon: Map,
      title: 'Evidence powered by geospatial insight',
      description:
        'GIS, GPS, remote sensing, and field analytics help partners move from assumptions to practical, decision-ready evidence.',
      label: 'Data with place'
    },
    {
      icon: ShieldCheck,
      title: 'Risk-aware technical advisory',
      description:
        'Assessments, safeguards, and due diligence inputs are translated into actions teams can actually implement.',
      label: 'Practical rigor'
    },
    {
      icon: Sprout,
      title: 'Capacity that lasts beyond a project',
      description:
        'Training, co-design, and system strengthening are built in so momentum continues after the assignment ends.',
      label: 'Lasting capability'
    }
  ],
  overview: {
    eyebrow: 'Established in early 2023',
    title: 'A forward-thinking consultancy for Ethiopia and beyond',
    description:
      'SEE Future Consult PLC supports sustainable development by combining technical rigor, local context, and collaborative delivery for government, NGOs, private sector actors, and communities.',
    note:
      'Operational figures are presented as indicative estimates and may be updated as project records are consolidated.'
  },
  strengths: [
    {
      icon: Users,
      title: 'Multidisciplinary Team',
      description:
        'Experts in natural sciences, social sciences, environmental management, public health, and geospatial technologies.'
    },
    {
      icon: Leaf,
      title: 'Integrated Sustainability',
      description:
        'SEEF aligns social inclusion, environmental stewardship, and economic viability in every engagement.'
    },
    {
      icon: Map,
      title: 'Evidence-Based Consulting',
      description:
        'GIS, remote sensing, and field-based analytics support stronger and more accountable decisions.'
    }
  ],
  stats: [
    { label: 'Projects and advisory assignments', value: 40, suffix: '+' },
    { label: 'Multidisciplinary professionals engaged', value: 18, suffix: '+' },
    { label: 'Priority sectors covered', value: 6, suffix: '' },
    { label: 'Capacity-building sessions delivered or planned', value: 12, suffix: '+' }
  ],
  serviceDomains: [
    {
      icon: Leaf,
      title: 'Agriculture and Environmental Management',
      description:
        'Sustainable land use, ecosystem conservation, and climate-smart agriculture for resilient production systems.'
    },
    {
      icon: Droplets,
      title: 'Water Resource Management',
      description:
        'Water planning, watershed management, conservation strategies, and water quality improvement.'
    },
    {
      icon: HeartPulse,
      title: 'Health and Social Development',
      description:
        'Health impact assessments, program support, social impact analysis, and inclusive community development.'
    },
    {
      icon: Map,
      title: 'Geoinformation Services',
      description:
        'GIS, GPS, and remote sensing for monitoring, spatial analysis, disaster risk management, and planning.'
    }
  ],
  focusAreas: [
    {
      icon: Sprout,
      title: 'Resilient livelihoods',
      description:
        'We help programs connect production systems, environmental stewardship, and local market realities.',
      bullets: ['Climate-smart planning', 'Food systems support', 'Community-facing implementation']
    },
    {
      icon: ShieldCheck,
      title: 'Responsible investment decisions',
      description:
        'Assessments and advisory inputs help institutions manage risks before they become delays or costly redesigns.',
      bullets: ['Impact and safeguard thinking', 'Stakeholder alignment', 'Practical mitigation pathways']
    },
    {
      icon: Radar,
      title: 'Smarter monitoring systems',
      description:
        'Data systems, geospatial workflows, and field evidence come together to improve visibility and accountability.',
      bullets: ['GIS and remote sensing', 'Monitoring frameworks', 'Decision-ready reporting']
    }
  ],
  deliveryApproach: [
    {
      title: 'Listen and diagnose',
      description:
        'Ground each project in local context through stakeholder engagement, rapid diagnostics, and field-based assessments.'
    },
    {
      title: 'Analyze with rigor',
      description:
        'Apply multidisciplinary methods and geospatial tools to generate clear and reliable evidence.'
    },
    {
      title: 'Co-design practical action',
      description:
        'Translate findings into feasible roadmaps, implementation options, and decision support for partners.'
    },
    {
      title: 'Build lasting capacity',
      description:
        'Strengthen institutions and communities so impact continues beyond the assignment period.'
    }
  ],
  projectSignals: [
    {
      icon: LineChart,
      title: 'Typical engagement signals',
      items: [
        'A program needs stronger baseline evidence',
        'A new investment requires environmental or social due diligence',
        'A partner wants to strengthen delivery systems with better data'
      ]
    },
    {
      icon: CheckCircle,
      title: 'What partners usually gain',
      items: [
        'Sharper project scoping and implementation plans',
        'Decision-ready technical outputs for teams and leadership',
        'Capacity transfer that supports long-term ownership'
      ]
    }
  ],
  cta: {
    title: 'Planning a program, study, or technical intervention?',
    description:
      'SEEF can support early scoping, applied research, implementation design, and capacity-building with a practical sustainability lens.',
    primary: { label: 'Start a Conversation', to: '/contact' },
    secondary: { label: 'Review Services', to: '/services' }
  },
  news: {
    eyebrow: 'Latest Updates',
    title: 'News and Organizational Highlights',
    description:
      'Stay informed about SEEF priorities, technical areas, and institutional developments.',
    lead: {
      title: 'SEEF continues to deepen integrated advisory support across sectors',
      excerpt:
        'Recent priorities reflect the firm’s emphasis on connecting field realities, sustainability standards, and decision-ready technical advice.',
      tag: 'Current Focus'
    },
    updates: [
      {
        title: 'SEEF strengthens integrated sustainability advisory services',
        date: 'April 2026',
        excerpt:
          'SEEF continues to support institutions with integrated social, environmental, and economic planning approaches tailored to Ethiopia.',
        tag: 'Advisory'
      },
      {
        title: 'Capacity-building tracks expanded in geospatial and agriculture topics',
        date: 'March 2026',
        excerpt:
          'Current training support includes ArcGIS and fruit production, with upcoming offerings in R, statistics, GIS, and IRM.',
        tag: 'Training'
      },
      {
        title: 'Cross-sector collaboration focus deepened',
        date: 'February 2026',
        excerpt:
          'SEEF is scaling collaborative work with public institutions, NGOs, private sector actors, and communities.',
        tag: 'Partnerships'
      }
    ],
    cta: { label: 'Request Project Briefing', to: '/contact' }
  }
}
