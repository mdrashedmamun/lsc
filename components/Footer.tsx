import React from 'react';
import { scrollToSection, BOOKING_LINK, LINKEDIN_LINK } from './Navbar';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 pt-32 pb-16 hairline-t">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 text-bronze-metallic mb-8">
              <h2 className="text-2xl font-black text-cream tracking-tight font-sans">
                Leverage Stack
              </h2>
            </div>
            <p className="text-body-pro max-w-sm">
              We turn expertise into compounding digital assets. Engineered for founders who are ready to scale without being the constraint.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="text-meta !text-[9px] mb-8 block">Navigation</span>
            <nav className="flex flex-col gap-4">
              <FooterLink label="Engagement" href="#services" />
              <FooterLink label="Process" href="#the-process" />
              <FooterLink label="Extraction" href={BOOKING_LINK} />
            </nav>
          </div>

          <div className="md:col-span-3">
            <span className="text-meta !text-[9px] mb-8 block">Connect</span>
            <nav className="flex flex-col gap-4">
              <FooterLink label="LinkedIn" href={LINKEDIN_LINK} />
              <FooterLink label="X / Twitter" href="https://x.com/" />
              <FooterLink label="Strategy Call" href={BOOKING_LINK} />
            </nav>
          </div>
        </div>

        <div className="pt-10 hairline-t flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-meta !text-[8px] !text-white/20">
            © 2025 Leverage Stack. All rights reserved.
          </p>
          <p className="text-meta !text-[8px] !text-white/20">
            Built for Compounding Leverage.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ label: string; href: string }> = ({ label, href }) => (
  <a
    href={href}
    onClick={(e) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href);
      }
    }}
    className="text-xs font-medium text-white/40 hover:text-bronze-metallic transition-colors focus-visible:text-bronze-metallic outline-none"
  >
    {label}
  </a>
);

export default Footer;
