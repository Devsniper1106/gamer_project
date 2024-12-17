import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage';
import EsportsPage from './pages/EsportsPage';
import DraftLeaguePage from './pages/DraftLeaguePage';
import SponsorsPage from './pages/SponsorsPage';
import PartnersPage from './pages/PartnersPage';
import Hero from './components/Hero/Hero';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#2f3136]">
        <Header />
        
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/esports" element={<EsportsPage />} />
            <Route path="/draft-league" element={<DraftLeaguePage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;