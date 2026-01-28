import React from 'react';

const ProcessStory: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            {/* Bridge Line - Reduces Cognitive Load */}
            <div className="text-center mb-12 md:mb-16">
                <p className="text-meta !text-[10px] !text-white/40 tracking-[0.3em] uppercase">
                    Every scalable business follows the same arc.
                </p>
            </div>

            {/* The Diagram Container */}
            <div className="relative">
                {/* Connection Line (Tablet and Desktop Only) */}
                <div className="hidden md:block absolute top-[64px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-bronze-metallic/30 to-transparent"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                    {/* CRYSTALLIZATION */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="h-32 flex items-center justify-center mb-12 relative z-10">
                            <CrystallizationIcon />
                        </div>
                        <h4 className="text-h4 text-cream !text-xs tracking-[0.12em] font-bold mb-4">Crystallization</h4>
                        <p className="text-body-pro !text-base text-cream/90 mb-6">
                            Your expertise, captured and clarified.
                        </p>
                        <p className="text-meta !text-[11px] !text-white/40 leading-relaxed max-w-xs">
                            We extract how you think, explain, and sell — then turn it into written assets that work without you.
                        </p>
                    </div>

                    {/* THE SYSTEM */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="h-32 flex items-center justify-center mb-12 relative z-10">
                            <SystemIcon />
                        </div>
                        <h4 className="text-h4 text-cream !text-xs tracking-[0.12em] font-bold mb-4">The System</h4>
                        <p className="text-body-pro !text-base text-cream/90 mb-6">
                            Authority and execution, working together.
                        </p>
                        <div className="text-meta !text-[11px] !text-white/40 leading-relaxed max-w-xs space-y-1">
                            <p>Your thinking is published.</p>
                            <p>AI workflows move work forward without you.</p>
                        </div>
                    </div>

                    {/* COMPOUNDING */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="h-32 flex items-center justify-center mb-12 relative z-10">
                            <CompoundingIcon />
                        </div>
                        <h4 className="text-h4 text-cream !text-xs tracking-[0.12em] font-bold mb-4">Compounding</h4>
                        <p className="text-body-pro !text-base text-cream/90 mb-6">
                            The work keeps working.
                        </p>
                        <div className="text-meta !text-[11px] !text-white/40 leading-relaxed max-w-xs space-y-2">
                            <p>Prospects arrive informed.</p>
                            <p>Deals move without chasing.</p>
                            <p>Growth no longer resets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CrystallizationIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
        <path d="M30 45L50 35V15L30 25L10 15V35L30 45Z" stroke="#b8860b" strokeWidth="1" />
        <path d="M30 25V45M50 15L30 25M10 15L30 25" stroke="#b8860b" strokeWidth="0.5" opacity="0.4" />
        <g opacity="0.4">
            <line x1="20" y1="28" x2="40" y2="38" stroke="#fdfbf7" strokeWidth="0.5" />
            <line x1="20" y1="32" x2="40" y2="42" stroke="#fdfbf7" strokeWidth="0.5" />
        </g>
        <path d="M20 5Q30 0 40 5" stroke="#fdfbf7" strokeWidth="0.5" opacity="0.2" />
    </svg>
);

const SystemIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
        <rect x="15" y="15" width="30" height="30" stroke="#b8860b" strokeWidth="1" opacity="0.6" />
        <circle cx="30" cy="30" r="18" stroke="#fdfbf7" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
        <circle cx="30" cy="30" r="3" fill="#b8860b" opacity="0.8" />
        <path d="M15 15L45 45M45 15L15 45" stroke="#b8860b" strokeWidth="0.5" opacity="0.2" />
    </svg>
);

const CompoundingIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
        <path d="M15 30C15 20 25 20 30 30C35 40 45 40 45 30C45 20 35 20 30 30C25 40 15 40 15 30Z" stroke="#b8860b" strokeWidth="1" />
        <circle cx="30" cy="30" r="22" stroke="#b8860b" strokeWidth="0.5" opacity="0.15" />
        <circle cx="30" cy="30" r="28" stroke="#b8860b" strokeWidth="0.5" opacity="0.05" />
        <circle cx="45" cy="30" r="2" fill="#b8860b" opacity="0.6" />
    </svg>
);

export default ProcessStory;
