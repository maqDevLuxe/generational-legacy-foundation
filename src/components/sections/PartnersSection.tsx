import AnimatedSection from "@/components/AnimatedSection";
import { Globe, Shield, Handshake, Building2, Leaf, HeartPulse } from "lucide-react";

const partners = [
  { name: "UNICEF", icon: Globe },
  { name: "WHO", icon: HeartPulse },
  { name: "Red Cross", icon: Shield },
  { name: "Oxfam", icon: Handshake },
  { name: "World Bank", icon: Building2 },
  { name: "WWF", icon: Leaf },
];

const PartnersSection = () => (
  <section className="section-padding bg-background">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">Trusted Worldwide</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
        Global NGO Partners
      </h2>
      <div className="divider-ornament mt-6" />
    </AnimatedSection>

    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {partners.map((p, i) => (
        <AnimatedSection key={p.name} delay={i * 0.1} className="flex flex-col items-center gap-3 group magnetic-hover">
          <div className="w-20 h-20 rounded-2xl glass-card glass-glow flex items-center justify-center group-hover:shadow-lg transition-shadow duration-500">
            <p.icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors duration-300" />
          </div>
          <span className="text-sm font-body font-medium text-muted-foreground">{p.name}</span>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default PartnersSection;
