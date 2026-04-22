import { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCapabilities from './components/FeaturedCapabilities';
import BackToTop from './components/BackToTop';

// Lazy load below-the-fold sections
const About = lazy(() => import('./components/About'));
const WorkHistory = lazy(() => import('./components/WorkHistory'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const LiveWebsites = lazy(() => import('./components/LiveWebsites'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-wrapper">

      <Navbar />

      <main>
        <Hero />
        <FeaturedCapabilities />
        <Suspense fallback={null}>
          <About />
          <WorkHistory />
          <Skills />
          <Projects />
          <LiveWebsites />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* Global Background Glows */}
      <div className="glow-blur" style={{ top: '10%', right: '-10%' }}></div>
      <div className="glow-blur" style={{ bottom: '10%', left: '-10%', opacity: 0.5 }}></div>
      
      <BackToTop />
    </div>
  );
}

export default App;

