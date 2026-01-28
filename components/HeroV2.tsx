import React, { useState, useEffect } from 'react';
import { scrollToSection, BOOKING_LINK } from './Navbar';

const HeroV2: React.FC = () => {
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
            <style>{`
        @keyframes bronzePulse {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 15px rgba(184, 134, 11, 0.4)); }
          50% { opacity: 0.9; filter: drop-shadow(0 0 5px rgba(184, 134, 11, 0.1)); }
        }
        .multiplier-glow {
          animation: bronzePulse 4s ease-in-out infinite;
        }
      `}</style>

            {/* Subtle Depth Overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(184,134,11,0.12)_0%,transparent_70%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center relative z-10">
                <div className="opacity-0 animate-reveal [animation-delay:100ms] mb-12">
                    <span className="text-meta">Strategic Leverage for Founders</span>
                </div>

                {/* 2-GROUP STRUCTURE */}
                <div className="flex flex-col items-center w-full">

                    {/* GROUP 1: THE PROBLEM (Shadowed & Heavy) */}
                    <div className="opacity-0 animate-reveal [animation-delay:400ms] flex flex-col items-center">
                        <h1 className="flex flex-col items-center">
                            <span className="font-sans text-[20px] md:text-[28px] font-medium text-white/30 uppercase tracking-[0.2em] mb-4">
                                Your Expertise Shouldn't Be
                            </span>
                            <span className="text-h1 text-white/70 font-extrabold leading-[0.85] tracking-tight">
                                The Bottleneck.
                            </span>
                        </h1>
                    </div>

                    {/* THE SEPARATOR (Horizon Line) */}
                    <div className="opacity-0 animate-reveal [animation-delay:600ms] w-full flex flex-col items-center my-20 md:my-28">
                        <div className="h-px w-full max-w-[300px] bg-gradient-to-r from-transparent via-bronze-metallic/40 to-transparent"></div>
                    </div>

                    {/* GROUP 2: THE SOLUTION (Radiant & Solid) */}
                    <div className="opacity-0 animate-reveal [animation-delay:800ms] flex flex-col items-center">
                        <h2 className="text-h1 text-bronze-metallic font-black tracking-tighter multiplier-glow">
                            It Should Be the Multiplier.
                        </h2>
                    </div>

                </div>

                <div className="max-w-2xl mx-auto mt-24 mb-16 opacity-0 animate-reveal [animation-delay:1000ms]">
                    <p className="text-body-pro !text-white/50">
                        We turn your thinking into content that pre-sells prospects, then build AI workflows that handle follow-ups, qualification, and routing.
                    </p>
                </div>

                <div className="flex flex-col items-center opacity-0 animate-reveal [animation-delay:1200ms]">
                    <a
                        href={BOOKING_LINK}
                        onClick={(e) => { e.preventDefault(); scrollToSection(BOOKING_LINK); }}
                        className="group relative px-16 py-7 bg-transparent border border-bronze-metallic/30 text-bronze-metallic font-bold uppercase tracking-[0.4em] text-[10px] transition-all duration-500 hover:bg-bronze-metallic hover:text-emerald-950 hover:border-bronze-metallic rounded-none focus-visible:ring-2 focus-visible:ring-bronze-metallic outline-none"
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

export default HeroV2;
