import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const metrics = [
  { label: "Direct to Field", value: 100, suffix: "%", color: "bg-primary" },
  { label: "Administrative", value: 0, suffix: "%", color: "bg-muted-foreground/30" },
  { label: "Fundraising", value: 0, suffix: "%", color: "bg-muted-foreground/20" },
];

const financials = [
  { year: "2023", raised: "$48.2M", deployed: "$48.2M", projects: 312 },
  { year: "2024", raised: "$62.7M", deployed: "$62.7M", projects: 428 },
  { year: "2025", raised: "$71.3M", deployed: "$71.3M", projects: 510 },
];

const TransparencySection = () => (
  <section id="transparency" className="section-padding bg-muted/30">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">Open Books</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
        Financial Transparency
      </h2>
      <p className="text-lg text-muted-foreground font-body font-light">
        Every dollar accounted for. Every report published. Complete transparency, always.
      </p>
      <div className="divider-ornament mt-8" />
    </AnimatedSection>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
      <AnimatedSection>
        <div className="glass-card p-8">
          <h3 className="font-heading text-xl font-bold text-foreground mb-8">Fund Allocation</h3>
          <div className="space-y-6">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex justify-between mb-2">
                  <span className="font-body text-sm text-muted-foreground">{m.label}</span>
                  <span className="font-heading font-bold text-foreground">{m.value}{m.suffix}</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${m.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="glass-card p-8">
          <h3 className="font-heading text-xl font-bold text-foreground mb-8">Annual Reports</h3>
          <div className="space-y-4">
            {financials.map((f) => (
              <div key={f.year} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300">
                <div>
                  <span className="font-heading font-bold text-foreground text-lg">{f.year}</span>
                  <p className="text-sm text-muted-foreground font-body">{f.projects} projects funded</p>
                </div>
                <div className="text-right">
                  <span className="font-heading font-bold text-primary text-lg">{f.raised}</span>
                  <p className="text-xs text-muted-foreground font-body">raised & deployed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TransparencySection;
