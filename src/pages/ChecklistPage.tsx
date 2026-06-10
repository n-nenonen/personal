import { CaseStudyLayout } from '../components/layout/CaseStudyLayout'
import { ChecklistContent } from '../case-studies/content/ChecklistContent'

export function ChecklistPage() {
  return (
    <CaseStudyLayout breadcrumbLabel="Case: Checklist for newcomers and startups">
      <ChecklistContent />
    </CaseStudyLayout>
  )
}
