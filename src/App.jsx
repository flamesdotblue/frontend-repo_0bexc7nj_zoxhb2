import React, { useEffect, useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import Waitlist from './components/Waitlist';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const getRoute = () => {
    const h = window.location.hash || '#/home';
    if (h.startsWith('#/about')) return 'about';
    return 'home';
  };

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Smooth-scroll when hash points to in-page sections
  useEffect(() => {
    const h = window.location.hash;
    if (route === 'home' && (h === '#use-cases' || h === '#waitlist')) {
      const id = h.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Sidebar />

      <div className="md:ml-72">{/* content offset for sidebar */}
        {route === 'home' ? (
          <main>
            <Hero />
            <UseCases />
            <Waitlist />
          </main>
        ) : (
          <main>
            <About />
          </main>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
