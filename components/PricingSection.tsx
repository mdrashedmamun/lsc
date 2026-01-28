import React from 'react';
import ScrollReveal from './ScrollReveal';
import { scrollToSection, BOOKING_LINK } from './Navbar';

const PricingSection: React.FC = () => {
  return (
    <section id="services" className="relative py-48 px-6 bg-emerald-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-32">
            <span className="text-meta mb-6 block">The Engagement</span>
            <h2 className="text-h2 text-cream mb-10">
              High-End Engagement.
            </h2>
            <p className="text-body-pro max-w-xl mx-auto">
              We offer three tiers based on your current scale. All engagements include ghostwriting as the foundation—AI automation is layered on top.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 hairline">
          <PricingPanel
            title="FOUNDATION"
            tag="STRATEGIC BUILD"
            whoFor="For solo operators who need their expertise documented and their first automation layer in place."
            deliverables={[
              "90-minute expertise extraction session",
              "4 editorial articles per month",
              "1 core framework asset",
              "Initial AI follow-up workflow",
              "End-to-end execution and delivery",
              "6-month commitment"
            ]}
          />
          <PricingPanel
            title="GROWTH ENGINE"
            tag="OPERATIONAL SCALE"
            isPopular
            whoFor="For teams who need consistent authority content and smoother deal execution."
            deliverables={[
              "Everything in Foundation",
              "12 social content assets per month",
              "4 long-form case studies per month",
              "AI lead qualification and routing system",
              "Monthly strategy and performance reviews",
              "Ongoing execution and optimization",
              "6-month commitment"
            ]}
          />
          <PricingPanel
            title="MARKET LEADER"
            tag="TOTAL ECOSYSTEM"
            whoFor="For established businesses who want full positioning and complete operational automation."
            deliverables={[
              "Everything in Growth Engine",
              "Expanded editorial production at scale",
              "Full AI execution layer across sales and operations",
              "Email drip automation",
              "Partner-level strategy support",
              "Dedicated execution team",
              "Quarterly engagement"
            ]}
          />
        </div>

        <ScrollReveal>
          <div className="mt-40 text-center">
            <h3 className="text-h3 text-cream mb-12">Stop Being the Constraint.</h3>
            <button
              onClick={(e) => { e.preventDefault(); scrollToSection(BOOKING_LINK); }}
              className="group relative px-16 py-7 bg-transparent border border-bronze-metallic/40 text-bronze-metallic font-bold uppercase tracking-[0.4em] text-[10px] transition-all duration-500 hover:bg-bronze-metallic hover:text-emerald-950 hover:border-bronze-metallic rounded-none focus-visible:ring-2 focus-visible:ring-bronze-metallic outline-none"
            >
              Book Your Strategy Call
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const PricingPanel: React.FC<{ title: string; tag: string; whoFor: string; deliverables: string[]; isPopular?: boolean }> = ({ title, tag, whoFor, deliverables, isPopular }) => (
  <div className={`group relative p-12 lg:p-16 ${isPopular ? 'pt-16 md:pt-20 lg:pt-24' : ''} hairline-l first:border-l-0 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(184,134,11,0.1)]`}>

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
      <span className="text-meta !text-[10px] !text-bronze-metallic/60 mb-8 block uppercase tracking-[0.4em] font-sans">{tag}</span>
      <h3 className="text-h3 text-cream text-4xl lg:text-5xl mb-8 font-serif font-black tracking-tight uppercase leading-none">{title}</h3>
      <p className="text-body-pro text-[15px] leading-relaxed min-h-[70px] font-sans text-cream/50 group-hover:text-cream/80 transition-colors">{whoFor}</p>
    </div>

    <div className="flex-grow space-y-10 mb-16 relative z-10">
      <h4 className="text-meta !text-[9px] !text-white/20 tracking-[0.3em] font-sans">What's included</h4>
      <ul className="space-y-6">
        {deliverables.map((item, idx) => (
          <li key={idx} className="flex items-start gap-4 text-[14px] font-light text-cream/60 leading-snug group-hover:text-cream/90 transition-colors font-sans">
            <span className="mt-1.5 w-1.5 h-1.5 bg-[#eab308] rounded-full flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="pt-10 hairline-t relative z-10">
      <span className="text-meta !text-[9px] opacity-20 font-sans">Terms</span>
      <p className="text-xs font-semibold text-cream mt-2 uppercase tracking-widest font-sans opacity-80 group-hover:opacity-100 transition-opacity">
        {title === "MARKET LEADER" ? "Quarterly Engagement" : "6-Month Commitment"}
      </p>
    </div>
  </div>
);

export default PricingSection;