import React from 'react';
import ScrollReveal from './ScrollReveal';
import { scrollToSection, BOOKING_LINK } from './Navbar';

const PricingSection: React.FC = () => {
  return (
    <section id="services" className="relative py-48 px-6 bg-emerald-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-32">
            <span className="text-meta mb-6 block">THE ENGAGEMENT</span>
            <h2 className="text-h2 text-cream mb-10">
              High-end engagement.
            </h2>
            <p className="text-body-pro max-w-xl mx-auto">
              We offer three tiers based on your current scale. All engagements include ghostwriting as the foundation—AI automation is layered on top.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 hairline auto-rows-fr">
          <PricingPanel
            title="Foundation"
            tag="Authority Core"
            whoFor="For founders who need their expertise extracted and turned into their first compounding content library."
            deliverables={[
              "90-minute monthly extraction session",
              "1 high-leverage 'Pillar' per week (Ghostwritten)",
              "Multi-channel distribution (LinkedIn/Email)",
              "Weekly strategic alignment call",
              "Founder-to-Content logic mapping",
              "Complete execution (Writing, Editing, Publishing)",
              "AI-driven follow-up funnel implementation",
              "6-month commitment",
              "Success: Your thinking is usable without you."
            ]}
          />
          <PricingPanel
            title="Growth Engine"
            tag="Systemic Scale"
            isPopular
            whoFor="For teams who need to move from 'one-off posting' to a high-frequency authority system."
            deliverables={[
              "Everything in Foundation",
              "2 high-leverage 'Pillars' per week (Ghostwritten)",
              "Expanded distribution (Personal Brand + Company)",
              "Daily subject-matter expert extraction",
              "Automated lead qualification funnel",
              "Full AI execution layer (multi-channel logic)",
              "Performance analytics & ROI tracking",
              "6-month commitment",
              "Success: Content runs consistently without founder chasing."
            ]}
          />
          <PricingPanel
            title="Market Leader"
            tag="Full Execution"
            whoFor="For established businesses who want the entire system built and run on autopilot."
            deliverables={[
              "Everything in Growth Engine",
              "Comprehensive custom research & original reports",
              "Editorial strategy derived from original data",
              "Partner-level strategic oversight",
              "Professional design & custom data visualizers",
              "Full AI automation of internal sales/ops routing",
              "Quarterly commitment — we run the system for you",
              "Dedicated execution team",
              "Zero founder involvement required",
              "Success: You are no longer the bottleneck for growth."
            ]}
          />
        </div>

        <ScrollReveal>
          <div className="mt-40 text-center">
            <h3 className="text-h3 text-cream mb-12">Turn your expertise into your multiplier.</h3>
            <button
              onClick={(e) => { e.preventDefault(); scrollToSection(BOOKING_LINK); }}
              className="group relative px-16 py-7 bg-transparent border border-bronze-metallic/50 text-bronze-metallic font-bold tracking-[0.12em] text-[11px] transition-all duration-500 hover:bg-bronze-metallic hover:text-emerald-950 hover:border-bronze-metallic rounded-none focus-visible:ring-2 focus-visible:ring-bronze-metallic outline-none"
            >
              Schedule Your Strategy Call
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const PricingPanel: React.FC<{ title: string; tag: string; whoFor: string; deliverables: string[]; isPopular?: boolean }> = ({ title, tag, whoFor, deliverables, isPopular }) => (
  <div className={`group relative p-12 lg:p-16 ${isPopular ? 'pt-16 md:pt-20 lg:pt-24' : ''} hairline-l first:border-l-0 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(184,134,11,0.1)]`}>

    {/* Inset Border Effect */}
    <div className="absolute inset-0 border border-bronze-metallic/0 group-hover:border-bronze-metallic/20 transition-all duration-700 pointer-events-none z-10"></div>

    {isPopular && (
      <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-1/2 z-20">
        <span className="bg-[#eab308] text-black text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full shadow-lg">
          Most Popular
        </span>
      </div>
    )}

    <div className="mb-16 relative z-10">
      <span className="text-meta !text-[10px] !text-bronze-metallic/60 mb-6 block tracking-[0.3em] font-sans">{tag}</span>
      <h3 className="text-h3 text-cream text-3xl lg:text-4xl mb-6 font-sans font-black tracking-tight leading-none">{title}</h3>
      <p className="text-body-pro text-[15px] leading-relaxed min-h-[70px] font-sans text-cream/70 group-hover:text-cream/80 transition-colors">{whoFor}</p>
    </div>

    <div className="flex-grow space-y-10 mb-16 relative z-10">
      <h4 className="text-meta !text-[9px] !text-white/20 tracking-[0.3em] font-sans">What's included</h4>
      <ul className="space-y-6">
        {deliverables.map((item, idx) => (
          <li key={idx} className="flex items-start gap-4 text-[15px] font-normal text-cream/60 leading-snug group-hover:text-cream/90 transition-colors font-sans">
            <span className="mt-1.5 w-1.5 h-1.5 bg-bronze-metallic rounded-full flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="pt-10 hairline-t relative z-10">
      <span className="text-meta !text-[9px] opacity-20 font-sans">Terms</span>
      <p className="text-xs font-semibold text-cream mt-2 uppercase tracking-widest font-sans opacity-80 group-hover:opacity-100 transition-opacity">
        {title === "Market Leader" ? "Quarterly Engagement" : "6-Month Commitment"}
      </p>
    </div>
  </div>
);

export default PricingSection;
