import {
  ArrowRight,
  BookOpenCheck,
  Droplets,
  FileCheck2,
  HeartPulse,
  Leaf,
  Map,
  NotebookPen,
  Route,
  Users
} from 'lucide-react'

export const servicesPageData = {
  hero: {
    title: 'SEEF Consulting Services',
    description:
      'SEEF delivers integrated consulting services to advance sustainable development in Ethiopia. Each engagement is designed around practical implementation, measurable outcomes, and long-term resilience.',
    tags: ['Advisory and research', 'Field-informed analysis', 'Capacity-building support']
  },
  services: [
    {
      icon: Leaf,
      title: 'Agriculture and Environmental Management',
      summary:
        'Support for resilient production systems, environmental stewardship, and sustainable land use decisions.',
      points: [
        'Sustainable land use planning and ecosystem conservation',
        'Climate-smart agriculture and production system advisory',
        'Environmental impact assessment and mitigation planning'
      ],
      deliverables: ['Assessment reports', 'Implementation guidance', 'Risk and mitigation inputs']
    },
    {
      icon: Droplets,
      title: 'Water Resource Management',
      summary:
        'Planning and advisory for watershed systems, water allocation, and quality-conscious resource management.',
      points: [
        'Watershed and catchment assessment',
        'Water allocation, conservation, and quality improvement',
        'Integrated planning for community and institutional water systems'
      ],
      deliverables: ['Watershed diagnostics', 'Resource planning notes', 'Decision-support maps']
    },
    {
      icon: HeartPulse,
      title: 'Human and Animal Health Support',
      summary:
        'Evidence-based support for equitable health outcomes, program design, and health-related field analysis.',
      points: [
        'Health impact assessments and program evaluation',
        'Policy and strategy support for equitable health outcomes',
        'Surveillance, nutrition, and behavior change program inputs'
      ],
      deliverables: ['Program reviews', 'Strategy support inputs', 'Monitoring recommendations']
    },
    {
      icon: Users,
      title: 'Social Affairs and Inclusive Development',
      summary:
        'Participatory processes and social analysis that strengthen inclusion, livelihoods, and implementation ownership.',
      points: [
        'Stakeholder engagement and participatory facilitation',
        'Social impact assessment and livelihood analysis',
        'Gender-responsive and equity-centered development planning'
      ],
      deliverables: ['Stakeholder insights', 'Facilitation outputs', 'Inclusive planning guidance']
    },
    {
      icon: Map,
      title: 'Geoinformation and Spatial Services',
      summary:
        'Spatial intelligence services that improve monitoring, planning, and risk-aware decision-making.',
      points: [
        'GIS mapping and spatial data analysis',
        'Remote sensing for environmental and risk monitoring',
        'GPS-enabled data collection and planning support'
      ],
      deliverables: ['Maps and dashboards', 'Spatial analysis outputs', 'Field data workflows']
    }
  ],
  process: [
    {
      icon: NotebookPen,
      title: 'Scope the assignment',
      description: 'Clarify the problem, expected outputs, timeline, and decision context before technical work begins.'
    },
    {
      icon: Route,
      title: 'Run the assessment',
      description: 'Combine desk review, stakeholder engagement, fieldwork, and spatial or statistical analysis as needed.'
    },
    {
      icon: FileCheck2,
      title: 'Translate findings',
      description: 'Deliver recommendations, implementation options, and materials tailored to the partner’s next step.'
    }
  ],
  serviceBenefits: [
    'Decision-ready reports and technical briefs',
    'Implementation-facing recommendations',
    'Clearer alignment between sustainability goals and delivery realities'
  ],
  training: {
    title: 'Capacity Building and Knowledge Transfer',
    description:
      'In addition to consulting, SEEF provides practical training in ArcGIS and fruit production, and is expanding offerings in R programming, statistics, GIS, and Integrated Resource Management (IRM).',
    tracks: [
      { icon: BookOpenCheck, title: 'Current tracks', items: ['ArcGIS', 'Fruit production practice'] },
      { icon: ArrowRight, title: 'Expanding focus', items: ['R programming', 'Statistics', 'GIS', 'Integrated Resource Management'] }
    ]
  },
  cta: {
    title: 'Need a consulting partner for assessment, advisory, or training support?',
    description:
      'SEEF can tailor a service package around your sector, evidence needs, and implementation timeline.',
    action: { label: 'Discuss Your Service Needs', to: '/contact' }
  }
}
