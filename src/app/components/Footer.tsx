import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest text-white mb-6 block">
              URELIA <span className="text-accent">STUDIO</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              Bespoke interior design for high-end residential and commercial spaces. Elevating the art of living since 2011.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-8 text-accent">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About the Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Projects</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Service Tiers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-8 text-accent">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>concierge@ureliastudio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>452 Sterling Ave, Chelsea</li>
              <li>New York, NY 10011</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-8 text-accent">Newsletter</h4>
            <p className="text-sm text-white/50 mb-6">Receive curated design inspiration and studio updates.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-accent transition-colors text-sm"
              />
              <button className="absolute right-0 bottom-3 text-accent hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/30">
            © 2026 URELIA STUDIO. ALL RIGHTS RESERVED.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 hover:text-accent transition-colors"
          >
            Back to Top
            <ArrowUp size={14} />
          </button>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
