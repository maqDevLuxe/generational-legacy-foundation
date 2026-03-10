import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  { label: "You Donate", detail: "100% of your contribution" },
  { label: "Direct Transfer", detail: "Zero overhead deducted" },
  { label: "Community Impact", detail: "Lives changed forever" },
];

const DonationModelSection = () => (
  <section id="mission" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <AnimatedSection>
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-body mb-4">Our Promise</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          The 100% <br />Donation Model
        </h2>
        <p className="text-lg text-muted-foreground font-body font-light leading-relaxed mb-8">
          Unlike traditional charities, our operational costs are fully covered by our endowment fund.
          This means every single cent you give goes directly to the field—no exceptions.
        </p>
        <div className="space-y-4">
          {["Zero administrative fees", "Full financial audits published quarterly", "Real-time donation tracking"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-body text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="glass-card p-10 space-y-0">
          {steps.map((step, i) => (
            <div key={step.label}>
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                >
                  <span className="font-heading font-bold text-primary">{i + 1}</span>
                </motion.div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg">{step.label}</h4>
                  <p className="text-sm text-muted-foreground font-body">{step.detail}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center pl-6 py-3">
                  <ArrowRight className="w-4 h-4 text-primary/40 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DonationModelSection;
