import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import OurWork from './pages/OurWork'
import TopContactBar from './components/TopContactBar'
import LoadingScreen from './components/LoadingScreen'
import PromoModal from './components/PromoModal'

function App() {
  // Last Update: 2026-02-06T12:56
  const [isLoading, setIsLoading] = useState(true);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show promo modal shortly after loading finishes, only if not shown before in this session
      const hasSeenPromo = sessionStorage.getItem('lunex_promo_seen');
      if (!hasSeenPromo) {
        setTimeout(() => {
          setShowPromo(true);
          sessionStorage.setItem('lunex_promo_seen', 'true');
        }, 1500);
      }
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <LoadingScreen isLoading={isLoading} />
      <PromoModal isOpen={showPromo} onClose={() => setShowPromo(false)} />
      <TopContactBar />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
    </div>
  )
}


export default App
