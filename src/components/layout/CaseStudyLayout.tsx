import type { ReactNode } from 'react'
import { BackToTopFooter } from './BackToTopFooter'
import { Breadcrumbs } from './Breadcrumbs'
import { SiteHeader } from './SiteHeader'

type CaseStudyLayoutProps = {
  breadcrumbLabel: string
  children: ReactNode
}

export function CaseStudyLayout({ breadcrumbLabel, children }: CaseStudyLayoutProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative min-h-svh w-full">
      <SiteHeader />
      <Breadcrumbs currentLabel={breadcrumbLabel} />
      <main className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1440px] mx-auto">
        {children}
      </main>
      <div className="content-stretch flex flex-col items-start pt-12 md:pt-[96px] relative shrink-0 w-full max-w-[1440px] mx-auto">
        <BackToTopFooter />
      </div>
    </div>
  )
}
