import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { DetailPage } from './pages/DetailPage'
import { EraPage } from './pages/EraPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/era/:slug" element={<EraPage />} />
        <Route path="/entry/:entryId" element={<DetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </SiteLayout>
  )
}
