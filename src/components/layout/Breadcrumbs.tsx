import { Link } from 'react-router-dom'

type BreadcrumbsProps = {
  currentLabel: string
}

export function Breadcrumbs({ currentLabel }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[var(--breadcrumb-bg)] content-stretch flex min-h-[48px] items-center justify-center overflow-clip px-4 sm:px-8 md:px-[72px] py-[16px] relative shrink-0 w-full"
    >
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px max-w-[1440px] mx-auto relative w-full">
        <p className="text-[14px] sm:text-[16px] text-[color:var(--gray-600)] break-words">
          <Link
            to="/"
            className="underline decoration-solid underline-offset-2 hover:text-[color:var(--gray-900)]"
          >
            Portfolio
          </Link>
          <span>{' → '}</span>
          <span className="underline decoration-solid underline-offset-2">
            {currentLabel}
          </span>
        </p>
      </div>
    </nav>
  )
}
