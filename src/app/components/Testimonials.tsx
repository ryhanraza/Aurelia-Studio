import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Urelia Studio transformed our home into a sanctuary of elegance. Their attention to detail and understanding of our lifestyle was truly remarkable.",
    author: "Eleanor Vanderbilt",
    role: "Private Homeowner"
  },
  {
    text: "Professional, meticulous, and incredibly talented. They delivered our corporate headquarters ahead of schedule and beyond our expectations.",
    author: "Julian Chen",
    role: "CEO, Nexa Group"
  },
  {
    text: "The perfect balance of luxury and functionality. Their design team is second to none in the industry.",
    author: "Margot St. James",
    role: "Property Developer"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            Client Perspectives
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 bg-neutral-light flex flex-col items-center text-center"
            >
              <Quote className="text-accent mb-8 w-10 h-10 opacity-40" />
              <p className="text-primary/80 italic text-lg leading-relaxed mb-8 font-serif">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <div className="font-serif text-xl text-primary">{testimonial.author}</div>
                <div className="text-xs uppercase tracking-widest text-accent mt-1">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
