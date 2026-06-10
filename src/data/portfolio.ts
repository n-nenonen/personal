import {
  imgColumn,
  imgImage8,
  imgPicture,
  imgPicture1,
} from '../assets/images'

export type PortfolioProject = {
  slug: string
  title: string
  summary: string
  image: string
  imageAlt: string
  layout: 'image-left' | 'image-right' | 'banner'
  skillTags: string[]
  toolTags: string[]
  caseStudyPath?: string
}

export function getCaseStudyPath(project: PortfolioProject) {
  if (project.caseStudyPath) return project.caseStudyPath
  if (project.layout === 'banner') return null
  return `/work/${project.slug}`
}

export const contact = {
  email: 'n.nenonen@gmail.com',
  phone: '+358440260496',
  linkedIn: 'https://www.linkedin.com/in/noora-nenonen/',
  github: 'https://github.com/Nooranen',
}

export const projects: PortfolioProject[] = [
  {
    slug: 'helsinki-design-system',
    title: 'Case: Helsinki Design System tool migration',
    summary:
      'I managed and developed HDS for three years, doing user research, scope planning, building components, doing specifications for implementation, documentation and support for 90+ services... but where the journey started was migrating the whole system from one design tool to another.',
    image: imgPicture,
    imageAlt: 'Helsinki Design System project preview',
    layout: 'image-left',
    skillTags: [
      'Design systems',
      'UI Design',
      'DesignOps',
      'Agile software development',
    ],
    toolTags: ['Figma', 'Sketch', 'Abstract', 'Agile', 'Miro', 'Jira'],
    caseStudyPath: '/work/helsinki-design-system',
  },
  {
    slug: 'newcomers-checklist',
    title: 'Case: Checklist for newcomers and startups',
    summary:
      "In this project we aimed to address the difficulties faced by International House Helsinki's (IHH) key customers. Immigrants, newcomers face a lot of challenges when moving to a new country, least of all overwhelming and fragmented administrative processes.",
    image: imgPicture1,
    imageAlt: 'Checklist for newcomers project preview',
    layout: 'image-right',
    skillTags: [
      'CX research',
      'UX research',
      'Collaborative design',
      'UX design',
      'Layout design',
      'Content design',
      'Usability testing',
      'Specification',
    ],
    toolTags: ['Figma', 'Miro'],
    caseStudyPath: '/work/newcomers-checklist',
  },
  {
    slug: 'suomi-fi-search',
    title:
      'Case: Research to improve the search function user experience for Suomi.fi',
    summary:
      "We set out to do user testing for Suomi.fi. The testing revealed critical flaws in the website's search function, leading to user confusion. We provided actionable solutions in a report to improve search logic, results, and overall user experience for the userbase, all Finnish citizens!",
    image: imgImage8,
    imageAlt: 'Suomi.fi search research project preview',
    layout: 'image-left',
    skillTags: [
      'UX research',
      'Usability testing',
      'Facilitation',
      'Reporting',
    ],
    toolTags: ['PowerPoint', 'Miro'],
    caseStudyPath: '/work/suomi-fi-search',
  },
  {
    slug: '100-days-of-ui',
    title: '100 Days of UI (2022)',
    summary: '',
    image: imgColumn,
    imageAlt: '100 Days of UI preview',
    layout: 'banner',
    skillTags: [],
    toolTags: [],
  },
]
