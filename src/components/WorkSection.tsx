import { Link } from 'react-router-dom'
import { imgIcon } from '../assets/images'
import { getCaseStudyPath, projects, type PortfolioProject } from '../data/portfolio'

type ProjectTag = {
  label: string
  variant: 'skill' | 'tool'
}

function Tag({ label, variant }: ProjectTag) {
  const bg =
    variant === 'skill'
      ? 'bg-[var(--bg-lila)]'
      : 'bg-[var(--gray-200)]'

  return (
    <div
      className={`${bg} content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0`}
    >
      <p className=" font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--gray-600)] text-left whitespace-nowrap">
        {label}
      </p>
    </div>
  )
}

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <div
        className="absolute flex inset-[22.92%_14.58%_22.92%_16.67%] items-center justify-center"
        style={{ containerType: 'size' }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

const cardClassName =
  'bg-[var(--gray-default)] content-stretch cursor-pointer flex items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full max-w-[1152px] text-left no-underline text-inherit transition-shadow hover:shadow-[0px_8px_6px_0px_rgba(0,0,0,0.08),0px_4px_4px_0px_rgba(0,0,0,0.06)]'

const caseCardClassName =
  'bg-[var(--gray-default)] content-stretch cursor-pointer flex flex-col lg:flex-row items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full max-w-[1152px] text-left no-underline text-inherit transition-shadow hover:shadow-[0px_8px_6px_0px_rgba(0,0,0,0.08),0px_4px_4px_0px_rgba(0,0,0,0.06)]'

function ProjectCard({ project }: { project: PortfolioProject }) {
  const tags: ProjectTag[] = [
    ...project.skillTags.map((label) => ({ label, variant: 'skill' as const })),
    ...project.toolTags.map((label) => ({ label, variant: 'tool' as const })),
  ]
  const href = getCaseStudyPath(project)

  if (project.layout === 'banner') {
    return (
      <button
        type="button"
        className={cardClassName}
        aria-label={`${project.title} — case study coming soon`}
        onClick={(event) => event.preventDefault()}
      >
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip p-[48px] relative rounded-bl-[12px] rounded-tl-[12px] self-stretch">
          <div className="content-stretch flex gap-[12px] items-center justify-end overflow-clip relative shrink-0 w-full">
            <p className=" font-semibold leading-[28px] not-italic overflow-hidden relative shrink-0 text-[24px] text-[color:var(--gray-900)] text-ellipsis text-left w-[420px] whitespace-nowrap">
              {project.title}
            </p>
            <ArrowIcon />
          </div>
        </div>
        <div className="border-[var(--gray-100)] border-r border-solid flex-[1_0_0] min-w-px relative rounded-bl-[12px] rounded-tl-[12px] self-stretch">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[12px] rounded-tl-[12px]">
            <img
              alt={project.imageAlt}
              className="absolute h-[-271.66%] left-[99.66%] max-w-none top-[194.2%] w-[-153.2%]"
              src={project.image}
            />
          </div>
        </div>
      </button>
    )
  }

  const imageColumn = (
    <div className="bg-[var(--gray-50)] border-[var(--gray-100)] border-r border-solid content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip p-[48px] relative rounded-bl-[12px] rounded-tl-[12px] self-stretch">
      <div className="flex-[1_0_0] h-[384px] min-w-px relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)]">
        <img
          alt={project.imageAlt}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
          src={project.image}
        />
      </div>
    </div>
  )

  const textColumn = (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px overflow-clip p-[48px] relative rounded-bl-[12px] rounded-tl-[12px] self-stretch">
      <p className=" font-semibold leading-[28px] not-italic overflow-hidden relative shrink-0 text-[20px] text-[color:var(--gray-900)] text-ellipsis text-left w-full whitespace-nowrap">
        {project.title}
      </p>
      <p className=" font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] text-left w-full">
        {project.summary}
      </p>
      {tags.length > 0 && (
        <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0 w-full">
          {tags.map((tag) => (
            <Tag key={tag.label} {...tag} />
          ))}
        </div>
      )}
      <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 w-full">
        <ArrowIcon />
      </div>
    </div>
  )

  const content =
    project.layout === 'image-left' ? (
      <>
        {imageColumn}
        {textColumn}
      </>
    ) : (
      <>
        {textColumn}
        {imageColumn}
      </>
    )

  if (!href) {
    return (
      <button type="button" className={caseCardClassName} aria-label={project.title}>
        {content}
      </button>
    )
  }

  return (
    <Link to={href} className={caseCardClassName} aria-label={`View case study: ${project.title}`}>
      {content}
    </Link>
  )
}

export function WorkSection() {
  return (
    <div
      id="work"
      className="bg-[var(--gray-default)] content-stretch flex flex-col items-center justify-center px-[72px] py-[96px] relative shrink-0 w-full scroll-mt-24"
    >
      <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[32px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-[family-name:var(--font-display)] font-normal leading-[var(--display-line-height)] relative shrink-0 text-[color:var(--gray-600)] text-[length:var(--display-size)] text-center tracking-[var(--display-tracking)] w-full">
            Work
          </p>
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
            <p className=" font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[20px] text-[color:var(--gray-600)] text-center w-full">
              Some of the noteworthy projects I have participated in.
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 w-full">
            <div className="bg-[var(--bg-lila)] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0">
              <p className=" font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--gray-600)] whitespace-nowrap">
                Key skills
              </p>
            </div>
            <div className="bg-[var(--gray-200)] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0">
              <p className=" font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--gray-600)] whitespace-nowrap">
                Tools
              </p>
            </div>
          </div>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
