import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "An initial deep dive into your vision, lifestyle requirements, and aesthetic preferences."
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Translating ideas into moodboards, sketches, and a cohesive design narrative."
  },
  {
    number: "03",
    title: "Design Planning",
    description: "Detailed technical drawings, material selection, and precise spatial arrangements."
  },
  {
    number: "04",
    title: "Execution",
    description: "Coordinating with expert craftsmen and managing logistics to bring the vision to life."
  },
  {
    number: "05",
    title: "Final Styling",
    description: "The finishing touches—curating art, accessories, and lighting for a perfected environment."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">
              From Concept <br />
              <span className="italic text-neutral-medium">to Reality</span>
            </h2>

            <div className="space-y-10">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="text-accent font-serif text-2xl group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2 tracking-wide group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584354273341-3eb96574e5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwbW9vZGJvYXJkJTIwbWF0ZXJpYWxzJTIwZ29sZCUyMG1hcmJsZXxlbnwxfHx8fDE3ODEyNzEyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Interior design moodboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-full h-full border border-accent/20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
