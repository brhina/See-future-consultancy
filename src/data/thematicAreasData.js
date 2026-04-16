import {
  HeartPulse,
  Landmark,
  Leaf,
  Map,
  ShieldCheck,
  Sprout,
  Waves
} from 'lucide-react'

export const thematicAreasPageData = {
  hero: {
    title: 'Thematic Areas',
    description:
      'SEEF addresses complex development challenges through interconnected thematic areas that reflect the social, environmental, and economic dimensions of sustainability.'
  },
  groups: [
    {
      icon: Waves,
      title: 'Infrastructure and Environmental Management',
      summary:
        'Planning and assessment support for resilient infrastructure, ecosystem stewardship, and environmental safeguards.',
      areas: ['Watershed protection', 'Climate resilience', 'Environmental impact assessment', 'Urban and regional planning'],
      tags: ['Safeguards', 'Resilience', 'Planning']
    },
    {
      icon: Sprout,
      title: 'Agriculture and Production Systems',
      summary:
        'Advisory support that improves production sustainability, value chains, and food security outcomes.',
      areas: ['Sustainable farming systems', 'Value chain development', 'Precision agriculture', 'Food security support'],
      tags: ['Livelihoods', 'Agriculture', 'Food systems']
    },
    {
      icon: Landmark,
      title: 'Social Development and Governance',
      summary:
        'Community-facing and institution-facing work that strengthens inclusion, livelihoods, and governance practice.',
      areas: ['Community livelihoods', 'Conflict resolution support', 'Income generation pathways', 'Equity and inclusion integration'],
      tags: ['Participation', 'Inclusion', 'Governance']
    },
    {
      icon: Map,
      title: 'Data, Geospatial, and Technology',
      summary:
        'Digital and spatial systems that improve visibility, coordination, and decision quality across programs.',
      areas: ['GIS monitoring systems', 'Remote sensing analysis', 'Spatial data infrastructure', 'Disaster risk management systems'],
      tags: ['GIS', 'Remote sensing', 'Monitoring']
    },
    {
      icon: HeartPulse,
      title: 'Health and Well-Being',
      summary:
        'Health-oriented support that links program performance, behavioral factors, and community well-being.',
      areas: ['Public health program evaluation', 'Surveillance system support', 'Behavioral change strategies', 'Nutrition program support'],
      tags: ['Health systems', 'Evaluation', 'Community outcomes']
    }
  ],
  intersections: [
    {
      icon: ShieldCheck,
      title: 'Risk-informed planning',
      description: 'Climate, safeguards, and operational risks are considered early so interventions remain practical.'
    },
    {
      icon: Leaf,
      title: 'Sustainability integration',
      description: 'Environmental, social, and economic factors are intentionally linked instead of treated as isolated themes.'
    },
    {
      icon: Map,
      title: 'Evidence visibility',
      description: 'Data systems and geospatial tools are used to make trends, coverage gaps, and opportunities easier to act on.'
    }
  ],
  outcomes: [
    'Sharper thematic prioritization for programs and investments',
    'More coherent coordination across sector teams',
    'Technical outputs that support action, learning, and accountability'
  ]
}
