import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Droplets, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const initiatives = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Building 1,200+ schools across 40 countries, giving 2 million children access to quality education.",
    stat: "2M+ Students",
    color: "text-sky",
  },
  {
    icon: Droplets,
    title: "Clean Water",
    desc: "Installing sustainable water systems in rural communities, providing safe drinking water for generations.",
    stat: "5,000+ Wells",
    color: "text-sky-dark",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Funding mobile clinics, vaccinations, and maternal care programs across underserved regions.",
    stat: "10M+ Treated",
    color: "text-primary",
  },
];

const InitiativesSection = () => (
  <section id="initiatives" className="section-padding bg-muted/30">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">Where Your Impact Goes</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
        Core Funding Initiatives
      </h2>
      <p className="text-lg text-muted-foreground font-body font-light leading-relaxed">
        Every dollar is strategically deployed to create lasting, measurable change in three critical areas.
      </p>
      <div className="divider-ornament mt-8" />
    </AnimatedSection>

    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {initiatives.map((item, i) => (
        <AnimatedSection key={item.title} delay={i * 0.15}>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="glass-card glass-glow p-10 text-center h-full"
          >
            <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6`}>
              <item.icon className={`w-8 h-8 ${item.color}`} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{item.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">{item.desc}</p>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold font-body">
              {item.stat}
            </span>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default InitiativesSection;
