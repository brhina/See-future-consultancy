import {
  Briefcase,
  Clock3,
  Database,
  FileCheck2,
  FileText,
  Handshake,
  MessageSquare,
  ShieldCheck,
  UserRoundCheck
} from 'lucide-react'
import { officeContact } from './siteData'

const lastUpdated = 'April 18, 2026'

export const termsPageData = {
  hero: {
    eyebrow: 'Website Terms and Use',
    title: 'Terms of Service',
    description:
      'These terms explain how visitors, partners, and prospective clients may use the SEEF website and how website use differs from formal consulting engagements.',
    tags: [`Last updated ${lastUpdated}`, 'Informational website', 'Separate project agreements'],
    gradient: 'from-blue-50 via-white to-slate-50'
  },
  intro: {
    eyebrow: 'For Visitors and Prospective Clients',
    title: 'Built for clarity, professional use, and responsible communication',
    description:
      'SEEF uses this website to present its consulting services, thematic areas, organizational background, and contact channels. It is meant to help institutions and partners understand SEEF\'s capabilities before a project-specific discussion begins.'
  },
  summaryCards: [
    {
      icon: FileText,
      title: 'Informational website',
      description:
        'The site explains who SEEF is, what services are offered, and how organizations can start a conversation about advisory, research, training, or technical support.'
    },
    {
      icon: UserRoundCheck,
      title: 'Responsible communication',
      description:
        'Visitors should share accurate contact details, communicate lawfully, and avoid sending materials they are not authorized to disclose.'
    },
    {
      icon: Briefcase,
      title: 'Separate engagement terms',
      description:
        'Consulting work, fees, deliverables, confidentiality clauses, and intellectual-property arrangements are confirmed through separate project documents.'
    }
  ],
  sections: [
    {
      id: 'scope',
      eyebrow: 'Section 1',
      title: 'Scope of these terms',
      description: 'These terms apply to general use of the SEEF website and related public-facing content.',
      paragraphs: [
        'By accessing or using this website, you agree to use it in a lawful, respectful, and professional manner. If you are visiting on behalf of an organization, you should have the authority to review information and communicate with SEEF for that organization.',
        'The website is designed to support awareness, learning, and initial contact. It does not create a consulting contract, partnership commitment, or guaranteed response obligation simply because you visit the site or send an inquiry.'
      ]
    },
    {
      id: 'acceptable-use',
      eyebrow: 'Section 2',
      title: 'Acceptable website use',
      description: 'SEEF welcomes legitimate professional use of the site and prohibits misuse that could harm the website, the firm, or other visitors.',
      columns: 2,
      items: [
        'Do not interfere with website performance, security, or availability through unauthorized access attempts, malicious code, scraping abuse, or disruptive activity.',
        'Do not misrepresent your identity, impersonate another person or institution, or submit knowingly false project, organizational, or contact information.',
        'Do not use the site or its materials in a way that is unlawful, defamatory, deceptive, or inconsistent with responsible professional conduct.',
        'Do not reproduce SEEF branding, written content, or downloadable materials in a misleading way that suggests endorsement, partnership, or authorship without permission.'
      ]
    },
    {
      id: 'intellectual-property',
      eyebrow: 'Section 3',
      title: 'Content ownership and permitted use',
      description: 'SEEF retains rights in the website design, written materials, branding, and original published content unless stated otherwise.',
      paragraphs: [
        'You may review, reference, and share SEEF website content for legitimate informational purposes, provided the use remains accurate, non-deceptive, and respectful of copyright and attribution.',
        'If you send SEEF materials as part of an inquiry, you retain your rights in those materials. However, you authorize SEEF to review and internally use them to understand your request, assess fit, and decide whether to pursue a discussion.'
      ],
      columns: 2,
      items: [
        'Website text, visual presentation, and branding elements remain the property of SEEF or the applicable rights holder.',
        'Sending an inquiry does not transfer project ownership, research ownership, or licensing rights to either party.',
        'Any assignment-specific ownership, licensing, publication, or confidentiality arrangement should be documented in a separate contract.',
        'If you believe a rights issue exists on the site, you may report it directly through SEEF\'s contact channels.'
      ]
    },
    {
      id: 'inquiries',
      eyebrow: 'Section 4',
      title: 'Inquiry submissions and communication',
      description: 'The website includes pathways for initiating contact, but inquiry review remains subject to capacity, relevance, and mutual fit.',
      paragraphs: [
        'When you contact SEEF, please provide information that is reasonably accurate and relevant to your request. Early-stage inquiries are welcome, but highly confidential or regulated information should only be shared when an appropriate project arrangement is in place.',
        'SEEF may decide whether to respond, request clarification, decline an opportunity, or propose a next step. A response from SEEF does not by itself create an engagement until both sides agree in writing.'
      ],
      columns: 2,
      items: [
        'Initial website inquiries are best suited for project scoping, service fit questions, and early coordination.',
        'Submission of an inquiry does not guarantee acceptance of a project, an estimate, or a consulting timeline.',
        'You are responsible for ensuring that materials sent to SEEF do not violate confidentiality, employment, procurement, or disclosure obligations.',
        'SEEF may keep inquiry records for follow-up, quality review, and relationship management as described in the privacy policy.'
      ]
    },
    {
      id: 'engagements',
      eyebrow: 'Section 5',
      title: 'Project engagements, proposals, and third-party references',
      description: 'Formal work begins through separate documentation tailored to the assignment, not through the website alone.',
      paragraphs: [
        'If SEEF and a client choose to work together, the governing terms will normally appear in a proposal, memorandum of understanding, contract, or other written engagement instrument. Those documents may cover scope, fees, deliverables, timelines, confidentiality, intellectual property, reporting lines, and dispute handling.',
        'The website may also reference partner types, training topics, or external resources for context. Such references do not automatically constitute endorsement, legal advice, regulatory assurance, or a representation that all external information remains current.'
      ],
      columns: 2,
      items: [
        'Project work is governed by assignment-specific documents.',
        'External links or references are offered for convenience or context only.',
        'Procurement, due diligence, and institutional approval processes remain the responsibility of the relevant organizations.',
        'Any public statement about a joint project should be coordinated through the appropriate engagement channels.'
      ]
    },
    {
      id: 'disclaimers',
      eyebrow: 'Section 6',
      title: 'Disclaimers, limitation context, and updates',
      description: 'SEEF aims for accurate, professional website content, but public information may evolve as services, priorities, and materials are updated.',
      paragraphs: [
        'Website content is provided for general informational purposes and should not be treated as legal, regulatory, procurement, or investment advice. Visitors should evaluate whether more specific professional advice is needed for their situation.',
        'SEEF does not guarantee uninterrupted website availability or that every page will always reflect the latest organizational developments. To the extent allowed by applicable law, SEEF is not responsible for indirect losses arising solely from general website use.'
      ],
      callout:
        'If you need terms for a live consulting relationship, the most reliable source is the specific proposal or agreement issued for that assignment. These website terms were last updated on April 18, 2026.'
    }
  ],
  cta: {
    eyebrow: 'Ready for a Project Discussion',
    title: 'Use the website as a starting point, then move into a defined engagement process',
    description:
      'SEEF works best when the next step is clear. If you want to discuss a study, advisory assignment, training need, or field-informed assessment, reach out with a short project brief and desired timeline.',
    primary: { label: 'Start a Conversation', to: '/contact' },
    secondary: { label: 'Review Privacy Policy', to: '/privacy' }
  }
}

export const privacyPageData = {
  hero: {
    eyebrow: 'Privacy and Confidentiality',
    title: 'Privacy Policy',
    description:
      'This policy explains what information SEEF may receive through the website and direct inquiries, how it is used, and how privacy is handled in the context of a consulting business.',
    tags: [`Last updated ${lastUpdated}`, 'Inquiry data', 'Confidential handling'],
    gradient: 'from-blue-50 via-white to-slate-50'
  },
  intro: {
    eyebrow: 'Practical Data Stewardship',
    title: 'Focused on inquiry handling, communication, and professional confidentiality',
    description:
      'SEEF is primarily an informational website and relationship-building channel. Most personal or organizational information SEEF receives comes through direct communication such as email, phone calls, and project coordination discussions rather than through account creation or a client portal.'
  },
  summaryCards: [
    {
      icon: Database,
      title: 'What SEEF may collect',
      description:
        'Typical information includes names, organizational details, contact information, inquiry context, and documents voluntarily shared to help SEEF understand a potential assignment.'
    },
    {
      icon: FileCheck2,
      title: 'Why SEEF uses it',
      description:
        'Information is used to respond to inquiries, assess service fit, coordinate follow-up, prepare proposals, and improve how SEEF communicates with partners and prospective clients.'
    },
    {
      icon: ShieldCheck,
      title: 'How it is protected',
      description:
        'SEEF aims to limit access to those who need information for legitimate operational or project-scoping purposes and does not position inquiry information as a product to be sold.'
    }
  ],
  sections: [
    {
      id: 'information-we-receive',
      eyebrow: 'Section 1',
      title: 'Information SEEF may receive',
      description: 'Most information collected through this website is provided directly by visitors who choose to contact SEEF.',
      columns: 2,
      items: [
        {
          title: 'Contact and identity details',
          description: 'Names, job titles, organization names, email addresses, phone numbers, and other details shared during outreach.'
        },
        {
          title: 'Project and inquiry information',
          description: 'Program goals, locations, timelines, scopes of work, reference materials, and other context voluntarily sent to explain a request.'
        },
        {
          title: 'Communication records',
          description: 'Email correspondence, call notes, meeting coordination details, and follow-up history that support professional communication.'
        },
        {
          title: 'Basic technical data',
          description: 'Like most websites, hosting or security systems may process limited technical logs such as browser type, device information, timestamps, and IP-related metadata for security and performance.'
        }
      ]
    },
    {
      id: 'how-we-use-it',
      eyebrow: 'Section 2',
      title: 'How information is used',
      description: 'SEEF uses inquiry information to support legitimate business communication and consulting operations.',
      columns: 2,
      items: [
        'Respond to questions about services, thematic areas, and organizational capabilities.',
        'Evaluate whether a requested assignment aligns with SEEF\'s expertise, availability, and delivery model.',
        'Prepare scoping notes, proposal inputs, or coordination steps when both sides decide to continue a discussion.',
        'Maintain relationship history so communication remains organized, accurate, and professionally consistent.',
        'Improve how website content and contact guidance help prospective partners understand the best next step.',
        'Protect the website, communications, and organizational operations from misuse, fraud, or security concerns.'
      ]
    },
    {
      id: 'sharing-and-confidentiality',
      eyebrow: 'Section 3',
      title: 'Sharing, confidentiality, and internal access',
      description: 'SEEF treats inquiry information with professional care and shares it only when there is a legitimate operational reason.',
      paragraphs: [
        'Information may be reviewed by relevant team members, advisors, or service providers who support communication, administration, website hosting, or assignment scoping, but only to the extent reasonably necessary for those tasks.',
        'SEEF does not describe inquiry information as a commercial data asset to be sold. If a client engagement proceeds, stricter confidentiality obligations may be added through a separate contract, non-disclosure agreement, or project protocol.'
      ],
      columns: 2,
      items: [
        'Access is intended to be role-based and limited to people who need the information for legitimate business purposes.',
        'Sensitive materials should be shared thoughtfully, especially before a project-specific confidentiality arrangement is in place.',
        'If disclosure is legally required or necessary to protect rights, safety, or operations, SEEF may disclose only what is reasonably required in that circumstance.',
        'Client-specific confidentiality expectations should be documented in engagement materials whenever project work begins.'
      ]
    },
    {
      id: 'website-logs',
      eyebrow: 'Section 4',
      title: 'Website logs, third-party services, and tracking context',
      description: 'The website is primarily informational and is not presented as a user-account platform.',
      paragraphs: [
        'SEEF does not currently position this website as a portal requiring routine account registration or extensive behavioral tracking. However, hosting providers, security tools, maps, fonts, video embeds, or analytics tools may still process limited technical information in the normal course of operating a modern website.',
        'Because embedded or third-party tools can change over time, visitors who are managing highly sensitive data should avoid relying on the website itself as the primary channel for transmitting confidential material.'
      ],
      callout:
        'For sensitive project information, the best practice is to contact SEEF first and agree on an appropriate communication method before sharing detailed documentation.'
    },
    {
      id: 'retention-and-requests',
      eyebrow: 'Section 5',
      title: 'Retention, corrections, and deletion requests',
      description: 'SEEF keeps information for as long as it is reasonably useful for communication, relationship management, legal compliance, or project continuity.',
      paragraphs: [
        'Inquiry records may be retained long enough to respond to a request, document follow-up, understand prior discussions, or support future collaboration if the relationship remains active or relevant.',
        'If you want SEEF to update or delete information you previously shared, you may contact the firm directly. SEEF will review the request in light of operational needs, legal obligations, ongoing project requirements, and reasonable recordkeeping practices.'
      ]
    },
    {
      id: 'policy-updates',
      eyebrow: 'Section 6',
      title: 'Policy updates and contact',
      description: 'This privacy policy may be refined as the website, communications tools, or business processes evolve.',
      paragraphs: [
        `The current version of this policy was last updated on ${lastUpdated}.`,
        'If you have a privacy question, would like to correct information, or want to raise a concern about how your inquiry has been handled, contact SEEF using the details listed below.'
      ],
      columns: 2,
      items: [
        `Email: ${officeContact.email}`,
        `Phone: ${officeContact.phone}`,
        `Office: ${officeContact.address}`,
        `Hours: ${officeContact.hours}`
      ]
    }
  ],
  cta: {
    eyebrow: 'Questions About Data Handling',
    title: 'Reach out before sharing sensitive project information',
    description:
      'A short introductory message is often enough to begin. If the discussion needs to move into confidential materials, SEEF can help define the right communication path for the next stage.',
    primary: { label: 'Contact SEEF', to: '/contact' },
    secondary: { label: 'View Terms of Service', to: '/terms' }
  }
}

export const helpCenterPageData = {
  hero: {
    eyebrow: 'Guidance for Partners and Prospective Clients',
    title: 'Help Center',
    description:
      'Find the fastest way to contact SEEF, understand which requests are a strong fit, and prepare the details that make project conversations more productive from the start.',
    tags: ['Project inquiries', 'Training and advisory support', `Updated ${lastUpdated}`],
    gradient: 'from-blue-50 via-white to-slate-50'
  },
  intro: {
    eyebrow: 'How To Get Support',
    title: 'A practical starting point for organizations exploring SEEF\'s services',
    description:
      'SEEF supports institutions, development partners, NGOs, private organizations, and community-facing initiatives that need evidence-based consulting, geospatial analysis, assessment support, training, or cross-sector advisory input.'
  },
  summaryCards: [
    {
      icon: MessageSquare,
      title: 'Best first contact',
      description:
        'Send a concise note covering your organization, the challenge you are trying to solve, the geography involved, and the kind of support you are exploring.'
    },
    {
      icon: Handshake,
      title: 'Common request types',
      description:
        'SEEF is often contacted for assessments, geospatial support, technical advisory, training, stakeholder engagement, safeguards-related work, and decision-ready analysis.'
    },
    {
      icon: Clock3,
      title: 'What speeds up a response',
      description:
        'Clear timelines, expected outputs, available background documents, and a named focal person help SEEF understand scope and suggest the right next step faster.'
    }
  ],
  sections: [
    {
      id: 'how-seef-can-help',
      eyebrow: 'Section 1',
      title: 'How SEEF can help',
      description: 'The firm works across multiple service areas that often intersect within a single assignment.',
      columns: 2,
      items: [
        {
          title: 'Research, assessment, and advisory support',
          description: 'Applied studies, field-informed analysis, environmental and social assessments, and technical inputs that strengthen decisions.'
        },
        {
          title: 'Geoinformation and spatial services',
          description: 'GIS, GPS, remote sensing, and spatial analysis for planning, monitoring, mapping, and risk-aware implementation.'
        },
        {
          title: 'Agriculture, water, and environmental work',
          description: 'Support for sustainable land use, watershed systems, climate-smart planning, and ecosystem-conscious development.'
        },
        {
          title: 'Health, social affairs, and inclusion',
          description: 'Program evaluation, stakeholder engagement, social impact analysis, and equity-focused planning support.'
        },
        {
          title: 'Training and capacity building',
          description: 'Practical learning tracks such as ArcGIS, fruit production, orchard management, and expanding technical learning pathways.'
        },
        {
          title: 'Cross-sector project design',
          description: 'Assignments that need environmental, social, spatial, and implementation realities to be considered together.'
        }
      ]
    },
    {
      id: 'what-to-include',
      eyebrow: 'Section 2',
      title: 'What to include in an inquiry',
      description: 'A short, well-structured message is usually enough to begin a useful conversation.',
      columns: 2,
      items: [
        'Your organization name, focal person, and preferred contact details.',
        'A brief description of the challenge, assignment, or decision the work needs to support.',
        'Geographic focus, sector, or thematic area involved in the request.',
        'Expected outputs such as assessment reports, maps, training support, facilitation, or advisory notes.',
        'Any known timeline, procurement stage, or deadline that affects the urgency of the work.',
        'Relevant background documents or links, if sharing them is appropriate at that stage.'
      ]
    },
    {
      id: 'what-happens-next',
      eyebrow: 'Section 3',
      title: 'What happens after you contact SEEF',
      description: 'The follow-up path depends on the clarity, fit, and readiness of the opportunity.',
      columns: 2,
      items: [
        'SEEF reviews the inquiry to understand the service need, sector context, and likely next step.',
        'If needed, SEEF may request clarifying information before commenting on fit, scope, or timing.',
        'For suitable opportunities, the discussion may move into a call, meeting, or scoping exchange.',
        'Where helpful, SEEF may outline a proposed engagement path, technical approach, or proposal process.',
        'If the request falls outside current scope or timing, SEEF may decline or redirect the conversation as appropriate.',
        'Formal work begins only after both sides align on the relevant project documents and engagement terms.'
      ]
    },
    {
      id: 'working-with-seef',
      eyebrow: 'Section 4',
      title: 'Working with SEEF',
      description: 'Assignments are typically structured around understanding context, generating evidence, and translating findings into practical next steps.',
      paragraphs: [
        'SEEF\'s delivery model is multidisciplinary. Depending on the assignment, a project may combine desk review, fieldwork, stakeholder engagement, spatial analysis, technical assessment, facilitation, and capacity-building support.',
        'The goal is not only to document a situation but to help partners move toward informed action with outputs that match implementation realities.'
      ],
      columns: 2,
      items: [
        'Context-sensitive scoping that starts from the real decision need.',
        'Evidence generation through field-informed, social, environmental, and spatial methods.',
        'Recommendations and materials tailored to the partner\'s next step.',
        'Knowledge transfer that helps institutions retain capability after project closeout.'
      ]
    },
    {
      id: 'frequently-asked-questions',
      eyebrow: 'Section 5',
      title: 'Frequently asked questions',
      description: 'A few common questions from organizations considering a conversation with SEEF.',
      columns: 2,
      items: [
        {
          title: 'Does SEEF only work in Ethiopia?',
          description: 'SEEF is headquartered in Addis Ababa and is strongly grounded in Ethiopian realities, while also carrying a broader regional ambition for future collaboration across Africa.'
        },
        {
          title: 'Can SEEF support both analysis and implementation planning?',
          description: 'Yes. The firm is positioned to connect evidence generation with practical recommendations, coordination guidance, and decision-ready outputs.'
        },
        {
          title: 'Do you provide training as well as consulting?',
          description: 'Yes. Capacity building is part of SEEF\'s model, with current and expanding technical training tracks alongside advisory and assessment work.'
        },
        {
          title: 'Who does SEEF usually work with?',
          description: 'Common partner groups include government institutions, NGOs, development partners, private sector organizations, and community-facing initiatives.'
        },
        {
          title: 'How should confidential information be handled?',
          description: 'Start with a high-level overview first. If sensitive detail is needed, it is best to align on the right communication method and any confidentiality expectations before sharing more.'
        },
        {
          title: 'What if the project is still early and not fully defined?',
          description: 'That is still a valid time to reach out. A concise outline of the problem, geography, and decision need is often enough to start a scoping discussion.'
        }
      ]
    }
  ],
  cta: {
    eyebrow: 'Next Step',
    title: 'If the project need is becoming clearer, move the conversation forward',
    description:
      'A short note is enough to begin. Share the core problem, expected outcome, and timeline, and SEEF can help determine whether advisory, assessment, training, or geospatial support is the right fit.',
    primary: { label: 'Contact SEEF', to: '/contact' },
    secondary: { label: 'Explore Services', to: '/services' }
  }
}
