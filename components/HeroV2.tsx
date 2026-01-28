import React, { useState, useEffect } from 'react';
import { scrollToSection, BOOKING_LINK } from './Navbar';

const HeroV2: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateMotionPreference = (event?: MediaQueryListEvent) => {
            setPrefersReducedMotion(event ? event.matches : mediaQuery.matches);
        };
        updateMotionPreference();

        const handleScroll = () => {
            if (!mediaQuery.matches) {
                setScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', updateMotionPreference);
        } else {
            mediaQuery.addListener(updateMotionPreference);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (typeof mediaQuery.removeEventListener === 'function') {
                mediaQuery.removeEventListener('change', updateMotionPreference);
            } else {
                mediaQuery.removeListener(updateMotionPreference);
            }
        };
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-emerald-950">
            <style>{`
        @keyframes bronzePulse {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 15px rgba(184, 134, 11, 0.4)); }
          50% { opacity: 0.9; filter: drop-shadow(0 0 5px rgba(184, 134, 11, 0.1)); }
        }
        @keyframes lightSweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .multiplier-glow {
          animation: bronzePulse 4s ease-in-out infinite;
        }
        .light-sweep {
          animation: lightSweep 10s linear infinite;
        }
      `}</style>

            {/* ARCHITECTURAL "BLUEPRINT" OVERLAY */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ transform: prefersReducedMotion ? 'none' : `translateY(${scrollY * 0.15}px)` }}
            >
                {/* Isometric Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] select-none"
                    style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #fdfbf7 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
                </div>

                {/* Architectural Drafting Lines */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] opacity-[0.05]" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 400H1000M500 0V800M100 0L900 800M900 0L100 800" stroke="#cd7f32" strokeWidth="0.5" />
                    <circle cx="500" cy="400" r="150" stroke="#cd7f32" strokeWidth="0.5" />
                    <circle cx="500" cy="400" r="300" stroke="#cd7f32" strokeWidth="0.5" strokeDasharray="10 10" />
                </svg>

                {/* Subtle Bronze Sweep */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="light-sweep absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-bronze-metallic/5 to-transparent opacity-20"></div>
                </div>
            </div>

            {/* Subtle Depth Glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ transform: prefersReducedMotion ? 'none' : `translateY(${scrollY * 0.1}px)` }}
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
                            <span className="font-sans text-[24px] md:text-[28px] font-medium text-white/50 tracking-[0.08em] mb-4">
                                Your Expertise Shouldn't Be
                            </span>
                            <span className="text-h1 text-white/85 font-extrabold leading-[0.85] tracking-tight">
                                The Bottleneck.
                            </span>
                        </h1>
                    </div>

                    {/* THE SEPARATOR (Horizon Line) */}
                    <div className="opacity-0 animate-reveal [animation-delay:600ms] w-full flex flex-col items-center my-10 md:my-14">
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
                        We turn your expertise into a self-sustaining system. Ghostwritten content brings in pre-sold buyers. AI workflows move deals forward—without you pushing.
                    </p>
                </div>

                <div className="flex flex-col items-center opacity-0 animate-reveal [animation-delay:1200ms]">
                    <a
                        href={BOOKING_LINK}
                        onClick={(e) => { e.preventDefault(); scrollToSection(BOOKING_LINK); }}
                        className="group relative px-16 py-7 bg-transparent border border-bronze-metallic/50 text-bronze-metallic font-bold tracking-[0.12em] text-[11px] transition-all duration-500 hover:bg-bronze-metallic hover:text-emerald-950 hover:border-bronze-metallic rounded-none focus-visible:ring-2 focus-visible:ring-bronze-metallic outline-none"
                    >
                        Schedule Your Strategy Call
                    </a>
                </div>
            </div>

            {/* Editorial Decorative Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-white/10"></div>
        </section>
    );
};

export default HeroV2;
