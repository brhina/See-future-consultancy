import { aboutPageData } from '../data/aboutData'
import { contactPageData } from '../data/contactData'
import { helpCenterPageData } from '../data/resourcePagesData'
import { servicesPageData } from '../data/servicesData'
import { officeContact } from '../data/siteData'
import { thematicAreasPageData } from '../data/thematicAreasData'

const defaultActions = [
  { label: 'Contact SEEF', to: '/contact' },
  { label: 'Explore Services', to: '/services' }
]

const stopWords = new Set([
  'about',
  'after',
  'also',
  'and',
  'any',
  'are',
  'because',
  'before',
  'both',
  'can',
  'does',
  'during',
  'each',
  'for',
  'from',
  'have',
  'help',
  'how',
  'into',
  'its',
  'more',
  'not',
  'only',
  'our',
  'that',
  'the',
  'their',
  'them',
  'there',
  'these',
  'this',
  'through',
  'what',
  'when',
  'where',
  'which',
  'while',
  'with',
  'work',
  'works',
  'would',
  'your'
])

const routeContexts = {
  '/': {
    label: 'Homepage guide',
    description: 'Ask about SEEF services, training, geospatial work, or the best way to start a project conversation.',
    prompts: [
      'What services does SEEF provide?',
      'Can SEEF help with GIS and remote sensing?',
      'How do I contact SEEF about a project?'
    ]
  },
  '/about': {
    label: 'About SEEF',
    description: 'I can explain SEEF’s mission, values, founding story, partner types, and what makes the firm different.',
    prompts: [
      'What makes SEEF different?',
      'Who does SEEF usually work with?',
      'Is SEEF focused only on Ethiopia?'
    ]
  },
  '/services': {
    label: 'Service navigator',
    description: 'I can help visitors map their need to the right SEEF service area and suggest the next step.',
    prompts: [
      'Which service fits environmental assessment work?',
      'Do you provide training as well as consulting?',
      'Can SEEF support both analysis and implementation planning?'
    ]
  },
  '/thematic-areas': {
    label: 'Thematic areas',
    description: 'I can connect sector questions to SEEF themes like agriculture, water, health, social development, and geospatial systems.',
    prompts: [
      'What thematic areas does SEEF cover?',
      'Can SEEF support agriculture and food systems?',
      'How does SEEF use geospatial tools?'
    ]
  },
  '/contact': {
    label: 'Contact support',
    description: 'I can share the office location, phone, email, office hours, and what to include in an inquiry.',
    prompts: [
      'What should I include in my inquiry?',
      'Where is SEEF located?',
      'How should confidential information be handled?'
    ]
  },
  '/help': {
    label: 'Help center support',
    description: 'I can summarize common FAQs, project fit, response expectations, and how SEEF handles early-stage requests.',
    prompts: [
      'What happens after I contact SEEF?',
      'What kinds of organizations work with SEEF?',
      'What if my project is still early and not fully defined?'
    ]
  }
}

const serviceCards = servicesPageData.services.map((service) => ({
  id: service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  title: service.title,
  summary: service.summary,
  highlights: service.points,
  extra:
    service.deliverables?.length > 0
      ? `Typical outputs include ${toSentenceList(service.deliverables)}.`
      : null,
  keywords: compactKeywords([
    service.title,
    service.summary,
    ...(service.points ?? []),
    ...(service.deliverables ?? [])
  ]),
  actions: defaultActions
}))

const thematicCards = thematicAreasPageData.groups.map((group) => ({
  id: group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  title: group.title,
  summary: group.summary,
  highlights: group.areas,
  extra: `This theme is often framed around ${toSentenceList(group.tags)}.`,
  keywords: compactKeywords([group.title, group.summary, ...(group.areas ?? []), ...(group.tags ?? [])]),
  actions: [{ label: 'View Thematic Areas', to: '/thematic-areas' }, { label: 'Contact SEEF', to: '/contact' }]
}))

const partnerGroups = aboutPageData.partners.map((partner) => partner.title)
const differentiators = aboutPageData.differentiators.map((item) => item.title)
const trainingTracks = [
  ...servicesPageData.training.tracks.flatMap((track) => track.items),
  ...helpCenterPageData.sections
    .find((section) => section.id === 'how-seef-can-help')
    .items.filter((item) => item.title === 'Training and capacity building')
    .map((item) => item.description)
]

const knowledgeCards = [
  {
    id: 'services-overview',
    title: 'SEEF consulting services',
    summary: servicesPageData.hero.description,
    highlights: servicesPageData.services.map((service) => service.title),
    extra: 'SEEF combines advisory, assessment, field-informed analysis, training, and geospatial support depending on the assignment.',
    keywords: compactKeywords([
      'services',
      'what does seef do',
      'consulting',
      'advisory',
      servicesPageData.hero.description,
      ...servicesPageData.services.map((service) => service.title)
    ]),
    actions: defaultActions
  },
  {
    id: 'training',
    title: servicesPageData.training.title,
    summary: servicesPageData.training.description,
    highlights: servicesPageData.training.tracks.flatMap((track) => track.items),
    extra: 'Current tracks already include ArcGIS and fruit production, with expansion into R programming, statistics, advanced GIS, and integrated resource management.',
    keywords: compactKeywords([
      'training',
      'capacity building',
      'capacity transfer',
      'workshop',
      'course',
      'arcgis',
      'r programming',
      'statistics',
      'gis',
      ...trainingTracks
    ]),
    actions: [{ label: 'Discuss Training Needs', to: '/contact' }, { label: 'Review Services', to: '/services' }]
  },
  {
    id: 'project-process',
    title: 'How SEEF engagement usually works',
    summary: 'SEEF typically starts by clarifying the problem, expected outputs, timeline, geography, and decision context before technical work begins.',
    highlights: servicesPageData.process.map((step) => step.title),
    extra: 'After an inquiry, SEEF may request clarifications, suggest a call or scoping exchange, and only begins formal work once both sides align on the relevant project documents and terms.',
    keywords: compactKeywords([
      'process',
      'how it works',
      'engagement',
      'proposal',
      'scope',
      'timeline',
      'what happens next',
      ...servicesPageData.process.map((step) => step.title),
      ...helpCenterPageData.sections.find((section) => section.id === 'what-happens-next').items
    ]),
    actions: [{ label: 'Start a Conversation', to: '/contact' }, { label: 'Help Center', to: '/help' }]
  },
  {
    id: 'contact',
    title: 'How to contact SEEF',
    summary: `SEEF is based at ${officeContact.address}. You can reach the team by phone at ${officeContact.phone} or email at ${officeContact.email}.`,
    highlights: [
      officeContact.locationLabel,
      officeContact.phone,
      officeContact.email,
      `Office hours: ${officeContact.hours}`
    ],
    extra: 'A strong first message should include the organization, challenge, geography, expected outputs, timeline, and any useful background documents.',
    keywords: compactKeywords([
      'contact',
      'email',
      'phone',
      'call',
      'office',
      'location',
      'address',
      'hours',
      'meeting',
      ...contactPageData.readinessChecklist
    ]),
    actions: [
      { label: 'Email SEEF', href: `mailto:${officeContact.email}` },
      { label: 'Open Contact Page', to: '/contact' }
    ]
  },
  {
    id: 'about-seef',
    title: 'About SEE Future Consult PLC',
    summary: aboutPageData.hero.description,
    highlights: [
      aboutPageData.missionVision[0].title,
      aboutPageData.missionVision[1].title,
      'Founded in early 2023',
      'Headquartered in Addis Ababa'
    ],
    extra: `SEEF describes its differentiators as ${toSentenceList(differentiators)}.`,
    keywords: compactKeywords([
      'about',
      'who are you',
      'mission',
      'vision',
      'founded',
      'different',
      'why seef',
      aboutPageData.hero.description,
      ...differentiators
    ]),
    actions: [{ label: 'Learn About SEEF', to: '/about' }, { label: 'Contact SEEF', to: '/contact' }]
  },
  {
    id: 'partners',
    title: 'Who SEEF usually works with',
    summary:
      'SEEF commonly works with government institutions, NGOs, development partners, private organizations, and community-facing initiatives.',
    highlights: partnerGroups,
    extra: 'The collaboration model is multidisciplinary and designed for institutions that need evidence, implementation thinking, stakeholder engagement, and practical recommendations together.',
    keywords: compactKeywords([
      'who do you work with',
      'clients',
      'partners',
      'government',
      'ngo',
      'private sector',
      'communities',
      ...partnerGroups
    ]),
    actions: [{ label: 'See About SEEF', to: '/about' }, { label: 'Contact SEEF', to: '/contact' }]
  },
  {
    id: 'coverage',
    title: 'Where SEEF works',
    summary:
      'SEEF is headquartered in Addis Ababa and is strongly grounded in Ethiopian realities, while also carrying a broader regional ambition across Africa.',
    highlights: ['Addis Ababa headquarters', 'Ethiopia-focused delivery', 'Long-term regional ambition'],
    extra: 'For now, the site positions SEEF as locally grounded first, with future collaboration growth beyond Ethiopia.',
    keywords: compactKeywords([
      'ethiopia',
      'africa',
      'location',
      'regional',
      'international',
      'where do you work',
      'coverage'
    ]),
    actions: [{ label: 'Learn About SEEF', to: '/about' }, { label: 'Contact SEEF', to: '/contact' }]
  },
  {
    id: 'confidentiality',
    title: 'Handling confidential information',
    summary:
      'The safest approach is to start with a high-level overview of the project need and then align with SEEF on the right communication method before sharing sensitive detail.',
    highlights: ['Start with a concise overview', 'Align on the right channel', 'Set confidentiality expectations early'],
    extra: 'Trust and confidentiality are listed among SEEF’s core values, so it is appropriate to raise confidentiality expectations early in the conversation.',
    keywords: compactKeywords([
      'confidential',
      'nda',
      'sensitive',
      'private',
      'confidentiality',
      'secure',
      'trust'
    ]),
    actions: [{ label: 'Open Contact Page', to: '/contact' }, { label: 'Help Center', to: '/help' }]
  },
  {
    id: 'pricing',
    title: 'Pricing and proposal questions',
    summary:
      'The website does not publish fixed pricing. SEEF appears to scope engagements based on the sector, outputs, timeline, geography, and evidence needs of the assignment.',
    highlights: ['No public rate card on the site', 'Project-specific scoping', 'Best handled through direct inquiry'],
    extra: 'If a client shares the expected outputs, timeline, geography, and background documents, SEEF can more quickly suggest the right next step.',
    keywords: compactKeywords([
      'price',
      'pricing',
      'budget',
      'cost',
      'quote',
      'proposal',
      'rate',
      'fees'
    ]),
    actions: [{ label: 'Request a Project Discussion', to: '/contact' }, { label: 'Help Center', to: '/help' }]
  },
  ...serviceCards,
  ...thematicCards
]

const directIntentReplies = [
  {
    id: 'greeting',
    match: (query) => /(^|\s)(hi|hello|hey|good morning|good afternoon|good evening)(\s|$)/.test(query),
    reply: (pathname) => {
      const context = getAssistantContext(pathname)
      return {
        title: 'SEEF Client Assistant',
        body: [
          'I can help visitors understand SEEF’s services, thematic areas, training, contact options, and project fit.',
          context.description
        ],
        highlights: context.prompts,
        actions: defaultActions,
        suggestions: context.prompts
      }
    }
  },
  {
    id: 'thanks',
    match: (query) => /(^|\s)(thanks|thank you|appreciate it)(\s|$)/.test(query),
    reply: (pathname) => ({
      title: 'Happy to help',
      body: ['If you want, I can also help draft the next question a client is likely to ask or point them to the best SEEF page.'],
      highlights: getAssistantContext(pathname).prompts,
      actions: defaultActions,
      suggestions: getAssistantContext(pathname).prompts
    })
  }
]

export function getAssistantContext(pathname) {
  return routeContexts[pathname] ?? {
    label: 'SEEF support',
    description: 'Ask about services, training, thematic areas, partner fit, or the best next step for a project inquiry.',
    prompts: [
      'What does SEEF specialize in?',
      'How should a client contact SEEF?',
      'Can SEEF provide training support?'
    ]
  }
}

export function getAssistantWelcome(pathname) {
  const context = getAssistantContext(pathname)

  return {
    id: 'welcome',
    role: 'assistant',
    title: 'Ask about SEEF Consult',
    body: [
      'This assistant is tailored for SEEF visitors and can answer common client questions about services, sectors, training, contact details, and project fit.',
      context.description
    ],
    highlights: ['Consulting services', 'GIS and remote sensing', 'Training support', 'Project inquiries'],
    actions: [
      { label: 'Explore Services', to: '/services' },
      { label: 'Open Help Center', to: '/help' }
    ],
    suggestions: context.prompts
  }
}

export function getAssistantReply(input, pathname) {
  const query = normalize(input)

  if (!query) {
    return {
      title: 'Ask me about SEEF',
      body: ['Try a question about services, contact details, training, GIS support, partner fit, or how to start a project discussion.'],
      highlights: getAssistantContext(pathname).prompts,
      actions: defaultActions,
      suggestions: getAssistantContext(pathname).prompts
    }
  }

  for (const intent of directIntentReplies) {
    if (intent.match(query)) {
      return intent.reply(pathname)
    }
  }

  const rankedCards = knowledgeCards
    .map((card) => ({ card, score: scoreCard(query, card) }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)

  if (rankedCards.length > 0 && rankedCards[0].score >= 2) {
    const [primary, secondary] = rankedCards

    return {
      title: primary.card.title,
      body: [
        primary.card.summary,
        primary.card.extra,
        secondary && secondary.score >= 2 && secondary.card.id !== primary.card.id
          ? `Related area: ${secondary.card.title}. ${secondary.card.summary}`
          : null
      ].filter(Boolean),
      highlights: primary.card.highlights?.slice(0, 4) ?? [],
      actions: primary.card.actions ?? defaultActions,
      suggestions: buildFollowUps(primary.card.id, pathname)
    }
  }

  return {
    title: 'Best next step',
    body: [
      'I could not match that to one exact SEEF topic, but I can still help a visitor quickly if the question is framed around services, sector focus, training, contact details, confidentiality, or project scope.',
      'For complex or highly specific requests, the safest next step is to share the organization, challenge, geography, expected outputs, and timeline with SEEF directly.'
    ],
    highlights: helpCenterPageData.sections.find((section) => section.id === 'what-to-include').items.slice(0, 4),
    actions: [
      { label: 'Contact SEEF', to: '/contact' },
      { label: 'Help Center', to: '/help' }
    ],
    suggestions: getAssistantContext(pathname).prompts
  }
}

function buildFollowUps(cardId, pathname) {
  const pagePrompts = getAssistantContext(pathname).prompts

  const followUpsByCard = {
    contact: ['What should I include in an inquiry?', 'How should confidential information be handled?', 'What happens after I contact SEEF?'],
    training: ['Do you provide ArcGIS training?', 'Can SEEF combine training with consulting?', 'Who is training support designed for?'],
    pricing: ['What information helps SEEF scope a project?', 'How do I start a proposal conversation?', 'Can SEEF support early-stage projects?'],
    partners: ['Can SEEF support NGOs and development partners?', 'Does SEEF work with private organizations?', 'Can SEEF support communities and institutions together?'],
    coverage: ['Does SEEF only work in Ethiopia?', 'Where is the office located?', 'How can I contact the team?'],
    confidentiality: ['What should I share first?', 'How can I start a sensitive project discussion?', 'Where can I contact SEEF directly?']
  }

  return followUpsByCard[cardId] ?? pagePrompts
}

function scoreCard(query, card) {
  const titleScore = query.includes(normalize(card.title)) ? 6 : 0

  const keywordScore = (card.keywords ?? []).reduce((score, keyword) => {
    if (!keyword) return score
    if (!query.includes(keyword)) return score

    return score + (keyword.includes(' ') ? 3 : 1)
  }, 0)

  return titleScore + keywordScore
}

function compactKeywords(values) {
  const keywords = new Set()

  values.forEach((value) => {
    const normalized = normalize(value)

    if (!normalized) return

    const words = normalized.split(' ').filter((word) => word.length > 2 && !stopWords.has(word))

    if (words.length >= 2 && words.length <= 6) {
      keywords.add(words.join(' '))
    }

    words.forEach((word) => keywords.add(word))
  })

  return Array.from(keywords)
}

function normalize(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function toSentenceList(values) {
  const items = values.filter(Boolean)

  if (items.length === 0) return ''
  if (items.length === 1) return items[0]
  if (items.length === 2) return `${items[0]} and ${items[1]}`

  return `${items.slice(0, -1).join(', ')}, and ${items.at(-1)}`
}
