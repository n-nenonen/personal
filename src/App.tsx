import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import LandingPage from './LandingPage'
import { ChecklistPage } from './pages/ChecklistPage'
import { HelsinkiDesignSystemPage } from './pages/HelsinkiDesignSystemPage'
import { SuomiFiSearchPage } from './pages/SuomiFiSearchPage'

function App() {
  return (
    <BrowserRouter basename="/personal">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work/helsinki-design-system" element={<HelsinkiDesignSystemPage />} />
        <Route path="/work/newcomers-checklist" element={<ChecklistPage />} />
        <Route path="/work/suomi-fi-search" element={<SuomiFiSearchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
