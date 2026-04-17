import {
  ArrowRight,
  CheckCircle,
  Compass,
  Droplets,
  Handshake,
  HeartPulse,
  Landmark,
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
    highlightedTitle: 'Social. Environmental. Economic. Sustainability.',
    description:
      'SEEF is a forward-thinking consulting firm helping shape a more sustainable and resilient Ethiopia through integrated social, environmental, and economic solutions.',
    ctas: [
      { label: 'Explore Our Story', to: '/about', icon: ArrowRight, variant: 'primary' },
      { label: 'View Services', to: '/services', icon: ArrowRight, variant: 'secondary' },
      { label: 'Partner With SEEF', to: '/contact', icon: ArrowRight, variant: 'accent' }
    ],
    highlights: ['Founded in early 2023', 'Multidisciplinary delivery team', 'Evidence-based and implementation-minded']
  },
  coreIdeas: [
    {
      icon: Leaf,
      title: 'Sustainability in every decision',
      description:
        'SEEF treats social inclusion, environmental stewardship, and economic viability as one connected system.',
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
    title: 'A multidisciplinary partner for sustainable development in Ethiopia',
    description:
      'SEEF brings together natural sciences, social sciences, environmental management, public health, and geospatial technologies to solve complex challenges from multiple perspectives.',
    details: [
      'The firm was founded to contribute to the well-being of present and future generations through responsible natural resource management, inclusive development, and evidence-based decision-making.',
      'Its work is especially shaped by the need for resilient livelihoods and food security, recognizing that long-term prosperity depends on healthy ecosystems, capable institutions, and informed planning.'
    ]
  },
  strengths: [
    {
      icon: Compass,
      title: 'Purpose-Led Foundation',
      description:
        'SEEF was created with a clear mission to connect research, consulting, and development practice around sustainability.'
    },
    {
      icon: Users,
      title: 'Multidisciplinary Expertise',
      description:
        'The team combines natural science, social science, public health, environmental management, and geospatial capabilities.'
    },
    {
      icon: Map,
      title: 'Evidence-Based Consulting',
      description:
        'GIS, remote sensing, and field-based analytics support stronger and more accountable decisions.'
    },
    {
      icon: Sprout,
      title: 'Food Security Commitment',
      description:
        'Assignments are approached with an understanding that resilient food systems are central to Ethiopia’s long-term development.'
    }
  ],
  stats: [
    { label: 'Year established', value: 2023, suffix: '' },
    { label: 'Sustainability dimensions', value: 3, suffix: '' },
    { label: 'Core service domains', value: 5, suffix: '' },
    { label: 'Partner groups engaged', value: 4, suffix: '' }
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
      title: 'Human and Animal Health',
      description:
        'Health impact assessments, policy support, surveillance inputs, and program evaluation for equitable outcomes.'
    },
    {
      icon: Users,
      title: 'Social Affairs and Inclusive Development',
      description:
        'Community development, stakeholder engagement, social impact assessment, and equity-centered planning.'
    },
    {
      icon: Map,
      title: 'Geoinformation Services',
      description:
        'GIS, GPS, and remote sensing for monitoring, spatial analysis, disaster risk management, and planning.'
    }
  ],
  partnerGroups: [
    {
      icon: Landmark,
      title: 'Government institutions',
      description:
        'Supporting planning, assessment, implementation, and policy-facing work aligned with development priorities.'
    },
    {
      icon: Handshake,
      title: 'NGOs and development partners',
      description:
        'Helping programs strengthen evidence, implementation quality, accountability, and community relevance.'
    },
    {
      icon: Radar,
      title: 'Private sector actors',
      description:
        'Providing sustainability-informed advisory that supports responsible growth, safeguards, and stronger operational decisions.'
    },
    {
      icon: Users,
      title: 'Communities and local networks',
      description:
        'Keeping interventions grounded in lived realities through participation, inclusion, and local ownership.'
    }
  ],
  focusAreas: [
    {
      icon: Sprout,
      title: 'Food security and resilient livelihoods',
      description:
        'SEEF helps connect agricultural productivity, natural resource stewardship, and practical livelihood improvement.',
      bullets: ['Climate-smart agriculture', 'Value chain thinking', 'Sustainable livelihood design']
    },
    {
      icon: ShieldCheck,
      title: 'Responsible planning and safeguards',
      description:
        'Assessments and advisory inputs help partners anticipate environmental, social, and operational risks early.',
      bullets: ['Impact assessment', 'Stakeholder engagement', 'Mitigation and resilience planning']
    },
    {
      icon: Radar,
      title: 'Data-driven monitoring and response',
      description:
        'Geospatial analysis, field evidence, and monitoring systems improve visibility, coordination, and decision quality.',
      bullets: ['GIS and remote sensing', 'Spatial monitoring systems', 'Decision-ready reporting']
    }
  ],
  deliveryApproach: [
    {
      title: 'Understand the context',
      description:
        'Start with local realities, stakeholder perspectives, and the institutional setting behind the assignment.'
    },
    {
      title: 'Generate evidence',
      description:
        'Use multidisciplinary methods, fieldwork, and geospatial tools to build a reliable picture of the challenge.'
    },
    {
      title: 'Design practical solutions',
      description:
        'Translate analysis into roadmaps, implementation options, and tailored recommendations that teams can act on.'
    },
    {
      title: 'Strengthen local capability',
      description:
        'Build institutional and community capacity so impact continues beyond the assignment period.'
    }
  ],
  knowledgeTransfer: {
    title: 'Capacity building is part of the model',
    description:
      'SEEF pairs technical assignments with knowledge transfer so partners build internal capability while projects move forward.',
    items: ['ArcGIS training', 'Fruit production training', 'Upcoming R, statistics, GIS, and IRM tracks']
  },
  projectSignals: [
    {
      icon: LineChart,
      title: 'When SEEF is often most useful',
      items: [
        'A program needs stronger evidence before scaling or redesign',
        'A new investment requires social or environmental due diligence',
        'A partner wants better data for planning, monitoring, or accountability'
      ]
    },
    {
      icon: CheckCircle,
      title: 'What engagements are designed to deliver',
      items: [
        'Clearer project scoping and better-informed implementation choices',
        'Technical outputs that support leadership decisions and field action',
        'Capacity transfer that helps momentum continue after project closeout'
      ]
    }
  ],
  cta: {
    title: 'Planning a program, study, training, or technical intervention?',
    description:
      'SEEF can help shape the right response, whether the need is advisory support, applied research, geospatial analysis, social engagement, or practical training.',
    primary: { label: 'Start a Conversation', to: '/contact' },
    secondary: { label: 'Review Services', to: '/services' }
  },
  news: {
    eyebrow: 'Latest Updates',
    title: 'Insights, activity, and organizational focus',
    description:
      'A snapshot of the themes, training priorities, and collaboration directions shaping SEEF’s current work.',
    lead: {
      title: 'SEEF continues expanding integrated advisory support across development sectors',
      excerpt:
        'Current priorities reflect the firm’s effort to connect field realities, sustainability standards, and decision-ready evidence for partners working in Ethiopia.',
      tag: 'Current Focus'
    },
    updates: [
      {
        title: 'SEEF strengthens integrated sustainability advisory services',
        date: 'April 2026',
        excerpt:
          'Recent work continues to emphasize balanced social, environmental, and economic planning tailored to Ethiopian contexts.',
        tag: 'Advisory'
      },
      {
        title: 'Capacity-building tracks continue expanding in geospatial and agriculture topics',
        date: 'March 2026',
        excerpt:
          'Training support includes ArcGIS and fruit production, with planned expansion into R programming, statistics, GIS, and IRM.',
        tag: 'Training'
      },
      {
        title: 'Cross-sector collaboration remains central to delivery',
        date: 'February 2026',
        excerpt:
          'SEEF continues working with public institutions, NGOs, private sector actors, and communities to keep projects grounded and relevant.',
        tag: 'Partnerships'
      }
    ],
    cta: { label: 'Request Project Briefing', to: '/contact' }
  }
}
