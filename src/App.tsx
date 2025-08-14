import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import FeatureShowcase from './components/FeatureShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-app text-ink">
      <Navbar />
   
      <main>
  
        <Hero />
        <Features />
        <HowItWorks />
        <FeatureShowcase />
        <FAQ />
   
      </main>
      <Footer />
    </div>
  );
}

export default App;
