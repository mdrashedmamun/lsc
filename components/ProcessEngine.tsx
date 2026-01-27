import React, { useState, useEffect } from 'react';

const ProcessEngine: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const viewBox = isMobile ? "0 0 500 1200" : "0 0 1000 500";
  
  // Centers for the 3 stages
  const c1 = isMobile ? { x: 250, y: 200 } : { x: 200, y: 250 };
  const c2 = isMobile ? { x: 250, y: 600 } : { x: 500, y: 250 };
  const c3 = isMobile ? { x: 250, y: 1000 } : { x: 800, y: 250 };

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <style>{`
        @keyframes rotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateCounter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulseSoft {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes dashMove {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes circlePulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.25; }
        }
        .engine-rotate { transform-origin: center; animation: rotateClockwise 30s linear infinite; }
        .engine-rotate-fast { transform-origin: center; animation: rotateCounter 15s linear infinite; }
        .engine-pulse { animation: pulseSoft 4s ease-in-out infinite; }
        .circle-pulsate { transform-origin: center; animation: circlePulse 6s ease-in-out infinite; }
        .circle-pulsate-delayed { transform-origin: center; animation: circlePulse 6s ease-in-out infinite 3s; }
        
        .flow-line { 
          stroke-dasharray: 4 6; 
          animation: dashMove 2s linear infinite; 
        }
        
        /* Strict centered origins for SVG elements */
        .origin-center { transform-box: fill-box; transform-origin: center; }
      `}</style>
      
      <svg viewBox={viewBox} className="w-full h-full overflow-visible">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* --- FLOW CONNECTIONS --- */}
        {isMobile ? (
          <g opacity="0.3">
            {/* C1 to C2 */}
            <path 
              d={`M ${c1.x} ${c1.y + 100} L ${c2.x} ${c2.y - 160}`} 
              fill="none" 
              stroke="#b8860b" 
              strokeWidth="0.5" 
              className="flow-line" 
            />
            {/* C2 to C3 */}
            <path 
              d={`M ${c2.x} ${c2.y + 160} L ${c3.x} ${c3.y - 100}`} 
              fill="none" 
              stroke="#b8860b" 
              strokeWidth="0.5" 
              className="flow-line" 
            />
          </g>
        ) : (
          <g opacity="0.3">
            {/* C1 to C2 */}
            <path 
              d={`M ${c1.x + 100} ${c1.y} L ${c2.x - 160} ${c2.y}`} 
              fill="none" 
              stroke="#b8860b" 
              strokeWidth="0.5" 
              className="flow-line" 
            />
            {/* C2 to C3 */}
            <path 
              d={`M ${c2.x + 160} ${c2.y} L ${c3.x - 100} ${c3.y}`} 
              fill="none" 
              stroke="#b8860b" 
              strokeWidth="0.5" 
              className="flow-line" 
            />
          </g>
        )}

        {/* --- STAGE 1: CAPTURE (Extraction) --- */}
        <g transform={`translate(${c1.x}, ${c1.y})`}>
          <circle r="80" fill="none" stroke="#b8860b" strokeWidth="0.5" className="circle-pulsate" />
          <circle r="40" fill="none" stroke="#b8860b" strokeWidth="0.5" className="circle-pulsate-delayed" />
          
          <g className="engine-rotate origin-center">
            <line x1="-90" y1="0" x2="90" y2="0" stroke="#b8860b" strokeWidth="0.5" opacity="0.2" />
            <circle cx="90" cy="0" r="1.5" fill="#b8860b" />
            <circle cx="-90" cy="0" r="1.5" fill="#b8860b" />
          </g>
          
          <path d="M-8,-8 L8,8 M-8,8 L8,-8" stroke="#fdfbf7" strokeWidth="0.5" opacity="0.4" />
          <text y="120" textAnchor="middle" className="text-meta !text-[8px] !fill-white/20 uppercase tracking-widest">Capture</text>
        </g>

        {/* --- STAGE 2: MULTIPLIER (Main Engine) --- */}
        <g transform={`translate(${c2.x}, ${c2.y})`}>
          <circle r="140" fill="none" stroke="#b8860b" strokeWidth="0.5" opacity="0.05" />
          
          {/* Inner Geometries */}
          <g className="engine-rotate origin-center">
             <rect x="-60" y="-60" width="120" height="120" fill="none" stroke="#b8860b" strokeWidth="0.5" opacity="0.3" />
             <circle cx="60" cy="60" r="2" fill="#b8860b" />
             <circle cx="-60" cy="-60" r="2" fill="#b8860b" />
          </g>
          
          <g className="engine-rotate-fast origin-center">
             <circle r="90" fill="none" stroke="#fdfbf7" strokeWidth="0.25" strokeDasharray="3 6" opacity="0.15" />
             <rect x="-45" y="-45" width="90" height="90" fill="none" stroke="#fdfbf7" strokeWidth="0.5" opacity="0.1" />
          </g>

          <g className="engine-pulse origin-center">
             <circle r="4" fill="#b8860b" filter="url(#glow)" />
          </g>
          
          <text y="185" textAnchor="middle" className="text-meta !text-[12px] !fill-bronze-metallic font-bold tracking-[0.5em]">Architectural Flow</text>
        </g>

        {/* --- STAGE 3: YIELD (Continuous Output) --- */}
        <g transform={`translate(${c3.x}, ${c3.y})`}>
          <circle r="80" fill="none" stroke="#b8860b" strokeWidth="0.5" className="circle-pulsate" />
          
          <g className="engine-rotate origin-center">
             {/* Refined Infinity Loop Path */}
             <path 
               d="M -45 0 C -45 -30 -15 -30 0 0 C 15 30 45 30 45 0 C 45 -30 15 -30 0 0 C -15 30 -45 30 -45 0" 
               fill="none" 
               stroke="#b8860b" 
               strokeWidth="0.5" 
               opacity="0.5" 
             />
          </g>

          <text y="2" dominantBaseline="middle" textAnchor="middle" className="font-serif italic text-3xl !fill-bronze-metallic" opacity="0.6">∞</text>
          <text y="120" textAnchor="middle" className="text-meta !text-[8px] !fill-white/20 uppercase tracking-widest">Compounding</text>
        </g>

        {/* Global Blueprint Lines (Desktop only) */}
        {!isMobile && (
          <g opacity="0.04">
            <line x1="280" y1="250" x2="360" y2="250" stroke="#fdfbf7" strokeWidth="0.5" />
            <line x1="640" y1="250" x2="720" y2="250" stroke="#fdfbf7" strokeWidth="0.5" />
            <circle cx="500" cy="250" r="240" fill="none" stroke="#fdfbf7" strokeWidth="0.5" strokeDasharray="2 10" />
          </g>
        )}
      </svg>
    </div>
  );
};

export default ProcessEngine;