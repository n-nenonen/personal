import { CaseStudyLayout } from '../components/layout/CaseStudyLayout'
import { HelsinkiDesignSystemContent } from '../case-studies/content/HelsinkiDesignSystemContent'

export function HelsinkiDesignSystemPage() {
  return (
    <CaseStudyLayout breadcrumbLabel="Case: Helsinki Design System migration">
      <HelsinkiDesignSystemContent />
    </CaseStudyLayout>
  )
}
