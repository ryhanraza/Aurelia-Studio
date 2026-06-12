import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 bg-neutral-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGV0YWlsJTIwbWluaW1hbCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc4MTI3MTIzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Architectural interior detail"
                className="w-full aspect-[4/5] object-cover shadow-2xl shadow-black/10"
              />
              <div className="absolute -bottom-10 -right-10 hidden xl:block w-64 h-64 bg-accent p-8 text-white">
                <div className="text-4xl font-serif mb-2">15+</div>
                <div className="text-xs uppercase tracking-[0.2em] leading-relaxed">
                  Years of Delivering <br />
                  Bespoke Excellence
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              The Studio
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-primary">
              Crafting Sanctuaries <br />
              for the Discerning
            </h2>
            <div className="space-y-6 text-primary/70 leading-relaxed text-lg">
              <p>
                Founded on the principles of refined aesthetics and uncompromising quality, Urelia Studio is a premier interior design firm dedicated to creating spaces that tell a story of sophistication.
              </p>
              <p>
                We believe that true luxury lies in the details. Our collaborative approach ensures that every project is a unique reflection of our clients' lifestyles, translated through a lens of modern timelessness and architectural integrity.
              </p>
              <p>
                From private residences to high-profile commercial developments, we bring a level of professionalism and artistry that elevates the human experience within the built environment.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-xl font-serif text-primary">Victoria Sterling</div>
                <div className="text-sm uppercase tracking-widest text-accent">Principal Designer</div>
              </div>
              <div className="h-px w-24 bg-neutral-medium"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
