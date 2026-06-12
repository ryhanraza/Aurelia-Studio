import React from "react";
import { motion } from "motion/react";
import { Paintbrush, Layout, Sofa, PenTool, Home, Briefcase } from "lucide-react";

const SERVICES = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Residential Design",
    description: "Comprehensive interior design services for private homes, from concept to final installation."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Commercial Spaces",
    description: "Elevating brand identity through sophisticated office, retail, and hospitality environments."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Space Planning",
    description: "Expert optimization of layout and flow to maximize both aesthetic appeal and functionality."
  },
  {
    icon: <Sofa className="w-8 h-8" />,
    title: "Bespoke Furnishing",
    description: "Sourcing and designing custom furniture pieces that complement the unique character of your space."
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Material Selection",
    description: "Curated selection of premium finishes, textiles, and hardware that define the luxury experience."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Project Management",
    description: "Full oversight of the design implementation, ensuring precision and adherence to timelines."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">
            Our Professional Services
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-neutral-light hover:border-accent transition-colors duration-300"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-primary/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
