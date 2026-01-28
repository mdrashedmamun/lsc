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
        @keyframes flicker {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes architectDraw {
          0% { stroke-dashoffset: 100; opacity: 0; }
          50% { opacity: 0.5; }
          100% { stroke-dashoffset: 0; opacity: 0.2; }
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
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- FLOW CONNECTIONS --- */}
        {isMobile ? (
          <g opacity="0.4">
            {/* C1 to C2 */}
            <path
              d={`M ${c1.x} ${c1.y + 100} L ${c2.x} ${c2.y - 160}`}
              fill="none"
              stroke="#b8860b"
              strokeWidth="1"
              className="flow-line"
            />
            {/* C2 to C3 */}
            <path
              d={`M ${c2.x} ${c2.y + 160} L ${c3.x} ${c3.y - 100}`}
              fill="none"
              stroke="#b8860b"
              strokeWidth="1"
              className="flow-line"
            />
          </g>
        ) : (
          <g opacity="0.4">
            {/* C1 to C2 */}
            <path
              d={`M ${c1.x + 100} ${c1.y} L ${c2.x - 160} ${c2.y}`}
              fill="none"
              stroke="#b8860b"
              strokeWidth="1"
              className="flow-line"
            />
            {/* C2 to C3 */}
            <path
              d={`M ${c2.x + 160} ${c2.y} L ${c3.x - 100} ${c3.y}`}
              fill="none"
              stroke="#b8860b"
              strokeWidth="1"
              className="flow-line"
            />
          </g>
        )}

        {/* --- STAGE 1: CAPTURE (Extraction / Crystallization) --- */}
        <g transform={`translate(${c1.x}, ${c1.y})`}>
          {/* Subtle Outer Pulse */}
          <circle r="90" fill="none" stroke="#b8860b" strokeWidth="0.5" className="circle-pulsate" />

          {/* 3D ISOMETRIC CRYSTALLIZATION VISUAL */}
          <g transform="translate(0, -20)">
            {/* The Ethereal Layer (Thoughts) */}
            <g className="animate-pulse" style={{ animation: 'flicker 3s ease-in-out infinite' }}>
              <path d="M-30,-40 Q0,-60 30,-40 M-20,-50 Q0,-70 20,-50" stroke="#fdfbf7" strokeWidth="0.5" fill="none" opacity="0.3" />
              <circle cx="0" cy="-55" r="1.5" fill="#fdfbf7" opacity="0.4" />
            </g>

            {/* The Extraction Pillar (Drafting Lines) */}
            <g opacity="0.2" style={{ strokeDasharray: '100', animation: 'architectDraw 4s ease-in-out infinite' }}>
              <line x1="-15" y1="-40" x2="-15" y2="10" stroke="#cd7f32" strokeWidth="0.5" />
              <line x1="15" y1="-40" x2="15" y2="10" stroke="#cd7f32" strokeWidth="0.5" />
              <line x1="0" y1="-45" x2="0" y2="15" stroke="#cd7f32" strokeWidth="0.5" />
            </g>

            {/* The Systemic Base (The Asset / The Stack) */}
            <g transform="translate(0, 20)">
              {/* Isometric Cube / Base */}
              <path d="M0,-15 L20,-5 L20,15 L0,25 L-20,15 L-20,-5 Z" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.8" />
              <path d="M0,5 L20,-5 M0,5 L-20,-5 M0,5 L0,25" fill="none" stroke="#b8860b" strokeWidth="0.5" opacity="0.4" />
              <circle r="4" fill="#b8860b" filter="url(#glow)" opacity="0.6" className="animate-pulse" />
            </g>
          </g>

          <text y="120" textAnchor="middle" className="text-meta !text-[8px] !fill-white/40 uppercase tracking-widest font-bold">Crystallization</text>
        </g>

        {/* --- STAGE 2: MULTIPLIER (Main Engine) --- */}
        <g transform={`translate(${c2.x}, ${c2.y})`}>
          <circle r="140" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.1" />

          {/* Inner Geometries */}
          <g className="engine-rotate origin-center">
            <rect x="-60" y="-60" width="120" height="120" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.4" />
            <circle cx="60" cy="60" r="3" fill="#b8860b" />
            <circle cx="-60" cy="-60" r="3" fill="#b8860b" />
          </g>

          <g className="engine-rotate-fast origin-center">
            <circle r="90" fill="none" stroke="#fdfbf7" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.25" />
            <rect x="-45" y="-45" width="90" height="90" fill="none" stroke="#fdfbf7" strokeWidth="1" opacity="0.2" />
          </g>

          <g className="engine-pulse origin-center">
            <circle r="6" fill="#b8860b" filter="url(#glow)" />
          </g>

          <text y="185" textAnchor="middle" className="text-meta !text-[10px] !fill-white/30 tracking-[0.3em]">The System</text>
        </g>

        {/* --- STAGE 3: YIELD (Continuous Output) --- */}
        <g transform={`translate(${c3.x}, ${c3.y})`}>
          <circle r="80" fill="none" stroke="#b8860b" strokeWidth="1" className="circle-pulsate" />

          <g className="engine-rotate origin-center">
            {/* Refined Infinity Loop Path */}
            <path
              d="M -45 0 C -45 -30 -15 -30 0 0 C 15 30 45 30 45 0 C 45 -30 15 -30 0 0 C -15 30 -45 30 -45 0"
              fill="none"
              stroke="#b8860b"
              strokeWidth="1"
              opacity="0.6"
            />
          </g>

          <text y="2" dominantBaseline="middle" textAnchor="middle" className="text-3xl !fill-bronze-metallic" opacity="0.75">∞</text>
          <text y="120" textAnchor="middle" className="text-meta !text-[8px] !fill-white/30 uppercase tracking-widest">Compounding</text>
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