import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Consultation",
    price: "From $500",
    description: "Ideal for clients seeking professional guidance on specific design challenges or general aesthetic direction.",
    features: [
      "2-hour in-person or virtual session",
      "Space optimization analysis",
      "Color palette recommendations",
      "Moodboard concept session",
      "Summary report & action plan"
    ]
  },
  {
    name: "Design Concept",
    price: "From $2,500",
    description: "A comprehensive design roadmap for those who wish to manage their own execution with a professional plan.",
    features: [
      "Full room spatial planning",
      "Custom color & material palette",
      "Furniture & lighting selection list",
      "3D visualizations (2 views)",
      "Technical layout drawings"
    ],
    featured: true
  },
  {
    name: "Full Interior Project",
    price: "Custom Quote",
    description: "End-to-end management for major renovations, new builds, or comprehensive multi-room redesigns.",
    features: [
      "Dedicated project management",
      "Bespoke furniture design",
      "Contractor & vendor coordination",
      "On-site installation & styling",
      "Post-project support"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-neutral-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Investment
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            Service Tiers
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-10 flex flex-col ${
                plan.featured 
                  ? "bg-primary text-white shadow-2xl scale-105 relative z-10" 
                  : "bg-white text-primary"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 text-[10px] tracking-[0.2em] font-semibold uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
              <div className="text-3xl font-serif text-accent mb-6">{plan.price}</div>
              <p className={`text-sm leading-relaxed mb-10 ${plan.featured ? "text-white/70" : "text-primary/60"}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className={plan.featured ? "text-white/80" : "text-primary/80"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 font-semibold tracking-widest text-xs uppercase transition-all ${
                  plan.featured
                    ? "bg-accent text-white hover:bg-white hover:text-primary"
                    : "border border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
