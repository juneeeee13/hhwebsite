import React from 'react';
import { BrowserRouter, useLocation, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Resources from './pages/Resources';
import Events from './pages/Events';
import ScrollToTop from './components/ScrollToTop';
import EarlyMilestones from './pages/EarlyMilestones';
import Music from './components/Music';
import AboutMusic from './pages/AboutMusic';
import { MusicProvider } from './context/MusicContext';
import Hackathon from './pages/Hackathon';
import NavbarBootstrap from './components/NavbarBS';
import HackathonSpring2025 from './pages/HackathonSpring2025';
import HackathonFall2025 from './pages/HackathonFall2025';
import OurProcess from './pages/OurProcess';
import ContactPopup from './components/ContactPopUp';
import HackathonGallery from './pages/Spring2025Gallery';
import HackathonSpring2026 from './pages/HackathonSpring2026';
import Fall2025HackathonGallery from './pages/Fall2025Gallery';

localStorage.clear();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  );
};

const InnerApp: React.FC = () => {
  const location = useLocation();

  // Show contact popup only on specific pages
  const showContactPopup = ["/hackathon", "/hackathonSpring2025", "/hackathonFall2025", "/hackathonSpring2026"].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <MusicProvider>
        <Music />
        {showContactPopup && <ContactPopup />}
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <NavbarBootstrap />
                <div className="d-flex flex-column min-vh-100">
                  <main className="flex-grow-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/events" element={<Events />} />
                      <Route path="/resources" element={<Resources />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/earlyMilestones" element={<EarlyMilestones />} />
                      <Route path="/aboutMusic" element={<AboutMusic />} />
                      <Route path="/hackathon" element={<Hackathon />} />
                      <Route path="/hackathonSpring2025" element={<HackathonSpring2025 />} />
                      <Route path="/hackathonFall2025" element={<HackathonFall2025 />} />
                      <Route path="/hackathonSpring2026" element={<HackathonSpring2026 />} />
                      <Route path="/ourProcess" element={<OurProcess />} />
                      <Route path="/spring2025gallery" element={<HackathonGallery />} />
                      <Route path="/fall2025gallery" element={<Fall2025HackathonGallery />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </>
            }
          />
        </Routes>
      </MusicProvider>
    </>
  );
};

export default App;