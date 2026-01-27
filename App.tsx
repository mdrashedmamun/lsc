import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-body selection:bg-bronze selection:text-emerald-950 overflow-x-hidden w-full antialiased leading-relaxed">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;