import React from 'react';
import ScrollReveal from './ScrollReveal';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative pt-48 pb-0 px-6 bg-emerald-950">
      <div className="max-w-7xl mx-auto">
        {/* THE FRICTION - Main Headline */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mb-12 items-start">
            <div>
              <span className="text-meta mb-8 block">THE FRICTION</span>
              <h2 className="text-h2 text-cream">
                Growth stops <br />
                with you.
              </h2>
            </div>
            <div className="lg:pt-20">
              <p className="text-body-pro max-w-lg">
                You've built a real business, but it still requires your presence in every conversation to close or deliver.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* THE CEILING - Standalone Statement */}
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <p className="text-h3 text-cream/90 max-w-2xl">
              This is the ceiling.
            </p>
          </div>
        </ScrollReveal>

        {/* Connecting Line */}
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <p className="text-body-pro !text-cream/60 max-w-2xl">
              When everything depends on you, the same three breakdowns show up again and again.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 hairline-t">
          <ProblemChunk
            index="01"
            title="The explanation loop"
            desc="You spend half of every sales call explaining the same logic because prospects haven't been pre-educated by your content."
          />
          <ProblemChunk
            index="02"
            title="The chasing game"
            desc="Deals stall the moment you stop pushing them manually. Follow-ups and decisions wait for your input."
          />
          <ProblemChunk
            index="03"
            title="The knowledge silo"
            desc="Your best frameworks live in your head. Quality drops when you step back because the logic isn't systematized."
          />
        </div>

        {/* Resolution - What's Missing */}
        <ScrollReveal>
          <div className="text-center py-40 hairline-t relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6">
              <p className="text-body-pro !text-cream/70 max-w-2xl mx-auto mb-16">
                Now your expertise needs to become the <span className="text-cream font-medium">lever that keeps working</span> while you focus where you want — not where you're forced to.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* What You've Tried - Bridge to Solution */}
        <ScrollReveal>
          <div className="py-32 hairline-t">
            <div className="max-w-2xl">
              <p className="text-body-pro !text-cream/50 mb-6">
                You've tried the usual paths.
              </p>
              <p className="text-body-pro !text-cream/50 mb-10">
                Writers. Tools. Systems.
              </p>
              <p className="text-body-pro !text-cream/80">
                They all fail for the same reason: they don't capture how <span className="italic text-cream">you</span> actually think.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ProblemChunk: React.FC<{ index: string; title: string; desc: string }> = ({ index, title, desc }) => (
  <div className="p-10 md:p-16 hairline-l first:border-l-0 group hover:bg-white/[0.02] transition-colors duration-500">
    <ScrollReveal>
      <span className="text-meta !text-white/20 mb-12 block">{index}</span>
      <h4 className="text-h3 text-cream mb-8 text-2xl lg:text-3xl">{title}</h4>
      <p className="text-body-pro text-sm lg:text-base">{desc}</p>
    </ScrollReveal>
  </div>
);

export default ProblemSection;