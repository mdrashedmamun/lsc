import React, { useState, useEffect } from 'react';

const ProcessEngine: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/e9a90b95-55e2-44b2-b458-4cb029559b96',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ProcessEngine.tsx:8',message:'Viewport resize',data:{innerWidth:window.innerWidth,innerHeight:window.innerHeight,isMobile:window.innerWidth<768},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
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

  // #region agent log
  React.useEffect(() => {
    const container = document.querySelector('[data-process-engine]');
    if (container) {
      const rect = container.getBoundingClientRect();
      const logData = {location:'ProcessEngine.tsx:23',message:'ProcessEngine container dimensions',data:{width:rect.width,height:rect.height,viewBox:isMobile?"0 0 500 1200":"0 0 1000 500",isMobile},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'};
      console.log('[DEBUG] ProcessEngine layout:', logData);
      fetch('http://127.0.0.1:7242/ingest/e9a90b95-55e2-44b2-b458-4cb029559b96',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData)}).catch(()=>{});
    }
  }, [isMobile]);
  // #endregion

  return (
    <div className="w-full h-full relative flex items-center justify-center" data-process-engine>
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
        @keyframes sway {
          0%, 100% { transform: rotate(-1deg) translateY(0px); }
          50% { transform: rotate(1deg) translateY(-2px); }
        }
        @keyframes echoPulse {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2); opacity: 0; }
        }
        .engine-rotate { transform-origin: center; animation: rotateClockwise 45s linear infinite; }
        .engine-rotate-fast { transform-origin: center; animation: rotateCounter 22s linear infinite; }
        .engine-sway { animation: sway 6s ease-in-out infinite; }
        .echo-ring { transform-origin: center; animation: echoPulse 4s cubic-bezier(0.23, 1, 0.32, 1) infinite; }
        
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

              {/* Stacked-Line Motif (Signals "Written Logic") */}
              <g opacity="0.3">
                <line x1="-12" y1="-6" x2="12" y2="4" stroke="#fdfbf7" strokeWidth="0.5" />
                <line x1="-12" y1="-2" x2="12" y2="8" stroke="#fdfbf7" strokeWidth="0.5" />
                <line x1="-12" y1="2" x2="12" y2="12" stroke="#fdfbf7" strokeWidth="0.5" />
                <line x1="-12" y1="6" x2="12" y2="16" stroke="#fdfbf7" strokeWidth="0.5" />
              </g>

              {/* Tiny Grid Texture (Subtle Signal) */}
              <g opacity="0.1">
                <circle cx="-5" cy="5" r="0.5" fill="#fdfbf7" />
                <circle cx="5" cy="9" r="0.5" fill="#fdfbf7" />
                <circle cx="0" cy="12" r="0.5" fill="#fdfbf7" />
              </g>

              <circle r="4" fill="#b8860b" filter="url(#glow)" opacity="0.6" className="animate-pulse" />
            </g>
          </g>

          <text y="120" textAnchor="middle" className="text-meta !text-[8px] !fill-white/40 uppercase tracking-widest font-bold">Crystallization</text>
        </g>

        {/* --- STAGE 2: MULTIPLIER (Main Engine) --- */}
        <g transform={`translate(${c2.x}, ${c2.y})`} className="engine-sway origin-center">
          <circle r="140" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.1" />

          {/* Inner Geometries - Subtle Asymmetry & Autonomous Motion */}
          <g className="engine-rotate origin-center" style={{ animationDuration: '47s' }}>
            <rect x="-62" y="-58" width="124" height="116" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.4" />
            <circle cx="62" cy="58" r="3" fill="#b8860b" />
            <circle cx="-62" cy="-58" r="3" fill="#b8860b" />
          </g>

          <g className="engine-rotate-fast origin-center" style={{ animationDuration: '23s' }}>
            <circle r="90" fill="none" stroke="#fdfbf7" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.25" />
            <rect x="-43" y="-47" width="86" height="94" fill="none" stroke="#fdfbf7" strokeWidth="1" opacity="0.2" />
          </g>

          <g className="origin-center" style={{ animation: 'pulseSoft 5s ease-in-out infinite' }}>
            <circle r="6" fill="#b8860b" filter="url(#glow)" />
          </g>

          <text y="185" textAnchor="middle" className="text-meta !text-[10px] !fill-white/30 tracking-[0.3em]">The System</text>
        </g>

        {/* --- STAGE 3: YIELD (Continuous Output / Compounding) --- */}
        <g transform={`translate(${c3.x}, ${c3.y})`}>
          <circle r="80" fill="none" stroke="#b8860b" strokeWidth="1" className="circle-pulsate" />

          {/* Trailing Echo Rings (Signals "Leverage") */}
          <circle r="60" fill="none" stroke="#b8860b" strokeWidth="0.5" className="echo-ring" style={{ animationDelay: '0s' }} />
          <circle r="60" fill="none" stroke="#b8860b" strokeWidth="0.5" className="echo-ring" style={{ animationDelay: '1.3s' }} />
          <circle r="60" fill="none" stroke="#b8860b" strokeWidth="0.5" className="echo-ring" style={{ animationDelay: '2.6s' }} />

          <g className="engine-rotate origin-center">
            {/* Refined Infinity Loop Path - Now as a symbolic leverage flow */}
            <path
              d="M -45 0 C -45 -30 -15 -30 0 0 C 15 30 45 30 45 0 C 45 -30 15 -30 0 0 C -15 30 -45 30 -45 0"
              fill="none"
              stroke="#b8860b"
              strokeWidth="1"
              opacity="0.6"
            />
          </g>

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