import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Briefing from './pages/Briefing'
import { initWhatsAppConversionTracking } from './lib/conversionTracking'

export default function App() {
  useEffect(() => {
    initWhatsAppConversionTracking()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/briefing" element={<Briefing />} />
      </Routes>
    </BrowserRouter>
  )
}
