import {
  BadgeCheck,
  Brain,
  Building2,
  Compass,
  Cross,
  Handshake,
  Landmark,
  Leaf,
  Map,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from 'lucide-react'

export const aboutPageData = {
  story: {
    title: 'Our Story',
    description:
      'SEE Future Consult PLC (SEEF) was established in early 2023 with a clear purpose: contribute to the well-being of present and future generations through responsible natural resource management, inclusive development, and evidence-based decision-making.'
  },
  missionVision: [
    {
      icon: Target,
      title: 'Mission',
      description:
        'To be a respected and reliable research and development entity that delivers innovative, practical solutions to pressing social, environmental, and economic challenges in Ethiopia.',
      tone: 'blue'
    },
    {
      icon: Compass,
      title: 'Vision',
      description:
        'To become a leading consultancy and trusted thought leader across Africa, supporting poverty reduction, food security, and resilient development systems.',
      tone: 'emerald'
    }
  ],
  philosophy: {
    icon: Leaf,
    title: 'The Meaning of SEE',
    description:
      'The name reflects SEEF’s core philosophy: balance sustainability across Social, Environmental, and Economic dimensions. This integrated lens shapes service design, implementation, and long-term impact evaluation.'
  },
  values: [
    'Professionalism and integrity',
    'Trust, confidentiality, and respect',
    'Agility and client responsiveness',
    'Innovation and continuous improvement',
    'Collaborative partnerships',
    'Holistic sustainability thinking'
  ],
  milestones: [
    {
      year: '2023',
      title: 'Foundation and positioning',
      description:
        'SEEF launched with a clear cross-sector mandate linking sustainability, evidence, and implementation support.'
    },
    {
      year: '2024',
      title: 'Technical service expansion',
      description:
        'The team broadened engagement pathways in geospatial work, assessments, and interdisciplinary project delivery.'
    },
    {
      year: '2025',
      title: 'Capacity-building growth',
      description:
        'Training support and knowledge-transfer offerings became a more visible part of SEEF’s engagement model.'
    },
    {
      year: '2026',
      title: 'Partnership depth',
      description:
        'SEEF continues strengthening collaboration with institutions seeking practical and accountable development support.'
    }
  ],
  differentiators: [
    {
      icon: BadgeCheck,
      title: 'Context-sensitive advisory',
      description:
        'Recommendations are shaped by local realities, stakeholder expectations, and implementation feasibility.'
    },
    {
      icon: Sparkles,
      title: 'Integrated sustainability lens',
      description:
        'SEEF does not treat social, environmental, and economic issues as separate workstreams when they are clearly connected.'
    },
    {
      icon: ShieldCheck,
      title: 'Practical delivery mindset',
      description:
        'Outputs are designed to help teams act, not just document findings.'
    }
  ],
  teamIntro: {
    title: 'Our Team',
    description:
      'SEEF brings together a multidisciplinary team with complementary technical expertise, enabling the firm to solve complex challenges from multiple perspectives.'
  },
  teamProfiles: [
    {
      icon: Leaf,
      title: 'Natural and Environmental Sciences',
      description:
        'Supports environmental planning, ecosystem stewardship, climate resilience, and sustainable resource management.'
    },
    {
      icon: Brain,
      title: 'Social Sciences and Development Practice',
      description:
        'Leads social assessment, inclusion design, stakeholder engagement, and participatory planning processes.'
    },
    {
      icon: Cross,
      title: 'Public and Community Health',
      description:
        'Contributes to health impact assessments, surveillance support, behavior change strategy, and equity-oriented program design.'
    },
    {
      icon: Map,
      title: 'Geospatial and Data Technologies',
      description:
        'Delivers GIS, remote sensing, and GPS-based analysis for monitoring, planning, and risk-informed decision support.'
    }
  ],
  collaborationPrinciples: [
    'Multidisciplinary teams are assembled around the problem, not around fixed service silos.',
    'Field evidence, stakeholder input, and technical analysis are combined before major recommendations are made.',
    'Knowledge transfer is built into delivery so partners can maintain momentum after project closeout.'
  ],
  clientsIntro: {
    title: 'Who We Work With',
    description:
      'SEEF collaborates with diverse partners to ensure every project delivers meaningful, measurable, and context-responsive impact.'
  },
  partners: [
    {
      icon: Landmark,
      title: 'Government Institutions',
      description:
        'SEEF supports policy implementation, planning, and technical assessments aligned with national and regional development priorities.'
    },
    {
      icon: Handshake,
      title: 'Non-Governmental Organizations',
      description:
        'We partner with NGOs to design and evaluate programs that improve sustainability, inclusion, and community outcomes.'
    },
    {
      icon: Building2,
      title: 'Private Sector Organizations',
      description:
        'SEEF helps businesses align responsible resource use, impact-conscious operations, and resilient growth strategies.'
    },
    {
      icon: Users,
      title: 'Local Communities and Networks',
      description:
        'Community engagement is central to our approach, ensuring interventions are grounded in lived realities and practical needs.'
    }
  ],
  aboutCta: {
    title: 'Looking for a partner that can bridge analysis and action?',
    description:
      'SEEF works best when the assignment needs both technical depth and practical implementation thinking.',
    primary: { label: 'Talk With Our Team', to: '/contact' },
    secondary: { label: 'Explore Services', to: '/services' }
  }
}
