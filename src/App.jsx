import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reps from './pages/Reps';
import Labs from './pages/Labs';
import Studio from './pages/Studio';
import About from './pages/About';
import AI from './pages/AI';
import Team from './pages/Team';
import Approach from './pages/Approach';
import CapabilitiesPage from './pages/Capabilities';
import CapabilityBranding from './pages/CapabilityBranding';
import WorkDetail from './pages/WorkDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-botcore-black">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reps" element={<Reps />} />
          <Route path="/reps/:slug" element={<WorkDetail />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/capabilities/branding" element={<CapabilityBranding />} />
          <Route path="/ai-enablement" element={<AI />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
