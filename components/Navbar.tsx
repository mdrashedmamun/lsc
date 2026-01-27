import React, { useState, useEffect } from 'react';

// SET YOUR CALENDLY LINK HERE
export const BOOKING_LINK = "https://calendly.com/rashed-mamun303/ls";

export const scrollToSection = (target: string) => {
  // Robust check: If target is a URL, open it. If it's an ID, scroll to it.
  if (target.startsWith('http')) {
    window.open(target, '_blank', 'noopener,noreferrer');
    return;
  }

  const element = document.querySelector(target);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault(); // Sync call is critical
    setIsOpen(false);
    // Short delay to allow mobile menu to start closing before scroll starts
    setTimeout(() => scrollToSection(target), 50);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-emerald-950/95 backdrop-blur-md h-20 border-b border-white/10' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="size-8 md:size-9 text-bronze-metallic group-hover:scale-110 transition-transform">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.4042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
              </svg>
            </div>
            <h1 className="text-lg md:text-xl font-black tracking-tight text-cream uppercase font-display">
              LeverageStack
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-xs font-bold uppercase tracking-widest text-cream/60 hover:text-bronze-metallic transition-colors">Services</a>
            <a href="#the-process" onClick={(e) => handleNavClick(e, '#the-process')} className="text-xs font-bold uppercase tracking-widest text-cream/60 hover:text-bronze-metallic transition-colors">The Process</a>
            <a 
              href={BOOKING_LINK} 
              onClick={(e) => { e.preventDefault(); scrollToSection(BOOKING_LINK); }}
              className="bg-bronze-metallic hover:bg-bronze-dark text-emerald-950 px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95 inline-block text-center"
            >
              Book a Consult
            </a>
          </nav>

          <button 
            className="lg:hidden p-2 text-cream"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-emerald-950 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="h-24 px-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-9 text-bronze-metallic">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.4042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                </svg>
              </div>
              <h1 className="text-xl font-black tracking-tight text-cream uppercase font-display">
                LeverageStack
              </h1>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-cream p-2">
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
          </div>
          <div className="w-full h-px bg-white/10"></div>
          <nav className="flex flex-col p-10 gap-10">
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-2xl font-black uppercase tracking-[0.2em] text-cream/70 font-display">Services</a>
            <a href="#the-process" onClick={(e) => handleNavClick(e, '#the-process')} className="text-2xl font-black uppercase tracking-[0.2em] text-cream/70 font-display">The Process</a>
            <div className="mt-6">
              <a href={BOOKING_LINK} onClick={(e) => handleNavClick(e, BOOKING_LINK)} className="block w-full bg-bronze-metallic text-emerald-950 px-6 py-7 rounded-sm text-sm font-black uppercase tracking-[0.3em] text-center">Book a Consult</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;