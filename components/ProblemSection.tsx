import React from 'react';
import ScrollReveal from './ScrollReveal';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative pt-48 pb-0 px-6 bg-emerald-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40 items-end">
            <div className="lg:col-span-8">
              <span className="text-meta mb-8 block">The Friction</span>
              <h2 className="text-h2 text-cream">
                Growth <span className="italic font-light text-white/30">Stops</span> <br/> 
                With You.
              </h2>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-body-pro">
                You've built a real business, but it still requires your presence in every conversation to close or deliver. This is the ceiling.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 hairline-t">
          <ProblemChunk 
            index="01"
            title="The Explanation Loop" 
            desc="You spend half of every sales call explaining the same logic because prospects haven't been pre-educated by your content."
          />
          <ProblemChunk 
            index="02"
            title="The Chasing Game" 
            desc="Deals stall the moment you stop pushing them manually. Follow-ups and decisions wait for your input."
          />
          <ProblemChunk 
            index="03"
            title="The Knowledge Silo" 
            desc="Your best frameworks live in your head. Quality drops when you step back because the logic isn't systematized."
          />
        </div>

        {/* The Pivot to LeverageStack */}
        <ScrollReveal>
          <div className="text-center py-56 hairline-t relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="text-h2 text-cream mb-16">
                That’s why we <br className="hidden sm:block"/> built <span className="italic text-bronze-metallic">Stack.</span>
              </h3>
              <p className="text-body-pro !text-cream/70 max-w-2xl mx-auto">
                You’ve built a real business. Now we turn your expertise into two business levers that keep working while you focus where you want — <span className="text-cream font-medium">not where you’re forced to.</span>
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