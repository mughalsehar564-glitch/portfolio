import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const SectionLoader = () => (
  <div className="h-40 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-neonBlue border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="bg-background min-h-screen text-white">
      {/* Background Static Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,210,255,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<SectionLoader />}>
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
