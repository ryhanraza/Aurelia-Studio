import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "The Zenith Penthouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1760072513457-651955c7074d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWduJTIwcHJlbWl1bSUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3ODEyNzEyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A masterclass in modern minimalism, featuring bespoke marble finishes and integrated technology."
  },
  {
    title: "Oak & Iron Corporate HQ",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1715593949273-09009558300a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgxMjcxMjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Collaborative workspaces defined by natural materials and sophisticated lighting architecture."
  },
  {
    title: "Serenity Coastal Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwZGVzaWduJTIwZWxlZ2FudHxlbnwxfHx8fDE3ODEyNzEyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Harmonizing with the horizon through soft textures, neutral tones, and expansive views."
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-neutral-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Our Work
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Selected Projects
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold tracking-widest text-primary hover:text-accent transition-colors group"
          >
            VIEW FULL ARCHIVE
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 aspect-[4/5]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-accent text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
                {project.category}
              </div>
              <h3 className="text-2xl font-serif mb-3 text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
