import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";

const regions = [
  { name: "Africa", volunteers: "12,400+", countries: 28 },
  { name: "South Asia", volunteers: "8,200+", countries: 12 },
  { name: "Latin America", volunteers: "6,800+", countries: 15 },
  { name: "Southeast Asia", volunteers: "5,100+", countries: 10 },
];

const VolunteersSection = () => (
  <section className="section-padding bg-muted/30">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">Hands On The Ground</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
        Global Volunteers
      </h2>
      <p className="text-lg text-muted-foreground font-body font-light">
        Over 32,000 dedicated volunteers across 65 countries power our mission every day.
      </p>
      <div className="divider-ornament mt-8" />
    </AnimatedSection>

    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {regions.map((r, i) => (
        <AnimatedSection key={r.name} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card glass-glow p-8 text-center"
          >
            <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
            <h4 className="font-heading text-lg font-bold text-foreground mb-1">{r.name}</h4>
            <p className="text-2xl font-heading font-bold text-primary mb-1">{r.volunteers}</p>
            <p className="text-sm text-muted-foreground font-body flex items-center justify-center gap-1">
              <Users className="w-3.5 h-3.5" /> {r.countries} countries
            </p>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default VolunteersSection;
