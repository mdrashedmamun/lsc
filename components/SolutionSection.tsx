import React from 'react';
import ScrollReveal from './ScrollReveal';
import { scrollToSection, BOOKING_LINK } from './Navbar';
import ProcessStory from './ProcessStory';

const SolutionSection: React.FC = () => {
  return (
    <section id="the-process" className="bg-emerald-950 pb-32 lg:pb-64 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* THE PROCESS STORY - The Belief Anchor */}
        <ScrollReveal>
          <div className="relative w-full min-h-[500px] flex flex-col items-center justify-center mb-40 md:mb-56 pt-24">
            <ProcessStory />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(184,134,11,0.08)_0%,transparent_70%)]"></div>
          </div>
        </ScrollReveal>

        {/* THREE STAGES OF LEVERAGE - Editorial Grid */}
        <div className="grid grid-cols-1 hairline-t">

          {/* STAGE 01 */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 hairline-b">
              <div className="lg:col-span-4 p-12 md:p-16 hairline-r flex flex-col justify-between">
                <span className="text-meta mb-12 block">01 / Input</span>
                <h3 className="text-h2 !text-3xl md:!text-5xl text-cream">Your <br className="hidden md:block" /> Expertise</h3>
              </div>
              <div className="lg:col-span-8 p-12 md:p-16 flex items-center">
                <p className="text-body-pro max-w-2xl">
                  We capture the logic you use to explain, persuade, and close deals through a focused extraction interview. This becomes the foundation for every email and system we build.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* STAGE 02 */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 hairline-b">
              <div className="lg:col-span-4 p-12 md:p-16 hairline-r flex flex-col justify-between">
                <span className="text-meta mb-12 block">02 / Process</span>
                <h3 className="text-h2 !text-3xl md:!text-5xl text-cream">Two <br className="hidden md:block" /> Layers</h3>
              </div>
              <div className="lg:col-span-8 p-0 grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 md:p-16 hairline-r last:border-r-0">
                  <h4 className="text-meta !text-white/30 mb-6">Ghostwriting</h4>
                  <p className="text-body-pro text-base leading-relaxed">
                    We turn your thinking into authoritative email content that educates prospects before they ever speak to you.
                  </p>
                </div>
                <div className="p-12 md:p-16">
                  <h4 className="text-meta !text-white/30 mb-6">AI-Driven Support</h4>
                  <p className="text-body-pro text-base leading-relaxed">
                    We design and implement AI workflows for qualification, routing, and follow-ups—so deals don't stall and you're not the one pushing every step.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* STAGE 03 */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 p-12 md:p-16 hairline-r flex flex-col justify-between">
                <span className="text-meta mb-12 block">03 / Multiplier</span>
                <h3 className="text-h2 !text-3xl md:!text-5xl text-cream">Compounding <br className="hidden md:block" /> Leverage</h3>
              </div>
              <div className="lg:col-span-8 p-12 md:p-16 flex flex-col justify-center">
                <p className="text-h3 !text-2xl md:!text-4xl text-cream/80 mb-10 leading-tight">
                  Authority brings the right prospects in. <br className="hidden md:block" />
                  <span className="text-bronze-metallic">Systems keep deals moving forward.</span>
                </p>
                <div className="flex gap-10">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-metallic"></span>
                    <span className="text-meta !text-[8px] !text-white/40">Less Repetition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-metallic"></span>
                    <span className="text-meta !text-[8px] !text-white/40">Less Founder Involvement</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA REFINEMENT */}
        <ScrollReveal>
          <div className="mt-56 p-20 md:p-32 hairline bg-white/[0.01] text-center relative group">
            <div className="absolute top-0 left-0 w-full h-full bg-bronze-metallic/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h3 className="text-h2 !text-3xl md:!text-6xl text-cream mb-16 relative z-10">
              Stop Being the <br className="hidden md:block" /> <span>Constraint.</span>
            </h3>
            <a
              href={BOOKING_LINK}
              onClick={(e) => { e.preventDefault(); scrollToSection(BOOKING_LINK); }}
              className="relative z-10 inline-block px-14 py-7 bg-transparent border border-bronze-metallic text-bronze-metallic font-bold uppercase tracking-[0.4em] text-[10px] transition-all hover:bg-bronze-metallic hover:text-emerald-950"
            >
              Book Your Strategy Call
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;