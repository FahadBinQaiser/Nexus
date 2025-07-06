import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
// import Navigation from './components/Navigation';
// import Benefits from './components/Benefits';
// import Features from './components/Features';
// import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
// import Newsletter from './components/Newsletter';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollY={scrollY} 
      /> */}
      <HeroSection />
      {/* <Benefits />
      <Features />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;