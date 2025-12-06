import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import SplashCursor from './components/SplashCursor';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import './App.css';

// Scroll to top on route change - optimized for smooth transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Use requestAnimationFrame for optimal timing
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    });
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <ScrollToTop />
      {isHomePage && (
        <SplashCursor
          SIM_RESOLUTION={32}
          DYE_RESOLUTION={128}
          DENSITY_DISSIPATION={4}
          VELOCITY_DISSIPATION={2.5}
          PRESSURE_ITERATIONS={3}
        />
      )}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
