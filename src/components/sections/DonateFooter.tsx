import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const DonateFooter = () => (
  <>
    <section id="donate" className="section-padding bg-gradient-to-br from-primary/5 via-background to-sky/5">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">Be The Change</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Your Impact Starts <br />With a Single Act
        </h2>
        <p className="text-lg text-muted-foreground font-body font-light mb-10 leading-relaxed max-w-xl mx-auto">
          100% of your donation reaches communities in need. Choose an amount that speaks to your heart.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["$25", "$50", "$100", "$250", "$500", "$1,000"].map((amt) => (
            <motion.button
              key={amt}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full border-2 border-primary/20 text-foreground font-heading font-bold text-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              {amt}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-12 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold font-body tracking-wide shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500"
        >
          <Heart className="w-5 h-5 inline-block mr-2 -mt-0.5" />
          Donate Now
        </motion.button>
      </AnimatedSection>
    </section>

    <footer className="bg-foreground text-muted py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <span className="font-heading text-lg font-bold text-ivory">Lumière Foundation</span>
          </div>
          <p className="font-body text-ivory-dark/60 leading-relaxed max-w-md">
            A global philanthropy dedicated to generational impact through 100% transparent giving.
            Every cent reaches the field.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-ivory mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Mission", "Initiatives", "Transparency", "Stories", "Careers"].map((l) => (
              <li key={l}>
                <a href="#" className="font-body text-sm text-ivory-dark/50 hover:text-primary transition-colors duration-300">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-ivory mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-ivory-dark/50 font-body">
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@lumiere.org</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +1 (800) 555-0199</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Geneva, Switzerland</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-ivory/10 text-center">
        <p className="text-xs text-ivory-dark/30 font-body">
          © 2026 Lumière Foundation. All rights reserved. Registered 501(c)(3) nonprofit.
        </p>
      </div>
    </footer>
  </>
);

export default DonateFooter;
