import React from 'react';
import ScrollReveal from './ScrollReveal';
import ArtifactImage from './ArtifactImage';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative pt-48 pb-0 px-6 bg-emerald-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mb-12 items-start">
            <div>
              <span className="text-meta mb-8 block">The Friction</span>
              <h2 className="text-h2 text-cream">
                Growth Stops <br />
                With You.
              </h2>
            </div>
            <div className="lg:pt-20">
              <p className="text-body-pro max-w-lg">
                You've built a real business, but it still requires your presence in every conversation to close or deliver. This is the ceiling.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Connecting Line - Clarifies the logic jump */}
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
                This is exactly what <br className="hidden sm:block" /> breaks when a business <span className="italic text-bronze-metallic">depends on its founder.</span>
              </h3>
              <p className="text-body-pro !text-cream/70 max-w-2xl mx-auto">
                You’ve built a real business. Now your expertise needs to become the <span className="text-cream font-medium">lever that keeps working</span> while you focus where you want — not where you’re forced to.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Artifact - Proof of Execution */}
        <ScrollReveal>
          <ArtifactImage
            src="/editorial_artifact.png"
            alt="Sample editorial content structure"
            caption="The structure behind every authority-building asset we produce."
          />
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