import React, { useState, useEffect } from 'react';
import { scrollToSection, BOOKING_LINK } from './Navbar';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-emerald-950">
      {/* Subtle Depth Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(184,134,11,0.08)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center relative z-10">
        <div className="opacity-0 animate-reveal [animation-delay:100ms] mb-12">
          <span className="text-meta">Strategic Leverage for Founders</span>
        </div>

        <div className="w-full mb-16 opacity-0 animate-reveal [animation-delay:400ms]">
          <h1 className="flex flex-col items-center">
            <span className="text-h1 text-white/40">
              Your Expertise
            </span>
            <span className="text-h1 text-cream">
              Shouldn’t Be <span className="italic font-light">The Bottleneck.</span>
            </span>
            <div className="h-px w-24 bg-bronze-metallic/30 my-10"></div>
            <span className="text-h1 text-bronze-metallic">
              It Should Be the Multiplier.
            </span>
          </h1>
        </div>

        <div className="max-w-2xl mx-auto mb-20 opacity-0 animate-reveal [animation-delay:800ms]">
          <p className="text-body-pro">
            We turn your thinking into content that pre-sells prospects, then build AI workflows that handle follow-ups, qualification, and routing so deals keep moving without you.
          </p>
        </div>

        <div className="flex flex-col items-center opacity-0 animate-reveal [animation-delay:1000ms]">
          <a 
            href={BOOKING_LINK} 
            onClick={(e) => { e.preventDefault(); scrollToSection(BOOKING_LINK); }}
            className="group relative px-14 py-6 bg-transparent border border-bronze-metallic/40 text-bronze-metallic font-semibold uppercase tracking-[0.3em] text-[10px] transition-all duration-500 hover:bg-bronze-metallic hover:text-emerald-950 hover:border-bronze-metallic rounded-none"
          >
            Start Your Extraction
          </a>
        </div>
      </div>
      
      {/* Editorial Decorative Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-white/10"></div>
    </section>
  );
};

export default Hero;