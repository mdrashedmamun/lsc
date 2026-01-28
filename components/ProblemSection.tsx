import React from 'react';
import ScrollReveal from './ScrollReveal';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative pt-48 pb-0 px-6 bg-emerald-950">
      <div className="max-w-7xl mx-auto">
        {/* THE FRICTION - Main Headline */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-24 items-start">
            <div>
              <span className="text-meta mb-8 block">THE FRICTION</span>
              <h2 className="text-h2 text-cream text-balance">
                Growth stops <br />
                with you.
              </h2>
              <p className="text-h3 text-cream/90 mt-10 text-balance">
                This is the ceiling.
              </p>
            </div>
            <div className="lg:pt-20">
              <p className="text-body-pro max-w-lg text-balance">
                You've built a real business, but it still requires your presence in every conversation to close or deliver.
              </p>
              <p className="text-body-pro !text-cream/60 max-w-lg mt-6 text-balance">
                When everything depends on you, the same three breakdowns show up again and again.
              </p>
            </div>
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

        {/* Bridge - Lead + What You've Tried */}
        <ScrollReveal>
          <div className="py-24 md:py-28 hairline-t">
            <div className="max-w-4xl">
              <p className="text-body-pro !text-cream/70 max-w-3xl mb-8 text-balance">
                Now your expertise needs to become the <span className="text-cream font-medium">lever that keeps working</span> while you focus where you want — not where you're forced to.
              </p>
              <p className="text-body-pro !text-cream/50 mb-4">
                You've tried the usual paths.
              </p>
              <p className="text-body-pro !text-cream/50 mb-8">
                Writers. Tools. Systems.
              </p>
              <p className="text-body-pro !text-cream/80 mb-6 text-balance">
                They all fail for the same reason: they don't capture how <span className="italic text-cream">you</span> actually think.
              </p>
              <p className="text-body-pro !text-cream/80 max-w-3xl mb-3 text-balance">
                Generic writers don't understand your frameworks. Off-the-shelf tools can't handle your buyer context.
              </p>
              <p className="text-body-pro !text-cream/80 max-w-3xl text-balance">
                We combine both: your thinking, crystallized by expert ghostwriters, then systematized with AI that actually operates in your domain.
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
