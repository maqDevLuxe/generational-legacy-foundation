import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Gem, TrendingUp, Shield } from "lucide-react";

const tiers = [
  {
    icon: Shield,
    name: "Guardian Circle",
    min: "$25,000",
    desc: "Fund a community project that bears your family name for generations.",
  },
  {
    icon: TrendingUp,
    name: "Legacy Endowment",
    min: "$100,000",
    desc: "Establish a perpetual fund that creates compounding impact year after year.",
  },
  {
    icon: Gem,
    name: "Visionary Trust",
    min: "$500,000+",
    desc: "Create a transformative, multi-generational initiative with bespoke reporting.",
  },
];

const EndowmentsSection = () => (
  <section className="section-padding bg-background">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">Build A Lasting Legacy</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
        Endowments & Legacy Planning
      </h2>
      <p className="text-lg text-muted-foreground font-body font-light">
        Your generosity can echo through generations. Structure your giving for perpetual impact.
      </p>
      <div className="divider-ornament mt-8" />
    </AnimatedSection>

    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
      {tiers.map((t, i) => (
        <AnimatedSection key={t.name} delay={i * 0.15}>
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card glass-glow p-10 text-center h-full flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <t.icon className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-heading text-xl font-bold text-foreground mb-2">{t.name}</h4>
            <p className="text-sm font-body font-bold text-primary mb-4">Starting at {t.min}</p>
            <p className="text-muted-foreground font-body leading-relaxed flex-1">{t.desc}</p>
            <button className="mt-6 px-6 py-3 border-2 border-primary/20 text-primary rounded-full text-sm font-semibold font-body hover:bg-primary/5 transition-colors duration-300">
              Learn More
            </button>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default EndowmentsSection;
