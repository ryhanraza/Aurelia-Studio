import React, { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for your inquiry. Our team will contact you shortly.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
              Begin Your <br />
              <span className="italic">Design Journey</span>
            </h2>
            <p className="text-primary/70 leading-relaxed mb-12 text-lg">
              Whether you're embarking on a full-scale renovation or seeking a simple consultation, we're here to bring your vision to life.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-neutral-light flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-accent mb-1 font-semibold">Email</div>
                  <div className="text-lg text-primary font-serif">mohammedryhan5675@gmail.com</div>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-neutral-light flex items-center justify-center shrink-0">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-accent mb-1 font-semibold">Phone</div>
                  <div className="text-lg text-primary font-serif">+91 81254 57898</div>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-neutral-light flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-accent mb-1 font-semibold">Studio</div>
                  <div className="text-lg text-primary font-serif">452 Sterling Ave, Chelsea, NY</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-light p-10 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-primary/60 mb-2 font-semibold">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white border-b border-neutral-medium px-0 py-3 focus:border-accent outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-primary/60 mb-2 font-semibold">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-white border-b border-neutral-medium px-0 py-3 focus:border-accent outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-primary/60 mb-2 font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-white border-b border-neutral-medium px-0 py-3 focus:border-accent outline-none transition-colors"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label htmlFor="project-type" className="block text-[10px] uppercase tracking-widest text-primary/60 mb-2 font-semibold">Project Type</label>
                  <select
                    id="project-type"
                    className="w-full bg-white border-b border-neutral-medium px-0 py-3 focus:border-accent outline-none transition-colors"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-primary/60 mb-2 font-semibold">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white border-b border-neutral-medium px-0 py-3 focus:border-accent outline-none transition-colors resize-none"
                  placeholder="Tell us about your space..."
                ></textarea>
              </div>
              <button
                disabled={isSubmitting}
                className="w-full py-5 bg-primary text-white font-semibold tracking-[0.3em] text-xs uppercase hover:bg-accent transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : (
                  <>
                    SEND INQUIRY
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
