import { CaseStudyLayout } from '../components/layout/CaseStudyLayout'
import { SuomiFiSearchContent } from '../case-studies/content/SuomiFiSearchContent'

export function SuomiFiSearchPage() {
  return (
    <CaseStudyLayout breadcrumbLabel="Case: Research to improve the search function user experience for Suomi.fi">
      <SuomiFiSearchContent />
    </CaseStudyLayout>
  )
}
